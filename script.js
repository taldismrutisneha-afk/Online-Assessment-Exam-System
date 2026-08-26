console.log("Online Quiz System is working!");

const startBtn = document.getElementById("startBtn");


const participantNameInput =
    document.getElementById("participantName");

let participantName = "";

const categoryButtons =
    document.querySelectorAll(".category-btn");

let selectedCategory = null;

let quizQuestions = [];

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");

const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("question");
const optionsContainer = document.getElementById("options");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const skipBtn = document.getElementById("skipBtn");

const resultScreen = document.getElementById("resultScreen");

const finalScore = document.getElementById("finalScore");
const correctAnswers = document.getElementById("correctAnswers");
const wrongAnswers = document.getElementById("wrongAnswers");

const unansweredAnswers =
    document.getElementById("unansweredAnswers");

    const summaryTotal =
    document.getElementById("summaryTotal");

const summaryAttempted =
    document.getElementById("summaryAttempted");

const summaryCorrect =
    document.getElementById("summaryCorrect");

const summaryWrong =
    document.getElementById("summaryWrong");

const summaryUnanswered =
    document.getElementById("summaryUnanswered");

    const resultCategory =
    document.getElementById("resultCategory");

    const performanceMessage =
    document.getElementById("performanceMessage");

    const answerStatus =
    document.getElementById("answerStatus");

    const questionPalette =
    document.getElementById("questionPalette");

const percentage = document.getElementById("percentage");

const restartBtn = document.getElementById("restartBtn");

const timerElement = document.getElementById("timer");

const categoryTitle =
    document.getElementById("categoryTitle");

    const progressBar =
    document.getElementById("progressBar");

    const leaderboardBtn =
    document.getElementById("leaderboardBtn");

const leaderboardScreen =
    document.getElementById("leaderboardScreen");

const backToResultBtn =
    document.getElementById("backToResultBtn");

    const clearLeaderboardBtn =
    document.getElementById("clearLeaderboardBtn");

    leaderboardBtn.addEventListener("click", function () {

    resultScreen.style.display = "none";

    leaderboardScreen.style.display = "block";

    displayLeaderboard();

});

function displayLeaderboard() {

    const leaderboardList =
        document.getElementById("leaderboardList");

    leaderboardList.innerHTML = "";

    const leaderboard =
        JSON.parse(localStorage.getItem("leaderboard")) || [];

    if (leaderboard.length === 0) {

        leaderboardList.innerHTML =
            "<p>No scores available yet.</p>";

        return;
    }

    leaderboard.sort(function (a, b) {

    if (b.score !== a.score) {
        return b.score - a.score;
    }

    return b.percentage - a.percentage;

});

    leaderboard.forEach(function (result, index) {

        const item =
            document.createElement("div");

        item.classList.add("leaderboard-item");

        item.innerHTML = `
    <span class="leaderboard-rank">
        ${
            index === 0
                ? "🥇"
                : index === 1
                ? "🥈"
                : index === 2
                ? "🥉"
                : `#${index + 1}`
        }
    </span>

    <span class="leaderboard-category">
        <strong>${result.name}</strong>
        <br>
        ${result.category}
    </span>

    <span class="leaderboard-score">
        ${result.score}/${result.total}
        • ${result.percentage}%
    </span>

    <span class="leaderboard-date-time">
    📅 ${result.date || "Date not available"}
    ${result.time ? `<br>🕐 ${result.time}` : ""}
</span>
`;

        leaderboardList.appendChild(item);

    });
}

clearLeaderboardBtn.addEventListener("click", function () {

    const confirmClear =
        confirm("Are you sure you want to clear the leaderboard?");

    if (!confirmClear) {
        return;
    }

    localStorage.removeItem("leaderboard");

    displayLeaderboard();

});

backToResultBtn.addEventListener("click", function () {

    leaderboardScreen.style.display = "none";

    resultScreen.style.display = "block";

});

let timeLeft = 600;

let timerInterval;


const questions = [

    // ==================== HTML ====================

    
{
    category: "HTML",
    question: "Which attribute is used to provide an accessible name for an element?",
    options: ["name", "aria-label", "label", "access-name"],
    answer: 1
},
{
    category: "HTML",
    question: "What is the purpose of the defer attribute?",
    options: [
        "Stops script execution",
        "Executes script before HTML parsing",
        "Downloads script in parallel and executes after parsing",
        "Downloads script only after all images load"
    ],
    answer: 2
},
{
    category: "HTML",
    question: "Which element represents independent, reusable content?",
    options: ["<section>", "<article>", "<main>", "<aside>"],
    answer: 1
},
{
    category: "HTML",
    question: "Which input type provides built-in email validation?",
    options: ["text", "mail", "email", "validate-email"],
    answer: 2
},
{
    category: "HTML",
    question: "What does rel=\"noopener\" primarily prevent?",
    options: ["XSS", "Reverse tabnabbing", "SQL injection", "CSRF"],
    answer: 1
},
{
    category: "HTML",
    question: "Which element should normally contain the primary content of a page?",
    options: ["<body>", "<main>", "<section>", "<content>"],
    answer: 1
},
{
    category: "HTML",
    question: "What does the novalidate attribute on a <form> do?",
    options: [
        "Disables form submission",
        "Disables browser's built-in validation",
        "Removes form data",
        "Prevents JavaScript validation"
    ],
    answer: 1
},
{
    category: "HTML",
    question: "Which attribute connects a <label> to an <input>?",
    options: ["name", "target", "for", "bind"],
    answer: 2
},
{
    category: "HTML",
    question: "Which element is used for scalable vector graphics?",
    options: ["<canvas>", "<vector>", "<svg>", "<graphic>"],
    answer: 2
},
{
    category: "HTML",
    question: "Which statement about <canvas> is correct?",
    options: [
        "It creates DOM elements for every shape",
        "It is primarily bitmap-based drawing",
        "It only supports SVG",
        "It cannot use JavaScript"
    ],
    answer: 1
},
{
    category: "HTML",
    question: "What is the purpose of the srcset attribute?",
    options: [
        "SEO optimization",
        "Responsive image selection",
        "CSS loading",
        "JavaScript loading"
    ],
    answer: 1
},
{
    category: "HTML",
    question: "Which element provides a caption for <figure>?",
    options: ["<caption>", "<figcaption>", "<description>", "<legend>"],
    answer: 1
},
{
    category: "HTML",
    question: "What does autocomplete=\"off\" generally request?",
    options: [
        "Disable browser autocomplete",
        "Disable validation",
        "Disable form submission",
        "Disable cookies"
    ],
    answer: 0
},
{
    category: "HTML",
    question: "Which HTML element is semantically best for navigation links?",
    options: ["<links>", "<navigation>", "<nav>", "<menu-bar>"],
    answer: 2
},
{
    category: "HTML",
    question: "What is the purpose of the <meta name=\"viewport\"> tag?",
    options: [
        "SEO",
        "Responsive viewport configuration",
        "JavaScript execution",
        "Browser caching"
    ],
    answer: 1
},
{
    category: "HTML",
    question: "Which attribute makes an element editable?",
    options: ["editable", "contenteditable", "modify", "edit"],
    answer: 1
},
{
    category: "HTML",
    question: "Which is NOT a valid HTML heading element?",
    options: ["<h1>", "<h4>", "<h6>", "<h7>"],
    answer: 3
},
{
    category: "HTML",
    question: "Which element is best for a machine-readable date/time?",
    options: ["<date>", "<time>", "<datetime>", "<calendar>"],
    answer: 1
},
{
    category: "HTML",
    question: "What does the hidden attribute do?",
    options: [
        "Encrypts content",
        "Makes content inaccessible permanently",
        "Indicates that content is not currently relevant/displayed",
        "Deletes content"
    ],
    answer: 2
},
{
    category: "HTML",
    question: "Which API is commonly used to store key-value data persistently in the browser?",
    options: ["sessionStorage", "localStorage", "cookieStorage", "browserDB"],
    answer: 1
},
{
    category: "HTML",
    question: "Which attribute specifies that an input field must be filled before submitting a form?",
    options: [
        "required",
        "validate",
        "mandatory",
        "must"
    ],
    answer: 0
},

{
    category: "HTML",
    question: "Which HTML element is used to embed another webpage?",
    options: [
        "<embed>",
        "<iframe>",
        "<framepage>",
        "<web>"
    ],
    answer: 1
},

{
    category: "HTML",
    question: "Which attribute is used to specify the URL of a hyperlink?",
    options: [
        "src",
        "link",
        "href",
        "url"
    ],
    answer: 2
},

{
    category: "HTML",
    question: "Which element is used to create an ordered list?",
    options: [
        "<ul>",
        "<list>",
        "<ol>",
        "<order>"
    ],
    answer: 2
},

{
    category: "HTML",
    question: "Which HTML element is used to define a table row?",
    options: [
        "<td>",
        "<tr>",
        "<th>",
        "<row>"
    ],
    answer: 1
},




    // ==================== CSS ====================

    {
    category: "CSS",
    question: "Which selector has the highest specificity?",
    options: [".box", "#box", "div.box", "div"],
    answer: 1
},
{
    category: "CSS",
    question: "What does box-sizing: border-box do?",
    options: [
        "Excludes padding from width",
        "Includes padding and border in declared width/height",
        "Includes only border",
        "Removes the box model"
    ],
    answer: 1
},
{
    category: "CSS",
    question: "What does position: absolute position relative to?",
    options: [
        "Always viewport",
        "Nearest positioned ancestor",
        "<body> only",
        "Nearest sibling"
    ],
    answer: 1
},
{
    category: "CSS",
    question: "What does position: fixed generally position relative to?",
    options: [
        "Parent element",
        "Nearest flex container",
        "Viewport",
        "<html> only"
    ],
    answer: 2
},
{
    category: "CSS",
    question: "Which creates a CSS Grid container?",
    options: [
        "display: grid",
        "grid: true",
        "position: grid",
        "layout: grid"
    ],
    answer: 0
},
{
    category: "CSS",
    question: "What does 1fr 2fr mean in Grid?",
    options: [
        "1px and 2px",
        "Equal columns",
        "Available space divided into 1:2 fractions",
        "Fixed 1rem and 2rem"
    ],
    answer: 2
},
{
    category: "CSS",
    question: "Which property controls the stacking order?",
    options: [
        "stack",
        "layer",
        "z-index",
        "depth"
    ],
    answer: 2
},
{
    category: "CSS",
    question: "Which can create a new stacking context?",
    options: [
        "opacity: 0.5",
        "margin: 10px",
        "display: block",
        "padding: 10px"
    ],
    answer: 0
},
{
    category: "CSS",
    question: "What does overflow: hidden do?",
    options: [
        "Deletes overflowing content",
        "Clips overflowing content",
        "Expands container",
        "Creates scrolling automatically"
    ],
    answer: 1
},
{
    category: "CSS",
    question: "Which unit is relative to the root font size?",
    options: [
        "em",
        "rem",
        "%",
        "vh"
    ],
    answer: 1
},
{
    category: "CSS",
    question: "Which unit is relative to viewport width?",
    options: [
        "vw",
        "vh",
        "vmin only",
        "rem"
    ],
    answer: 0
},
{
    category: "CSS",
    question: "What does flex: 1 commonly represent?",
    options: [
        "flex-grow: 1; flex-shrink: 1; flex-basis: 0%",
        "flex-grow: 0",
        "flex-basis: 1px",
        "flex-direction: 1"
    ],
    answer: 0
},
{
    category: "CSS",
    question: "Which property changes the main axis of Flexbox?",
    options: [
        "flex-axis",
        "flex-direction",
        "justify-axis",
        "main-axis"
    ],
    answer: 1
},
{
    category: "CSS",
    question: "In Flexbox, justify-content controls alignment along the:",
    options: [
        "Cross axis",
        "Main axis",
        "Z-axis",
        "Text baseline only"
    ],
    answer: 1
},
{
    category: "CSS",
    question: "In Flexbox, align-items normally controls:",
    options: [
        "Main-axis alignment",
        "Cross-axis alignment",
        "Font alignment",
        "Grid alignment"
    ],
    answer: 1
},
{
    category: "CSS",
    question: "Which pseudo-class selects an element when the mouse pointer is over it?",
    options: [
        "::hover",
        ":hover",
        ":mouse",
        "::mouse"
    ],
    answer: 1
},
{
    category: "CSS",
    question: "Which pseudo-element inserts content before an element's content?",
    options: [
        ":before only",
        "::before",
        "::start",
        ":prepend"
    ],
    answer: 1
},
{
    category: "CSS",
    question: "What does calc() allow?",
    options: [
        "JavaScript execution",
        "CSS mathematical expressions",
        "HTML calculation",
        "Database queries"
    ],
    answer: 1
},
{
    category: "CSS",
    question: "Which property defines custom CSS variables?",
    options: [
        "--variable",
        "$variable",
        "@variable",
        "var-variable"
    ],
    answer: 0
},
{
    category: "CSS",
    question: "How do you access a CSS custom property?",
    options: [
        "value(--name)",
        "get(--name)",
        "var(--name)",
        "css(--name)"
    ],
    answer: 2
},

{
    category: "CSS",
    question: "Which property is used to control the space between lines of text?",
    options: [
        "letter-spacing",
        "line-height",
        "word-spacing",
        "text-spacing"
    ],
    answer: 1
},

{
    category: "CSS",
    question: "Which CSS property is used to make an element transparent?",
    options: [
        "visibility",
        "transparent",
        "opacity",
        "alpha"
    ],
    answer: 2
},

{
    category: "CSS",
    question: "Which property is used to change the order of flex items?",
    options: [
        "order",
        "flex-order",
        "item-order",
        "position-order"
    ],
    answer: 0
},

{
    category: "CSS",
    question: "Which CSS function is commonly used to create a color with transparency?",
    options: [
        "rgb()",
        "rgba()",
        "color-alpha()",
        "transparent()"
    ],
    answer: 1
},

{
    category: "CSS",
    question: "Which media query feature is commonly used to detect screen width?",
    options: [
        "screen-width",
        "width",
        "max-width",
        "device-size"
    ],
    answer: 2
},


    // ==================== JavaScript ====================

    
{
    category: "JavaScript",
    question: "What is the output?\nconsole.log(typeof null);",
    options: ['"null"', '"undefined"', '"object"', '"empty"'],
    answer: 2
},
{
    category: "JavaScript",
    question: 'What is the output?\nconsole.log(2 + "2" - 1);',
    options: ['"21"', "21", '"221"', "NaN"],
    answer: 1
},
{
    category: "JavaScript",
    question: "Which keyword creates a block-scoped variable?",
    options: ["var", "let", "global", "define"],
    answer: 1
},
{
    category: "JavaScript",
    question: "What happens when accessing a let variable before declaration?",
    options: ["undefined", "null", "ReferenceError", "0"],
    answer: 2
},
{
    category: "JavaScript",
    question: "What is a closure?",
    options: [
        "A function that cannot return",
        "A function remembering variables from its lexical scope",
        "A function without arguments",
        "A private class"
    ],
    answer: 1
},
{
    category: "JavaScript",
    question: "Which method creates a new array by transforming each element?",
    options: ["filter()", "map()", "reduce()", "forEach()"],
    answer: 1
},
{
    category: "JavaScript",
    question: "Which method returns only elements satisfying a condition?",
    options: ["map()", "filter()", "reduce()", "findAll()"],
    answer: 1
},
{
    category: "JavaScript",
    question: "Which method can reduce an array to a single value?",
    options: ["map()", "reduce()", "filter()", "joinAll()"],
    answer: 1
},
{
    category: "JavaScript",
    question: "What does === check?",
    options: [
        "Value only",
        "Type only",
        "Value and type without coercion",
        "Memory address only"
    ],
    answer: 2
},
{
    category: "JavaScript",
    question: "What is the output?\nconsole.log([] == false);",
    options: ["true", "false", "undefined", "Error"],
    answer: 0
},
{
    category: "JavaScript",
    question: "What is the output?\nlet x = 10;\nfunction test() {\n    console.log(x);\n    let x = 20;\n}\ntest();",
    options: ["10", "20", "undefined", "ReferenceError"],
    answer: 3
},
{
    category: "JavaScript",
    question: "Which Promise method rejects when any Promise rejects?",
    options: [
        "Promise.all()",
        "Promise.race()",
        "Promise.any()",
        "Promise.resolve()"
    ],
    answer: 0
},
{
    category: "JavaScript",
    question: "Which Promise method fulfills as soon as any Promise fulfills?",
    options: [
        "Promise.all()",
        "Promise.any()",
        "Promise.race()",
        "Promise.first()"
    ],
    answer: 1
},
{
    category: "JavaScript",
    question: "What does async make a function return?",
    options: ["Array", "Generator", "Promise", "Callback"],
    answer: 2
},
{
    category: "JavaScript",
    question: "What does await do inside an async function?",
    options: [
        "Stops the browser",
        "Waits for a Promise to settle before continuing that async function",
        "Converts Promise to callback",
        "Creates a new thread"
    ],
    answer: 1
},
{
    category: "JavaScript",
    question: "What is event delegation?",
    options: [
        "Adding event listeners to every child",
        "Handling child events through an ancestor using bubbling",
        "Disabling events",
        "Creating custom HTML events only"
    ],
    answer: 1
},
{
    category: "JavaScript",
    question: "Which event phase occurs first?",
    options: ["Bubbling", "Target", "Capturing", "Default"],
    answer: 2
},
{
    category: "JavaScript",
    question: "What does Object.freeze() do?",
    options: [
        "Deletes an object",
        "Prevents modifications to the object's own properties",
        "Makes object private",
        "Converts object to JSON"
    ],
    answer: 1
},
{
    category: "JavaScript",
    question: "What does the spread operator ... commonly do with an array?",
    options: [
        "Compresses it",
        "Expands/iterates its elements in an appropriate context",
        "Sorts it",
        "Deletes duplicates automatically"
    ],
    answer: 1
},
{
    category: "JavaScript",
    question: "Which statement is true about arrow functions?",
    options: [
        "They have their own dynamic this",
        "They inherit this lexically",
        "They cannot return values",
        "They cannot accept parameters"
    ],
    answer: 1
},

{
    category: "JavaScript",
    question: "Which method adds one or more elements to the end of an array?",
    options: [
        "push()",
        "pop()",
        "shift()",
        "append()"
    ],
    answer: 0
},

{
    category: "JavaScript",
    question: "Which method removes the last element from an array?",
    options: [
        "remove()",
        "delete()",
        "pop()",
        "last()"
    ],
    answer: 2
},

{
    category: "JavaScript",
    question: "Which keyword is used to declare a constant variable?",
    options: [
        "var",
        "let",
        "const",
        "constant"
    ],
    answer: 2
},

{
    category: "JavaScript",
    question: "Which method converts a JSON string into a JavaScript object?",
    options: [
        "JSON.parse()",
        "JSON.stringify()",
        "JSON.convert()",
        "JSON.object()"
    ],
    answer: 0
},

{
    category: "JavaScript",
    question: "Which operator is used for logical AND?",
    options: [
        "||",
        "&&",
        "!",
        "??"
    ],
    answer: 1
},




    // ==================== Python ====================

    
{
    category: "Python",
    question: "What is the output?\nx = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)",
    options: [
        "[1, 2, 3]",
        "[1, 2, 3, 4]",
        "[4]",
        "Error"
    ],
    answer: 1
},
{
    category: "Python",
    question: "What is the output?\nprint(bool([]), bool([0]))",
    options: [
        "True True",
        "False False",
        "False True",
        "True False"
    ],
    answer: 2
},
{
    category: "Python",
    question: "Which Python type is immutable?",
    options: [
        "List",
        "Dictionary",
        "Set",
        "Tuple"
    ],
    answer: 3
},
{
    category: "Python",
    question: "Which is used to create an anonymous function?",
    options: [
        "anonymous",
        "lambda",
        "func",
        "inline"
    ],
    answer: 1
},
{
    category: "Python",
    question: "What does *args collect?",
    options: [
        "Keyword arguments",
        "Positional arguments",
        "Exceptions",
        "Classes"
    ],
    answer: 1
},
{
    category: "Python",
    question: "What does **kwargs collect?",
    options: [
        "Positional arguments",
        "Keyword arguments",
        "Lists",
        "Tuples"
    ],
    answer: 1
},
{
    category: "Python",
    question: "What is the output?\nprint(10 // 3)",
    options: [
        "3.33",
        "3",
        "4",
        "1"
    ],
    answer: 1
},
{
    category: "Python",
    question: "What does is compare?",
    options: [
        "Values",
        "Object identity",
        "Strings only",
        "Types only"
    ],
    answer: 1
},
{
    category: "Python",
    question: "What does == compare?",
    options: [
        "Identity",
        "Equality/value",
        "Memory address",
        "Variable name"
    ],
    answer: 1
},
{
    category: "Python",
    question: "Which data structure stores unique elements?",
    options: [
        "List",
        "Tuple",
        "Set",
        "String"
    ],
    answer: 2
},
{
    category: "Python",
    question: "What is list comprehension?",
    options: [
        "A way to create lists using an expression and iteration/condition",
        "A way to delete lists",
        "A type of inheritance",
        "A database query"
    ],
    answer: 0
},
{
    category: "Python",
    question: "What does yield create/use?",
    options: [
        "Exception",
        "Generator behavior",
        "Class",
        "Package"
    ],
    answer: 1
},
{
    category: "Python",
    question: "Which keyword handles exceptions?",
    options: [
        "catch",
        "except",
        "error",
        "handle"
    ],
    answer: 1
},
{
    category: "Python",
    question: "What does finally do?",
    options: [
        "Runs only when there is an exception",
        "Normally executes whether or not an exception occurs",
        "Stops execution",
        "Creates an exception"
    ],
    answer: 1
},
{
    category: "Python",
    question: "Which is generally true about Python dictionaries?",
    options: [
        "Keys must be hashable",
        "Keys must be lists",
        "Values must be unique",
        "Keys cannot be strings"
    ],
    answer: 0
},
{
    category: "Python",
    question: "What is the output?\na = [1, 2, 3]\nprint(a[::-1])",
    options: [
        "[1, 2, 3]",
        "[3, 2, 1]",
        "[2, 1, 3]",
        "Error"
    ],
    answer: 1
},
{
    category: "Python",
    question: "What does @staticmethod do?",
    options: [
        "Automatically passes self",
        "Defines a method that does not receive implicit instance/class reference",
        "Makes method private",
        "Creates inheritance"
    ],
    answer: 1
},
{
    category: "Python",
    question: "What does @classmethod receive automatically?",
    options: [
        "self",
        "cls",
        "this",
        "object"
    ],
    answer: 1
},
{
    category: "Python",
    question: "What is duck typing?",
    options: [
        "Checking exact class names only",
        "Focusing on whether an object supports the required behavior/methods",
        "Converting objects to dictionaries",
        "Comparing object memory addresses"
    ],
    answer: 1
},
{
    category: "Python",
    question: "What is the GIL in CPython?",
    options: [
        "Global Import Library",
        "Global Interpreter Lock",
        "General Inheritance Layer",
        "Graphical Interface Layer"
    ],
    answer: 1
},

{
    category: "Python",
    question: "Which keyword is used to define a function in Python?",
    options: [
        "function",
        "define",
        "def",
        "func"
    ],
    answer: 2
},

{
    category: "Python",
    question: "Which method adds an item to the end of a Python list?",
    options: [
        "add()",
        "append()",
        "insertEnd()",
        "push()"
    ],
    answer: 1
},

{
    category: "Python",
    question: "Which keyword is used to create a class in Python?",
    options: [
        "object",
        "class",
        "struct",
        "define"
    ],
    answer: 1
},

{
    category: "Python",
    question: "Which built-in function returns the length of an object?",
    options: [
        "size()",
        "length()",
        "len()",
        "count()"
    ],
    answer: 2
},

{
    category: "Python",
    question: "Which keyword is used to import a module?",
    options: [
        "include",
        "using",
        "import",
        "require"
    ],
    answer: 2
},


// ==================== OOPs ====================


{
    category: "OOPS",
    question: "Which OOP principle hides implementation details?",
    options: [
        "Inheritance",
        "Encapsulation",
        "Polymorphism",
        "Composition"
    ],
    answer: 1
},
{
    category: "OOPS",
    question: "Which OOP principle allows one interface to have different implementations?",
    options: [
        "Abstraction",
        "Polymorphism",
        "Encapsulation",
        "Aggregation"
    ],
    answer: 1
},
{
    category: "OOPS",
    question: "What is inheritance?",
    options: [
        "Creating multiple objects",
        "Deriving a class from another class",
        "Hiding variables",
        "Creating functions"
    ],
    answer: 1
},
{
    category: "OOPS",
    question: "What is abstraction?",
    options: [
        "Showing all implementation details",
        "Hiding unnecessary implementation details and exposing essential behavior",
        "Copying objects",
        "Deleting methods"
    ],
    answer: 1
},
{
    category: "OOPS",
    question: "What is method overriding?",
    options: [
        "Same method name in child class providing a different implementation",
        "Creating two variables",
        "Deleting parent methods",
        "Calling a method twice"
    ],
    answer: 0
},
{
    category: "OOPS",
    question: "What is method overloading?",
    options: [
        "Same method name with different parameter signatures, where the language supports it directly",
        "Inheriting a class",
        "Hiding methods",
        "Overriding variables"
    ],
    answer: 0
},
{
    category: "OOPS",
    question: 'Which relationship represents "is-a"?',
    options: [
        "Composition",
        "Aggregation",
        "Inheritance",
        "Association"
    ],
    answer: 2
},
{
    category: "OOPS",
    question: 'Which relationship represents strong "has-a" ownership?',
    options: [
        "Composition",
        "Inheritance",
        "Polymorphism",
        "Overloading"
    ],
    answer: 0
},
{
    category: "OOPS",
    question: 'Which relationship generally represents a weaker "has-a" relationship?',
    options: [
        "Aggregation",
        "Inheritance",
        "Encapsulation",
        "Abstraction"
    ],
    answer: 0
},
{
    category: "OOPS",
    question: "What is a constructor?",
    options: [
        "Method used to initialize an object",
        "Method used only to destroy objects",
        "Private variable",
        "Interface"
    ],
    answer: 0
},
{
    category: "OOPS",
    question: "What is an object?",
    options: [
        "Blueprint of a class",
        "Instance of a class",
        "Method of a class",
        "Package"
    ],
    answer: 1
},
{
    category: "OOPS",
    question: "What is a class?",
    options: [
        "Instance only",
        "Blueprint/template for objects",
        "Database",
        "Compiler"
    ],
    answer: 1
},
{
    category: "OOPS",
    question: "What does super commonly provide?",
    options: [
        "Access to parent-class functionality",
        "Access to private variables only",
        "Object deletion",
        "Static memory"
    ],
    answer: 0
},
{
    category: "OOPS",
    question: "What is dynamic polymorphism commonly associated with?",
    options: [
        "Runtime method overriding",
        "Compile-time constants",
        "Variable declaration",
        "Constructor creation"
    ],
    answer: 0
},
{
    category: "OOPS",
    question: "What is an interface primarily used for?",
    options: [
        "Defining a contract that implementing classes follow",
        "Storing database data",
        "Creating variables only",
        "Memory management"
    ],
    answer: 0
},
{
    category: "OOPS",
    question: "What is coupling?",
    options: [
        "Degree of dependency between modules/classes",
        "Number of methods in a class",
        "Number of objects",
        "Number of constructors"
    ],
    answer: 0
},
{
    category: "OOPS",
    question: "What is cohesion?",
    options: [
        "How closely related the responsibilities of a module/class are",
        "Number of classes in a project",
        "Dependency between modules",
        "Number of objects"
    ],
    answer: 0
},
{
    category: "OOPS",
    question: "Which design generally improves maintainability?",
    options: [
        "High coupling, low cohesion",
        "Low coupling, high cohesion",
        "High coupling, high cohesion only",
        "Low coupling, low cohesion"
    ],
    answer: 1
},
{
    category: "OOPS",
    question: "What is the Single Responsibility Principle?",
    options: [
        "A class should have one reason to change",
        "A class must contain one method",
        "A program must have one class",
        "An object can have only one property"
    ],
    answer: 0
},
{
    category: "OOPS",
    question: "Which SOLID principle says high-level modules should not depend directly on low level implementation details?",
    options: [
        "SRP",
        "OCP",
        "LSP",
        "DIP"
    ],
    answer: 3
},

{
    category: "OOPS",
    question: "Which OOP concept allows an object to take different forms?",
    options: [
        "Encapsulation",
        "Inheritance",
        "Polymorphism",
        "Abstraction"
    ],
    answer: 2
},

{
    category: "OOPS",
    question: "Which concept combines data and methods into a single unit?",
    options: [
        "Encapsulation",
        "Inheritance",
        "Polymorphism",
        "Compilation"
    ],
    answer: 0
},

{
    category: "OOPS",
    question: "Which concept allows a child class to acquire properties and methods of a parent class?",
    options: [
        "Abstraction",
        "Inheritance",
        "Encapsulation",
        "Composition"
    ],
    answer: 1
},

{
    category: "OOPS",
    question: "Which concept focuses on exposing only essential features and hiding implementation details?",
    options: [
        "Inheritance",
        "Polymorphism",
        "Abstraction",
        "Coupling"
    ],
    answer: 2
},

{
    category: "OOPS",
    question: "Which term describes creating an object from a class?",
    options: [
        "Instantiation",
        "Inheritance",
        "Overriding",
        "Abstraction"
    ],
    answer: 0
}



];


let currentQuestion = 0;

let userAnswers = [];
let score = 0;

let replacementQuestions = [];
let replacementIndex = 0;


// Start Quiz
startBtn.addEventListener("click", function () {

    participantName =
    participantNameInput.value.trim();

if (participantName === "") {

    alert("Please enter participant name.");

    participantNameInput.focus();

    return;
}

    // Filter questions according to selected category
    const categoryQuestions = questions.filter(function (question) {
    return question.category === selectedCategory;
});

// First 20 questions = actual quiz
quizQuestions = categoryQuestions.slice(0, 20);

// Remaining questions = replacement pool
replacementQuestions = categoryQuestions.slice(20);

replacementIndex = 0;

    categoryTitle.textContent =
    `${selectedCategory} Quiz`;


    // Reset quiz
    currentQuestion = 0;
    userAnswers = [];
    score = 0;


    // Hide start screen
    startScreen.style.display = "none";


    // Show quiz screen
    quizScreen.style.display = "block";


    // Show first question
    showQuestion();


    // Start timer
    startTimer();

});


// Show Question
function showQuestion() {

    const q = quizQuestions[currentQuestion];

    if (userAnswers[currentQuestion] === undefined) {

    answerStatus.textContent = "○ Not Answered";

} else {

    answerStatus.textContent = "✓ Answered";

}

    const progress =
    ((currentQuestion + 1) / quizQuestions.length) * 100;

progressBar.style.width = `${progress}%`;

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${quizQuestions.length}`;

    questionText.textContent = q.question;

    optionsContainer.innerHTML = "";


    // Create options
    q.options.forEach(function (option, index) {

        const button = document.createElement("button");

        button.classList.add("option");

        button.textContent = option;


        // When user clicks an option
        button.addEventListener("click", function () {

            const allOptions =
                document.querySelectorAll(".option");


            // Save selected answer
            userAnswers[currentQuestion] = index;

            // Highlight selected answer
allOptions.forEach(function (btn) {
    btn.classList.remove("selected");
});

button.classList.add("selected");


            // Disable all options
            allOptions.forEach(function (btn) {

                btn.disabled = true;

            });


            // Check answer
            if (index === q.answer) {

    button.classList.add("correct");

} else {

    button.classList.add("wrong");

}

        });


        optionsContainer.appendChild(button);

    });


    // Restore previously selected answer
    if (userAnswers[currentQuestion] !== undefined) {

        const selectedIndex =
            userAnswers[currentQuestion];

        const allOptions =
            document.querySelectorAll(".option");


        // Disable all options
        allOptions.forEach(function (btn) {

            btn.disabled = true;

        });


        // Show selected answer
if (selectedIndex === q.answer) {

    allOptions[selectedIndex]
        .classList.add("correct");

} else {

    allOptions[selectedIndex]
        .classList.add("wrong");

}

// Restore selected highlight
allOptions[selectedIndex]
    .classList.add("selected");

}


    // Previous button
    prevBtn.disabled = currentQuestion === 0;

    // Skip button
skipBtn.disabled =
    userAnswers[currentQuestion] !== undefined;


    // Last question
    if (currentQuestion === quizQuestions.length - 1) {

        nextBtn.textContent = "Finish";

    } else {

        nextBtn.textContent = "Next";

    }

    // Update question palette
questionPalette.innerHTML = "";

quizQuestions.forEach(function (question, index) {

    const button =
        document.createElement("button");

    button.classList.add("question-number");

    button.textContent = index + 1;

    // Current question
    if (index === currentQuestion) {
        button.classList.add("current");
    }

    // Answered question
    if (userAnswers[index] !== undefined) {
        button.classList.add("answered");
    }

    // Jump to question
    button.addEventListener("click", function () {

        currentQuestion = index;

        showQuestion();

    });

    questionPalette.appendChild(button);

});

    // Create question palette
questionPalette.innerHTML = "";

quizQuestions.forEach(function (question, index) {

    const button =
        document.createElement("button");

    button.classList.add("question-number");

    button.textContent = index + 1;


    // Current question
    if (index === currentQuestion) {

        button.classList.add("current");

    }


    // Answered question
    if (userAnswers[index] !== undefined) {

        button.classList.add("answered");

    }


    // Jump to question
    button.addEventListener("click", function () {

        currentQuestion = index;

        showQuestion();

    });


    questionPalette.appendChild(button);

});

}


// Next Button
nextBtn.addEventListener("click", function () {

    if (currentQuestion < quizQuestions.length - 1) {

        currentQuestion++;

        showQuestion();

    } else {

        calculateScore();

    }

});

// Skip Button
skipBtn.addEventListener("click", function () {

    // Agar replacement question available nahi hai
    if (replacementIndex >= replacementQuestions.length) {
        alert("No more replacement questions available.");
        return;
    }

    // Current question ka answer remove karo
    userAnswers[currentQuestion] = undefined;

    // Replacement question current position par lagao
    quizQuestions[currentQuestion] =
        replacementQuestions[replacementIndex];

    replacementIndex++;

    // New question show karo
    showQuestion();
});

// Previous Button
prevBtn.addEventListener("click", function () {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

    }

});

function calculateScore() {

    clearInterval(timerInterval);

    score = 0;

    quizQuestions.forEach(function (question, index) {

        if (userAnswers[index] === question.answer) {

            score++;

        }

    });


    const totalQuestions = quizQuestions.length;

    const answered =
    userAnswers.filter(function (answer) {
        return answer !== undefined;
    }).length;

const unanswered =
    totalQuestions - answered;

const wrong =
    answered - score;

    summaryTotal.textContent =
    totalQuestions;

summaryAttempted.textContent =
    answered;

summaryCorrect.textContent =
    score;

summaryWrong.textContent =
    wrong;

summaryUnanswered.textContent =
    unanswered;

    const percentageValue =
        Math.round((score / totalQuestions) * 100);

        if (percentageValue === 100) {

    performanceMessage.textContent =
        "🏆 100% — Excellent Performance!";

} else if (percentageValue >= 80) {

    performanceMessage.textContent =
        "✅ PASS! You scored 80% or above.";

} else {

    performanceMessage.textContent =
        "❌ FAIL! You need at least 80% to pass.";

}

        const now = new Date();

const formattedDate = now.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
});

const formattedTime = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
});

const newResult = {
    name: participantName,
    category: selectedCategory,
    score: score,
    total: totalQuestions,
    percentage: percentageValue,
    date: formattedDate,
    time: formattedTime
};

let leaderboard =
    JSON.parse(localStorage.getItem("leaderboard")) || [];

leaderboard.push(newResult);

leaderboard.sort(function (a, b) {

    // First compare score
    if (b.score !== a.score) {
        return b.score - a.score;
    }

    // If score is same, compare percentage
    return b.percentage - a.percentage;

});

localStorage.setItem(
    "leaderboard",
    JSON.stringify(leaderboard)
);

localStorage.setItem(
    "quizResult",
    JSON.stringify(newResult)
);


    // Show result values
    finalScore.textContent =
        `${score} / ${totalQuestions}`;

        resultCategory.textContent =
    `Category: ${selectedCategory}`;

    correctAnswers.textContent =
        score;

    wrongAnswers.textContent =
        wrong;

        unansweredAnswers.textContent =
    unanswered;

    percentage.textContent =
        `${percentageValue}%`;


    // Hide quiz
    quizScreen.style.display = "none";

    // Show result
    resultScreen.style.display = "block";

}

restartBtn.addEventListener("click", function () {

    // Reset question
    currentQuestion = 0;

    // Reset answers
    userAnswers = [];

    // Reset score
    score = 0;
    // Reset replacement questions
replacementIndex = 0;



    // Reset timer
    clearInterval(timer);

    timeLeft = 600;

    // Reset timer display
    timerElement.textContent = "Time: 10:00";

    // Remove timer styles
    timerElement.classList.remove(
        "timer-warning",
        "timer-danger"
    );

    // Reset progress bar
    progressBar.style.width = "20%";

    // Hide result screen
    resultScreen.style.display = "none";

    // Show quiz screen
    quizScreen.style.display = "block";

    // Show first question
    showQuestion();

    // Start timer again
    startTimer();

});

    
function startTimer() {

    clearInterval(timerInterval);

    timeLeft = 600;

    updateTimer();

    function updateTimer() {

    const minutes = Math.floor(timeLeft / 60);

    const seconds = timeLeft % 60;

    timerElement.textContent =
        `Time: ${minutes}:${seconds.toString().padStart(2, "0")}`;

        // Remove old timer classes
timerElement.classList.remove(
    "timer-warning",
    "timer-danger"
);

// Warning when less than 1 minute
if (timeLeft <= 60 && timeLeft > 30) {

    timerElement.classList.add("timer-warning");

}

// Danger when 30 seconds or less
if (timeLeft <= 30) {

    timerElement.classList.add("timer-danger");

}

}

    timerInterval = setInterval(function () {

        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            alert("⏰ Time's up! Your quiz has been submitted.");

            calculateScore();

        }

    }, 1000);

}

categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove selected class
        categoryButtons.forEach(function (btn) {
            btn.classList.remove("selected");
        });

        // Select clicked category
        button.classList.add("selected");

        // Save category
        selectedCategory =
            button.dataset.category;

        // Enable Start Quiz
        startBtn.disabled = false;

    });

});



const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', s => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

// 3D Cubes Generator
class Cube {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = (Math.random() - 0.5) * width * 1.5;
        this.y = (Math.random() - 0.5) * height * 1.5;
        this.z = Math.random() * 1000 + 500;
        this.size = 30;
        this.speedZ = 2 + Math.random() * 3;
        this.angleX = Math.random() * Math.PI * 2;
        this.angleY = Math.random() * Math.PI * 2;
        this.rotSpeedX = (Math.random() - 0.5) * 0.02;
        this.rotSpeedY = (Math.random() - 0.5) * 0.02;
    }

    update() {
        this.z -= this.speedZ;
        this.angleX += this.rotSpeedX;
        this.angleY += this.rotSpeedY;

        if (this.z <= 10) {
            this.reset();
            this.z = 1000;
        }
    }

    draw() {
        // 3D Perspective Projection
        const fov = 400;
        const scale = fov / (fov + this.z);
        const x2d = this.x * scale + width / 2;
        const y2d = this.y * scale + height / 2;
        const sz = this.size * scale;

        ctx.save();
        ctx.translate(x2d, y2d);
        ctx.rotate(this.angleX);

        // Glowing Wireframe Cube Style
        ctx.strokeStyle = `rgba(99, 102, 241, ${scale * 0.8})`;
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#6366f1';

        ctx.strokeRect(-sz / 2, -sz / 2, sz, sz);
        ctx.restore();
    }
}

// 40 Floating 3D Cubes Array
const cubes = Array.from({ length: 40 }, () => new Cube());

function animate() {
    ctx.fillStyle = '#0b0f19';
    ctx.fillRect(0, 0, width, height);

    cubes.forEach(cube => {
        cube.update();
        cube.draw();
    });

    requestAnimationFrame(animate);
}

animate();


// ... Aapka purana saara script.js ka code yahan rahega ...


// ==========================================
// WELCOME SCREEN START BUTTON LOGIC (At the Bottom)
// ==========================================
document.getElementById('welcomeStartBtn').addEventListener('click', function() {
    const enteredName = document.getElementById('welcomeName').value.trim();
    
    if (enteredName === "") {
        alert("Please enter your full name to start!");
        return;
    }

    // Main Form me Name Pass Karne ke Liye
    const participantInput = document.getElementById('participantName');
    if (participantInput) {
        participantInput.value = enteredName;
        participantInput.dispatchEvent(new Event('input'));
    }

    // Screen Switching Logic
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContainer = document.getElementById('mainContainer');

    if (welcomeScreen) {
        welcomeScreen.style.setProperty('display', 'none', 'important');
    }
    
    if (mainContainer) {
        mainContainer.style.display = 'block';
    }
});