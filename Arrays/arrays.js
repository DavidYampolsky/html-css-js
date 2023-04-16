function arr2ndPwr(arr){
    const arr2 = []
    for (const i in arr){
        arr2[i]=arr[i]*arr[i]
        console.log(arr[i],arr2[i])
    }
}
const arr1=[]

for (let i=0;i>-1;i++){
    let x = prompt('enter an array of numbers, to stop press anything else')
    if (isNaN(x)) {
        break
    }
    arr1[i]=x
}
arr2ndPwr(arr1)