// dran&drop 1
let checkAnwserButton = document.querySelector('#control_button_2')
let reloadButton = document.querySelector('#control_button_3')
let nextButton = document.querySelector('#control_button_4')
// let 
const anwserArr = ['Планирование и анализ требований', 'Проектирование', 'Разработка', 'Тестирование', 'Поддержка',];


function reloadPage(){
    window.location.reload();

}

localStorage.removeItem('data1')

let numberOfQuestion = 3; 
let numberOfQuestionSum = 13;
let numberOfEOM = 3;

let questionPlace = 'Расположите этапы жизненного цикла программного обеспечения по порядку:';
let questionHead = document.querySelector('#number_question_head');

questionHead.innerHTML = '<span>' + numberOfQuestion + '. ' + '</span>' + questionPlace;

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


let stepPlaceDescription = document.querySelector('.number_question_ten');
stepPlaceDescription.innerHTML = '<strong>' + numberOfQuestion + '/' + numberOfQuestionSum + '</strong>';


const list = document.getElementById('list');
let storeItems = [];
let listItems = [];
let dragStartIndex;

init();

function init() {
    localStorage.getItem('data1') ? loadList() : createList()
}


function createList() {
    [...anwserArr]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((item, index) => {
        const listItem = document.createElement('li');

        listItem.setAttribute('id', index);
        listItem.innerHTML = `<div class="item" draggable="true">${item}</div>`;

        var num = document.createElement('span');
        num.setAttribute('class', 'number');
        num.innerHTML = `${index+1}`;
        document.getElementsByClassName("numbers")[0].appendChild(num);

        listItems.push(listItem);
        list.appendChild(listItem);
    });


    for (i in listItems) {
        storeItems.push(i);
    }

    localStorage.setItem('data1', JSON.stringify(storeItems));

    // addEventListeners();
}


function loadList() {
    fromStore();

    [...storeItems]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('id', index);
        listItem.innerHTML = `<span class="number">${index + 1}</span><div class="item" draggable="true">${item}</div>`;
        listItems.push(listItem);
        list.appendChild(listItem);
    });

    [...storeItems]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('id', index);
        listItem.innerHTML = `<span class="number">${index + 1}</span><div class="item" draggable="true">${item}</div>`;
        listItems.push(listItem);
        list.appendChild(listItem);
    });
    // addEventListeners()
}


function toStore() {
    localStorage.setItem('data1', JSON.stringify(storeItems));
}


function fromStore() {
    storeItems = JSON.parse(localStorage.getItem('data1'));
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

    storeItems = []
    for (i of listItems) {
        
        storeItems.push(i.children[1].innerText);
    }
    localStorage.setItem('data1', JSON.stringify(storeItems));
}

function getCurrentList() {
    
}


function checkAnwser() {
    listItems = document.getElementsByClassName("list");
    console.log(listItems[0]);

    let i = 0;

    for (item of listItems[0].children){
        itemText = item.getElementsByTagName('div')[0].innerText;
        let index = i;

        if (itemText !== anwserArr[index]) {
            item.classList.add('incorrect')
            localStorage.setItem('answer_' + numberOfQuestion, JSON.stringify({questionPlace: false}));
            checkAnwserButton.classList.add('disabled_button')
            if (numberOfEOM != 3){
                reloadButton.classList.remove('disabled_button')
            }
            nextButton.classList.remove('disabled_button')
        } else {
            localStorage.setItem('answer_' + numberOfQuestion, JSON.stringify({questionPlace: true}));
            item.classList.remove('incorrect')
            item.classList.add('correct')
            checkAnwserButton.classList.add('disabled_button')
            if (numberOfEOM != 3){
                reloadButton.classList.remove('disabled_button')
            }
            nextButton.classList.remove('disabled_button')
        }
        i++;
    }

    listItems.forEach((item, index) => {
        itemText = item.getElementsByTagName('div')[0].innerText;
        console.log(index);
        console.log(itemText);
        console.log("_________");



        
    });
}


function addEventListeners() {
    const draggables = document.querySelectorAll('.item');
    const dragListItems = document.querySelectorAll('.list li');

    draggables.forEach((draggable) => {
        // draggable.addEventListener('dragstart', dragStart);
    });

    dragListItems.forEach((item) => {
        // item.addEventListener('dragover', dragOver);
        // item.addEventListener('drop', dragDrop);
        // item.addEventListener('dragenter', dragEnter);
        // item.addEventListener('dragleave', dragLeave);
    });
}

function openPopUp(){
    let popUpWindow = document.querySelector('#popup1')
    popUpWindow.classList.remove('close')
}

function closePopUp(){
    let popUpWindow = document.querySelector('#popup1')
    popUpWindow.classList.add('close')
}



// var el = [el0,el1];
var el = document.getElementById('list');

var sortable = new Sortable(el, {
    swap: true,
    swapClass: "highlight",
    animation: 150,
});


let backBtn = document.querySelector('#check_button_0')
let nextBtn = document.querySelector('#check_button_2')

if (numberOfQuestion === 1){
    backBtn.classList.add('disabled_button');
} else {
    backBtn.setAttribute('onclick', `location.href='../javascript_quiz_app_${numberOfQuestion-1}/index.html'`);
    backBtn.classList.remove('disabled_button');
}

if (numberOfQuestion !== numberOfQuestionSum){
    nextBtn.setAttribute('onclick', `location.href='../javascript_quiz_app_${numberOfQuestion+1}/index.html'`);
} else {
    nextBtn.setAttribute('onclick', `location.href='../javascript_result_page/index.html'`);
}
