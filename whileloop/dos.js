/* Question 2: Calculate Sum of Even Numbers
Use a while loop to calculate and print the sum of all even numbers from 2 to
30. Expected Output: The sum should be 240 */

let num = 2;
let sum = 0;

while (num <= 30) {
sum += num;
num += 2;
}
console.log("The sum should be " + sum);