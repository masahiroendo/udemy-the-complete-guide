// function sayHello(name) {
//   console.log("Hi " + name);
// }

// sayHello("Match");

const sayHello1 = (name) => console.log("Hi " + name);

sayHello1("Masahiro");

const sayHello2 = (greet, name) => {
  console.log(greet + " " + name);
};
// const sayHello2 = (name, phrase) => console.log(phrase + "" + name);

sayHello2("Hello", "Masahiro");

const sayHello3 = () => {
  console.log("Yo Matcha");
};
// const sayHello3 = () => console.log("Hi hard-coded!");

sayHello3();

const sayHello4 = (name) => "Hi " + name;
// const sayHello4 = (name) => "Hi" + name;

console.log(sayHello4("Mat"));

const sayHello5 = (name, greet = "good morning") => {
  console.log(greet + " " + name);
};

sayHello5("Masahiro", "Hello");
sayHello5("Masahiro");

const checkInput = (cb, ...strings) => {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
};

checkInput(
  () => {
    console.log("All not empty!");
  },
  "Hello",
  "666",
  "françis",
  "khalifa"
);
