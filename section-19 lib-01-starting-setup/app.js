const customers = ["Max", "Manuel", "Anna"];

const activeCustomers = ["Max", "Manuel"];

const inactiveCustomers = _.difference(customers, activeCustomers);
const inactiveNumbers = _.difference([3, 2, 1], [2, 1]);

console.log(inactiveCustomers);
console.log(inactiveNumbers);
