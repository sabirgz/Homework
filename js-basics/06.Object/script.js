// //Object

// const student = {
//     username: `Sabir`,
//     lastname: `Zeynalov`,
//     age: 32,
//     uni: `DSXA`,
//     loc: `Laqodekhi, Georgia`
// }
// console.log(student);

// const student2 = {
//     usrnm: `islam`,
//     lstnm: `zeynalsoy`,
//     yash: 30,
//     unv: `AAHM`,
//     loc: `Russia, Balashikha`
// }
// console.log(student2);

const student = {
    firstname: `Sabir`,
    lastname: `Zeynalov`,
    'father-name': 'Qurban',
    99: 20,
    year: 2018,
    uni: 'DSXA',
    isAdmin: true,
    fin: undefined,
    tax: null,
    address: {
        city: "Baku",
        address: {
            test: 'test'
        },
        country: 'Azerbaijan',
        extra: {
            street: 'Tusi 183'
        }
    },
    email: 'sabirgz@code.edu.az'

}
console.log(student.firstname);
console.log(student.lastname);
console.log(student["father-name"]);
console.log(student[99]);
console.log(student.year);
console.log(student.uni);
console.log(student.isAdmin);
console.log(student.fin);
console.log(student.tax);
console.log(student.address.city);
console.log(student.address.address.test);
console.log(student.address.country);
console.log(student.address.extra);
console.log(student.address.extra.street);
console.log(student.email);
console.log(Object.keys(student));
console.log(Object.values(student));

student.personalInfo = {}
student.salary = '10000'

console.log('student', student);





