/* Question 9: Subtract Until Negative
Start with the number 100. Use a while loop to keep subtracting 7 from it and print each
result. Stop when the number becomes negative.
Expected Output: 100, 93, 86, 79, 72, 65, 58, 51, 44, 37, 30, 23, 16, 9, 2 */


let num = 100;

while (num >= 0) {
console.log(num);
num -= 7;
}