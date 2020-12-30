const task3Element = document.getElementById("task-3");

function greet() {
  alert("thank you for clicking task 3 banner");
}

function greetUser(Username) {
  alert("Hello " + Username);
}

function threeStrings(a, b, c) {
  const combinedText = `${a} ${b} ${c}`;
  return combinedText;
}

greetUser("Matcha");

task3Element.addEventListener("click", greet);

//alert(threeStrings("How", "are", "you"));
const threeWords = threeStrings("How", "are", "you");
alert(threeWords);
