// // {
// // let a = 9
// // console.log('inner', a);

// // }
// // console.log('outer', a);

// // {
// // const a=87
// // console.log('inner', a);

// // }
// // console.log('outer', a);

// // {
// // var a=56
// // console.log('inner', a);

// // }
// // console.log('outer', a);

// const nums = [4, 5, 7, 8, 10, 33, 0]
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2) {
//         console.log(nums[i]);

//     }
// }
// let sum = 0
// for (let i = 0; i < nums.length; i++) {
//     sum *= nums[i];
//     console.log('sum', sum);
// }


// for (let i = 1; i < 4; i++) {
//     console.log (nums[i]);

// }

// let sum1 = 0
// for (let i = 0;  )
const users = [
    {
        id: 1,
        name1: 'Malxaz',
        gender: 'Male',
        age: 49,
    },
    {
        id: 2,
        name1: 'Zaman',
        gender: 'Male',
        age: 36,
    },
    {
        id: 3,
        name1: 'Lamiye',
        gender: 'Female',
        age: 34,

    },
    {
        id: 4,
        name1: 'Qurban',
        gender: 'Male',
        age: 58,

    },
    {
        id: 1,
        name1: 'Nina',
        gender: 'Female',
        age: 30,
    }
]
sum = 0
let result = users.filter(item => item.gender == 'Female')
console.log('result', result);

let result1 = users.map(item => sum += item.age)
console.log('result1', result1);

let result3 = users.filter(item => item.age > 25)
console.log('result3', result3);

let result4 = users.map(item => item.age *= 10)
console.log('result4', result4);

