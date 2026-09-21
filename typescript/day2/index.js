"use strict";
//TYPE INFERENCE AND  ANNOTATION
Object.defineProperty(exports, "__esModule", { value: true });
//Inference is the type of data passed to the variable first time it assign the data type same as data automatically
// Where as Annotation is the Data type is defined by us.
let a = 90;
a = 20;
console.log(a);
//Primitive Data Types
//String
let val = 'hello';
//boolean
let b = true;
//number
let c = 90;
//undefined
let h = undefined;
// bigInt
let g = 1345345n;
//symbol
let s = Symbol('Hello');
// Arrays and Tuples
//Array
let aar = [4, 5, 6, 7, 'hello', 'jio', undefined, null, true];
// here we also have to define which type of data should the array store
//  Any -  means any type of data
// Unknowm - Any type of data but it will cause problem while updating the data
//Never - Nothing should come
// let x: any = 'hello'; //It will not cause any type of error But we should not use it
// let y: unknown = 'Array';
// console.log(y.tOUpperCase());
// Here there will be error of type unknown which will be throw my typescript bcoz it doest know the type of the variable and
//we use it when we doesnt knew the type of data we will get from user or api
let z;
//Its usecase can be in When we delete and Insta post the variable will be assigned Never type
//means it it will never store anything
//Tuples
let arr2 = [2, 55, true, 'hello'];
let arr3 = [
    { name: 'Anuj' },
    { name: 'Riya' },
];
//# sourceMappingURL=index.js.map