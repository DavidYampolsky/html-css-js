const temp = parseInt(prompt('tell me the temperature'))

if(temp > 30){
    console.log('stay home it is hot')
}
else if(temp<0){
    console.log('stay home it is cold')
}
else console.log('have a nice day')

const day = prompt('enter todays day')
const hour = parseInt(prompt('what is the hour'))

if(day === 'friday' && hour>12){
    console.log('get ready for shabbat')
}
else if(hour > 21 && hour < 6){
    console.log('go to sleap')
}
else console.log('have a nice day')