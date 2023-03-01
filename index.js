function isPalindrome(word) {
  const forwardArray = Array.from(word);
  let reverseArray = [];
  forwardArray.forEach((ele) => reverseArray.unshift(ele));
  return forwardArray.toString() === reverseArray.toString() ? true : false;
}

/* 
  1) Make sure that the word parameter has a way to be detectable both forward and backward.
  2) The first idea I have is to make the argument an array and then looping through the array from the array[length-1] index back to array[0] and pushing that into a second array.  Then I can test if the first and second arrays have equal contents.
  3) I think there's a .sort() method, even that may allow me to sort from some parameter that goes from end to start, but I'll look into that once I have it working as a loop.
*/

/*
The funciton works by creating two arrays.  
The first is populated by the letters of the string passed as an argument into the isPalindrome function, giving each letter its own index.  
The second is an empty array.  
The for loop then iterates through the indexes, beginning with the final one and decrementing down to the initial index, and uses array.push() to populate the second array.
The values of the two arrays are compared to one another after being reverted to strings (albeit with commas between each letter, but it doesn't matter for the comparison).
If both strings exactly equal one another, the function returns the boolean true.
If they do not exactly equal one another, the function returns the boolean false.

The array.sort() function wouldn't have worked, since it would have presented a new array with the letters in alphabetical order, which wouldn't have helped anything.

It turns out this code is pretty clean and fast, but I could make it a little sleeker with .forEach, an arrow function, array.unshift(), and using a ternary instead of if... else.  This cut the function's code from 12 lines to six.  I don't *personally* find the ternary operator more legible than if... else statements, but it is definitely fewer lines.
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("donkeyinhumanclothes"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("amanaplanacanalpanama"));
}

module.exports = isPalindrome;
