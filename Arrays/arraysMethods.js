/*1
function arrPwr2(arr){
        const arr2 = []    
    for (i in arr){
                arr2[i]=Math.pow(arr[i],2)    
    }    
    return arr2
}
let arr1=[]
for (let i=0;i>-1;i++){
    let x=parseInt(prompt('enter any array of numbers,to stop press anything else'))
    if (!x){
        break    
    }    
arr1[i]=x    
}
let newArr1 = []*/

//newArr1=arrPwr2(arr1)

/*arr1.map(function(num, index)
{    
    newArr1[index]=Math.pow(num,2)
})
console.log(newArr1)*/
    
/*2
function list(listArr,sort)
{    if (sort==='up'|| sort==='down')
{        
    listArr.sort()    
}    
if (sort==='down'){
        listArr.reverse()    
}    
console.log(listArr)
}
let shopList=[]
for (let i=0;i>-1;i++){
        let x=prompt('enter one by one what do you want to by, to stop press enter')
        if (!x){
            break
    }    
shopList[i]=x
    }
 sortify=prompt("write 'up' to sort the list, 'down' if you want to sort it packwards")
 list(shopList,sortify)
 */
/*3
function last(arr,x){
        if (!x){
                x=1
        }
        const arr1 = arr.filter(function(item,index)
    {
                return index>=arr.length-x    
    })    
    return arr1}
    let numsArr=[]
    for (let i=0;i>-1;i++){
            let x=prompt('enter one by one numbers, to stop press enter')
            if (!x){
                    break
            }    
        numsArr[i]=x
        }
     let num=prompt('how many numbers from the end are supouse to stay?')
     //const arr2 = last(numsArr,num)
     //const arr2= numsArr.slice(numsArr.length-num,numsArr.length)
     console.log(arr2)
     */

/*4
const names=[]
for (let i=0;i>-1;i++){
        let x=prompt('enter one by one names, to stop press enter')
        if (!x){
                break
        }
        names[i]=x
    }
 const arr1 = names.filter(function(item,index)
 {    
    return names[index]===names[index].toLowerCase()          })
    console.log(arr1)
    */


/*function reverseStr(str){
    const arr=str.split("")
    return arr.reverse()    
}
/*let str1 = prompt('write string')
str1 = reverseStr(str1)
console.log(str1)*/

/*6
function paliWords(words){
    let reversedWords=[ЫУВ ]
    for (i in words){
        reversedWords[i]=words[i].reverse()
    }
    console.log(words,reversedWords)
}
let words=[]
for (let i=0;i>-1;i++){
        let x=prompt('enter one by one words, to stop press enter')
        if (!x){
            break
        }
        words[i]=x
    }
paliWords(words)

//console.log(words,reversedWords)
/*let paliWords = words.filter(function(item,index){
    let arr1=item
    let arr2=reverseStr(words[item])
    return arr1 === arr1
})
console.log(paliWords)*/
/*
function order(){
    const word = ('up or down?')
    let arr = []
    for (const i=1; i>5; i++){
        arr[i]=prompt('what us the '+i+' number?')
    }

}
*/
/*10

arr1=arr.slice(0,arr.length)
arr1=arr.splice(0,arr.length)
arr1=arr.map(function (num){
    return num
})
*/