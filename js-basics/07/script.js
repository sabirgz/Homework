// // // // // // {
// // // // // // let a = 9
// // // // // // console.log('inner', a);

// // // // // // }
// // // // // // console.log('outer', a);

// // // // // // {
// // // // // // const a=87
// // // // // // console.log('inner', a);

// // // // // // }
// // // // // // console.log('outer', a);

// // // // // // {
// // // // // // var a=56
// // // // // // console.log('inner', a);

// // // // // // }
// // // // // // console.log('outer', a);

// // // // // const nums = [4, 5, 7, 8, 10, 33, 0]
// // // // // for (let i = 0; i < nums.length; i++) {
// // // // //     if (nums[i] % 2) {
// // // // //         console.log(nums[i]);

// // // // //     }
// // // // // }
// // // // // let sum = 0
// // // // // for (let i = 0; i < nums.length; i++) {
// // // // //     sum *= nums[i];
// // // // //     console.log('sum', sum);
// // // // // }


// // // // // for (let i = 1; i < 4; i++) {
// // // // //     console.log (nums[i]);

// // // // // }

// // // // // let sum1 = 0
// // // // // for (let i = 0;  )
// // // // const users = [
// // // //     {
// // // //         id: 1,
// // // //         name1: 'Malxaz',
// // // //         gender: 'Male',
// // // //         age: 49,
// // // //     },
// // // //     {
// // // //         id: 2,
// // // //         name1: 'Zaman',
// // // //         gender: 'Male',
// // // //         age: 36,
// // // //     },
// // // //     {
// // // //         id: 3,
// // // //         name1: 'Lamiye',
// // // //         gender: 'Female',
// // // //         age: 34,

// // // //     },
// // // //     {
// // // //         id: 4,
// // // //         name1: 'Qurban',
// // // //         gender: 'Male',
// // // //         age: 58,

// // // //     },
// // // //     {
// // // //         id: 1,
// // // //         name1: 'Nina',
// // // //         gender: 'Female',
// // // //         age: 30,
// // // //     }
// // // // ]
// // // // sum = 0
// // // // let result = users.filter(item => item.gender == 'Female')
// // // // console.log('result', result);

// // // // let result1 = users.map(item => sum += item.age)
// // // // console.log('result1', result1);

// // // // let result3 = users.filter(item => item.age > 25)
// // // // console.log('result3', result3);

// // // // let result4 = users.map(item => item.age *= 10)
// // // // console.log('result4', result4);


// // // const users = ["Sabir, Fatime"]
// // // users.push("Ali")
// // // console.log("users", users);

// // const numbers = [9, 5, 3, 11, 12, 33, 22, 9, 10, 0, 8]

// // //1 numbers.reverse() 
// // //2 numbers.sort((a, b) => (a - b))
// // //3 numbers.sort((a, b) => (b - a))
// // //4 let result = numbers.splice(3,4)
// // //5 let Sabir = numbers.find(item => item === 11) 
// // //console.log(Sabir);
// // let nms = numbers.filter(a,b => a-b > 10)
// // console.log(numbers);

// const numbrs = [9,5,3,11,12,33,22,9]

// // const numbs2 = [44,58,69,113]
// // const plus = [...numbrs, ...numbs2]
// // console.log(plus);
// let sum = 0 
// numbrs.map (item)

const numbers = [9, 5, 3, 11, 12, 33, 22, 9, 11, 10, 0, 8]
const list = ['6', '3', true, 'a', undefined, false, 10, 11, 5]
const list2 = ['a', ['f'], 7, ['d', [false]]]

//1 . check "numbers" if any item is greater than 5 (some):
const rslt = numbers.some((item) => item > 2)
console.log(rslt); // true

//2 . check "number" if all is greater than 5 (every):

const result = numbers.every((item) => item > 2)
console.log(result); //false

//3. flat 'list2' deeps(2) (flat)
const flt = list2.flat(1)
console.log(flt);

//4. flat 'list2' deeps(infinity) (flat)

const flat = list2.flat(Infinity)
console.log(flat);

//5. sum all numbers (reduce)
const value = numbers.reduce((acc, item) => acc + item, 0)
console.log(value);

//6. sum only type number in 'list' (reduce)
const cavab = list.reduce((acc, item) => typeof item === "number" ? acc + item :  (acc), 0);
console.log(cavab);

