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

// const user = {
//   name: "Igor",
//   car: "Mercedes",
//   carColor: "black",
// };

// function checkKeyInObject(obj, key) {
//   //   return Object.keys(obj).includes(key);
//   //   return obj.hasOwnProperty(key);
//   for (const objKey in obj) {
//     return objKey === key ? true : false;
//   }
// }
// console.log(checkKeyInObject((user, "qwewrfaw")));

// const person = { name: "Mango" };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 18));
// console.log(sayHi.bind(person, 18));

// function slugify(title) {
//   // Change code below this line
//   let slug;
//   let small;
//   let words;
//   words = title.toLowerCase();
//   small = words.split(" ");
//   slug = small.join("-");
//   console.log(slug);
//   return slug;
// }
// slugify("Arrays for begginers");
// slugify("English for developer");

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let concatArray = firstArray.concat(secondArray);

//   const newArray = concatArray.slice(0, maxLength);
//   console.log(newArray);
//   return newArray;

//   // Change code above this line
// }
// // console.log(newArray);
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);

// function calculateTotal(number) {
//   // Change code below this line
//   let totalSum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     totalSum += i;
//   }
//   console.log(totalSum);
//   return totalSum;
//   // Change code above this line
// }
// calculateTotal(7);
// calculateTotal(18);

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (const argument of order) {
//     total += argument;
//   }

//   console.log(total);
//   return total;
//   // Change code above this line
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

// function findLongestWord(string) {
//   // Change code below this line

//   let array = string.split(" ");
//   let maxLengthElem = " ";
//   for (const elem of array) {
//     if (elem.length > maxLengthElem.length) {
//       maxLengthElem = elem;
//       console.log(maxLengthElem);
//     }
//   }
//   return maxLengthElem;

//   // Change code above this line
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   console.log(numbers);
//   // Change code above this line
//   return numbers;
// }
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);

// function filterArray(numbers, value) {
//   // Change code below this line
//   let newArray = [];
//   for (let i = 0; i <= numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }
//   console.log(newArray);
//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([12, 24, 8, 41, 76], 38);

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let newArray = [];
//   for (const element of array1) {
//     if (array2.includes(element)) {
//       newArray.push(element);
//     }
//   }

//   return newArray;

//   // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   newArray = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       newArray.push(i);
//     }
//     console.log(newArray);
//   }
//   return newArray;

//   // Change code above this line
// }

// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);

// function includes(array, value) {
//   // Change code below this line
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       console.log(array[i]);
//       return true;
//     } else {
//       return false;
//     }
//   }
//   // Change code above this line
// }
// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// apartment.tags[apartment.tags.length - 1];
// console.log(lastTag);
// // Change code above this line
