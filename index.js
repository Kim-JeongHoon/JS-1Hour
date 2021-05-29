/*
let name1 = 'Kim';
console.log(name1);

let firstName = 'Kim', lastName= 'JeongHoon';
*/
/*
const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
*/
/*
let name1 = 'Kim'; // String Literal
let age = 31; // Number Literal
let isApproved = false; // Boolean Literal
let firstName = undefined;
let selectedColor = null; 
*/
/*
typeof name1
"string"
typeof age
"number"
typeof isApproved
"boolean"
typeof firstName
"undefined"
typeof selectedColor
"object"
firstName은 유형도 정의되지 않음.
반면, selectedColor는 오브젝트 유형으로 되어있음.
자바 스크립트가 동적언어인것과 관련 있음.
*/
/*
let person = {
    name1: 'Kim',
    age : 31
};
// Dot Notation
person.name1 = 'Lee';

// Bracket Notation
let selection = 'name1';
person[selection] = 'Mary';

console.log(person.name1);
점표기법과 대괄호 표기법 차이
대괄호표기법은 변수를 이용하여 내용을 바꿀 수 있다.
*/
/*
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors );
배열은 동적으로 할당되므로 추가 가능, 다른 속성 추가 가능
배열의 유형은 객체이다. 
*/

function greet(name2, lastName){
    console.log('Hello '+ name2 + ' ' +lastName);
}

function square(number){
    return number*number;
}

console.log(square(2)); //함수 자체를 바로 넣을 수 있다. 


