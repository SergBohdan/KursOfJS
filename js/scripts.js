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

const image = document.querySelector(".image");

console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

console.log(image.hasAttribute("src")); // true

console.log(image.getAttribute("alt")); // "Lake and clouds"

image.setAttribute("alt", "Amazing nature");

console.log(image.getAttribute("alt")); // Amazing nature