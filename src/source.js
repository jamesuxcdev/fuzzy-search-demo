extend(FuzzySearch.prototype, /** @lends {FuzzySearch.prototype} */ {

    /**
     * Take a `source_item` (unprocessed item from source) and keys and produce
     * an `item` that's ready to be added to `this.index`.
     *
     * Preparation steps:
     * - Apply lowercase, accent removal
     * - Split field into token
     * - Remove small token eg "a" "of" and prefix large token
     */
    _prepItem: function (source_item, keys) {

        var item_fields = FuzzySearch.generateFields(source_item, keys);

        var nb_fields = item_fields.length;

        for (var field_index = -1; ++field_index < nb_fields;) {

            var field = item_fields[field_index];
            for (var node_index = -1, nb_nodes = field.length; ++node_index < nb_nodes;) {

                var norm = this.options.normalize(field[node_index]);
                var nodes = norm.split(this.token_re);
                //Filter size. (If total field length is very small, make an exception.
                // Eg some movie/Book have a single letter title, filter risk of removing everything )
                if (norm.length > 2 * this.options.token_field_min_length) nodes = FuzzySearch.filterSize(nodes, this.options.token_field_min_length, this.options.token_field_max_length);
                if (this.options.score_acronym) nodes.push(norm.replace(this.acro_re, "$1"));
                field[node_index] = nodes;

            }

        }

        return new Indexed(source_item, item_fields);
    },

    /**
     * Add an item to search index AND source collection.
     * It'll use identify_item to find if the item already exist.
     * If identify_item is null (default), calling this method is append-only with no duplicate detection
     *
     * To update the source, it use the assumption that this.source and this.index can be synced
     * by array index. That assumption will be true if source is a plain array, and always updated by this library.
     * Feel free to set `should_update_source` to false to manually manage source collection.
     *
     * Keeping source in sync is important to allow to recompute index from source.
     * This will happens with certain setting changes.
     *
     *  @param {*} source_item - item to add to search index
     *  @param {boolean=} should_update_source - set to false to skip updating the source.
     */

    add: function(source_item, should_update_source){

        // Default to keeping source in sync.
        if(should_update_source === undefined)
            should_update_source = true;

        var item_id = typeof this.options.identify_item === "function"
            ? this.options.identify_item(source_item)
            : null;

        // Find where to insert new item

        var idx;
        if (item_id === null) {
            // No identifier, append to end
            idx = this.nb_indexed;
            this.nb_indexed++;
        }
        else if (item_id in this.index_map) {
            // Item exist, update
            idx = this.index_map[item_id];
        }
        else {
            // New identifier, append to end & record new
            this.index_map[item_id] = this.nb_indexed;
            idx = this.nb_indexed;
            this.nb_indexed++;
        }

        // Compute indexed item and update index
        var prepared = this._prepItem(source_item, this.keys);
        this.index[idx] = prepared;

        // Insert in source;
        if(should_update_source)
            this.source[idx] = source_item;

        if (this.options.use_index_store) {
            this._storeAdd(prepared, idx);
        }

    },

    /**
     * Build (or rebuild) `this.index` from `this.source`
     * Flatten object into array using specified keys
     *
     * @private
     */

    _buildIndexFromSource: function () {
        var nb_items = this.source.length;

        this.index = new Array(nb_items);
        this.index_map = {};
        this.nb_indexed = 0;

        for (var item_index = -1; ++item_index < nb_items;) {
            var source_item = this.source[item_index];

            // Add item to index.
            // Because we are iterating over source, do not attempt to modify it.
            this.add(source_item, false);
        }
    }
});

/**
 * Original item with cached normalized field
 *
 * @param {*} source_item
 * @param {Array.<string>} fields
 * @constructor
 */

function Indexed(source_item, fields) {
    this.item = source_item;
    this.fields = fields;
}

// - - - - - - - - - - - - - - - - - - - - - -
//   Input stage: prepare field for search
//- - - - - - - - - - - - - - - - - - - - - -


/**
 * Given an object to index and a list of field to index
 * Return a flat list of the values.
 *
 * @param {Object} obj
 * @param {Array.<string>} fieldlist
 * @returns {Array}
 */

FuzzySearch.generateFields = function (obj, fieldlist) {

    if (!fieldlist || !fieldlist.length) return [[obj.toString()]];

    var n = fieldlist.length;
    var indexed_fields = new Array(n);

    for (var i = -1; ++i < n;)
        indexed_fields[i] = _collectValues(obj, fieldlist[i].split("."), [], 0);

    return indexed_fields;

};


/**
 * Traverse an object structure to collect item specified by parts.
 * If leaf node is an array or dictionary collect every children.
 * If key is wildcard '*' branch out the search process on each children.
 *
 * @param {*} obj - root to process
 * @param {Array.<string>} parts - array of subkey to direct object traversal  "those.that.this"->["those","that","this"]
 * @param {Array} list - where to put collected items
 * @param {number} level - index of current position on parts list
 * @returns {Array} - return list
 * @private
 */
function _collectValues(obj, parts, list, level) {

    var key, i, olen;
    var nb_level = parts.length;
    while (level < nb_level) {

        key = parts[level++];
        if (key === "*" || key === "") break;
        if (obj == null || !(key in obj)) return list;
        obj = obj[key];

    }

    if (obj == null) return list;

    var type = Object.prototype.toString.call(obj);
    var isArray = ( type === '[object Array]'  );
    var isObject = ( type === '[object Object]' );

    if (level === nb_level) {

        if (isArray)
            for (i = -1, olen = obj.length; ++i < olen;) list.push(toStringOrDefault(obj[i],""));

        else if (isObject) {
            for (key in obj) {
                if (obj.hasOwnProperty(key)) list.push(toStringOrDefault(obj[key],""));
            }
        }

        else list.push(toStringOrDefault(obj,""));

    }

    else if (key === "*") {

        if (isArray)
            for (i = -1, olen = obj.length; ++i < olen;) {
                _collectValues(obj[i], parts, list, level);
            }

        else if (isObject)
            for (key in obj) {
                if (obj.hasOwnProperty(key))
                    _collectValues(obj[key], parts, list, level);
            }
    }

    return list;

}

function toStringOrDefault(obj,def){
    return obj == null? def : obj.toString();
}
