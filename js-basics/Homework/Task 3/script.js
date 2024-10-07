////////////// TASK 1 //////////////
// 1.Sum all the numbers in 'arr1'
const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
let sum = arr1.reduce((acc, current) => acc + current);
console.log('summary', sum);


// Sum using a for-loop
let sum1 = 0;
for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i]

}
console.log('summary', sum1);


//Sum using a for of
let sum2 = 0;
for (const arrSummary of arr1) {
    sum2 += arrSummary
}
console.log('summary', sum2);
console.log(' ');


// 2.Add two numbers (10,88) to end of arr1 (push methods)
arr1.push(10, 88);
console.log('push', arr1);
console.log(' ');


// 3.Remove first two numbers from arr1
let spliceArr1 = arr1.splice(0, 2)
console.log('splice', arr1);
console.log(' ');


// 4.Add three numbers (0,9,11) in front of arr1(unshift)
arr1.unshift(0, 9, 11);
console.log('unshift', arr1);
console.log(' ');


// 5.Remove four numbers in front of arr1(shift)
//by callin` arr1 4 times
let shiftArr1 = arr1.shift()
arr1.shift()
arr1.shift()
arr1.shift()
console.log('shift', arr1);
console.log(' ');


//by callin` in a loop
for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];

}
console.log('loop', arr1);
console.log(' ');



////////////// TASK 2 //////////////
const arr2 = ["Sabir", "Fatime", "Rufet", 'Mehman', 'Fatime', 'Gunel', "Fatime", "Cavid", 'Ramin', "Ali", "Polad"]
// // 1.Console values from "Rufet" to "Ali"
arr2Splice = arr2.splice(0, 2)
arr2Pop = arr2.pop()
console.log(arr2);
console.log(' ');


// 2.Change Mehman to Fidan
const i = arr2.indexOf('Mehman');
if (i !== -1) {
    arr2[i] = 'Fidan';
}
console.log(arr2);
console.log(' ');


// 3.Console each name with map
arr2.map(cs305 => console.log(cs305));
console.log(' ');


// 4.Console only names which is Fatime
const result = arr2.filter(cs305 => cs305 === 'Fatime');
console.log(result);
console.log(' ');

// 5.Console all names where name is Gunel, then change it to "Nihad"
const result1 = arr2.map(cs305 => {
    if (cs305 === "Gunel") {
        console.log(cs305);
        return "Nihad";
    }
    return cs305;
})
console.log(result1);
console.log(' ');


// 6.Console last second value of arr2
result2 = arr2[arr2.length - 1];
console.log(result2);
console.log(' ');


// 7.Console length of arr2
console.log(arr2.length);
console.log(' ');



////////////// TASK 3 //////////////
const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]
// 1.Show only numbers
const numbers = arr3.filter(item => typeof item === 'number');
console.log(numbers);
console.log(' ');


// 2.Show only true values
const result3 = arr3.filter(item => item);
console.log(result3);
console.log(' ');


// 3.Show only false values
const result4 = arr3.filter(item => !item);
console.log(result4);
console.log(' ');

// 4.Show only strings
const result5 = arr3.filter(item => typeof item == 'string')
console.log(result5);
console.log(' ');


////////////// TASK 4 //////////////
const numbers1 = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]


// 1.Console (only even numbers)
const eveNumbers = numbers1.filter(item => item % 2 === 0);
console.log(eveNumbers);
console.log(' ');


// 2.Console (only odd numbers)

const oddNumbers = numbers1.filter(item => item % 2 !== 0);
console.log(oddNumbers);
console.log(' ');


////////////// TASK 5 //////////////
const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]
// 1.Console all values of arr4 -
// if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)
const result6 = arr4.map(item => typeof item === 'number' ? item + 10 : typeof item === "string" ? item + " " + "is string" : item + " " + "is falsy value");
console.log(result6);
console.log(' ');
// Example: [10,'true',false]
// Result: [20, "true is string", "false is falsy value"]

// 2.Sum all numbers of arr4

const result7 = arr4.reduce((acc, item) => typeof item === 'number' ? acc + item : acc, 0);
console.log(result7);
console.log(' ');

// 3.Count only the values that are true
const result8 = arr4.filter(item => item).length;
console.log(result8);
console.log(' ');

// 4.Count only the values that are string
const result9 = arr4.filter(item => typeof item === "string").length;
console.log(result9);
console.log(' ');


// 5.Count only the values that are false
const result10 = arr4.filter(item => !item).length;
console.log(result10);
console.log(' ');


////////////// TASK 6 //////////////
// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

let fullName = 'Zeynalov Sabir Qurban'
fullName1 = fullName.split("");
console.log(fullName1);
console.log(' ');

// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
// 3) Alinan yeni arrayi stringe cevirin(join)

let fArr = fullName.split(' ');

let initials = [fArr[0], fArr[1], fArr[2]];
let newInitials = [fArr[1], fArr[0], fArr[2]].join(' ');
console.log(newInitials);
console.log(' ');

let arr = [8, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin

let restCnt = arr.filter(num => num === 5).length;
console.log(restCnt);
console.log(' ');


//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
let restSum = arr.reduce((sum, num) => sum + num, 0);
console.log(restSum)
console.log(' ');

//6) arrayda tekrar olunan reqemleri artan sira ile duzun
function nmbrs(arr) {
    let rpnmbrs = [];
    arr.forEach(function (num, index) {
        if (arr.indexOf(num) !== index && rpnmbrs.indexOf(num) === -1) rpnmbrs.push(num);
    });
    rpnmbrs.sort(function (a, b) { return a - b; });
    return rpnmbrs;
}

console.log(nmbrs(arr));



//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
let mxNumb = Math.max(...arr);
let sumNumb = arr.filter(num => num === mxNumb).length;
console.log('ən böyük rəqəm', mxNumb, 'dir;', sumNumb, 'dəfə', 'təkrarlanır.');
console.log(' ');


//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
let namelngth = 'Sabir'.length;
let namelngth1 = arr.includes(namelngth);
console.log(namelngth, namelngth1);
console.log(' ');

//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
console.log("number:", arr.find(num => num % 3 === 2), "Index:", arr.findIndex(num => num % 3 === 2));
console.log(' ');

//10) arraydaki en boyuk reqemin ilk indexini tapin
let indexRslt = arr.indexOf(Math.max(...arr));
console.log(indexRslt);
console.log(' ');


//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
let index4 = [];
arr.forEach((num, index) => num === 4 && index4.push(index));
console.log(index4); // Nəticə: [18, 20]
console.log(' ');


//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
let Maxindex = arr.indexOf(5);
let LastIndex = arr.lastIndexOf(5);
console.log(Maxindex, LastIndex);
console.log(' ');


//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
let arR = arr.filter(num => num > 2);
let lenghtReslt = arr.length - arR.length;
console.log(arR, lenghtReslt);
console.log(' ');


//14) 7 reqeminin indexleri cemini tapin.
let sum7 = arr.reduce((sum, nmbr, index) => nmbr === 7 ? sum + index : sum, 0);
console.log(sum7);
console.log(' ');



///////////// TASK 7//////////////

let arR2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]


//QEYD - !!! Bu tasklarda arr2 istifade edilecekdir və hər bir algorithm funksiya daxilində yazılmalıdır...

// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin

function starT(arR2) {
    let result = [];
    for (let i = 0; i < arR2.length; i++) {
        if (arR2[i].name[0] === 't') {
            result.push(arR2[i]);
        }
    }
    return result;
}

console.log(starT(arR2));
console.log(' ');


// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
function stendT(arR2) {
    let count = 0;
    for (let i = 0; i < arR2.length; i++) {
        if (arR2[i].name[0] === 't' && arR2[i].name[arR2[i].name.length - 1] === 't') {
            count++;
        }
    }
    return count;
}

console.log(stendT(arR2));
console.log(' ');

// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
function endT(arR2) {
    let sum = 0;
    for (let i = 0; i < arR2.length; i++) {
        if (arR2[i].name[0] === 't' && arR2[i].name[arR2[i].name.length - 1] === 't') {
            sum += arR2[i].key;
        }
    }
    return sum;
}
console.log(endT(arR2));
console.log(' ');
// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
function rplcE(arR2) {
    for (let i = 0; i < arR2.length; i++) {
        if (arR2[i].name[arR2[i].name.length - 1] === 'e') {
            arR2[i].name = 'SuperDev';
        }
    }
    return arR2;
}

console.log(rplcE(arR2));
console.log(' ');

// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin

console.log(" ");


// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
function indexSqr2(arr) {
    let srted = arr.slice().sort((a, b) => b.name.length - a.name.length);
    let lngitem = srted[0];
    let lngindex = arr.indexOf(lngitem);
    return lngindex * lngindex;
}
console.log(indexSqr2(arR2))
console.log(" ");


// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.

function filternms2(arr) {
    let result = [];
    arr.forEach(item => {
        if (item.name.length === 4) {
            result.push(item);
        }
    });
    return result;
}
console.log(filternms2(arR2))
console.log(" ");


// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
function findnm2(arr) {
    let keys = arr.map(item => item.key);
    let maxKey = Math.max(...keys);
    return arr.find(item => item.key === maxKey).name;
}
console.log(findnm2(arR2))
console.log(" ");


//24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.



// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.