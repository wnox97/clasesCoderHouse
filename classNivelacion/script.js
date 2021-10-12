const _name = 'Clase';

const variable = `Hola ${_name}`;

variable.includes('Hola');

const message = 'variable a filtrar';

const number = 3000;

number.toLocaleString('en-EN'); // 3.000,00 ;

number.toString(); // 3000
if (message.includes('mala palabra')) {
  message.replace('mala palabra', '---');
}

let a = 3;

// logInformation(information);

const information = 'este es el texto 2';

// function
function logInformation() {
  const information = 'valor fijo de una función';
}

logInformation();
// function with parameters
// use parameter with default value

function logInformation2(text, otherValue, ...param) {
  console.log(text);
}

logInformation();
logInformation2(information, 'otherValues');

// Arrow function

// Funcion para crear un producto

const clickMe = () => {
  try {
    // cuerpo de la funcion para crear el producto
    const textImage = document.getElementById('texd').value;
    console.log(textImage);
  } catch (error) {
    console.log(error);
    alert(error);
  } finally {
    console.log('stop')
  }
};

// Classes management, function and tips

class User {
  constructor(name, lastName, email, id) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.id = id;
  }
  get Name() {
    return this.name;
  }
  get LastName() {
    return this.lastName;
  }
  get Email() {
    return this.email;
  }
  get Id() {
    return this.id;
  }

  set Name(text) {
    return (this.name = text);
  }
  set LastName(text) {
    return (this.lastName = text);
  }
  set Email(text) {
    return (this.email = text);
  }
  set Id(text) {
    return (this.id = text);
  }

  logInformation() {
    const object = {
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      id: this.id,
    };
    console.table(object);
  }
}

const user = new User('wilmer', 'montilla', 'wilmer@gmail.com', '1');

const arrayUser = [];

arrayUser.push(user);

user.LastName = 'Montilla setter';

user.logInformation();
// array management, function and tips
// use the arrays functions to map, filter, find and others

const array = [1, 2, 3, 4, 5, 6, 7, 1];

const sumValues = array.reduce((acum, value) => acum + value);
console.log(sumValues); // 28

const filterArray = array.filter((item) => item === 1);
console.log(filterArray); // [1, 1];

array.forEach((item) => console.log(item));

const mapArray = array.map((item) => item);
console.log(mapArray); // [1, 2, 3, 4, 5, 6, 7, 1]

const everyArray = array.every((item) => item === 3);
console.log(everyArray); // false

const includeArray = array.includes(3);
console.log(includeArray); // true

const someArray = array.some((item) => item === 2);
console.log(someArray); // true

const sliceArray = array.slice(0, 5);
console.log(sliceArray); // [1, 2, 3, 4, 5]

const findArray = array.find((item) => item === 2);
console.log(findArray); // 2

const numbersArray = [5, 100, 300, 20, 15, 25];
const sort = numbersArray.sort(function (a, b) {
  return a - b;
});
console.log(sort); // [5, 15, 20, 25, 100, 300];

// example sort with objects in array

var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 },
];
const sortItem = items.sort(function (a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
console.log(sortItem);

// Object management, function and tips

const _user = {
  name: 'wilmer',
  lastName: 'montilla',
  id: '1',
};

// otro objecto
const copyUser = { ..._user };

copyUser.name = 'wilmer 3';

const otherObject = Object.assign({}, _user, copyUser);
console.log(otherObject);
console.log(_user);

let [e, f, d] = [1, 2, 3];

const { name, lastName, id } = _user;

const otherUser = { name, lastName, id };

// const Person = {
//   name: 'John Snow',
//   age: 29,
//   sex: 'male',
//   materialStatus: 'single',
//   address: {
//     country: 'Westeros',
//     state: 'The Crownlands',
//     city: 'Kings Landing',
//     pinCode: '500014',
//     obj: {
//       key: '3',
//     },
//   },
// };

// const {
//   address: {
//     state,
//     pinCode,
//     city,
//     obj: { key },
//   },
//   name,
// } = Person;

// console.assert(address);
// console.log(key);
// console.log(Person.address.obj.key)
// console.log(name, state, pinCode); // John Snow The Crownlands 500014
// console.log(city); // ReferenceError
