////////////// TASK 1 //////////////

// 1.Multiply 12 with 8, and console the result:

console.log(12 * 8); //96
let result = 12 * 8;
console.log(result); //96


// 2.Divide 10 by 2 add result to variables x, and console x:

console.log(10 / 2);//5
let result1 = 10 / 2;
console.log(result1);//5


// 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.

let num1 = 20;
let num2 = 17;

console.log(num1 + num2);


/* 4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
  then add them to varibale name (info) and console info. */

const name1 = 'Sabir';
const surname = 'Zeynalov'
let birthYear = 1992;
let info = name1 + ' ' + surname + ' - ' + birthYear
console.log(info); // Sabir Zeynalov - 1992

// 5.Console the remainder(%) when 17 is divided by 12.


let result2 = 17 % 12
console.log(result2);

console.log(17 % 12);


// 6.Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again
//  and reassign value Gence, console result.

let cityName = 'Baku';
cityName = 'Gence'

console.log(cityName);

////////////// TASK 2 //////////////

console.log('test1', test); // undefined
{
    let test = "something"
    console.log('test2', test); // something
}
console.log('test3', test);  // undefined

console.log('test1', test);  // undefined
{
    var test = "something"
    console.log('test2', test); // something
}
console.log('test3', test); // something

////////////// TASK 3 //////////////

//Find the type of all the following cases

let name2 = "Ulfat";
console.log(typeof name2);

let surname1 = 'Zakirli';
console.log(typeof surname1);

let year = 2000;
console.log(typeof year);

year1 = "2000";
console.log(typeof year1);

let city;
console.log(typeof city);

let qualification = null;
console.log(typeof qualification);

let obj = { name: 'ulfat' };
console.log(typeof obj);

let arr = ['a', 'b', 'c'];
console.log(typeof arr);

////////////// TASK 4 //////////////
const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8];
// 1.Sum all the numbers in 'arr1'
// 2.Add two numbers (10,88) to end of arr1 (push methods)
// 3.Remove first two numbers from arr1
// 4.Add three numbers (0,9,11) in front of arr1(unshift)
// 5.Remove four numbers in front of arr1(shift)

//1 
d = 0;
i = 0;
for (; d < arr1.length;) {
    i = i + arr1[d];
    d = d + 1;
}
console.log(i);


//we use d to set the correct numbers for loop and write the correct index index of the numbers collected during the loop.   
//And i takes and adds the number from "arr1" in order in each loop.

// 2
arr1.push(10, 88);
console.log(arr1);

//I`ve used the push method to add the numbers to the end of the line.


//3
arr1.splice(0, 2);
console.log(arr1);

// We use splice method to remove any element in the scope. In our case we`ve used (0,2) to erase from arr1 lsit first two elements.

// 4
arr1.splice(0, 0, 0, 9, 11);
console.log(arr1);

//First two zero symbols shows that nothing have to remove. And others symbols means that this numbers must be add in front of the list. Here, the 3rd 0 symbol shows the index, where the adding must be started. 

// 5
arr1.splice(0, 5);
console.log(arr1);
//Same as the 3rd exercise.

////////////// TASK 5 //////////////
// 1.Create a object add your name, surname, age and city.
// 2.Then change name to "Jhon"
///////////////////////////////////////////////////////////////////////////////////////////

//1
const inObject = {
    firstName: "Sabir",
    lastName: "Zeynalov",
    age: 32,
    city: "Baku",
};

//2
inObject.firstName = 'John'
console.log(inObject);

const user = {
    email: "ulfat@gmail.com",
    info: {
        gender: "Male",
        loc: {
            city: "Baku",
            street: "Nizami 22",
            education: {
                "uni name": "ADNSU",
            },
        },
    },
};


// 3.console each value of user object
console.log(user.email);
console.log(user.info.gender);
console.log(user.info.loc.city);
console.log(user.info.loc.street);
console.log(user.info.loc.education['uni name']);

// 4.Console only keys of user

for (keys in inObject) {

console.log(keys);
} 

console.log(" ");

//5 
for (values in inObject) {
    console.log(inObject[values]);
  }
  //////////////////////////////////////////////////////////////////
  const mixedObject = {
    name: "Ulfat",
    age: 25,
    isStudent: false,
    hobbies: null,
    year: 2024,
    address: undefined,
    surname: "Zakirli",
    contactInfo: {
      email: "ulfat@example.com",
      phone: null,
    },
    scores: [98, 87, 92],
  };
  console.log(" ");
  
  
  // 6.Log only the 'keys' whose values are of type string
  // 7.Log only the 'keys' whose values are of type number
  // 8.Log only the 'keys' whose values are of type boolean
  // 9.Log only the 'keys' whose values are of type undefined
  // 10.Log only the 'keys' whose values are of type object
  // 11.Repeat (6,7,8,9,10) tasks but now log 'values'
  
  // 6
  i=0
  for (key in mixedObject) {
    type = typeof mixedObject[key];
    if ((type === 'string')) {
      console.log(key);
      i=i+1
      continue
    }else if(i=0) {
      console.log("no such value");
    }
      
  }
  console.log(" ");
  
  // 7
  i=0
  for (key in mixedObject) {
      type = typeof mixedObject[key];
      if ((type === 'number')) {
          console.log(key);
          i=i+1
      }else if(i=0){
          console.log("no such value");
      }
     
    
  }
  console.log(" ");
  
  // 8
  i=0
  for (key in mixedObject) {
    type = typeof mixedObject[key];
    if ((type === 'boolean')) {
      console.log(key);
      i=i+1
    }else if (i=0){
      console.log("no such value");
    }
  
  }
  console.log(" ");
  
  // 9
  i=0
  for (key in mixedObject) {
      type = typeof mixedObject[key];
      if ((type === 'underfined')) {
        console.log(key);
        i=i+1
      }else if(i=0){
          console.log("no such value");
      }
    }
    console.log(" ");
  
  // 10
  i=0
  for (key in mixedObject) {
      type = typeof mixedObject[key];
      if ((type === 'object')) {
        console.log(key);
        i=i+1
      }else if(i=0){
          console.log("no such value");
      }
    }
    console.log(" ");
  
  // 11
  
  i=0
  for (key in mixedObject) {
    type = typeof mixedObject[key];
    if ((type === 'string')) {
      console.log(key + ":" + mixedObject[key]);
      i=i+1
      continue
    }else if(i=0) {
      console.log("no such value");
    }
      
  }
  console.log(" ");
  
  i=0
  for (key in mixedObject) {
      type = typeof mixedObject[key];
      if ((type === 'number')) {
          console.log(key + ":" + mixedObject[key]);
          i=i+1
      }else if(i=0){
          console.log("no such value");
      }
     
    
  }
  console.log(" ");
  
  i=0
  for (key in mixedObject) {
    type = typeof mixedObject[key];
    if ((type === 'boolean')) {
      console.log(key + ":" + mixedObject[key]);
      i=i+1
    }else if (i=0){
      console.log("no such value");
    }
  
  }
  console.log(" ");
  
  i=0
  for (key in mixedObject) {
      type = typeof mixedObject[key];
      if ((type === 'undefined')) {
        console.log(key + ":" + mixedObject[key]);
        i=i+1
      }else if(i=0){
          console.log("no such value");
      }
    }
  console.log(" ");
  
  i=0
  for (key in mixedObject) {
      type = typeof mixedObject[key];
      if ((type === 'object')) {
        console.log(key + ":" + mixedObject[key]);
        i=i+1
      }else if(i=0){
          console.log("no such value");
      }
    }
  console.log(" ");
  
  i=0
  for (key in mixedObject) {
      type = typeof mixedObject[key];
      if ((type === '')) {
        console.log(key + ":" + mixedObject[key]);
        i=i+1
      }else if(i=0){
          console.log("no such value");
      }
    }
  console.log(" ");





