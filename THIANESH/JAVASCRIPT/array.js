// // Creating an array without initializing
// let arr = new Array(10);
// arr[1] = "Thianesh";
// arr[2] = 1;
// arr[3] = 0.22;
// console.log(arr);

// //another method
// let array1 = [1, 2, 3, 4, 5];
// array1[1] = 20;
// array1[5] = 6; //size can be increased
// console.log(array1);
// array1[1] = 2;

// //nested array
// let array2 = [7, 8, 9, 10];
// let array3 = new Array(array1, array2);
// console.log(array3);

// //In-built function
// let fruits = ["mango", "apple", "grape", "banana"];
// fruits.sort(); //sort function
// console.log(fruits);
// fruits.reverse(); //reverse function
// console.log(fruits);

// //sorting an numeric array
// let nums = [5, 2, 3, 1, 4];
// nums.sort();
// console.log(nums);
// nums.sort((a, b) => {
//   return a - b;
// }); //No difference betwen both sort functions
// console.log(nums);
// nums.sort((a, b) => {
//   return b - a;
// }); //Sorting in descending order
// console.log(nums);

// //Concat
// let num1 = [1, 2, 3, 4];
// let num2 = [4, 5, 6];
// console.log(num1.concat(num2));

// //spread operator
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];
// arr2.push(4);
// console.log(arr1);
// console.log(arr2);

// //rest operator
// const arr = (arg1, arg2, arg3) => {
//   return [arg1, arg2, arg3];
// };
// console.log(arr(1, 2, 3, 4, 5)); //we can't define argument each time so we use rest.

// const restArray = (...arg) => {
//   return arg;
// };
// console.log(restArray(1, 2, 3, 4, 5));

// //destructuring
// const array = [1, 2];
// const [val1, val2] = array;
// console.log(val1, val2);
