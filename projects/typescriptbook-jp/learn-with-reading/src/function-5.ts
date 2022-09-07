/* ================================= */
/* this parameter                    */
/* ================================= */

// class Male {
//   private name: string;

//   public constructor(name: string) {
//     this.name = name;
//   }

//   public toString(): string {
//     return `Monsieur ${this.name}`;
//   }
// }

// class Female {
//   private name: string;

//   public constructor(name: string) {
//     this.name = name;
//   }

//   public toString(this: Female): string {
//     return `Madame ${this.name}`;
//   }
// }

// const male: Male = new Male("Frédéric");
// const female: Female = new Female("Frédérique");

// // console.log(male.toString());
// // console.log(female.toString());

// const maleToStr: () => string = male.toString;
// const femaleToStr: (this: Female) => string = female.toString;

// console.log(maleToStr());
// console.log(femaleToStr());
// // The 'this' context of type 'void' is not assignable to method's 'this' of type 'Female'.

// class Male {
//   // ...
//   toString() {
//     return `Monsieur ${this.name}`;
//   }
// }
// // TypeError: Cannot read property 'name' of undefined

/* ================================= */
/* destructuring                     */
/* assignment parameter              */
/* ================================= */

// function foo({ a, b }) {
//   console.log(a, b);
// }
// foo({ a: 1, b: 2, c: 3 });

// function foo({ a: x, b: y }) {
//   console.log(x, y);
// }
// foo({ a: 1, b: 2 });

// function bar([a, b]) {
//   console.log(a, b);
// }
// console.log(bar([1, 2, 3]));

// const foo = ({ a, b }) => {};
// const bar = ([a, b]) => {};

// function foo({ a, b }: { a: number; b: number }) {}
// //                   ^^^^^^^^^^^^^^^^^^^^^^^^^^型注釈

// function bar([num1]: number[]) {}
// // (parameter) num1: number

// // noUncheckedIndexedAccess
// function bar([num1]: number[]) {}
// // (parameter) num1: number | undefined

// function bar([num1, num2]: [number, number]) {}

// javascript
// function foo({ a }) {
//   console.log(a);
// }
// function bar([a]) {
//   console.log(a);
// }
// foo({}); // undefined
// bar([]); // undefined

// typescript
// function foo({ a }: { a: number }) {}
// function bar([a]: [number]) {}
// foo({}); // error
// bar([]); // error

// function foo({ a = 0 }) {
//   //             ^^^既定値の指定
//   console.log(a);
// }
// function bar([a = 0]) {
//   //            ^^^既定値の指定
//   console.log(a);
// }
// foo({}); // 0
// bar([]); // 0

// function foo({ a = 0 }: { a?: number | string }) {}
// // (parameter) a: string | number

// function foo({ a = 0 }) {}
// // (parameter) a: number

// function foo({ a, b } = { a: 0, b: 0 }) {
//   console.log(a, b);
// }
// foo();
// foo({ a: 1 });
// function bar([a, b] = [0, 0]) {
//   console.log(a, b);
// }
// bar();
// bar([1]);

// //                ................型注釈の位置
// function foo({ a }: { a?: number } = { a: 0 }) {}
// //                                 ^^^^^^^^^^既定値の位置

// type Obj = { a?: number; b?: number };
// function foo({ a = 0, b = 0 }: Obj = {}) {
//   console.log(a + b);
// }
// foo(); // 0
// foo({}); // 0
// foo({ a: 1 }); // 1
// foo({ a: 1, b: 2 }); // 3

// function bmi({ height, weight }: { height: number; weight: number }) {}

// // プロパティ名と同じ変数
// const height = 170;
// const weight = 65;

// // プロパティ名を省略しない呼び出し
// bmi({ height: height, weight: weight });

// // プロパティ名を省略した呼び出し
// bmi({ weight, height });
