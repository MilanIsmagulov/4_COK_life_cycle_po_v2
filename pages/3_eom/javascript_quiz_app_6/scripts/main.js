let Otvet = document.querySelector('#check_button_1');
let Povtor = document.querySelector('#check_button_2');
let Dalee = document.querySelector('#check_button_3');

Povtor.classList = ('disabled_button');
Povtor.addEventListener('click' , function(){
    window.location.reload();
});

let numberOfEOM = 3;
let numberOfQuestion = 6; 
let numberOfQuestionSum = 13;

let stepPlaceDescriptionSum = document.querySelector('#discription_plc_sum')
stepPlaceDescriptionSum.innerHTML = `<b>${numberOfQuestion}/${numberOfQuestionSum}</b>`

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


function checkAnswer() { 
    const answer = document.getElementById("answer").value;
    const answerClass = document.getElementById("answer");
    if (answer === "Проектирование") {
        answerClass.classList.add('correct');
        localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: true}));
    } else { 
        answerClass.classList.add('incorrect');
        localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: false}));
    } 
    Otvet.classList.add('disabled_button');
    if (numberOfEOM !== 3){
        Povtor.classList.remove('disabled_button');
    }
    Dalee.classList.remove('disabled_button');
} 

function openPopUp(){
    let popUpWindow = document.querySelector('#popup1')
    popUpWindow.classList.remove('close');
}

function closePopUp(){
    let popUpWindow = document.querySelector('#popup1')
    popUpWindow.classList.add('close');
}


let backBtn = document.querySelector('#check_button_0')
let nextBtn = document.querySelector('#check_button_3')

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

