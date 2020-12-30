const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber >= 0.7) {
  alert("the generated number is greater or equal to 0.7.");
  console.log(randomNumber);
} else if (randomNumber < 0.7) {
  console.log(randomNumber);
}

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = numArray.length - 1; i >= 0; i--) {
  console.log(numArray[i]);
}

for (const i of numArray) {
  console.log(i);
}

let counter = 0;
while (counter < numArray.length) {
  console.log(numArray[counter]);
  counter++;
}

const randomNumber2 = Math.random();

console.log(randomNumber);
console.log(randomNumber2);

if (
  (randomNumber > 0.7 && randomNumber2 > 0.7) ||
  randomNumber <= 0.2 ||
  randomNumber2 <= 0.2
) {
  alert(
    "the 2 random numbers are greater than 0.7 or at least one is smaller than 0.2!"
  );
}
