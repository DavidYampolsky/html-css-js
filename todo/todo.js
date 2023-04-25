

const insertBtn= document.querySelector("#insert-btn");
const input=document.querySelector('#task')

const list =[]

const renderList = () => {
    
}

insertBtn.addEventListener('click', (e) => {
    list.push({
        id: Date.now(),
        value: input.value
    })
})
