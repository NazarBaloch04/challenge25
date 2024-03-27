"use strict";
// Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values. Explain & TIP: In JavaScript, you can assign a value to a variable with = and later update it as needed. This is fundamental for keeping track of changing data within your programs. Answer: Please try to do it yourself first! 
// This function shows how to assign and update variable values
function declaringVariable() {
    let declareNumber = 15; // Initial value
    console.log("Initial value:", declareNumber); // Prints out the initial value
    declareNumber = 39; // Updates the value to 20
    console.log("Updated value:", declareNumber); // Prints out the uodated value
}
declaringVariable();
// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
// Explain & TIP: Swapping variables is a common task. You can use a temporary variable to hold one value while you swap them around. It's like juggling where you temporarily place one ball in a basket to free up your hand.
//  swaping the values of two variables
function swapingValues() {
    let a = 23, b = 19;
    console.log("Before swap: a =", a, "b =", b);
    let temp = a; // Temporary storing the value of a
    a = b; // Shifting the value of a into B
    b = temp; // Shifting the value of B into A
    console.log("After swap: a =", a, "b =", b); // prints out the swapped values
}
swapingValues();
// Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators. Explain & TIP: Compound assignment operators combine an arithmetic operation with assignment, making your code cleaner and more concise. Instead of writing x = x + 2, you can simply write x += 2. Answer: Please try to do it yourself first! 
function useCompoundOperators() {
    let x = 16;
    console.log("Initial x:", x);
    x += 4;
    console.log("After addition:", x);
    x -= 6;
    console.log("After subtraction:", x);
    x *= 2;
    console.log("After multiplication:", x);
    x /= 3;
    console.log("After division:", x);
}
useCompoundOperators();
