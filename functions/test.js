const num1 = 2
const num2 = 3
function add(num1,num2){
    console.log(num1+num2)
}
function multiply(num1,num2){
    console.log(num1*num2)
}
const operator = prompt('wich operator?')
if (operator === '+' || operator === 'add' || operator === 'חיבור'){
    add(num1,num2)
}
else if (operator === '*' || operator === 'multiply' || operator === 'כפל'){
    multiply(num1,num2)
}
else {
    console.log('something went wrong')
}