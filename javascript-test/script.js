// REVERSE ARRAY
let arr1 = [1, 4, 6, 7];
let reversedArr = [];
for (let i = arr1.length; i >= 0; i--) {
  if (arr1[i] !== undefined) {
    reversedArr = [arr1[i], ...reversedArr];
  }
}
console.log("reversedArray:", reversedArr);

let arr2 = [7, 4, 2, 1];
let reversedArr2 = [];
for (let i = arr2.length; i >= 0; i--) {
  if (arr2[i] !== undefined) {
    reversedArr2 = [arr2[i], ...reversedArr2];
  }
}
console.log("reversedArray2", reversedArr2);

let arr3 = [5];
let reversedArr3 = [];
for (let i = arr3.length - 1; i >= 0; i--) {
  reversedArr3 = [arr3[i], ...reversedArr3];
}
console.log("reversedArray3", reversedArr3);

//SUM ARRAY
let sumArray = [8, 3, 9, 2, 5];
let total = 0;
for (let i = 0; i < sumArray.length; i++) {
  total += sumArray[i];
}
console.log("sumArray", total);

let sumArray2 = [1, 1, 1, 1, 1];
let total2 = 0;
for (let i = 0; i < sumArray2.length; i++) {
  total2 += sumArray2[i];
}
console.log("sumArray2", total2);

let sumArray3 = [0, 0, 0];
let total3 = 0;
for (let i = 0; i < sumArray3.length; i++) {
  total3 += sumArray3[i];
}
console.log("sumArray3", total3);

let sumArray4 = [5, 7];
let total4 = 0;
for (let i = 0; i < sumArray4.length; i++) {
  total4 += sumArray4[i];
}
console.log("sumArray4", total4);

let sumArray5 = [8];
let total5 = 0;
for (let i = 0; i < sumArray5.length; i++) {
  total5 += sumArray5[i];
}
console.log("sumArray5", total5);
// LINEAR SEARCH
let linearSearch = [8, 3, 9, 2, 5];
let cari = 3;
let hasil = undefined;
for (let i = 0; i < linearSearch.length; i++) {
  if (linearSearch[i] === cari) {
    hasil = cari;
  }
}
console.log("linearSearch", hasil);

let linearSearch2 = [2, 6, 7, 4, 1];
let cari2 = 4;
let hasil2 = undefined;
for (let i = 0; i < linearSearch2.length; i++) {
  if (linearSearch2[i] === cari2) {
    hasil2 = cari2;
  }
}
console.log("linearSearch2", hasil2);

let linearSearch3 = [2, 6, 7, 5, 1];
let cari3 = 9;
let hasil3 = undefined;
for (let i = 0; i < linearSearch3.length; i++) {
  if (linearSearch3[i] === cari3) {
    hasil3 = cari3;
  }
}
console.log("linearSearch3", hasil3);
// FIZZ BUZZ ARRAY
let fizzBuzzArray = [8, 3, 9, 2, 5];
let result = [];
for (let i = 0; i < fizzBuzzArray.length; i++) {
  if (fizzBuzzArray[i] % 3 === 0 && fizzBuzzArray[i] % 5 === 0) {
    result[i] = "FizzBuzz";
  } else if (fizzBuzzArray[i] % 3 === 0) {
    result[i] = "Fizz";
  } else if (fizzBuzzArray[i] % 5 === 0) {
    result[i] = "Buzz";
  } else {
    result[i] = fizzBuzzArray[i];
  }
}
console.log("FizzBuzzArray", result);

let fizzBuzzArray2 = [3, 4, 6, 7, 9];
let result2 = [];
for (let i = 0; i < fizzBuzzArray2.length; i++) {
  if (fizzBuzzArray2[i] % 3 === 0 && fizzBuzzArray2[i] % 5 === 0) {
    result2[i] = "FizzBuzz";
  } else if (fizzBuzzArray2[i] % 3 === 0) {
    result2[i] = "Fizz";
  } else if (fizzBuzzArray2[i] % 5 === 0) {
    result2[i] = "Buzz";
  } else {
    result2[i] = fizzBuzzArray2[i];
  }
}
console.log("FizzBuzzArray2", result2);

let fizzBuzzArray3 = [4, 5, 9, 15, 19];
let result3 = [];
for (let i = 0; i < fizzBuzzArray3.length; i++) {
  if (fizzBuzzArray3[i] % 3 === 0 && fizzBuzzArray3[i] % 5 === 0) {
    result3[i] = "FizzBuzz";
  } else if (fizzBuzzArray3[i] % 3 === 0) {
    result3[i] = "Fizz";
  } else if (fizzBuzzArray3[i] % 5 === 0) {
    result3[i] = "Buzz";
  } else {
    result3[i] = fizzBuzzArray3[i];
  }
}
console.log("fizzBuzzArray3", result3);

let fizzBuzzArray4 = [2, 4, 7, 8, 1];
let result4 = [];
for (let i = 0; i < fizzBuzzArray4.length; i++) {
  if (fizzBuzzArray4[i] % 3 === 0 && fizzBuzzArray4[i] % 5 === 0) {
    result4[i] = "FizzBuzz";
  } else if (fizzBuzzArray4[i] % 3 === 0) {
    result4[i] = "Fizz";
  } else if (fizzBuzzArray4[i] % 5 === 0) {
    result4[i] = "Buzz";
  } else {
    result4[i] = fizzBuzzArray4[i];
  }
}
console.log("FizzBuzzArray4", result4);

// GET 3&5 NUMBER
let getNumber = [8, 3, 9, 2, 5];
let resultNumber = [];
for (let i = 0; i < getNumber.length; i++) {
  if (getNumber[i] % 3 === 0 || getNumber[i] % 5 === 0) {
    resultNumber[resultNumber.length] = getNumber[i];
  }
}
if (resultNumber.length === 0) {
  resultNumber = null;
}
console.log("getNumber", resultNumber);

let getNumber2 = [3 ,4 ,6 ,7 ,9]
let resultNumber2 = []
for (let i = 0; i < getNumber2.length; i++){
  if (getNumber2[i] % 3 === 0 || getNumber2[i] % 5 === 0){
    resultNumber2[resultNumber2.length] = getNumber2[i];
  }
}
if(resultNumber2.length === 0){
  resultNumber2 = null
}
console.log("getNumber2", resultNumber2)

let getNumber3 = [4 ,5 ,9 ,15 ,19]
let resultNumber3 = []
for(let i = 0; i < getNumber3.length; i++){
  if (getNumber3[i] % 3 === 0 || getNumber3[i] % 5 === 0){
    resultNumber3[resultNumber3.length] = getNumber3[i]
  }
}
if(resultNumber3.length === 0){
  resultNumber3 = null
}
console.log("getNumber3", resultNumber3)

let getNumber4 = [2 ,4 ,7 ,8 ,1]
let resultNumber4 = []
for (let i = 0; i < getNumber4.length; i++){
  if(getNumber4[i] % 3 === 0 || getNumber4[i] % 5 === 0){
    resultNumber4[resultNumber4.length] = getNumber4[i]
  }
}
if(resultNumber4.length === 0){
  resultNumber4 = null
}
console.log("getNumber4", resultNumber4)

// PALIANDROME

// MAX & MIN

//   GET 2D ARRAY

//   SUM 2D ARRAY

//   MAX MIN 2D ARRAY
