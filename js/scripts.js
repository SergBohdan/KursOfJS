// function fillArray(value, element) {
//   const newArray = [];
//   for (let i = 0; i <= value; i++) {
//     newArray.push(element);
//   }
//   return newArray;
// }

// const array = [
//   1,
//   0,
//   54,
//   "doc",
//   null,
//   "jpg",
//   undefined,
//   "",
//   "png",
//   "exe",
//   false,
//   "mp4",
//   NaN,
//   "hbs",
// ];

// function deleteArr(array) {
//   const newArray = [];
//   for (let element of array) {
//     if (!element) {
//       continue;
//     }
//     newArray.push(element);
//     console.log(newArray);
//   }

//   return newArray;
// }
// deleteArr(array);

// const arr1 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr2 = [6, "dream", -30, 11, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// const arr3 = [4, 232, 6, -30, "color", 324, "list", 1, 11, 9, "dream", 34, 0];
// const arr4 = ["color", 6, -30, 11, 9, 1, "dream", 324, 34, 4, 232, 0, "list"];

// const arr5 = [1, 4, 6, "color", "list", 11, 9, "dream", 34, 0, -30, "lesson"];
// const arr6 = [6, 324, "dream", -30, 9, 8, 34, "color", 4, 232, 0, "list", 11];

// const arr7 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr8 = [6, "dream", -30, 10, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// function compareArr(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (const element of arr1) {
//     if (!arr2.includes(element)) {
//       return false;
//     }
//     return true;
//   }
// }
// console.log(compareArr(arr1, arr2));
// console.log(compareArr(arr3, arr4));
// console.log(compareArr(arr5, arr6));
// console.log(compareArr(arr7, arr8));

// function calculateAverage(...args) {
//   let total = 0;
//   let sum = 0;
//   for (const arg of args) {
//     if (typeof arg !== "number") {
//       continue;
//     }
//     sum += arg;
//     total += 1;
//   }
//   return sum / total;
// }
// console.log(calculateAverage(1, 3, 5, "hello", 8));

const user = {
  name: "Igor",
  car: "Mercedes",
  carColor: "black",
};

function checkKeyInObject(obj, key) {
  //   return Object.keys(obj).includes(key);
  //   return obj.hasOwnProperty(key);
  for (const objKey in obj) {
    return objKey === key ? true : false;
  }
}
console.log(checkKeyInObject((user, "qwewrfaw")));
