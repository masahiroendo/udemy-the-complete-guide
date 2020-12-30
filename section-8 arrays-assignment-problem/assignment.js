const numArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const filteredArray = numArray.filter((number, index, numArray) => {
  return number > 5;
});
const filteredNumArray = numArray.filter((num) => num > 5);

console.log(filteredArray);
console.log(filteredNumArray);

const mappedArray = numArray.map((number) => ({
  num: number,
}));
console.log(mappedArray);

const reducedArray = numArray.reduce(
  (prevValue, curvalue) => prevValue * curvalue,
  1
);
console.log(reducedArray);

console.log(Math.max(...numArray));

function findMax(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
}

console.log(findMax(...numArray));

function findMinMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax];
}

const [min, max] = findMinMax(...numArray);
console.log(min, max);

const userIds = new Set();

userIds.add(10);
userIds.add(-10);
userIds.add(-5);
userIds.add(-5);

console.log(userIds);
