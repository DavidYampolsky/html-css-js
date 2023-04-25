

const insertBtn = document.querySelector("#insert-btn");
const input = document.querySelector('#task')

const list = []

const renderList = () => {
    const listElem = document.querySelector("#list");
    listElem.innerHTML = '';
    list.forEach(listItem => {
        const li = document.createElement('li');
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

