///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//  _____                          _               ////////////////////
// |  __ \                        (_)              ////////////////////
// | |__) |___  ___ _   _ _ __ ___ _  ___  _ __    ////////////////////
// |  _  // _ \/ __| | | | '__/ __| |/ _ \| '_ \   ////////////////////
// | | \ \  __/ (__| |_| | |  \__ \ | (_) | | | |  ////////////////////
// |_|  \_\___|\___|\__,_|_|  |___/_|\___/|_| |_|  ////////////////////
//                                                 ////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////
// NOTE: modify the parameter list of each function as needed       ///
///////////////////////////////////////////////////////////////////////

// Problem #1

// Write a recursive method called countVowels that returns the number of vowels in a given String
// countVowels('abcedfg') ->2

var countVowels = function(str){
  //declare count variable to keep track of the vowels num
  //take the initial character in the string and check if the character is a vowel
  if (str.length === 0) {
    return 0;
  } else if (str[0] === 'a' || str[0] === 'e' || str[0] === 'i' || str[0] === 'o'|| str[0] === 'u') {
      return 1 + countVowels(str.slice(1, str.length));
  } else {
    return countVowels(str.slice(1, str.length));
  }
    //if it is a vowel
      //increase the count in the count variable
    //if not,
      //call the function on the rest of the string
  //return the count variable
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #2
// Given a non-negative int n, return the sum of its digits recursively (no loops)
// sumDigits(126) → 9
// sumDigits(49) → 13
// sumDigits(12) → 3

var recursiveSum = function(n){
  n = n.toString();
  //base case: if no number is given,
  if (n.length === 1) {
    //return 0;
    return Number(n);
  } else {
    return Number(n.charAt(0)) + recursiveSum(Number(n.slice(1, n.length)));
  }
  //otherwise, take the last number using modulo 10
    //return that digit added with the recursion call
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #3
// Check if a given number is a power of 2
// PowerOfTwo(8) -> true
// PowerOfTwo(9) -> false

var isPowerOfTwo = function(n){

};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #4

// Write a recursive method that takes as parameters an initial investment amount,
// an annual interest rate, and a number of years.
// The method should return the value of the investment after the given number of years,
// assuming that the interest is compounded annually.
// (For example, if the initial investment is 1000 and the interest rate is 10 percent,
// then after one year the investment will be worth 1100, after two years 1210, after three years 1331, etc.)

var invest = function(amount){

};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #5

// given a min and a max, both integers, use recursion to console.log all of the
// integers from the min to the max, and then console.log the numbers from the max
// to the min. Do not use loops! Use recursion.

// ex:
//    printRangeUpDown(4, 10);
//    console.logs: 4,5,6,7,8,9,10,9,8,7,6,5,4
var printRangeUpDown = function(min, max){
    //if the min and the max is the same,
    if (min === max) {
      console.log(min);
    } else {
      console.log(min) + printRangeUpDown(min + 1, max) + console.log(min);
    }
      //console.log only the min
    //if the range between min and max is a difference of 1
      //console.log min, max, max, min
    //otherwise,
      //console.log min first and then call printRangeUpDown with min + 1, max
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #6

// given a binary tree where each node has a
// value, a left and a right, return the sum of all of the values.
// remember, binary tree's are different from binary search trees!
// you'll need to create a binary tree constructor!

var BinaryTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

var binaryTreeSum = function(tree){
  var sum = tree.value;
  if (tree.left !== null && tree.right !== null) {
    return sum += binaryTreeSum(tree.left) + binaryTreeSum(tree.right);
  } else if (tree.left !== null) {
    return sum += binaryTreeSum(tree.left);
  } else if (tree.right !== null) {
    return sum += binaryTreeSum(tree.right);
  } else {
    return sum;
  }
};

var sum = new BinaryTree(10);
sum.left = new BinaryTree(7);
sum.right = new BinaryTree(11);
sum.left.left = new BinaryTree(2);
console.log(binaryTreeSum(sum));
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #7

// Given an array of integers which is sorted in increasing order
//[1,2,3,4,5,6,7,8,9]
// build a binary search tree of minimal height. Height of a tree
// is the max number of edges from a node to the tree's root node.
// e.g. this tree has height 3.
//                   10
//                  /  \
//                3     30
//               / \
//              1   7
//                   \
//                    8

// you'll need to create a binary search tree constructor!
var arrayToBinarySearchTree = function(array){
  //create an empty binary tree with the first item of the array
  var newTree = new BinaryTree(array[0]);
  //run through each item of the array
    //add the next integer
  //return the new binarySearchTree
  return newTree;
};