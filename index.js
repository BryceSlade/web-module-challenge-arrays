/*REMEMBER TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/* 👀 This is your data ⬇ */
const originalFlavors = [
  "Banana Nut Fudge",
  "Black Walnut",
  "Burgundy Cherry",
  "Butterscotch Ribbon",
  "Cherry Macaron",
  "Chocolate",
  "Chocolate Almond",
  "Chocolate Chip",
  "Chocolate Fudge",
  "Chocolate Mint",
  "Chocolate Ribbon",
  "Coffee",
  "Coffee Candy",
  "Date Nut",
  "Eggnog",
  "French Vanilla",
  "Green Mint Stick",
  "Lemon Crisp",
  "Lemon Custard",
  "Lemon Sherbet",
  "Maple Nut",
  "Orange Sherbet",
  "Peach",
  "Peppermint Fudge Ribbon",
  "Peppermint Stick",
  "Pineapple Sherbet",
  "Raspberry Sherbet",
  "Rocky Road",
  "Strawberry",
  "Vanilla",
  "Vanilla Burnt Almond"
]

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: Copy the Array! 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
We have an array called originalFlavors with 31 flavors (see above).  In these tasks, we will be reading and writing data to this array.  
With all of these changes going on, we don't want to lose track of the actual, original 31 flavors.  So we need to copy the original array!

/*
Use the copy function below to do the following:
  1. receive an array as a parameter - you will pass in originalFlavors as an argument when the function is invoked.
  2. Return a copy of the received array  
*/



function copy(originalFlavors){
  return [...originalFlavors];  //this one
}

console.log(copy(originalFlavors))




/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Confirm that an array is exactly 31 flavors. Your function should accept:
  1. an array as a parameter
  2. Check to see if the array given is 31 flavors
  3. Your function should return a boolean TRUE if the length of the array is 31 and FALSE if the length of the array is NOT 31.


For Example: is31Flavors(originalFlavors) will return true if your code is working properly
*/



 function is31Flavors(originalFlavors){
   if  (originalFlavors.length === 31){
     return true
   } else 
     return false
}

console.log("hi there", is31Flavors(originalFlavors))





/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! They think this will be a game changer. You need to modify the array to include this flavor. 

Use the addFlavor function below to do the following:
  1. Receive an array
  2. Receive a new flavor as a string
  3. The function adds the passed flavor to the front of the passed array
  4. The function should return the resulting array

  For example: addFlavor(originalFlavors, "Rainbow Sherbert") should return the array ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla Burnt Almond"]
*/



function addFlavor(originalFlavors, newFlavor){
  originalFlavors.unshift(newFlavor);
  return originalFlavors
}

console.log(addFlavor(originalFlavors, "Rainbow Sherbert"))




// let newFlavor = "Rainbow Sherbert"
// function addFlavor(originalFlavors, newFlavor){
//   originalFlavors.unshift(newFlavor);
//   return originalFlavors
// }

// console.log(addFlavor(originalFlavors, newFlavor))




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Houston, we have a problem! There are now 32 flavors in the originalFlavors array! Your task is to remove an item from the end of the array. 

Use the removeLastFlavor function below to do the following:
  1. Receive an array
  2. Remove the last item from the received array
  3. Return the resulting array

  For example: running removeLastFlavor(originalFlavors) would return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla"]
*/



function removeLastFlavor(originalFlavors){
  originalFlavors.pop()
  return originalFlavors
}

console.log(removeLastFlavor(originalFlavors))



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function that returns a flavor at a given index in the array.

Use the getFlavorByIndex function below to do the following:
  1. Recieve an array
  2. Receive a number (the desired index)
  3. Return the flavor located at the received index position

  For example: running getFlavorByIndex(originalFlavors, 2) would return "Black Walnut", assuming Rainbow Sherbert has been added successfully
*/



function getFlavorByIndex(array, num1){
  return array[num1];
}

console.log(getFlavorByIndex(originalFlavors, 2))




/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, 
as opposed to just arbitrarily removing the first or last flavor. Your task is to get an index by flavor name, and remove that single flavor from the array.  

Use the removeFlavorByName function below to do the following:
  1. Receive an array
  2. Receive a flavor as a string
  3. Remove the received flavor from the received array
  4. Return the resulting array that now contains one less flavor

  For example: running removeFlavorByName(originalFlavors, "Rocky Road") would return an array with the a length of 30 because Rocky Road would have been removed. 

  HINT: You can use .splice() for this
*/


function removeFlavorByName(){
  // array.splice(27, 1)
  // return array
}

console.log(removeFlavorByName(originalFlavors, "Rocky Road"))



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
July 7th is "World Chocolate Day" and Baskin Robins wants to create promotional materials highlighting all of their chocolate flavors. 
Your task is to write a function that checks every item in the array for a string and returns a new array called filteredArray with only the values 
that contain the received string. This would allow you to be able to filter for "Vanilla", "Sherbet", "Lemon" etc. when different holidays roll around 
by passing in those specific strings.

Use the filterByWord function below to do the following:
  1. Receive an array
  2. Receive a string (example: "chocolate")
  3. Check to see if any of the flavors in the array contain that string
  4. If they do, add them to a new array
  5. Return the new array that contains the filtered flavors

  For example: filterByWord(originalFlavors, "Chocolate") should return ["Chocolate", "Chocolate Almond", "Chocolate Chip", "Chocolate Fudge", "Chocolate Mint", "Chocolate Ribbon"]

  HINT - you can use the .includes method to help you solve this

  DO NOT USE ADVANCED ARRAY METHODS (i.e. .filter) to solve this problem. 
*/




function filterByWord(array, string){
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    if(array[i].includes(string)){
      newArray.push(array[i]);
    }
 }
return newArray;
}

console.log(filterByWord(originalFlavors, "Chocolate"))









/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working');
  return 'bar';
}
foo();
module.exports = {
  foo,
  is31Flavors,
  addFlavor,
  removeLastFlavor,
  getFlavorByIndex,
  removeFlavorByName,
  copy,
  filterByWord
}

