//TYPE INFERENCE AND  ANNOTATION

//Inference is the type of data passed to the variable first time it assign the data type same as data automatically

// Where as Annotation is the Data type is defined by us.

let a: number = 90;
a = 20;

console.log(a);

//Primitive Data Types

//String

let val: string = 'hello';

//boolean

let b: boolean = true;

//number

let c: number = 90;

//undefined

let h: undefined = undefined;

// bigInt

let g: bigint = 1345345n;

//symbol

let s: Symbol = Symbol('Hello');

// Arrays and Tuples

//Array

let aar: any[] = [4, 5, 6, 7, 'hello', 'jio', undefined, null, true];

// here we also have to define which type of data should the array store

//  Any -  means any type of data

// Unknowm - Any type of data but it will cause problem while updating the data

//Never - Nothing should come

// let x: any = 'hello'; //It will not cause any type of error But we should not use it

// let y: unknown = 'Array';

// console.log(y.tOUpperCase());

// Here there will be error of type unknown which will be throw my typescript bcoz it doest know the type of the variable and
//we use it when we doesnt knew the type of data we will get from user or api

let z: never;

//Its usecase can be in When we delete and Insta post the variable will be assigned Never type
//means it it will never store anything

//Tuples

let arr2: [number, number, boolean, string] = [2, 55, true, 'hello'];

let arr3: [{ name: string }, { name: string }] = [
  { name: 'Anuj' },
  { name: 'Riya' },
];

//Enums - Options

enum Role {
  ADMIN,
  SUPER_ADMIN,
  USER,
}

let role: Role = Role.ADMIN;

//Union Types

let yolo: string | number | boolean = 'Rahul';

yolo = 90;

//Literal Types

type Status = 'Pending' | 'Success' | 'Error';

let status: Status = 'Pending';
