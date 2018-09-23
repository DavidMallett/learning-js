/**
 * Given a string representing mana cost, convert the string into an array of mana symbols.
 * Example: input: "{1}{U}" // [[Baral, Chief of Compliance]]
 * output: ["1", "U"];
 * 
 * Run this file with `node practice.js` on the command line.
 */

var test0 = "{1}{U}"; // Mana Leak
var test1 = "{2}{W}{W}"; // Wrath of God
var test2 = "{W}{U}{G}{B}"; // Atraxa, Praetor's Voice
var test3 = "{11}"; // Blightsteel Colossus
var test4 = "{W}{W}{U}{U}{G}{G}{R}{R}{B}{B}"; // Progenitus
var test5 = "{7}" // Platinum Angel
var test6 = "{3}{C}"; // Thought-Knot Seer

var test7 = "{U/B}{U/B}"; // Shadow of Doubt
var test8 = "{W/2}{W/2}{W/2}"; // Spectral Procession
var test9 = "{1}{B/P}{B/P}"; // Dismember

/**
 * Remember, ALL the information you need to know is on this page:
 * https://www.w3schools.com/jsref/jsref_obj_string.asp
 */

function evaluate(input) {
  var result = [];
  // your code below this line




  // your code above this line (add more lines if necessary)
  return result;
}

console.log("test0 result: " + evaluate(test0)); // expected: ["1", "U"]
console.log("test1 result: " + evaluate(test1)); // expected: ["2", "W", "W"]
console.log("test2 result: " + evaluate(test2)); // expected: ["W", "U", "G", "B"]
console.log("test3 result: " + evaluate(test3)); // expected: ["11"]
console.log("test4 result: " + evaluate(test4));
console.log("test5 result: " + evaluate(test5));
console.log("test6 result: " + evaluate(test6));

/**
 *  Bonus points: if the input is a split cost (like "{R/G}{R/G}" for Burning-Tree Emissary or
 *  "{U/P}" for Gitaxian Probe), output should be an array of arrays which represent all the different outputs.
 * 
 * For example,
 * if input === "{R/G}{R/G}"; output = [["R", "R"], ["R", "G"], ["G", "G"]];
 * if input === "{U/P}"; output = "[["U"], ["2life"]];
 * 
 * Uncomment (remove the "//" in front of) the below lines and run this script again to see if it worked!
 */

// console.log("test7 result: " + evaluate(test7));
// console.log("test8 result: " + evaluate(test8));
// console.log("test9 result: " + evaluate(test9));
