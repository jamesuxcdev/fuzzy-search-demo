var searchEle = document.querySelector(".search"),
	result = document.querySelector(".result"),
	visual = document.querySelector(".visual"),
	info = document.querySelector(".info");

function doSearch() {
	var resultJSON = fuse.search(searchEle.value);
	result.value = JSON.stringify(resultJSON, null, 3);
	renderVisual(resultJSON);
	info.innerHTML = `Found <strong>${resultJSON.length} books</strong> in the dataset`;
	visual.scrollTo(0,0);
	result.scrollTo(0,0);
}

function renderVisual(resultJSON) {
	let html = resultJSON.reduce((sum, curr) => {
		const {title, author, href, rating} = curr;
		return sum  + `
<a href="${href}" target="_blank"><div class="item">
<h2>${title}</h2>
<span class="rating">${rating}</span>
<h5>By ${author}</h5>
</div></a>
`
	}, '');
	visual.innerHTML = html;
}

var dataset = [
  {
    "title": "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life (ebook)",
    "author": "Mark Manson",
    "href": "https://www.goodreads.com/book/show/28257707-the-subtle-art-of-not-giving-a-f-ck",
    "rating": "-"
  },
  {
    "title": "How to Win Friends and Influence People (Paperback)",
    "author": "Dale Carnegie",
    "href": "https://www.goodreads.com/book/show/4865.How_to_Win_Friends_and_Influence_People",
    "rating": "-"
  },
  {
    "title": "The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change (Paperback)",
    "author": "Stephen R. Covey",
    "href": "https://www.goodreads.com/book/show/36072.The_7_Habits_of_Highly_Effective_People",
    "rating": "-"
  },
  {
    "title": "The Life-Changing Magic of Tidying Up: The Japanese Art of Decluttering and Organizing (Hardcover)",
    "author": "Marie Kondō",
    "href": "https://www.goodreads.com/book/show/22318578-the-life-changing-magic-of-tidying-up",
    "rating": "-"
  },
  {
    "title": "The Power of Habit: Why We Do What We Do in Life and Business (Hardcover)",
    "author": "Charles Duhigg",
    "href": "https://www.goodreads.com/book/show/12609433-the-power-of-habit",
    "rating": "-"
  },
  {
    "title": "You Are a Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life (Paperback)",
    "author": "Jen Sincero",
    "href": "https://www.goodreads.com/book/show/15843166-you-are-a-badass",
    "rating": "-"
  },
  {
    "title": "Quiet: The Power of Introverts in a World That Can't Stop Talking (Hardcover)",
    "author": "Susan Cain",
    "href": "https://www.goodreads.com/book/show/8520610-quiet",
    "rating": "-"
  },
  {
    "title": "The Four Agreements: A Practical Guide to Personal Freedom (Hardcover)",
    "author": "Miguel Ruiz",
    "href": "https://www.goodreads.com/book/show/6596.The_Four_Agreements",
    "rating": "-"
  },
  {
    "title": "The Gifts of Imperfection (Paperback)",
    "author": "Brené Brown",
    "href": "https://www.goodreads.com/book/show/7015403-the-gifts-of-imperfection",
    "rating": "-"
  },
  {
    "title": "The Power of Now: A Guide to Spiritual Enlightenment (Paperback)",
    "author": "Eckhart Tolle",
    "href": "https://www.goodreads.com/book/show/6708.The_Power_of_Now",
    "rating": "-"
  },
  {
    "title": "Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead (Hardcover)",
    "author": "Brené Brown",
    "href": "https://www.goodreads.com/book/show/13588356-daring-greatly",
    "rating": "-"
  },
  {
    "title": "The 5 Love Languages: The Secret to Love that Lasts (Kindle Edition)",
    "author": "Gary Chapman",
    "href": "https://www.goodreads.com/book/show/23878688-the-5-love-languages",
    "rating": "-"
  },
  {
    "title": "Who Moved My Cheese? (Hardcover)",
    "author": "Spencer Johnson",
    "href": "https://www.goodreads.com/book/show/4894.Who_Moved_My_Cheese_",
    "rating": "-"
  },
  {
    "title": "The Secret (The Secret, #1)",
    "author": "Rhonda Byrne",
    "href": "https://www.goodreads.com/book/show/52529.The_Secret",
    "rating": "-"
  },
  {
    "title": "The Happiness Project: Or Why I Spent a Year Trying to Sing in the Morning, Clean My Closets, Fight Right, Read Aristotle, and Generally Have More Fun (Hardcover)",
    "author": "Gretchen Rubin",
    "href": "https://www.goodreads.com/book/show/6398634-the-happiness-project",
    "rating": "-"
  },
  {
    "title": "Think and Grow Rich (Paperback)",
    "author": "Napoleon Hill",
    "href": "https://www.goodreads.com/book/show/30186948-think-and-grow-rich",
    "rating": "-"
  },
  {
    "title": "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones (Kindle Edition)",
    "author": "James Clear",
    "href": "https://www.goodreads.com/book/show/40121378-atomic-habits",
    "rating": "-"
  },
  {
    "title": "Getting Things Done: The Art of Stress-Free Productivity (Paperback)",
    "author": "David Allen",
    "href": "https://www.goodreads.com/book/show/1633.Getting_Things_Done",
    "rating": "-"
  },
  {
    "title": "Big Magic: Creative Living Beyond Fear (Hardcover)",
    "author": "Elizabeth Gilbert",
    "href": "https://www.goodreads.com/book/show/24453082-big-magic",
    "rating": "-"
  },
  {
    "title": "Deep Work: Rules for Focused Success in a Distracted World (Hardcover)",
    "author": "Cal Newport",
    "href": "https://www.goodreads.com/book/show/25744928-deep-work",
    "rating": "-"
  },
  {
    "title": "Rich Dad, Poor Dad (Paperback)",
    "author": "Robert T. Kiyosaki",
    "href": "https://www.goodreads.com/book/show/69571.Rich_Dad_Poor_Dad",
    "rating": "-"
  },
  {
    "title": "How to Stop Worrying and Start Living (Paperback)",
    "author": "Dale Carnegie",
    "href": "https://www.goodreads.com/book/show/4866.How_to_Stop_Worrying_and_Start_Living",
    "rating": "-"
  },
  {
    "title": "The 4-Hour Workweek (ebook)",
    "author": "Timothy Ferriss",
    "href": "https://www.goodreads.com/book/show/368593.The_4_Hour_Workweek",
    "rating": "-"
  },
  {
    "title": "Girl, Wash Your Face: Stop Believing the Lies about Who You Are So You Can Become Who You Were Meant to Be (ebook)",
    "author": "Rachel Hollis",
    "href": "https://www.goodreads.com/book/show/35542451-girl-wash-your-face",
    "rating": "-"
  },
  {
    "title": "Man's Search for Meaning (Paperback)",
    "author": "Viktor E. Frankl",
    "href": "https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning",
    "rating": "-"
  },
  {
    "title": "10% Happier: How I Tamed the Voice in My Head, Reduced Stress Without Losing My Edge, and Found Self-Help That Actually Works (Hardcover)",
    "author": "Dan Harris",
    "href": "https://www.goodreads.com/book/show/18505796-10-happier",
    "rating": "-"
  },
  {
    "title": "Thinking, Fast and Slow (Hardcover)",
    "author": "Daniel Kahneman",
    "href": "https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow",
    "rating": "-"
  },
  {
    "title": "12 Rules for Life: An Antidote to Chaos (Hardcover)",
    "author": "Jordan B. Peterson",
    "href": "https://www.goodreads.com/book/show/30257963-12-rules-for-life",
    "rating": "-"
  },
  {
    "title": "Outliers: The Story of Success (Hardcover)",
    "author": "Malcolm Gladwell",
    "href": "https://www.goodreads.com/book/show/3228917-outliers",
    "rating": "-"
  },
  {
    "title": "Mindset: The New Psychology of Success (Hardcover)",
    "author": "Carol S. Dweck",
    "href": "https://www.goodreads.com/book/show/40745.Mindset",
    "rating": "-"
  },
  {
    "title": "Men Are from Mars, Women Are from Venus (Paperback)",
    "author": "John Gray",
    "href": "https://www.goodreads.com/book/show/1274.Men_Are_from_Mars_Women_Are_from_Venus",
    "rating": "-"
  },
  {
    "title": "Essentialism: The Disciplined Pursuit of Less (Hardcover)",
    "author": "Greg McKeown",
    "href": "https://www.goodreads.com/book/show/18077875-essentialism",
    "rating": "-"
  },
  {
    "title": "A New Earth: Awakening to Your Life's Purpose (Paperback)",
    "author": "Eckhart Tolle",
    "href": "https://www.goodreads.com/book/show/76334.A_New_Earth",
    "rating": "-"
  },
  {
    "title": "The Alchemist (Paperback)",
    "author": "Paulo Coelho",
    "href": "https://www.goodreads.com/book/show/18144590-the-alchemist",
    "rating": "-"
  },
  {
    "title": "Don't Sweat the Small Stuff ... and It's All Small Stuff: Simple Ways to Keep the Little Things From Taking Over Your Life (Paperback)",
    "author": "Richard Carlson",
    "href": "https://www.goodreads.com/book/show/170548.Don_t_Sweat_the_Small_Stuff_and_It_s_All_Small_Stuff",
    "rating": "-"
  },
  {
    "title": "Blink: The Power of Thinking Without Thinking (Paperback)",
    "author": "Malcolm Gladwell",
    "href": "https://www.goodreads.com/book/show/40102.Blink",
    "rating": "-"
  },
  {
    "title": "Rising Strong (Hardcover)",
    "author": "Brené Brown",
    "href": "https://www.goodreads.com/book/show/23317538-rising-strong",
    "rating": "-"
  },
  {
    "title": "Awaken the Giant Within: How to Take Immediate Control of Your Mental, Emotional, Physical and Financial Destiny! (Paperback)",
    "author": "Anthony Robbins",
    "href": "https://www.goodreads.com/book/show/180116.Awaken_the_Giant_Within",
    "rating": "-"
  },
  {
    "title": "Better Than Before: Mastering the Habits of Our Everyday Lives (Hardcover)",
    "author": "Gretchen Rubin",
    "href": "https://www.goodreads.com/book/show/22889767-better-than-before",
    "rating": "-"
  },
  {
    "title": "The War of Art: Break Through the Blocks & Win Your Inner Creative Battles (Paperback)",
    "author": "Steven Pressfield",
    "href": "https://www.goodreads.com/book/show/1319.The_War_of_Art",
    "rating": "-"
  },
  {
    "title": "The Willpower Instinct: How Self-Control Works, Why It Matters, and What You Can Do to Get More of It (Hardcover)",
    "author": "Kelly McGonigal",
    "href": "https://www.goodreads.com/book/show/10865206-the-willpower-instinct",
    "rating": "-"
  },
  {
    "title": "The Power of Positive Thinking (Hardcover)",
    "author": "Norman Vincent Peale",
    "href": "https://www.goodreads.com/book/show/1134122.The_Power_of_Positive_Thinking",
    "rating": "-"
  },
  {
    "title": "Eat That Frog!: 21 Great Ways to Stop Procrastinating and Get More Done in Less Time (Paperback)",
    "author": "Brian Tracy",
    "href": "https://www.goodreads.com/book/show/95887.Eat_That_Frog_",
    "rating": "-"
  },
  {
    "title": "Braving the Wilderness: The Quest for True Belonging and the Courage to Stand Alone (Hardcover)",
    "author": "Brené Brown",
    "href": "https://www.goodreads.com/book/show/34565022-braving-the-wilderness",
    "rating": "-"
  },
  {
    "title": "Grit (Hardcover)",
    "author": "Angela Duckworth",
    "href": "https://www.goodreads.com/book/show/27213329-grit",
    "rating": "-"
  },
  {
    "title": "The Magic of Thinking Big (Paperback)",
    "author": "David J. Schwartz",
    "href": "https://www.goodreads.com/book/show/759945.The_Magic_of_Thinking_Big",
    "rating": "-"
  },
  {
    "title": "The Monk Who Sold His Ferrari: A Fable About Fulfilling Your Dreams and Reaching Your Destiny (Paperback)",
    "author": "Robin S. Sharma",
    "href": "https://www.goodreads.com/book/show/43877.The_Monk_Who_Sold_His_Ferrari",
    "rating": "-"
  },
  {
    "title": "The Highly Sensitive Person: How to Thrive When the World Overwhelms You (Paperback)",
    "author": "Elaine N. Aron",
    "href": "https://www.goodreads.com/book/show/923950.The_Highly_Sensitive_Person",
    "rating": "-"
  },
  {
    "title": "Boundaries: When to Say Yes, How to Say No to Take Control of Your Life (Hardcover)",
    "author": "Henry Cloud",
    "href": "https://www.goodreads.com/book/show/944267.Boundaries",
    "rating": "-"
  },
  {
    "title": "The Miracle Morning: The Not-So-Obvious Secret Guaranteed to Transform Your Life: Before 8AM (Kindle Edition)",
    "author": "Hal Elrod",
    "href": "https://www.goodreads.com/book/show/17166225-the-miracle-morning",
    "rating": "-"
  },
  {
    "title": "The Code Book: The Science of Secrecy from Ancient Egypt to Quantum Cryptography",
    "author": "Simon Singh",
    "href": "https://www.goodreads.com/book/show/17994.The_Code_Book?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=1",
    "rating": " 4.30 avg rating — 20,643 ratings"
  },
  {
    "title": "Quantum (Captain Chase #1)",
    "author": "Patricia Cornwell",
    "href": "https://www.goodreads.com/book/show/40211891-quantum?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=2",
    "rating": " 2.93 avg rating — 12,218 ratings"
  },
  {
    "title": "In Search of Schrödinger's Cat: Quantum Physics and Reality",
    "author": "John Gribbin",
    "href": "https://www.goodreads.com/book/show/513367.In_Search_of_Schr_dinger_s_Cat?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=3",
    "rating": " 4.03 avg rating — 17,716 ratings"
  },
  {
    "title": "The Quantum Thief (Jean le Flambeur, #1)",
    "author": "Hannu Rajaniemi",
    "href": "https://www.goodreads.com/book/show/7562764-the-quantum-thief?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=4",
    "rating": " 3.83 avg rating — 18,403 ratings"
  },
  {
    "title": "Quantum: Einstein, Bohr and the Great Debate About the Nature of Reality",
    "author": "Manjit Kumar",
    "href": "https://www.goodreads.com/book/show/6448772-quantum?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=5",
    "rating": " 4.21 avg rating — 7,426 ratings"
  },
  {
    "title": "The Black Hole War: My Battle with Stephen Hawking to Make the World Safe for Quantum Mechanics",
    "author": "Leonard Susskind",
    "href": "https://www.goodreads.com/book/show/2161966.The_Black_Hole_War?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=6",
    "rating": " 4.11 avg rating — 9,343 ratings"
  },
  {
    "title": "Ageless Body, Timeless Mind: The Quantum Alternative to Growing Old",
    "author": "Deepak Chopra",
    "href": "https://www.goodreads.com/book/show/836512.Ageless_Body_Timeless_Mind?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=7",
    "rating": " 4.07 avg rating — 9,725 ratings"
  },
  {
    "title": "The Awakening (The New Heroes/Quantum Prophecy, #1)",
    "author": "Michael Carroll",
    "href": "https://www.goodreads.com/book/show/1312502.The_Awakening?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=8",
    "rating": " 3.99 avg rating — 4,345 ratings"
  },
  {
    "title": "Quantum Roots II: Worm Holes",
    "author": "Kyle Keyes",
    "href": "https://www.goodreads.com/book/show/34384161-quantum-roots-ii?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=9",
    "rating": " 4.38 avg rating — 5,870 ratings"
  },
  {
    "title": "Quantum Roots",
    "author": "Kyle Keyes",
    "href": "https://www.goodreads.com/book/show/18334354-quantum-roots?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=10",
    "rating": " 4.38 avg rating — 4,941 ratings"
  },
  {
    "title": "Matching Configurations: QUANTUM ROOTS III",
    "author": "Kyle Keyes",
    "href": "https://www.goodreads.com/book/show/44790978-matching-configurations?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=11",
    "rating": " 4.39 avg rating — 5,251 ratings"
  },
  {
    "title": "What Is Real?: The Unfinished Quest for the Meaning of Quantum Physics",
    "author": "Adam Becker",
    "href": "https://www.goodreads.com/book/show/35604796-what-is-real?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=12",
    "rating": " 4.26 avg rating — 1,575 ratings"
  },
  {
    "title": "Something Deeply Hidden: Quantum Worlds and the Emergence of Spacetime",
    "author": "Sean Carroll",
    "href": "https://www.goodreads.com/book/show/44065062-something-deeply-hidden?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=13",
    "rating": " 4.09 avg rating — 1,421 ratings"
  },
  {
    "title": "Virtuous (Quantum, #1)",
    "author": "M.S. Force",
    "href": "https://www.goodreads.com/book/show/25156004-virtuous?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=14",
    "rating": " 4.09 avg rating — 9,226 ratings"
  },
  {
    "title": "Quantum Healing: Exploring the Frontiers of Mind Body Medicine",
    "author": "Deepak Chopra",
    "href": "https://www.goodreads.com/book/show/138897.Quantum_Healing?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=15",
    "rating": " 4.14 avg rating — 5,609 ratings"
  },
  {
    "title": "Valorous (Quantum, #2)",
    "author": "M.S. Force",
    "href": "https://www.goodreads.com/book/show/25087228-valorous?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=16",
    "rating": " 4.18 avg rating — 6,935 ratings"
  },
  {
    "title": "Victorious (Quantum, #3)",
    "author": "M.S. Force",
    "href": "https://www.goodreads.com/book/show/25087227-victorious?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=17",
    "rating": " 4.11 avg rating — 6,570 ratings"
  },
  {
    "title": "Three Roads To Quantum Gravity",
    "author": "Lee Smolin",
    "href": "https://www.goodreads.com/book/show/132695.Three_Roads_To_Quantum_Gravity?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=18",
    "rating": " 4.15 avg rating — 5,558 ratings"
  },
  {
    "title": "Quantum Lens",
    "author": "Douglas E. Richards",
    "href": "https://www.goodreads.com/book/show/23287584-quantum-lens?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=19",
    "rating": " 4.02 avg rating — 4,433 ratings"
  },
  {
    "title": "The Quantum Universe: Everything That Can Happen Does Happen",
    "author": "Brian Cox",
    "href": "https://www.goodreads.com/book/show/12672387-the-quantum-universe?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=20",
    "rating": " 3.77 avg rating — 3,498 ratings"
  },
  {
    "title": "Reality is Not What it Seems: The Journey to Quantum Gravity",
    "author": "Carlo Rovelli",
    "href": "https://www.goodreads.com/book/show/29767627-reality-is-not-what-it-seems?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=21",
    "rating": " 4.31 avg rating — 6,697 ratings"
  },
  {
    "title": "Life on the Edge: The Coming of Age of Quantum Biology",
    "author": "Johnjoe McFadden",
    "href": "https://www.goodreads.com/book/show/24040194-life-on-the-edge?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=22",
    "rating": " 4.10 avg rating — 2,212 ratings"
  },
  {
    "title": "Quantum Man: Richard Feynman's Life in Science",
    "author": "Lawrence M. Krauss",
    "href": "https://www.goodreads.com/book/show/8586536-quantum-man?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=23",
    "rating": " 4.07 avg rating — 3,201 ratings"
  },
  {
    "title": "Quantum Space (Quantum #1)",
    "author": "Douglas Phillips",
    "href": "https://www.goodreads.com/book/show/34857883-quantum-space?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=24",
    "rating": " 4.34 avg rating — 3,525 ratings"
  },
  {
    "title": "The Quantum Magician (The Quantum Evolution, #1)",
    "author": "Derek Künsken",
    "href": "https://www.goodreads.com/book/show/38608575-the-quantum-magician?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=25",
    "rating": " 4.04 avg rating — 3,702 ratings"
  },
  {
    "title": "Quantum Psychology: How Brain Software Programs You & Your World",
    "author": "Robert Anton Wilson",
    "href": "https://www.goodreads.com/book/show/62558.Quantum_Psychology?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=26",
    "rating": " 4.23 avg rating — 2,219 ratings"
  },
  {
    "title": "A Quantum Murder (Greg Mandel, #2)",
    "author": "Peter F. Hamilton",
    "href": "https://www.goodreads.com/book/show/45250.A_Quantum_Murder?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=27",
    "rating": " 3.97 avg rating — 4,829 ratings"
  },
  {
    "title": "The Quantum and the Lotus: A Journey to the Frontiers Where Science and Buddhism Meet",
    "author": "Matthieu Ricard",
    "href": "https://www.goodreads.com/book/show/222652.The_Quantum_and_the_Lotus?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=28",
    "rating": " 4.15 avg rating — 1,434 ratings"
  },
  {
    "title": "Quantum of Solace: The Complete James Bond Short Stories",
    "author": "Ian Fleming",
    "href": "https://www.goodreads.com/book/show/3261447-quantum-of-solace?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=29",
    "rating": " 3.77 avg rating — 2,869 ratings"
  },
  {
    "title": "Rapturous (Quantum, #4)",
    "author": "M.S. Force",
    "href": "https://www.goodreads.com/book/show/26801170-rapturous?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=30",
    "rating": " 4.31 avg rating — 3,141 ratings"
  },
  {
    "title": "Super Human (The New Heroes/Quantum Prophecy, #4)",
    "author": "Michael Carroll",
    "href": "https://www.goodreads.com/book/show/7718013-super-human?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=31",
    "rating": " 4.09 avg rating — 2,423 ratings"
  },
  {
    "title": "Introduction to Quantum Mechanics",
    "author": "David J. Griffiths",
    "href": "https://www.goodreads.com/book/show/153908.Introduction_to_Quantum_Mechanics?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=32",
    "rating": " 4.23 avg rating — 2,158 ratings"
  },
  {
    "title": "Ravenous (Quantum, #5)",
    "author": "M.S. Force",
    "href": "https://www.goodreads.com/book/show/30738096-ravenous?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=33",
    "rating": " 4.29 avg rating — 2,853 ratings"
  },
  {
    "title": "Quantum Mechanics: The Theoretical Minimum (Theoretical Minimum #2)",
    "author": "Leonard Susskind",
    "href": "https://www.goodreads.com/book/show/18210750-quantum-mechanics?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=34",
    "rating": " 4.34 avg rating — 1,013 ratings"
  },
  {
    "title": "Quantum Void (Quantum, #2)",
    "author": "Douglas Phillips",
    "href": "https://www.goodreads.com/book/show/37642819-quantum-void?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=35",
    "rating": " 4.30 avg rating — 1,918 ratings"
  },
  {
    "title": "Thirty Years that Shook Physics: The Story of Quantum Theory",
    "author": "George Gamow",
    "href": "https://www.goodreads.com/book/show/17265.Thirty_Years_that_Shook_Physics?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=36",
    "rating": " 4.19 avg rating — 1,026 ratings"
  },
  {
    "title": "Keeping It Real (Quantum Gravity #1)",
    "author": "Justina Robson",
    "href": "https://www.goodreads.com/book/show/395551.Keeping_It_Real?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=37",
    "rating": " 3.47 avg rating — 2,613 ratings"
  },
  {
    "title": "Quantum Night",
    "author": "Robert J. Sawyer",
    "href": "https://www.goodreads.com/book/show/25734179-quantum-night?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=38",
    "rating": " 3.67 avg rating — 2,264 ratings"
  },
  {
    "title": "The Gathering (The New Heroes/Quantum Prophecy, #2)",
    "author": "Michael Carroll",
    "href": "https://www.goodreads.com/book/show/1444912.The_Gathering?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=39",
    "rating": " 4.20 avg rating — 2,318 ratings"
  },
  {
    "title": "Quantum Computing Since Democritus",
    "author": "Scott Aaronson",
    "href": "https://www.goodreads.com/book/show/17471298-quantum-computing-since-democritus?from_search=true&from_srp=true&qid=lstBTUvf3O&rank=40",
    "rating": " 4.14 avg rating — 711 ratings"
  },
  {
    "title": "Denmark Vesey's Garden: Slavery and Memory in the Cradle of the Confederacy",
    "author": "Ethan J. Kytle",
    "href": "https://www.goodreads.com/book/show/36927955-denmark-vesey-s-garden?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=21",
    "rating": " 4.46 avg rating — 220 ratings"
  },
  {
    "title": "Hygge: The Danish Art of Happiness: The Complete Book of Hygge (Hygge Life, Hygge Books, Hygge Habits, Hygge Christmas, Hygge Lifestyle, Art of Happiness. Concept of Hygge) (Hygge Lifestyle Books 1)",
    "author": "Britta Olsson",
    "href": "https://www.goodreads.com/book/show/36500665-hygge?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=22",
    "rating": " 3.60 avg rating — 285 ratings"
  },
  {
    "title": "Letters Written During a Short Residence in Sweden, Norway and Denmark",
    "author": "Mary Wollstonecraft",
    "href": "https://www.goodreads.com/book/show/1965539.Letters_Written_During_a_Short_Residence_in_Sweden_Norway_and_Denmark?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=23",
    "rating": " 3.53 avg rating — 683 ratings"
  },
  {
    "title": "Scandinavian Folk & Fairy Tales: Tales From Norway, Sweden, Denmark, Finland & Iceland",
    "author": "Anonymous",
    "href": "https://www.goodreads.com/book/show/750496.Scandinavian_Folk_Fairy_Tales?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=24",
    "rating": " 4.19 avg rating — 140 ratings"
  },
  {
    "title": "Darkness Over Denmark: The Danish Resistance and the Rescue of the Jews",
    "author": "Ellen Levine",
    "href": "https://www.goodreads.com/book/show/1456330.Darkness_Over_Denmark?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=25",
    "rating": " 3.96 avg rating — 202 ratings"
  },
  {
    "title": "The Cat Who...: Could Read Backwards; Ate Danish Modern; Turned On and Off",
    "author": "Lilian Jackson Braun",
    "href": "https://www.goodreads.com/book/show/86527.The_Cat_Who_?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=26",
    "rating": " 4.13 avg rating — 598 ratings"
  },
  {
    "title": "Hamlet: Prince of Denmark",
    "author": "William Shakespeare",
    "href": "https://www.goodreads.com/book/show/187434.Hamlet?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=27",
    "rating": " 4.02 avg rating — 706,339 ratings"
  },
  {
    "title": "Cook Yourself Happy: The Danish Way",
    "author": "Caroline Fleming",
    "href": "https://www.goodreads.com/book/show/33785588-cook-yourself-happy?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=28",
    "rating": " 3.78 avg rating — 46 ratings"
  },
  {
    "title": "Countrymen: The Untold Story of How Denmark's Jews Escaped the Nazis",
    "author": "Bo Lidegaard",
    "href": "https://www.goodreads.com/book/show/17262195-countrymen?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=29",
    "rating": " 3.83 avg rating — 210 ratings"
  },
  {
    "title": "Jahan e Danish / جہان دانش",
    "author": "Ehsan Danish",
    "href": "https://www.goodreads.com/book/show/30372314-jahan-e-danish?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=30",
    "rating": " 4.08 avg rating — 65 ratings"
  },
  {
    "title": "Denmark Vesey",
    "author": "David M. Robertson",
    "href": "https://www.goodreads.com/book/show/1613104.Denmark_Vesey?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=31",
    "rating": " 3.99 avg rating — 185 ratings"
  },
  {
    "title": "The Restless Danish Immigrants The Johnson Family",
    "author": "Anthony W. Buirchell",
    "href": "https://www.goodreads.com/book/show/25036857-the-restless-danish-immigrants-the-johnson-family?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=32",
    "rating": " 3.57 avg rating — 7 ratings"
  },
  {
    "title": "Arabia Felix: The Danish Expedition of 1761-1767",
    "author": "Thorkild Hansen",
    "href": "https://www.goodreads.com/book/show/32302881-arabia-felix?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=33",
    "rating": " 4.40 avg rating — 550 ratings"
  },
  {
    "title": "The Danish Queen",
    "author": "Lynda M. Andrews",
    "href": "https://www.goodreads.com/book/show/35287654-the-danish-queen?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=34",
    "rating": " 3.75 avg rating — 390 ratings"
  },
  {
    "title": "Hygge: The Danish Secrets of Happiness: How to be Happy and Healthy in Your Daily Life",
    "author": "Maya Thoresen",
    "href": "https://www.goodreads.com/book/show/35675515-hygge?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=35",
    "rating": " 3.63 avg rating — 212 ratings"
  },
  {
    "title": "Goodbye Clutter, Hello Freedom: How to create space for Danish Hygge and Lifestyle by cleaning up, organizing and decorating with care. (Danish Hygge & Lifestyle Book 1)",
    "author": "Lena Bentsen",
    "href": "https://www.goodreads.com/book/show/31697088-goodbye-clutter-hello-freedom?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=36",
    "rating": " 3.58 avg rating — 196 ratings"
  },
  {
    "title": "Hygge: A Celebration of Simple Pleasures. Living the Danish Way",
    "author": "Charlotte Abrahams",
    "href": "https://www.goodreads.com/book/show/31120826-hygge?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=37",
    "rating": " 3.06 avg rating — 199 ratings"
  },
  {
    "title": "Hygge: Introduction to the Danish Art of Cozy Living (Hygge #1)",
    "author": "Amy White",
    "href": "https://www.goodreads.com/book/show/35451766-hygge?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=38",
    "rating": " 3.38 avg rating — 130 ratings"
  },
  {
    "title": "A Piece of Danish Happiness",
    "author": "Sharmi Albrechtsen",
    "href": "https://www.goodreads.com/book/show/18396579-a-piece-of-danish-happiness?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=39",
    "rating": " 3.01 avg rating — 67 ratings"
  },
  {
    "title": "Ophelia: Queen of Denmark",
    "author": "Jackie French",
    "href": "https://www.goodreads.com/book/show/25808600-ophelia?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=40",
    "rating": " 3.98 avg rating — 231 ratings"
  },
  {
    "title": "The Little Book of Hygge: The Danish Way to Live Well",
    "author": "Meik Wiking",
    "href": "https://www.goodreads.com/book/show/30045683-the-little-book-of-hygge?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=1",
    "rating": " 3.74 avg rating — 59,919 ratings"
  },
  {
    "title": "The Danish Girl",
    "author": "David Ebershoff",
    "href": "https://www.goodreads.com/book/show/27864391-the-danish-girl?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=2",
    "rating": " 3.75 avg rating — 19,643 ratings"
  },
  {
    "title": "The Year of Living Danishly: My Twelve Months Unearthing the Secrets of the World's Happiest Country",
    "author": "Helen Russell",
    "href": "https://www.goodreads.com/book/show/23282062-the-year-of-living-danishly?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=3",
    "rating": " 3.96 avg rating — 17,865 ratings"
  },
  {
    "title": "The Little Book of Lykke: The Danish Search for the World's Happiest People",
    "author": "Meik Wiking",
    "href": "https://www.goodreads.com/book/show/34879265-the-little-book-of-lykke?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=4",
    "rating": " 4.02 avg rating — 9,043 ratings"
  },
  {
    "title": "Raspberry Danish Murder (Hannah Swensen, #22)",
    "author": "Joanne Fluke",
    "href": "https://www.goodreads.com/book/show/35277384-raspberry-danish-murder?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=5",
    "rating": " 3.60 avg rating — 5,741 ratings"
  },
  {
    "title": "The Cat Who Ate Danish Modern (Cat Who..., #2)",
    "author": "Lilian Jackson Braun",
    "href": "https://www.goodreads.com/book/show/237010.The_Cat_Who_Ate_Danish_Modern?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=6",
    "rating": " 3.93 avg rating — 10,150 ratings"
  },
  {
    "title": "The Danish Way of Parenting: What the Happiest People in the World Know About Raising Confident, Capable Kids",
    "author": "Jessica Joelle Alexander",
    "href": "https://www.goodreads.com/book/show/28815322-the-danish-way-of-parenting?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=7",
    "rating": " 3.99 avg rating — 4,875 ratings"
  },
  {
    "title": "The Cozy Life: Rediscover the Joy of the Simple Things Through the Danish Concept of Hygge",
    "author": "Pia Edberg",
    "href": "https://www.goodreads.com/book/show/29866972-the-cozy-life?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=8",
    "rating": " 3.57 avg rating — 2,298 ratings"
  },
  {
    "title": "Dying for Danish (Lexy Baker #2)",
    "author": "Leighann Dobbs",
    "href": "https://www.goodreads.com/book/show/16598595-dying-for-danish?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=9",
    "rating": " 3.78 avg rating — 2,362 ratings"
  },
  {
    "title": "Hygge: The Danish Art of Happiness",
    "author": "Marie Tourell Søderberg",
    "href": "https://www.goodreads.com/book/show/31129745-hygge?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=10",
    "rating": " 3.45 avg rating — 2,226 ratings"
  },
  {
    "title": "The Book of Hygge: The Danish Art of Living Well",
    "author": "Louisa Thomsen Brits",
    "href": "https://www.goodreads.com/book/show/29537167-the-book-of-hygge?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=11",
    "rating": " 3.23 avg rating — 2,202 ratings"
  },
  {
    "title": "Hamlet, Prince of Denmark",
    "author": "A.J. Hartley",
    "href": "https://www.goodreads.com/book/show/21000538-hamlet-prince-of-denmark?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=12",
    "rating": " 4.12 avg rating — 2,631 ratings"
  },
  {
    "title": "Nordic Tales: Folktales from Norway, Sweden, Finland, Iceland, and Denmark",
    "author": "Chronicle Books",
    "href": "https://www.goodreads.com/book/show/43387395-nordic-tales?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=13",
    "rating": " 4.10 avg rating — 251 ratings"
  },
  {
    "title": "Curio (Curio #1)",
    "author": "Evangeline Denmark",
    "href": "https://www.goodreads.com/book/show/25309770-curio?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=14",
    "rating": " 3.48 avg rating — 627 ratings"
  },
  {
    "title": "Medical Diagnosis and Managment",
    "author": "Mohammad Inam Danish",
    "href": "https://www.goodreads.com/book/show/9469558-medical-diagnosis-and-managment?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=15",
    "rating": " 4.02 avg rating — 388 ratings"
  },
  {
    "title": "How to Be Danish: A Journey to the Cultural Heart of Denmark",
    "author": "Patrick Kingsley",
    "href": "https://www.goodreads.com/book/show/18143912-how-to-be-danish?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=16",
    "rating": " 3.59 avg rating — 1,022 ratings"
  },
  {
    "title": "The Yellow Star: The Legend of King Christian X of Denmark",
    "author": "Carmen Agra Deedy",
    "href": "https://www.goodreads.com/book/show/273794.The_Yellow_Star?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=17",
    "rating": " 4.30 avg rating — 980 ratings"
  },
  {
    "title": "The History of Danish Dreams",
    "author": "Peter Høeg",
    "href": "https://www.goodreads.com/book/show/129157.The_History_of_Danish_Dreams?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=18",
    "rating": " 3.53 avg rating — 1,159 ratings"
  },
  {
    "title": "Courage & Defiance: Stories of Spies, Saboteurs, and Survivors in World War II Denmark",
    "author": "Deborah Hopkinson",
    "href": "https://www.goodreads.com/book/show/24612560-courage-defiance?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=19",
    "rating": " 4.09 avg rating — 512 ratings"
  },
  {
    "title": "Hygge: Discovering The Danish Art Of Happiness – How To Live Cozily And Enjoy Life’s Simple Pleasures",
    "author": "Olivia Telford",
    "href": "https://www.goodreads.com/book/show/35688372-hygge?from_search=true&from_srp=true&qid=kVnL0adnmH&rank=20",
    "rating": " 3.68 avg rating — 330 ratings"
  },
  {
    "title": "The Power of Now: A Guide to Spiritual Enlightenment",
    "author": "Eckhart Tolle",
    "href": "https://www.goodreads.com/book/show/6708.The_Power_of_Now?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=1",
    "rating": " 4.14 avg rating — 191,257 ratings"
  },
  {
    "title": "The Artist's Way: A Spiritual Path to Higher Creativity",
    "author": "Julia Cameron",
    "href": "https://www.goodreads.com/book/show/615570.The_Artist_s_Way?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=2",
    "rating": " 3.91 avg rating — 90,984 ratings"
  },
  {
    "title": "The Road Less Traveled: A New Psychology of Love, Traditional Values and Spiritual Growth",
    "author": "M. Scott Peck",
    "href": "https://www.goodreads.com/book/show/347852.The_Road_Less_Traveled?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=3",
    "rating": " 4.06 avg rating — 81,148 ratings"
  },
  {
    "title": "Concerning the Spiritual in Art",
    "author": "Wassily Kandinsky",
    "href": "https://www.goodreads.com/book/show/857502.Concerning_the_Spiritual_in_Art?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=4",
    "rating": " 3.81 avg rating — 74,848 ratings"
  },
  {
    "title": "The Seven Spiritual Laws of Success: A Practical Guide to the Fulfillment of Your Dreams",
    "author": "Deepak Chopra",
    "href": "https://www.goodreads.com/book/show/773038.The_Seven_Spiritual_Laws_of_Success?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=5",
    "rating": " 4.11 avg rating — 53,182 ratings"
  },
  {
    "title": "Celebration of Discipline: The Path to Spiritual Growth",
    "author": "Richard J. Foster",
    "href": "https://www.goodreads.com/book/show/64023.Celebration_of_Discipline?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=6",
    "rating": " 4.19 avg rating — 31,434 ratings"
  },
  {
    "title": "The Way of the Superior Man: A Spiritual Guide to Mastering the Challenges of Women, Work, and Sexual Desire",
    "author": "David Deida",
    "href": "https://www.goodreads.com/book/show/79424.The_Way_of_the_Superior_Man?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=7",
    "rating": " 4.10 avg rating — 14,019 ratings"
  },
  {
    "title": "Praying God's Word: Breaking Free From Spiritual Strongholds",
    "author": "Beth Moore",
    "href": "https://www.goodreads.com/book/show/26661.Praying_God_s_Word?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=8",
    "rating": " 4.46 avg rating — 12,667 ratings"
  },
  {
    "title": "A Path with Heart: A Guide Through the Perils and Promises of Spiritual Life",
    "author": "Jack Kornfield",
    "href": "https://www.goodreads.com/book/show/143675.A_Path_with_Heart?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=9",
    "rating": " 4.26 avg rating — 9,640 ratings"
  },
  {
    "title": "The Things You Can See Only When You Slow Down: Guidance on the Path to Mindfulness from a Spiritual Leader",
    "author": "Haemin Sunim",
    "href": "https://www.goodreads.com/book/show/30780006-the-things-you-can-see-only-when-you-slow-down?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=10",
    "rating": " 4.08 avg rating — 10,506 ratings"
  },
  {
    "title": "Animal Speak: The Spiritual & Magical Powers of Creatures Great and Small",
    "author": "Ted Andrews",
    "href": "https://www.goodreads.com/book/show/67863.Animal_Speak?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=11",
    "rating": " 4.26 avg rating — 10,330 ratings"
  },
  {
    "title": "The Measure of a Man: A Spiritual Autobiography",
    "author": "Sidney Poitier",
    "href": "https://www.goodreads.com/book/show/91563.The_Measure_of_a_Man?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=12",
    "rating": " 3.72 avg rating — 9,949 ratings"
  },
  {
    "title": "Cutting Through Spiritual Materialism",
    "author": "Chögyam Trungpa",
    "href": "https://www.goodreads.com/book/show/295000.Cutting_Through_Spiritual_Materialism?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=13",
    "rating": " 4.27 avg rating — 6,624 ratings"
  },
  {
    "title": "The Ruthless Elimination of Hurry: How to Stay Emotionally Healthy and Spiritually Alive in the Chaos of the Modern World",
    "author": "John Mark Comer",
    "href": "https://www.goodreads.com/book/show/43982455-the-ruthless-elimination-of-hurry?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=14",
    "rating": " 4.63 avg rating — 4,471 ratings"
  },
  {
    "title": "Finding Hope in the Darkness of Grief: Spiritual Insights Expressed Through Art, Poetry and Prose",
    "author": "Diamante Lavendar",
    "href": "https://www.goodreads.com/book/show/40593473-finding-hope-in-the-darkness-of-grief?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=15",
    "rating": " 4.34 avg rating — 5,384 ratings"
  },
  {
    "title": "Life of the Beloved: Spiritual Living in a Secular World",
    "author": "Henri J.M. Nouwen",
    "href": "https://www.goodreads.com/book/show/6151.Life_of_the_Beloved?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=16",
    "rating": " 4.28 avg rating — 8,463 ratings"
  },
  {
    "title": "One Day My Soul Just Opened Up: 40 Days and 40 Nights Toward Spiritual Strength and Personal Growth",
    "author": "Iyanla Vanzant",
    "href": "https://www.goodreads.com/book/show/30453.One_Day_My_Soul_Just_Opened_Up?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=17",
    "rating": " 4.12 avg rating — 8,451 ratings"
  },
  {
    "title": "Spiritual Disciplines for the Christian Life",
    "author": "Donald S. Whitney",
    "href": "https://www.goodreads.com/book/show/213368.Spiritual_Disciplines_for_the_Christian_Life?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=18",
    "rating": " 4.26 avg rating — 8,426 ratings"
  },
  {
    "title": "Sacred Marriage: Celebrating Marriage as a Spiritual Discipline",
    "author": "Gary L. Thomas",
    "href": "https://www.goodreads.com/book/show/56521.Sacred_Marriage?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=19",
    "rating": " 4.28 avg rating — 12,795 ratings"
  },
  {
    "title": "The Life You've Always Wanted: Spiritual Disciplines for Ordinary People",
    "author": "John Ortberg",
    "href": "https://www.goodreads.com/book/show/161419.The_Life_You_ve_Always_Wanted?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=20",
    "rating": " 4.06 avg rating — 8,270 ratings"
  },
  {
    "title": "You Are What You Love: The Spiritual Power of Habit",
    "author": "James K.A. Smith",
    "href": "https://www.goodreads.com/book/show/26568656-you-are-what-you-love?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=21",
    "rating": " 4.20 avg rating — 4,129 ratings"
  },
  {
    "title": "The Sacred Enneagram: Finding Your Unique Path to Spiritual Growth",
    "author": "Christopher L. Heuertz",
    "href": "https://www.goodreads.com/book/show/33098676-the-sacred-enneagram?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=22",
    "rating": " 4.03 avg rating — 5,100 ratings"
  },
  {
    "title": "There's a Spiritual Solution to Every Problem",
    "author": "Wayne W. Dyer",
    "href": "https://www.goodreads.com/book/show/20972.There_s_a_Spiritual_Solution_to_Every_Problem?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=23",
    "rating": " 4.26 avg rating — 6,214 ratings"
  },
  {
    "title": "After the Ecstasy, the Laundry: How the Heart Grows Wise on the Spiritual Path",
    "author": "Jack Kornfield",
    "href": "https://www.goodreads.com/book/show/341631.After_the_Ecstasy_the_Laundry?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=24",
    "rating": " 4.14 avg rating — 4,400 ratings"
  },
  {
    "title": "The Wisdom of the Enneagram: The Complete Guide to Psychological and Spiritual Growth for the Nine Personality Types",
    "author": "Don Richard Riso",
    "href": "https://www.goodreads.com/book/show/311053.The_Wisdom_of_the_Enneagram?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=25",
    "rating": " 4.22 avg rating — 4,241 ratings"
  },
  {
    "title": "Hudson Taylor's Spiritual Secret",
    "author": "F. Howard Taylor",
    "href": "https://www.goodreads.com/book/show/313619.Hudson_Taylor_s_Spiritual_Secret?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=26",
    "rating": " 4.33 avg rating — 6,434 ratings"
  },
  {
    "title": "The Age of Spiritual Machines: When Computers Exceed Human Intelligence",
    "author": "Ray Kurzweil",
    "href": "https://www.goodreads.com/book/show/83533.The_Age_of_Spiritual_Machines?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=27",
    "rating": " 3.90 avg rating — 3,935 ratings"
  },
  {
    "title": "Spiritual Leadership",
    "author": "J. Oswald Sanders",
    "href": "https://www.goodreads.com/book/show/135890.Spiritual_Leadership?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=28",
    "rating": " 4.22 avg rating — 6,185 ratings"
  },
  {
    "title": "The Way of the Wizard: Twenty Spiritual Lessons for Creating the Life You Want",
    "author": "Deepak Chopra",
    "href": "https://www.goodreads.com/book/show/138894.The_Way_of_the_Wizard?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=29",
    "rating": " 4.10 avg rating — 5,090 ratings"
  },
  {
    "title": "The Celestine Vision: Living the New Spiritual Awareness",
    "author": "James Redfield",
    "href": "https://www.goodreads.com/book/show/31220.The_Celestine_Vision?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=30",
    "rating": " 4.08 avg rating — 7,362 ratings"
  },
  {
    "title": "Spiritual Midwifery",
    "author": "Ina May Gaskin",
    "href": "https://www.goodreads.com/book/show/32129.Spiritual_Midwifery?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=31",
    "rating": " 4.39 avg rating — 5,488 ratings"
  },
  {
    "title": "Purification of the Heart: Signs, Symptoms and Cures of the Spiritual Diseases of the Heart",
    "author": "Imam al-Mawlud",
    "href": "https://www.goodreads.com/book/show/272724.Purification_of_the_Heart?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=32",
    "rating": " 4.50 avg rating — 2,836 ratings"
  },
  {
    "title": "When the Heart Waits: Spiritual Direction for Life's Sacred Questions",
    "author": "Sue Monk Kidd",
    "href": "https://www.goodreads.com/book/show/6981.When_the_Heart_Waits?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=33",
    "rating": " 4.14 avg rating — 2,801 ratings"
  },
  {
    "title": "Further Along the Road Less Traveled: The Unending Journey Towards Spiritual Growth",
    "author": "M. Scott Peck",
    "href": "https://www.goodreads.com/book/show/7371.Further_Along_the_Road_Less_Traveled?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=34",
    "rating": " 4.08 avg rating — 5,251 ratings"
  },
  {
    "title": "Rachel's Tears: The Spiritual Journey of Columbine Martyr Rachel Scott",
    "author": "Beth Nimmo",
    "href": "https://www.goodreads.com/book/show/104445.Rachel_s_Tears?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=35",
    "rating": " 4.12 avg rating — 4,088 ratings"
  },
  {
    "title": "Spiritual Depression: Its Causes and Cure",
    "author": "D. Martyn Lloyd-Jones",
    "href": "https://www.goodreads.com/book/show/272211.Spiritual_Depression?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=36",
    "rating": " 4.36 avg rating — 3,582 ratings"
  },
  {
    "title": "Reason for Hope: A Spiritual Journey",
    "author": "Jane Goodall",
    "href": "https://www.goodreads.com/book/show/135484.Reason_for_Hope?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=37",
    "rating": " 4.19 avg rating — 3,691 ratings"
  },
  {
    "title": "My Spiritual Journey",
    "author": "Dalai Lama XIV",
    "href": "https://www.goodreads.com/book/show/10260857-my-spiritual-journey?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=38",
    "rating": " 3.96 avg rating — 2,238 ratings"
  },
  {
    "title": "The Secret Life of Plants: A Fascinating Account of the Physical, Emotional and Spiritual Relations Between Plants and Man",
    "author": "Peter Tompkins",
    "href": "https://www.goodreads.com/book/show/99442.The_Secret_Life_of_Plants?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=39",
    "rating": " 4.06 avg rating — 2,227 ratings"
  },
  {
    "title": "A New Kind of Christian: A Tale of Two Friends on a Spiritual Journey",
    "author": "Brian D. McLaren",
    "href": "https://www.goodreads.com/book/show/44441.A_New_Kind_of_Christian?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=40",
    "rating": " 3.82 avg rating — 4,742 ratings"
  },
  {
    "title": "Dakota: A Spiritual Geography",
    "author": "Kathleen Norris",
    "href": "https://www.goodreads.com/book/show/108680.Dakota?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=41",
    "rating": " 4.06 avg rating — 4,203 ratings"
  },
  {
    "title": "Reshaping It All: Motivation for Physical and Spiritual Fitness",
    "author": "Candace Cameron Bure",
    "href": "https://www.goodreads.com/book/show/9409250-reshaping-it-all?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=42",
    "rating": " 3.87 avg rating — 3,723 ratings"
  },
  {
    "title": "The Music Lesson: A Spiritual Search for Growth Through Music",
    "author": "Victor L. Wooten",
    "href": "https://www.goodreads.com/book/show/1622930.The_Music_Lesson?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=43",
    "rating": " 4.16 avg rating — 3,604 ratings"
  },
  {
    "title": "Super Brain: Unleashing the Explosive Power of Your Mind to Maximize Health, Happiness, and Spiritual Well-Being",
    "author": "Deepak Chopra",
    "href": "https://www.goodreads.com/book/show/13573432-super-brain?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=44",
    "rating": " 3.85 avg rating — 3,097 ratings"
  },
  {
    "title": "Philosophy as a Way of Life: Spiritual Exercises from Socrates to Foucault",
    "author": "Pierre Hadot",
    "href": "https://www.goodreads.com/book/show/305860.Philosophy_as_a_Way_of_Life?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=45",
    "rating": " 4.31 avg rating — 869 ratings"
  },
  {
    "title": "Rising Strong as a Spiritual Practice",
    "author": "Brené Brown",
    "href": "https://www.goodreads.com/book/show/28862373-rising-strong-as-a-spiritual-practice?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=46",
    "rating": " 4.50 avg rating — 2,598 ratings"
  },
  {
    "title": "The 9 Steps to Financial Freedom: Practical and Spiritual Steps So You Can Stop Worrying",
    "author": "Suze Orman",
    "href": "https://www.goodreads.com/book/show/166021.The_9_Steps_to_Financial_Freedom?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=47",
    "rating": " 3.75 avg rating — 2,926 ratings"
  },
  {
    "title": "Spiritual Growth: Being Your Higher Self",
    "author": "Sanaya Roman",
    "href": "https://www.goodreads.com/book/show/135144.Spiritual_Growth?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=48",
    "rating": " 4.31 avg rating — 2,050 ratings"
  },
  {
    "title": "This is It & Other Essays on Zen & Spiritual Experience",
    "author": "Alan W. Watts",
    "href": "https://www.goodreads.com/book/show/432223.This_is_It_Other_Essays_on_Zen_Spiritual_Experience?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=49",
    "rating": " 4.29 avg rating — 2,121 ratings"
  },
  {
    "title": "Christ Plays in Ten Thousand Places: A Conversation in Spiritual Theology (Spiritual Theology #1)",
    "author": "Eugene H. Peterson",
    "href": "https://www.goodreads.com/book/show/49575.Christ_Plays_in_Ten_Thousand_Places?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=50",
    "rating": " 4.13 avg rating — 2,657 ratings"
  },
  {
    "title": "Sacred Hoops: Spiritual Lessons of a Hardwood Warrior",
    "author": "Phil Jackson",
    "href": "https://www.goodreads.com/book/show/112215.Sacred_Hoops?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=51",
    "rating": " 3.99 avg rating — 3,503 ratings"
  },
  {
    "title": "The Road Less Traveled and Beyond: Spiritual Growth in an Age of Anxiety",
    "author": "M. Scott Peck",
    "href": "https://www.goodreads.com/book/show/4442.The_Road_Less_Traveled_and_Beyond?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=52",
    "rating": " 4.14 avg rating — 3,503 ratings"
  },
  {
    "title": "Eat This Book: A Conversation in the Art of Spiritual Reading (Spiritual Theology #2)",
    "author": "Eugene H. Peterson",
    "href": "https://www.goodreads.com/book/show/97852.Eat_This_Book?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=53",
    "rating": " 4.13 avg rating — 2,841 ratings"
  },
  {
    "title": "Sacred Rhythms: Arranging Our Lives for Spiritual Transformation",
    "author": "Ruth Haley Barton",
    "href": "https://www.goodreads.com/book/show/249171.Sacred_Rhythms?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=54",
    "rating": " 4.24 avg rating — 2,222 ratings"
  },
  {
    "title": "The Spiritual Exercises",
    "author": "Ignatius of Loyola",
    "href": "https://www.goodreads.com/book/show/878682.The_Spiritual_Exercises?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=55",
    "rating": " 4.18 avg rating — 2,701 ratings"
  },
  {
    "title": "The Path to Love: Spiritual Strategies for Healing",
    "author": "Deepak Chopra",
    "href": "https://www.goodreads.com/book/show/138903.The_Path_to_Love?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=56",
    "rating": " 4.11 avg rating — 2,412 ratings"
  },
  {
    "title": "Reaching Out: The Three Movements of the Spiritual Life",
    "author": "Henri J.M. Nouwen",
    "href": "https://www.goodreads.com/book/show/247526.Reaching_Out?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=57",
    "rating": " 4.25 avg rating — 2,989 ratings"
  },
  {
    "title": "Sensible Shoes: A Story about the Spiritual Journey (Sensible Shoes #1)",
    "author": "Sharon Garlough Brown",
    "href": "https://www.goodreads.com/book/show/16204594-sensible-shoes?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=58",
    "rating": " 4.34 avg rating — 2,794 ratings"
  },
  {
    "title": "My Sisters the Saints: A Spiritual Memoir",
    "author": "Colleen Carroll Campbell",
    "href": "https://www.goodreads.com/book/show/13331168-my-sisters-the-saints?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=59",
    "rating": " 4.32 avg rating — 2,685 ratings"
  },
  {
    "title": "Girls with Swords: Why Women Need to Fight Spiritual Battles",
    "author": "Lisa Bevere",
    "href": "https://www.goodreads.com/book/show/15798065-girls-with-swords?from_search=true&from_srp=true&qid=RKmEu5AVoz&rank=60",
    "rating": " 4.08 avg rating — 1,763 ratings"
  },
  {
    "title": "JavaScript: The Good Parts",
    "author": "Douglas Crockford",
    "href": "https://www.goodreads.com/book/show/2998152-javascript?from_search=true&from_srp=true&qid=xYtSAiYTh0&rank=1",
    "rating": " 4.23 avg rating — 7,833 ratings"
  },
  {
    "title": "Eloquent JavaScript: A Modern Introduction to Programming",
    "author": "Marijn Haverbeke",
    "href": "https://www.goodreads.com/book/show/8910666-eloquent-javascript?from_search=true&from_srp=true&qid=xYtSAiYTh0&rank=2",
    "rating": " 4.14 avg rating — 2,200 ratings"
  },
  {
    "title": "JavaScript and jQuery: Interactive Front-End Web Development",
    "author": "Jon Duckett",
    "href": "https://www.goodreads.com/book/show/16219704-javascript-and-jquery?from_search=true&from_srp=true&qid=xYtSAiYTh0&rank=3",
    "rating": " 4.33 avg rating — 1,329 ratings"
  },
  {
    "title": "JavaScript: The Definitive Guide",
    "author": "David Flanagan",
    "href": "https://www.goodreads.com/book/show/148050.JavaScript?from_search=true&from_srp=true&qid=xYtSAiYTh0&rank=4",
    "rating": " 4.03 avg rating — 2,694 ratings"
  },
  {
    "title": "JavaScript Patterns",
    "author": "Stoyan Stefanov",
    "href": "https://www.goodreads.com/book/show/9422683-javascript-patterns?from_search=true&from_srp=true&qid=xYtSAiYTh0&rank=5",
    "rating": " 4.17 avg rating — 1,554 ratings"
  },
  {
    "title": "Secrets of the JavaScript Ninja",
    "author": "John Resig",
    "href": "https://www.goodreads.com/book/show/4373732-secrets-of-the-javascript-ninja?from_search=true&from_srp=true&qid=xYtSAiYTh0&rank=6",
    "rating": " 4.19 avg rating — 1,145 ratings"
  },
  {
    "title": "A Smarter Way to Learn JavaScript: The new approach that uses technology to cut your effort in half",
    "author": "Mark Myers",
    "href": "https://www.goodreads.com/book/show/19319366-a-smarter-way-to-learn-javascript?from_search=true&from_srp=true&qid=xYtSAiYTh0&rank=7",
    "rating": " 4.08 avg rating — 491 ratings"
  },
  {
    "title": "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
    "author": "David Herman",
    "href": "https://www.goodreads.com/book/show/13705402-effective-javascript?from_search=true&from_srp=true&qid=xYtSAiYTh0&rank=8",
    "rating": " 4.31 avg rating — 749 ratings"
  },
  {
    "title": "High Performance JavaScript",
    "author": "Nicholas C. Zakas",
    "href": "https://www.goodreads.com/book/show/7008656-high-performance-javascript?from_search=true&from_srp=true&qid=xYtSAiYTh0&rank=9",
    "rating": " 4.08 avg rating — 576 ratings"
  },
  {
    "title": "Web Design with Html, Css, JavaScript and Jquery Set",
    "author": "Jon Duckett",
    "href": "https://www.goodreads.com/book/show/20666969-web-design-with-html-css-javascript-and-jquery-set?from_search=true&from_srp=true&qid=xYtSAiYTh0&rank=10",
    "rating": " 4.44 avg rating — 572 ratings"
  },
  {
    "title": "Learning Javascript Design Patterns",
    "author": "Addy Osmani",
    "href": "https://www.goodreads.com/book/show/14289134-learning-javascript-design-patterns?from_search=true&from_srp=true&qid=xYtSAiYTh0&rank=11",
    "rating": " 3.84 avg rating — 452 ratings"
  },
  {
    "title": "The Principles of Object-Oriented JavaScript",
    "author": "Nicholas C. Zakas",
    "href": "https://www.goodreads.com/book/show/20799234-the-principles-of-object-oriented-javascript?from_search=true&from_srp=true&qid=xYtSAiYTh0&rank=12",
    "rating": " 4.35 avg rating — 528 ratings"
  },
  {
    "title": "Functional JavaScript: Introducing Functional Programming with Underscore.js",
    "author": "Michael Fogus",
    "href": "https://www.goodreads.com/book/show/17623632-functional-javascript?from_search=true&from_srp=true&qid=xYtSAiYTh0&rank=13",
    "rating": " 4.05 avg rating — 417 ratings"
  },
  {
    "title": "Learning PHP, MySQL, and JavaScript: A Step-By-Step Guide to Creating Dynamic Websites",
    "author": "Robin Nixon",
    "href": "https://www.goodreads.com/book/show/6755260-learning-php-mysql-and-javascript?from_search=true&from_srp=true&qid=xYtSAiYTh0&rank=14",
    "rating": " 3.86 avg rating — 791 ratings"
  },
  {
    "title": "Learning Web Design: A Beginner's Guide to Html, Css, Javascript, and Web Graphics",
    "author": "Jennifer Niederst Robbins",
    "href": "https://www.goodreads.com/book/show/15808130-learning-web-design?from_search=true&from_srp=true&qid=xYtSAiYTh0&rank=15",
    "rating": " 4.17 avg rating — 367 ratings"
  },
  {
    "title": "Professional JavaScript for Web Developers",
    "author": "Nicholas C. Zakas",
    "href": "https://www.goodreads.com/book/show/135437.Professional_JavaScript_for_Web_Developers?from_search=true&from_srp=true&qid=xYtSAiYTh0&rank=16",
    "rating": " 4.17 avg rating — 597 ratings"
  },
  {
    "title": "If Hemingway Wrote JavaScript",
    "author": "Angus Croll",
    "href": "https://www.goodreads.com/book/show/21487480-if-hemingway-wrote-javascript?from_search=true&from_srp=true&qid=xYtSAiYTh0&rank=17",
    "rating": " 4.14 avg rating — 304 ratings"
  },
  {
    "title": "JavaScript and HTML5 Now",
    "author": "Kyle Simpson",
    "href": "https://www.goodreads.com/book/show/15979777-javascript-and-html5-now?from_search=true&from_srp=true&qid=xYtSAiYTh0&rank=18",
    "rating": " 3.45 avg rating — 441 ratings"
  },
  {
    "title": "Head First JavaScript",
    "author": "Michael Morrison",
    "href": "https://www.goodreads.com/book/show/1760441.Head_First_JavaScript?from_search=true&from_srp=true&qid=xYtSAiYTh0&rank=19",
    "rating": " 3.81 avg rating — 378 ratings"
  },
  {
    "title": "Head First JavaScript Programming",
    "author": "Eric Freeman",
    "href": "https://www.goodreads.com/book/show/17912853-head-first-javascript-programming?from_search=true&from_srp=true&qid=xYtSAiYTh0&rank=20",
    "rating": " 4.25 avg rating — 366 ratings"
  },
  {
    "title": "Mastering Postcss for Web Design",
    "author": "Alex Libby",
    "href": "https://www.goodreads.com/book/show/30962620-mastering-postcss-for-web-design?from_search=true&from_srp=true&qid=ufyTYaaNFk&rank=1",
    "rating": " 2.50 avg rating — 2 ratings"
  },
  {
    "title": "A New Earth: Awakening to Your Life's Purpose",
    "author": "Eckhart Tolle",
    "href": "https://www.goodreads.com/book/show/76334.A_New_Earth?from_search=true&from_srp=true&qid=tQpgKKTjGf&rank=1",
    "rating": " 4.09 avg rating — 148,569 ratings"
  },
  {
    "title": "The Awakening",
    "author": "Kate Chopin",
    "href": "https://www.goodreads.com/book/show/58345.The_Awakening?from_search=true&from_srp=true&qid=tQpgKKTjGf&rank=2",
    "rating": " 3.65 avg rating — 167,309 ratings"
  },
  {
    "title": "The Awakening (Darkest Powers, #2)",
    "author": "Kelley Armstrong",
    "href": "https://www.goodreads.com/book/show/5391115-the-awakening?from_search=true&from_srp=true&qid=tQpgKKTjGf&rank=3",
    "rating": " 4.15 avg rating — 105,003 ratings"
  },
  {
    "title": "The Awakening / The Struggle (The Vampire Diaries, #1-2)",
    "author": "L.J. Smith",
    "href": "https://www.goodreads.com/book/show/395871.The_Awakening_The_Struggle?from_search=true&from_srp=true&qid=tQpgKKTjGf&rank=4",
    "rating": " 3.68 avg rating — 77,671 ratings"
  },
  {
    "title": "Monstress, Vol. 1: Awakening",
    "author": "Marjorie M. Liu",
    "href": "https://www.goodreads.com/book/show/29396738-monstress-vol-1?from_search=true&from_srp=true&qid=tQpgKKTjGf&rank=5",
    "rating": " 3.95 avg rating — 43,432 ratings"
  },
  {
    "title": "The Awakening (The Vampire Diaries, #1)",
    "author": "L.J. Smith",
    "href": "https://www.goodreads.com/book/show/395922.The_Awakening?from_search=true&from_srp=true&qid=tQpgKKTjGf&rank=6",
    "rating": " 3.40 avg rating — 61,689 ratings"
  },
  {
    "title": "Midnight Awakening (Midnight Breed, #3)",
    "author": "Lara Adrian",
    "href": "https://www.goodreads.com/book/show/1388813.Midnight_Awakening?from_search=true&from_srp=true&qid=tQpgKKTjGf&rank=7",
    "rating": " 4.25 avg rating — 39,317 ratings"
  },
  {
    "title": "Skinned (Cold Awakening, #1)",
    "author": "Robin Wasserman",
    "href": "https://www.goodreads.com/book/show/2791536-skinned?from_search=true&from_srp=true&qid=tQpgKKTjGf&rank=8",
    "rating": " 3.54 avg rating — 12,739 ratings"
  },
  {
    "title": "Awakenings",
    "author": "Oliver Sacks",
    "href": "https://www.goodreads.com/book/show/14456.Awakenings?from_search=true&from_srp=true&qid=tQpgKKTjGf&rank=9",
    "rating": " 4.10 avg rating — 10,349 ratings"
  },
  {
    "title": "Awakening the Buddha Within: Eight Steps to Enlightenment",
    "author": "Surya Das",
    "href": "https://www.goodreads.com/book/show/7579.Awakening_the_Buddha_Within?from_search=true&from_srp=true&qid=tQpgKKTjGf&rank=10",
    "rating": " 4.20 avg rating — 12,992 ratings"
  },
  {
    "title": "The Book Whisperer: Awakening the Inner Reader in Every Child",
    "author": "Donalyn Miller",
    "href": "https://www.goodreads.com/book/show/4732276-the-book-whisperer?from_search=true&from_srp=true&qid=tQpgKKTjGf&rank=11",
    "rating": " 4.51 avg rating — 15,050 ratings"
  },
  {
    "title": "Sacred Contracts: Awakening Your Divine Potential",
    "author": "Caroline Myss",
    "href": "https://www.goodreads.com/book/show/190115.Sacred_Contracts?from_search=true&from_srp=true&qid=tQpgKKTjGf&rank=12",
    "rating": "really liked it\n 4.00 avg rating — 14,611 ratings"
  },
  {
    "title": "Daring to Drive: A Saudi Woman's Awakening",
    "author": "Manal Al-Sharif",
    "href": "https://www.goodreads.com/book/show/32620356-daring-to-drive?from_search=true&from_srp=true&qid=tQpgKKTjGf&rank=13",
    "rating": " 4.31 avg rating — 5,351 ratings"
  },
  {
    "title": "The Book of Awakening: Having the Life You Want by Being Present to the Life You Have",
    "author": "Mark Nepo",
    "href": "https://www.goodreads.com/book/show/7581.The_Book_of_Awakening?from_search=true&from_srp=true&qid=tQpgKKTjGf&rank=14",
    "rating": " 4.31 avg rating — 6,748 ratings"
  },
  {
    "title": "Awakening (Infinity Blade, #1)",
    "author": "Brandon Sanderson",
    "href": "https://www.goodreads.com/book/show/12796771-awakening?from_search=true&from_srp=true&qid=tQpgKKTjGf&rank=15",
    "rating": " 3.85 avg rating — 9,526 ratings"
  },
  {
    "title": "The Sickness Unto Death: A Christian Psychological Exposition for Upbuilding and Awakening",
    "author": "Søren Kierkegaard",
    "href": "https://www.goodreads.com/book/show/24972.The_Sickness_Unto_Death?from_search=true&from_srp=true&qid=tQpgKKTjGf&rank=16",
    "rating": " 4.09 avg rating — 8,302 ratings"
  },
  {
    "title": "Buddhism without Beliefs: A Contemporary Guide to Awakening",
    "author": "Stephen Batchelor",
    "href": "https://www.goodreads.com/book/show/90557.Buddhism_without_Beliefs?from_search=true&from_srp=true&qid=tQpgKKTjGf&rank=17",
    "rating": " 4.06 avg rating — 7,208 ratings"
  },
  {
    "title": "The Awakening (The New Heroes/Quantum Prophecy, #1)",
    "author": "Michael Carroll",
    "href": "https://www.goodreads.com/book/show/1312502.The_Awakening?from_search=true&from_srp=true&qid=tQpgKKTjGf&rank=18",
    "rating": " 3.99 avg rating — 4,345 ratings"
  },
  {
    "title": "Awakening (Sweep, #5)",
    "author": "Cate Tiernan",
    "href": "https://www.goodreads.com/book/show/775983.Awakening?from_search=true&from_srp=true&qid=tQpgKKTjGf&rank=19",
    "rating": " 4.16 avg rating — 11,312 ratings"
  },
  {
    "title": "Dawn's Awakening (Breeds, #11; Feline Breeds, #8)",
    "author": "Lora Leigh",
    "href": "https://www.goodreads.com/book/show/1678741.Dawn_s_Awakening?from_search=true&from_srp=true&qid=tQpgKKTjGf&rank=20",
    "rating": " 4.28 avg rating — 10,573 ratings"
  }
]


var options = {
	shouldSort: true,
	matchAllTokens: true,
	findAllMatches: true,
	threshold: 0.6,
	location: 0,
	distance: 100,
	maxPatternLength: 32,
	minMatchCharLength: 1,
	keys: ["title", "author"]
};
var fuse = new Fuse(dataset, options); 

var delayedSearch;
searchEle.addEventListener("input", () => {
	if (delayedSearch) {
		clearTimeout(delayedSearch);
	}
	delayedSearch = setTimeout(doSearch, 300);
});

doSearch();