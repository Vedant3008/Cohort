//var is the older way to declare variable (avoid)

//let helps to declare variables (reassignable but not in same scope)
let user = "vedant";
console.log(user);

//const helps to declare variable that can not be reassignable
const num = 7;
console.log(num);

//function declaration
function mul(a,b){
   let finalSol=a*b;
   return finalSol;
}
//function call
let sol1 = mul(3,5);
let sol2 = mul(5,8);

console.log(sol2);

//Assignment 2
let age = 16;
function canVote(age){
    let isEligible=age>=18;
    return isEligible;
}

let answer = canVote(age);
console.log(answer);

//OR you can use if....else
function canVote(age){
    if(age>18){
        return true;
    }
    else{
        return false;
    }
}
let ans=canVote(14);
console.log(ans)

//for loop
let students = ["Vedant","Jay","Kirtan","Darsh"];

for(let i = 0; i < 4; i++){
    console.log(students[i]);
}

//while loop
let value=5;
let j=0;
while(j<value){
    console.log(j);
    j++;
}

//Assignment
function sum(n){
    let total = 0;
    for (let i=1; i<=n; i++){
        total = total + i;
    }
    return total;
}
console.log(sum(5));


//Assignment 
function greet(users){
    console.log("Hi Mr " + users.name+ " your age is "+ users.age + " and gender is " + users.gender);
    if (users.age>18){
        console.log("You can Vote");
    }
    else{
        console.log("You can not Vote")
    }
}

let users = {
    name: "Vedant",
    age: 16,
    gender: "Male"
}
greet(users);

//Array Assignment without filter
const arr=[23,45,67,45,34,232,56,432,2];
const result=[];
function checkEven(arr){
    for (let i=0; i<arr.length; i++){
        if(arr[i]%2===0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(checkEven(arr));


//Array Assignment with filter
const lst=[1,2,34,5,6,4,31,456,6765,432];

function values(n){
    return n%2===0;
}

const evenNumbers = lst.filter(values);
console.log(evenNumbers);


// Assignment: Create a function that takes an array of objects as input,
// and return the users whose age>18 and are male
function solve(arr){
    let arr2 = [];
    for (i=0; i<arr.length; i++){
        if (arr[i].age>18 && arr[i].gender==="male"){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
const voters = [
    {
        name: "Vedant",
        age: 21,
        gender: "male"
    }, {
        name: "Sonam",
        age: 21,
        gender: "female"
    }, {
        name: "Rahul",
        age: 11,
        gender: "male"
    }
];
const eligibleVoters = solve(voters);
console.log(eligibleVoters);

//Using filter
function vote(users) {
    return users.filter(person => person.age > 18 && person.gender === "male");
}

const person = [
    {
        name: "Vedant",
        age: 21,
        gender: "male"
    }, {
        name: "Sonam",
        age: 21,
        gender: "female"
    }, {
        name: "Rahul",
        age: 11,
        gender: "male"
    }
];

const eligibleUsers = vote(person);
console.log(eligibleUsers);