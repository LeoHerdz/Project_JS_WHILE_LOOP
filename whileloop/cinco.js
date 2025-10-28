/* Question 5: Count Backward by 3s
Write a while loop that counts backward from 30 to 0 by 3s (30, 27, 24, 21...).
Expected Output: 30, 27, 24, 21, 18, 15, 12, 9, 6, 3, 0 */

let num = 30;

while (num >= 0) {
console.log(num);
num -= 3;
}