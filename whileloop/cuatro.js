/* Question 4: Multiplication Table of 8
Create a while loop that prints the multiplication table of 8 from 8 × 1 to 8 × 12.
Expected Output: 8 x 1 = 8, 8 x 2 = 16, 8 x 3 = 24, ... and so
on */
let num = 8;
let i = 1;
while (i <= 23) 
    {
        let table = i * num;
        i++;
    console.log(i + "x" + num + "=" + table);
}