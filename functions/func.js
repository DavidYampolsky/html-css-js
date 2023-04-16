//function nameAndSurename(name,surename){
//    alert(name+' '+surename)
//}
//const n1 = prompt('enter your name')
//const n2 = prompt('enter your surename')
//nameAndSurename(n1,n2)
//function biggestNum(n1,n2,n3){
 //   if (n1>n2){
//        n2=n1
 //   }
 //   if (n2>n3){
 //       n3=n2
 //   }
 //   alert('the biggest is ' +n3)
//}
//const num1= prompt('enter first number')
//const num2= prompt('enter second number')
//const num3= prompt('enter third number')
//biggestNum(num1,num2,num3)
//function plusMinusZero(num){
//    if (num>0){
//        alert('חיובי')
//    }
//        else if (num<0){
//            alert('שלילי')
//        }
//        else alert('אפס')
//}
//for (i=1; i<5; i++){
//    const number=prompt('enter the '+i+' number')
//    plusMinusZero(number)
//}
//function yourAge(age){
//    if (age>=18){
//        alert('you can enter')
//    }
//    else alert('you cannot enter')
//}
//function nameAndAge(name,age1){
//    alert('hallo '+name)
//    yourAge(age1)
//}
//for (i=0;i<2;i++){
//    const yourName= prompt('enter your name please')
//    const yourAge= prompt('enter your age please')
//    nameAndAge(yourName,yourAge)
//}
function evenOdd(num){
    if(num%2 === 0){
        alert('זוגי')
    }
    else {
        alert('אי זוגי')
    }
}
for (i=1; i<4;i++){
    const num1 = prompt('enter the '+i+' number')
    evenOdd(num1)
}