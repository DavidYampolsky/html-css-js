const temp = parselt(prompt('tell me the temperature'))

if(temp > 30){
    console.log('stay home it is hot')
}
else if(temp<0){
    console.log('stay home it is cold')
}
else console.log('have a nice day')
