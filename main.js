// Write a function to sort a list of words (an array) in alphabetical order.
let arr1 = ['h', 'k', 'p', 'a'];

function sortArr(arr) {
    return arr.sort();
}
// console.log(sortArr(arr1))

// Write a JavaScript function to get the number of occurrences of each letter in the specified string.
function countLetters(str) {
    let map = {};
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() >= 'a' && str[i].toLowerCase() <= 'z') {
            map[str[i]] = map[str[i]] ? ++map[str[i]] : 1;
        }
    }
    return map;
}
// console.log(countLetters("asdf;lkjssff;lkjasdf;ljkjadsf"))

// Write a JavaScript function that accepts a number as a parameter and checks if the number is prime or not.
function isPrime(num) {
    if (num <= 3) {
        return true;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
// console.log(isPrime(97))


// Write a JavaScript program to count the number of words in a string. 
// Remove white-space from start and end position. 
// Convert 2 or more spaces to 1. 
// Exclude newline with a start spacing.
function parseString(str) {
    str = str.trim();
    str = str.replace(RegExp(" {2,}"), " ");
    str = str.replace(RegExp("\n"), "\t");
    return str.length;
}
// console.log(parseString("str                n\n nini"))

// How will you get the Checkbox status whether it is checked or not?
const checked = document.querySelector("input[checked]").checked;
// console.log(checked)

// Write a JavaScript function to add rows to a table. 
const table = document.getElementsByTagName("table")[0];
function addRow() {
    const row = document.createElement("tr");
    row.innerHTML = "<td>Dummy</td><td>Data</td>";
    table.appendChild(row);
}
addRow();
addRow();
// addRow();
// Define a function reverse() that computes the reversal of a string. 
// For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(str) {
    return str.split('').reverse().join('');
}
// console.log(reverse("jag testar"))

// Write a text (eg: www.ucertify.com) and move it with your mouse.
const text = document.getElementById("text");
const container = document.getElementById("container");
container.addEventListener("mousemove", (e) => {
    text.style.top = e.screenY + 'px';
    text.style.left = e.screenX + 'px';
});

