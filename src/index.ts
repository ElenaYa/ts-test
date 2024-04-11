import { concatenation } from './concatenation';

const button = document.querySelector('button')!;
const input = document.querySelector('input')!;

if (button && input) {
  button.addEventListener('click', () => {
    concatenation(input.value, 'hello!');
  });
}






// function add(num1: number, num2: number) {
//     return num1 + num2;

// }
// add(1, 1);

// const numbers: number[] = [1,2,3,5,6,8];

// const user: {name: string; age: number} = {
//     name: "Bob",
//     age: 12,
// };
// type User = {
//     name: string;
//     age: number | string;
//     hobby: string;
// };
// const user: User = {
//     name: "Bob",
//     age: 12,
//     hobby: "play",
// };
// user.age = "15";
// type eventType = "lesson" | "deadline";
// const event: eventType = "deadline";

// type size = "small" | "medium" | "large";

// let age: any = 10;
// age = "Bob";
// age = false;

// enum Sizes {
//     small = "small",
//     medium = "medium",
//     large = "large",
// }
// const button: size = "large";

// function add(num1: number, num2: number): void {
//      console.log(num1 + num2);
// }
// add(2,3);

// function greeting (user: User): void {
//      console.log(`Hello ${user.name}`);
// }

// function userConstructor (name: string, age: number, hobby: string): User {
//     return {
//         name,
//         age,
//         hobby,
//     }
// } 

// type Car = {
//     color: string;
//     price
// }
// const Car = {
//     color: "red",
//     price: 1000,
//     currency: "UAN",
//     start () {
//         console.log("Start");
//     }
// }