/* Question 8: Print Numbers Divisible by 4
Write a while loop that prints all numbers from 1 to 50 that are divisible by 4.
Expected Output: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48 */


let num = 1;

while (num <= 50) {
if (num % 4 === 0) {
console.log(num);
}
num++;
} 
