## FLAMES online

FLAMES is a game that predicts the relationship between two people.
The acronym abbreviates to:
F - Friends
L - Lovers
A - Acquaintances
M - Married
E - Enemies
S - Siblings
This is just a fun way to pass time and does not actually produce tangible results.


### The Algorithm:
1. Cross out all the common letters between the two names.
2. Count the number of characters left out in both names.
3. Progress 1 character at a time, keeping a counter over "FLAMES" and start over at F after S.
4. If the counter is fully divisible by the number of characters that were left out in both names, cross out the character.
5. Start from the next character after crossing out and do not count the crossed out character next time around.
6. The last character left in the string "FLAMES" is the result.

### Installation:
No installation needed, clone/download and double click on index.html (open in a browser)

### Why?
Found a use case for a circular linked list in this problem. Hence wanted to implement it.

Hosted at: [netlify](https://6641992293dcbb6387641461--flamesdemo.netlify.app)
