/* Question 10: Calculate Power
Use a while loop to calculate 3 raised to the power of 5 (3^5). Print the final
result. Hint: Multiply 3 by itself 5 times
Expected Output: 243 */

let start = 3;
let exp = 5;
let result = 1;
let count = 0;

while (count < exp) {
result *= start;
count++;
}

console.log(result);
