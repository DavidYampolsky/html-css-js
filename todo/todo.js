

const insertBtn = document.querySelector("#insert-btn");
const input = document.querySelector('#task')
const Toggle = document.createElement("button")
Toggle.type="button"
Toggle.innerHTML='Toggle'
document.body.append(Toggle)
let color = 0
Toggle.addEventListener('click',(e) => {
color
})
const list = []

const renderList = () => {
    const listElem = document.querySelector("#list");
    listElem.innerHTML = '';
    list.forEach(listItem => {
        const li = document.createElement('li');
        li.style.background="gray";
        li.innerText = listItem.value;
        li.id = listItem.id;
        listElem.append(li);
    });
}

insertBtn.addEventListener('click', (e) => {
    list.push({
        id: Date.now(),
        value: input.value
    })
    renderList();
})

