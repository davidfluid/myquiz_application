let points = [0]
const paraText = document.getElementById("score")
localStorage.clear();

const radio_invisible = document.getElementById("invisible") // invisible radio button 
const radio_invisible1 = document.getElementById("invisible1") // invisible radio button 
const radio_invisible2 = document.getElementById("invisible2") // invisible radio button 
const radio_invisible3 = document.getElementById("invisible3") // invisible radio button 
const radio_invisible4 = document.getElementById("invisible4") // invisible radio button 

const text_result = document.getElementById("result") // result span element
const text_result1 = document.getElementById("result1") // result span element
const text_result2 = document.getElementById("result2") // result span element
const text_result3 = document.getElementById("result3") // result span element
const text_result4 = document.getElementById("result4") // result span element

const pointsFromLocalStorage = JSON.parse( localStorage.getItem("points") )

radio_invisible.checked = "true";
radio_invisible.style.display = 'none';

radio_invisible1.checked = "true";
radio_invisible1.style.display = 'none';

radio_invisible2.checked = "true";
radio_invisible2.style.display = 'none';

radio_invisible3.checked = "true";
radio_invisible3.style.display = 'none';

radio_invisible4.checked = "true";
radio_invisible4.style.display = 'none';

function correct_ans1(){ // q1: correct answer
text_result.textContent = "Correct answer!"

points.push(1)
localStorage.setItem("points", JSON.stringify(points) )

localStorage.setItem("key1", "1");

let sum = 0;
for (let i = 0; i<points.length; i++){
sum+=Number(localStorage.getItem("key"+i))
paraText.innerText = "Your Score: "+sum+"/5"
}

}


function wrong_ans1(){ //q1: wrong answer
text_result.innerText = "Wrong answer!"
points.push(0)
localStorage.setItem("points", JSON.stringify(points) )

localStorage.setItem("key1", "0");

let sum = 0;
for (let i = 0; i<points.length; i++){
sum+=Number(localStorage.getItem("key"+i))
paraText.innerText = "Your Score: "+sum+"/5"
}

}


function correct_ans2(){ // q2: correct answer
text_result1.textContent = "Correct answer!"

points.push(1)
localStorage.setItem("points", JSON.stringify(points) )
localStorage.setItem("key2", "1");

let sum = 0;
for (let i = 0; i<points.length; i++){
sum+=Number(localStorage.getItem("key"+i))
paraText.innerText = "Your Score: "+sum+"/5"
}

}


function wrong_ans2(){ //q2: wrong answer
text_result1.innerText = "Wrong answer!"
points.push(0)
localStorage.setItem("points", JSON.stringify(points) )

localStorage.setItem("key2", "0");

let sum = 0;
for (let i = 0; i<points.length; i++){
sum+=Number(localStorage.getItem("key"+i))
paraText.innerText = "Your Score: "+sum+"/5"
}

}


function correct_ans3(){ // q3: correct answer
text_result2.textContent = "Correct answer!"

points.push(1)
localStorage.setItem("points", JSON.stringify(points) )
localStorage.setItem("key3", "1");

let sum = 0;
for (let i = 0; i<points.length; i++){
sum+=Number(localStorage.getItem("key"+i))
paraText.innerText = "Your Score: "+sum+"/5"
}

}


function wrong_ans3(){ //q3: wrong answer
text_result2.innerText = "Wrong answer!"
points.push(0)
localStorage.setItem("points", JSON.stringify(points) )

localStorage.setItem("key3", "0");

let sum = 0;
for (let i = 0; i<points.length; i++){
sum+=Number(localStorage.getItem("key"+i))
paraText.innerText = "Your Score: "+sum+"/5"
}


}


function correct_ans4(){ // q4: correct answer
text_result3.textContent = "Correct answer!"

        points.push(1)
        localStorage.setItem("points", JSON.stringify(points) )

localStorage.setItem("key4", "1");

let sum = 0;
for (let i = 0; i<points.length; i++){
sum+=Number(localStorage.getItem("key"+i))
paraText.innerText = "Your Score: "+sum+"/5"
}


}


function wrong_ans4(){ //q4: wrong answer
text_result3.innerText = "Wrong answer!"
        points.push(0)
        localStorage.setItem("points", JSON.stringify(points) )


localStorage.setItem("key4", "0");

let sum = 0;
for (let i = 0; i<points.length; i++){
sum+=Number(localStorage.getItem("key"+i))
paraText.innerText = "Your Score: "+sum+"/5"
}

}


function correct_ans5(){ // q5: correct answer

text_result4.textContent = "Correct answer!"
points.push(1)
localStorage.setItem("points", JSON.stringify(points) )

localStorage.setItem("key5", "1");

let sum = 0;
for (let i = 0; i<points.length; i++){
sum+=Number(localStorage.getItem("key"+i))
paraText.innerText = "Your Score: "+sum+"/5"
}
}


function wrong_ans5(){ //q5: wrong answer


text_result4.innerText = "Wrong answer!"
points.push(0)
localStorage.setItem("points", JSON.stringify(points) )

localStorage.setItem("key5", "0");

let sum = 0;
for (let i = 0; i<points.length; i++){
sum+=Number(localStorage.getItem("key"+i))
paraText.innerText = "Your Score: "+sum+"/5"
}
}



/*
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
console.log("Refresh clicked")
window.location.href = './index.html';
radio_invisible.checked = "true";
radio_invisible.style.display = 'none';
} */
