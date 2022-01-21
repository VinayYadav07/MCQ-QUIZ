
function check(){
let ans1 = document.quiz.question1.value;
let ans2 = document.quiz.question2.value;
let ans3 = document.quiz.question3.value;
let ans4 = document.quiz.question4.value;
let ans5 = document.quiz.question5.value;
let result = document.querySelector('#result');
let final = document.querySelector('#final');
let quiz = document.getElementById('quiz');

    let count = 0;
    if(ans1 =="Mahatma Gandhi"){
        count++;
    }
    if(ans2 =="Dr. Rajendra Prasad"){
        count++;
    }
    if(ans3 =="Charles Babbage"){
        count++;
    }
    if(ans4 =="Asia"){
        count++;
    }
    if(ans5 =="1"){
        count++;
    }
    quiz.style.display="none";
    if(count > 3){
        result.innerHTML="Your score is "+count+" out of 5.";
        final.innerHTML="Final Call: Yes";
    }
    else if(count < 2){
        result.innerHTML="Your score is "+count+" out of 5.";
        final.innerHTML="Final Call: No";
    }
    else{
        result.innerHTML="Your score is "+count+" out of 5.";
        final.innerHTML="Final Call: Maybe";
    }
}