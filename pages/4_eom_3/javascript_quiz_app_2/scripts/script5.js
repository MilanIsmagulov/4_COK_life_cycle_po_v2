const anwserArr = [['определить потребности/ограничения бизнеса'], ['подробные технические спецификации, схемы архитектуры системы, ERD и т. д.'], ['руководства пользователя и учебные материалы'], ['отчеты об ошибках, тестовые примеры/скриптыотчеты об ошибках, тестовые примеры/скрипты'], ['отчет об отзывах пользователей']]; //Ответы в правильном порядке
const text = ["Сбор требований", "Проектирование", "Внедрение", "Тестирование", "Обслуживание и поддержка"]

const list = document.getElementById('list');
let listItems = [];
let dragStartIndex;

function reloadWindow(){
    window.location.reload();
}



let numberOfQuestion = 2; 
let numberOfQuestionSum = 13;

let textOfQuestionPlace = document.querySelector('#question_number_1')

textOfQuestionPlace.innerHTML = '<p>' + '<span>' + numberOfQuestion +  '. ' + '</span>'  + 'Сопоставьте каждую фазу жизненного цикла программного обеспечения с ее описанием:' + '</p>'

let stepMarkerPlace = document.querySelector('.step_marker');
console.log("stepMarkerPlace")
for (let i = 0; i < numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button_blue.svg";
    stepMarkerPlace.appendChild(markers);
}

for (let i = 0; i < numberOfQuestionSum-numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button.svg";
    stepMarkerPlace.appendChild(markers);
}

let stepPlaceDescription = document.querySelector('.number_description');
stepPlaceDescription.innerHTML = numberOfQuestion + '/' + numberOfQuestionSum;




createList2()

function createList2() {
    [...anwserArr]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((item, index) => {
        const listItem = document.createElement('li');

        listItem.setAttribute('id', index);
        listItem.innerHTML = `
    <div class="number">${text[index]} <img src="./content/marker_blue.png" alt="1"></div>
    <div class="item" draggable="true">${item} </div>
  `;
        listItems.push(listItem);
        list.appendChild(listItem);
    });

    addEventListeners();
}

function dragStart() {
    dragStartIndex = +this.closest('li').getAttribute('id');
}

function dragEnter() {
    this.classList.add('over');
}

function dragLeave() {
    this.classList.remove('over');
}

function dragOver(e) {
    e.preventDefault();
}

function dragDrop() {
    const dragEndIndex = +this.getAttribute('id');
    swapItems(dragStartIndex, dragEndIndex);

    this.classList.remove('over');
}

function swapItems(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.item');
    const itemTwo = listItems[toIndex].querySelector('.item');

    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
}

let checkAnwserButton = document.querySelector('#check_button_1')
let reloadButton = document.querySelector('#check_button_2')
let nextButton = document.querySelector('#check_button_3')
checkAnwserButton.classList.remove('disabled_button')
reloadButton.classList.add('disabled_button')
nextButton.classList.add('disabled_button')


localStorage.setItem('answer_' + numberOfQuestion, JSON.stringify({questionPlace: true}));
function checkAnwser5() {
    checkAnwserButton.classList.add('disabled_button')
    reloadButton.classList.remove('disabled_button')
    nextButton.classList.remove('disabled_button')
    listItems.forEach((item, index) => {
        const itemName = item.querySelector('.item').innerText.trim()
        
        if (itemName !== anwserArr[index].join(',')) {
            item.classList.add('incorrect')
            localStorage.setItem('answer_' + numberOfQuestion, JSON.stringify({questionPlace: false}));

        } else {
            
            item.classList.remove('incorrect')
            item.classList.add('correct')
        }
    });
}

function addEventListeners() {
    const draggables = document.querySelectorAll('.item');
    const dragListItems = document.querySelectorAll('.list li');

    draggables.forEach((draggable) => {
        draggable.addEventListener('dragstart', dragStart);
    });

    dragListItems.forEach((item) => {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
    });
}