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

// 6. Напишіть функцію sayHi(), яка приймає в якості параметра масив імен,
// перебирає масив і додає до кожного ім'я привітання.
// Функція повертає новий масив  ["Ivan привіт!", "Maria привіт!", "Anna привіт!"]

//   const friends = [
//     { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
//     { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
//     { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
//     { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
//     { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
//     { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
// ]
// const getTotalBoysYears = arr => arr.filter(friend => friend.sex ==="m")
// .reduce((acc, friend) => acc + friend.age, 0);
// console.log(getTotalBoysYears(friends));

// const getGirlsPassports = arr => arr.filter(friend => friend.sex ==="f")
// .map((friend) => friend.passport);
// console.log(getGirlsPassports(friends));

// Є об'єкт і функція для підрахунку суми чисел.
// Виведіть у консоль результат виконання функції, якщо a = 3, b = 5.

// var obj = { num: 2 };

// function add(a, b){
//   return this.num + a + b;
// }
// console.log(add.call(obj, 3, 5))
// // add.call(obj, a, b)
// console.log(add.apply(obj, [3, 5]))
// const funk = add.bind(obj, 3, 5)
// console.log(funk())

// Є два об'єкти, які описують деякі характеристики телефонів.
// Потрібно викликати метод showInfo, щоб він логував інформацію про кожний телефон,
// передаючи аргументом країну-виробник телефону.
// "HUAWEI" - "China", "SAMSUNG" - "South Korea".

// const tel = {
//     regNumber: "AE8345FEDAS",
//     brand: "HUAWEI",
//     showInfo(country) {
//         console.log(`${country} ${this.regNumber} ${this.brand}`);
//     }
// }

// const tel_2 = {
//     regNumber: "AO8518FEGHT",
//     brand: "SAMSUNG",

// }

// tel.showInfo('china')
// const bindedFoo = tel.showInfo.bind(tel_2, 'South Korea')
// tel.showInfo.call(tel_2, 'South Korea')
// tel.showInfo.apply(tel_2, ['South Korea'])

// Напишіть код таким чином, щоб об'єкт apples став прототипом для об'єкта fuji.
// Перевірте чи став об'єкт apples  прототипом для об'єкта fuji.
// Додайте об'єкту fuji властивість color: 'pink'  і виведіть його у консоль.
// Виведіть у консоль значення властивості type для об'єкту fuji.
// Перевірте і виведіть у консоль чи є властивість vitamins власною властивістю об'єкту apples.
// Перевірте і виведіть у консоль чи є властивість cookingMethod власною властивістю об'єкту fuji.

// const apples = {
//     type: 'fruit',
//     cookingMethod: ['jam', 'juice', 'baked', 'dried', 'fresh'],
//     vitamins: ['A', 'B1', 'B2', 'E'],
// }

// const fuji = Object.create(apples);
// console.log(apples.isPrototypeOf(fuji));
// fuji.color = 'pink';
// console.log(fuji.color);
// console.log(fuji.type);
// console.log(apples.hasOwnProperty('vitamins'));
// console.log(fuji.hasOwnProperty('cookingMethod'));

// Напиши клас Rectangle який створює об'єкт
//з ​​властивостями height, width
//і методом calculateArea() для підрахунку прлощі прямокутника.

// class Rectangle{

//     constructor({heigth, width} = {}){
//         this.heigth = heigth;
//         this.width = width;
//     }

//     calculateArea(){
//         return this.heigth*this.width
//     }
// }

// const rectangle = new Rectangle({heigth: 4, width: 6 })

// console.log(rectangle.calculateArea())

//Напиши клас Client який створює об'єкт
//з ​​властивостями login, email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client{
//     #login;
//     #email;
//     constructor({login, email} = {}){
//         this.#login = login;
//         this.#email = email;
//     }

//     get login(){
//         return this.#login
//     }

//     set login(newLogin){
//         this.#login = newLogin;
//     }

//     get email(){
//         return this.#email
//     }

//     set email(newemail){
//         this.#email = newemail;
//     }

// }
// const newClient = new Client({login: 'user', email: 'user@mail.com'});

// console.log(newClient.login);
// newClient.login = 'root';
// newClient.email = 'user@mail.com';
// console.log(newClient.login);
// console.log(newClient.email);

// Створи клас Phone який створює об'єкт з ​​властивістю price.
// Додай статичну властивість MAX_PRICE зі значенням 40000 - максимально допустима ціна телефону.
// Оголоси приватну властивість price доступ до якої буде через геттер та сеттер.
// Додай сетеру price перевірку значення параметра newPrice, що передається.Якщо воно більше за MAX_PRICE,
// сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну телефону.

// class Phone{

//     static MAX_PRICE = 40000;
//     #price;

//     constructor({price} = {}){
//         this.#price = price;
//     }

//     get price(){
//         return this.#price
//     }

//     set price(newPrice){
//         if(newPrice<= Phone.MAX_PRICE){
//             this.#price = newPrice;
//             return;
//         }
//     }
// }

// const newPhone = new Phone({price: 15000});
// console.log(newPhone.price);
// newPhone.price = 37000;
// console.log(newPhone.price);
// newPhone.price = 47000;
// console.log(newPhone.price);

// 1. Створіть об'єкт car з трьома властивостями
// carBrand: "Audi Q3"
// price: 23000
// метод getData() котрий буде логувати рядок :"Audi Q3 за 23000 $"

// 2. Напишіть функцію makeMessage(callback), котра отримує в якості параметра
// callback-функцію getData() і логує повідомлення "Ви замовили ${callback()}"

// const car = {
//     carBrand: "Audi Q3",
//     price: 23000,

//     getData() {
//         return `${this.carBrand} за ${this.price} $`;
//     }
// };

// function makeMessage(callback) {
//     console.log(`Ви замовили ${callback()}`);
// }

// makeMessage(car.getData.bind(car));

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, 0)}`;
//   }

// Завдання 1
// При натисканні на кнопку "SHOW ME", потрібно за допомогою alert
// вивести значення, яке будемо вводити в інпут.

// const clickMe = document.querySelector('#alertButton');
// const textTitle = document.querySelector('#alertInput');

// clickMe.addEventListener('click', onClick);
// function onClick(eve){
//     alert(textTitle.value);
// }

// Завдання 2
// При натисканні на кнопку "SWAP ME" зробити так, щоб значення двох інпутів
// мінялися місцями. Тобто значення правого інпуту стало на місце лівого і навпаки.

// const clickMe = document.querySelector('#swapButton');
// const textTitle = document.querySelector('#leftSwapInput');
// const textTitle2 = document.querySelector('#rightSwapInput');

// clickMe.addEventListener('click', onClick);
// function onClick(eve){
//         const currentValue = textTitle.value;
//         textTitle.value = textTitle2.value;
//         textTitle2.value = currentValue;
//     }

// Завдання 3
// При натисканні на кнопку "Приховати" потрібно введені користувачем
// символи в інпут відображати у вигляді крапок замість звичайного
// тексту, а також змінити назву кнопки на "Показати", при повторному
// натисканні знову будемо відображати символи, а назва кнопки зміниться
// на "Приховати".

// const clickMe = document.querySelector('#passwordButton');
// const passwordInput = document.querySelector('#passwordInput');

// clickMe.addEventListener('click', function(e) {
//   if (passwordInput.type === 'text') {
//     passwordInput.type = 'password';
//     e.currentTarget.textContent = 'Показати';
//   } else {
//     passwordInput.type = 'text';
//     e.currentTarget.textContent = 'Приховати';
//   }
// });

// Завдання 4
// Кнопка "Зменшити" повинна зменшувати квадрат на 10 пікселів.
// Кнопка "Збільшити" повинна збільшувати квадрат на 10 пікселів.

// const increaseBtn = document.querySelector('#increase');
// const decreaseBtn = document.querySelector('#decrease');
// const boxEl = document.querySelector('#box');

// increaseBtn.addEventListener('click', onBtnClick);
// decreaseBtn.addEventListener('click', onBtnClick);

// console.dir(boxEl);

// function onBtnClick(evt){
//     const {offsetWidth} = boxEl;
//     const id = evt.currentTarget.id;

//     if(id === 'increase'){
//         boxEl.style.width = `${offsetWidth + 10}px`;
//         boxEl.style.height = `${offsetWidth + 10}px`;

//     }else{
//         boxEl.style.width = `${offsetWidth - 10}px`;
//         boxEl.style.height = `${offsetWidth - 10}px`;
//     };
// }

// Завдання 5
// При кліку на кнопку "Подвоїти" збільшувати значення в кожному
// елементі списку в два рази.

// const clickBtn = document.querySelector('#double');
// const liEl = document.querySelectorAll('.listItem');

// clickBtn.addEventListener('click', onClick);

// function onClick(eve) {
//     liEl.forEach((elem) => {
//       elem.textContent = elem.textContent * 2;
//     });
//   }

// Завдання 6
// При кліку на кнопку "Filter" потрібно видалити з списку позначені елементи.

// const form = document.querySelector('.checkboxForm');

// form.addEventListener('submit', handlerRemoveEl);

// function handlerRemoveEl(event){
//     event.preventDefault();
//     const itemWraper = document.querySelectorAll('.checkboxWrapper');
//     const result = [...itemWraper].filter(item => item.lastElementChild.checked);
//     result.forEach(item => item.remove());
// }

// Завдання 7
// Наведено список людей. Зроби можливість фільтрації (пошуку) за ім'ям або за прізвищем.

// const input = document.querySelector('.contactsFilter');
// const list = document.querySelector('.contacts');
// const items = [...list.children];

// input.addEventListener('input',handlerfindItem);

// function handlerfindItem(eve){
//     const valueInput = eve.currentTarget.value;
//     const item = items.filter((item)=>item.textContent.toLowerCase().includes(valueInput));
//     list.innerHTML = '';
//     list.append(...item);

// }

// Завдання 8
// Наведено список людей. Зроби можливість сортування списку за ім'ям та за прізвищем.

// const list = document.querySelector('.people');
// const listItems = document.querySelectorAll('.person');
// const sortByNameButton = document.querySelector('#sortByNameButton');
// const sortByLastNameButton = document.querySelector('#sortByLastNameButton');

// sortByNameButton.addEventListener('click', handlersortByName);
// sortByLastNameButton.addEventListener('click', handlersortByLastName);

// function handlersortByName(eve){
//    const sortedItems = [...listItems].sort((a, b) => a.textContent.localeCompare(b.textContent));
//    list.innerHTML = '';
//    list.append(...sortedItems);
// };

// function handlersortByLastName(eve){
//     const sortedItems = [...listItems].sort((a, b) => {
//         const firstValue = a.textContent.split(' ')[1].toLowerCase();
//         const secondValue = b.textContent.split(' ')[1].toLowerCase();
//         return firstValue.localeCompare(secondValue);
//     });

//     list.innerHTML = '';
//     list.append(...sortedItems);
//  };

// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

// const image = document.querySelector(".image");

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // "Lake and clouds"

// image.setAttribute("alt", "Amazing nature");

// console.log(image.getAttribute("alt")); // Amazing nature

// function add(a, b, c) {
//     const sum = a + b + c;
//     console.log(`Addition result equals ${sum}`);
//   }
//   add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const keys = Object.values(salaries);
//   for (let key of keys) {
//     totalSalary += key;
//     console.log(totalSalary);
//   }
//   console.log(keys);
//   // Change code above this line
//   return totalSalary;
// }

// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (let color of colors) {
//   hexColors.push(color.hex);
//   console.log(hexColors);
//   rgbColors.push(color.rgb);
//   console.log(rgbColors);
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const propValues = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       propValues.push(product[propName]);
//     }
//     console.log(propValues);
//   }

//   return propValues;

//   // Change code above this line
// }

// getAllPropValues("name");
// getAllPropValues("quantity");
// getAllPropValues("category");

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів

// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };

//   const accessType = book.isPublic ? "публічному" : "закритому";
//   const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accessType} доступі.`;
//   console.log(message);

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   const { hex, rgb } = color;
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line

//   let dataObj = {
//     category,
//     priority,
//     ...data,
//     completed,
//   };
//   console.log(dataObj);
//   // Change code above this line
// }

// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });

// Change code below this line

// function add(...args) {
//   console.log(args);
//   let total = 0;
//   for (let arg of args) {
//     total += arg;
//     console.log(total);
//   }
//   return total;
//   // Change code above this line
// }

// add(74, 11, 62, 46, 12, 36);

// Change code below this line
// function addOverNum(...args) {
//   let total = 0;

//   for (const arg of args) {
//     console.log(arg);
//     if (arg[0] > arg) {
//       total += arg;
//       console.log(total);
//     }
//   }

//   return total;
//   // Change code above this line
// }
// addOverNum(10, 12, 4, 11, 48, 10, 8);

// function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
//   }

//   // Передаємо інлайн функцію greet у якості колбека
//   registerGuest("Манго", function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`);
//   });

//   // Передаємо інлайн функцію notify у якості колбека
//   registerGuest("Полі", function notify(name) {
//     console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
//   });

// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;
//   console.log('Bolean', isRecipientAvailable);
//   console.log(Math.random());

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// processCall("Манго");

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Полі", takeCall, leaveHoloMessage);

// import axios from 'axios';
// import {
//    getAllCategories,
//    getTopBooks,
//    getSeparateCategories,
//    getBookInfo
// } from './api.js';

// const categoriesAll = "https://books-backend.p.goit.global/books/category-list";

// document.addEventListener('DOMContentLoaded', function () {
//   const libraryLinks = document.querySelectorAll('.library-link');
//   const existingCategoryLinks = document.querySelectorAll('.category-link');

//   libraryLinks.forEach((link) => {
//     link.addEventListener('click', async (event) => {
//       event.preventDefault();
//       const selectedCategory = link.dataset.category;
//       try {
//         const response = await axios.get(`https://books-backend.p.goit.global/books/category?category=${selectedCategory}`);
//         renderContent(selectedCategory, response.data);
//       } catch (error) {
//         console.error('Error fetching books:', error);
//         renderError();
//       }
//     });
//   });

//   existingCategoryLinks.forEach((link) => {
//     link.addEventListener('click', async (event) => {
//       event.preventDefault();
//       const selectedCategory = link.dataset.category;
//       try {
//         const response = await axios.get(`https://books-backend.p.goit.global/books/category?category=${selectedCategory}`);
//         renderContent(selectedCategory, response.data);
//       } catch (error) {
//         console.error('Error fetching books:', error);
//         renderError();
//       }
//     });
//   });
// });

// function renderContent(category, books) {
//   const contentContainer = document.querySelector('.content-container');

//   let booksMarkup = '';
//   if (books.length === 0) {
//     booksMarkup = '<p>No books found in this category.</p>';
//   } else {
//     books.forEach(book => {
//       booksMarkup += createMarkup(book);
//     });
//   }

//   const categoryMarkup = `<h2>${category}</h2>`;
//   contentContainer.innerHTML = categoryMarkup + booksMarkup;
// }

// function createMarkup(book) {
//   return `
//     <div class="book">
//       <img src="${book.book_image}" alt="${book.title}" />
//       <p>${book.title} by ${book.author}</p>
//     </div>
//   `;
// }

// function renderError() {
//   const contentContainer = document.querySelector('.content-container');
//   contentContainer.innerHTML = '<p>An error occurred while fetching books.</p>';
// }

// getAllCategories();
// getTopBooks();
// getSeparateCategories('Combined Print and E-book Fiction');
// getBookInfo('some_book_id');

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   const totalPrice = message.split(" ").length * pricePerWord;
//   console.log(totalPrice);
//   // Change code above this line
// }

// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);

// function slugify(title) {
//   // Change code below this line

//   let lowerTitle = title.toLowerCase();
//   let arrayTitle = lowerTitle.split(" ");
//   let slugTitle = arrayTitle.join("-");

//   //   console.log(slugTitle);
//   return slugTitle;
//   // Change code above this line
// }

// slugify("Arrays for begginers");
// slugify("English for developer");

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let concatArray = firstArray.concat(secondArray);
//   console.log(concatArray);
//   if (concatArray.length > maxLength) {
//     return concatArray.slice(0, maxLength);
//   } else {
//     return concatArray;
//   }

//   // Change code above this line
// }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);

// function calculateTotal(number) {
//   // Change code below this line
//   let totalCount = 0;

//   for (let i = 0; i <= number; i += 1) {
//     console.log(i);
//     totalCount += i;
//     console.log(totalCount);
//   }
//   return totalSum;
//   // Change code above this line
// }

// calculateTotal(18);

// function findLongestWord(string) {
//   // Change code below this line
//   let longerWord = " ";
//   let words = string.split(" ");
//   console.log(words);
//   for (let word of words) {
//     console.log(longerWord);
//     if (word.length > longerWord.length) {
//       longerWord = word;
//     }
//   }
//   return longerWord;
// }

// // Change code above this line

// findLongestWord("The quick brown fox jumped over the lazy dog");

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     console.log(i);
//     numbers.push(i);
//     console.log(numbers);
//   }
//   // Change code above this line
//   return numbers;
// }

// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);

// function filterArray(numbers, value) {
//   // Change code below this line
//   let newArray = [];
//   for (let number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   }
//   console.log(newArray);
//   return newArray;

//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([12, 24, 8, 41, 76], 38);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const keys = Object.values(salaries);
//   console.log(keys);
//   for (const key of keys) {
//     totalSalary += key;
//   }
//   console.log(totalSalary);
//   // Change code above this line
//   return totalSalary;
// }

// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     // console.log(product.name);
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
//   // Change code above this line
// }
// getProductPrice("Radar");
// getProductPrice("Grip");
// getProductPrice("Engine");

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price * product.quantity;
//     }
//   }
//   // Change code above this line
// }
// calculateTotalPrice("Blaster");
// calculateTotalPrice("Radar");

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// function add(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   console.log(total);
// }

// add(74, 11, 62, 46, 12, 36);

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   // додавання зілля newPotion (вже об'єкт) в масив, але тільки, якщо такого зілля ще немає
//   // якщо зілля вже є, повертається рядок
//   addPotion(newPotion) {
//     const potionNames = this.potions.map((potion) => potion.name);
//     console.log(potionNames);
//     if (potionNames.includes(newPotion.name)) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   // видалення об'єкта зілля з ім'ям potionName з масиву
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);
//     if (potionIndex !== -1) {
//       this.potions.splice(potionIndex, 1);
//     }

//     if (!potionIndex) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potion = this.potions.find((potion) => potion.name === oldName);

//     if (!potion) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     potion.name = newName;
//   },
// };
// atTheOldToad.getPotions();
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);
// console.log(tags);

// // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// // Це стандартна практика, якщо callback-функція досить велика.

// // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// // то створюємо її і записуємо їй значення 0.
// // В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = (tags) => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line
  orderedItems.forEach(function (orderedItem, index) {
    totalPrice += orderedItem;
  });

  // Change code above this line
  return totalPrice;
}
