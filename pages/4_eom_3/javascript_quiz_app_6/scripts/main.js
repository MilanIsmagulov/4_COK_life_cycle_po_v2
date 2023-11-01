let Otvet = document.querySelector('#check_button_1');
let Povtor = document.querySelector('#check_button_2');
let Dalee = document.querySelector('#check_button_3');

Povtor.classList = ('disabled_button');
Povtor.addEventListener('click' , function(){
    window.location.reload();
});


let numberOfQuestion = 6; 
let numberOfQuestionSum = 13;


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
    // const answer2 = document.getElementById("answer2").value; 
    // const answerClass2 = document.getElementById("answer2")
    // if (answer2 === "программирования") {
    //     answerClass2.classList.add('correct');
    // } else { 
    //     answerClass2.classList.add('incorrect');
    // } 
    // const answer3 = document.getElementById("answer3").value; 
    // const answerClass3 = document.getElementById("answer3")
    // if (answer3 === "ECMAScript") {
    //     answerClass3.classList.add('correct');
    // } else { 
    //     answerClass3.classList.add('incorrect');

    // } 
    Otvet.classList.add('disabled_button');
    Povtor.classList.remove('disabled_button');
    Dalee.classList.remove('disabled_button');
} 