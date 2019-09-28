## Excersize 3: Inserting text into a webpage

You probably want to render text and other content in your web application or website. You will want to familiarize yourself with the [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model). 

Let's set up a basic HTML webpage:

```html
<html>
    <head>
        <title>Lesson 3</title>
    </head>
    <body>
        <ul>
            <li id="foo"></li>
            <li id="bar"></li>
        </ul>
    </body>
    <script src="example-script.js"></script>
</html>
```

Think of the DOM as the skeleton of a website - it is a logical tree in which each branch ends in a node which contains objects. As JavaScript is a specification for a language, the DOM is a specification for a way of building websites. You can use the DOM API (built in to most JavaScript engines) to interact with, modify, etc the content of a webpage document. Each of the elements in the above HTML (such as `li`, `ul`, and `body`) represents a node of the document tree.

In NodeJS and most browsers, the keyword `document` is used to access DOM methods.

```js
var htmlElement1 = document.getElementById("foo");
var htmlElement2 = document.getElementById("bar");

htmlElement1.textContent = "This text was added by an external script";

function random() {
    var txt = "Number randomly generated after the HTML loads: " + Math.random(999999).toString();
    return txt;
}

htmlElement2.textContent = random();
```

Then include your script in your HTML using the `<script>` tag, on a new line after the close of the `</body>` tag:

`<script src="example-script.js"></script>`

What are some other properties of elements besides `textContent`? Well, virtually any property than can be altered in CSS is included in the DOM, and that means you can define pretty much any attribute you think of. You can also create event listeners, which cause an action to occur whenever a particular event (like clicking a button) occurs. Remember the MySpace days? Things have gotten a lot better.

```js
document.body.style.backgroundColor = "purple";
var hex = "1234567890abcdefg";

function makeRandomColor() {
    var result = "#";
    for (var i = 0; i < 6; i++) {
        result += hex.charAt(Math.random(hex.length));
    }
    document.body.style.backgroundColor = result;
}
```

```html
<body>
    <button id="myButton" onclick="makeRandomColor()">Change Background Color</button>
</body>
```

The `onclick` property makes the button call the `makeRandomColor()` function each time it is clicked, which in turn creates a random color and sets the background color to it.
