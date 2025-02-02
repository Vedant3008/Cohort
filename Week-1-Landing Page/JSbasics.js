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
