//trivia script file

const backgroundImgTrivia = document.getElementById('t-bg-img')
let index = 0;
const images = ['trivia1.jpg','trivia2.jpg','trivia3.jpg','trivia4.jpg'];

  console.log(images);
let z = 0;
backgroundImgTrivia.innerHTML = `<img src="images/trivia-images/${images[z]}" id="trivia-bg-img"></img>`
   
// changing background image every 4 seconds
setInterval(function(){
if( z < 3 ){
 z++;
    backgroundImgTrivia.innerHTML = `<img src="images/trivia-images/${images[z]}" id="trivia-bg-img"></img>`;
}
else{
    z= 0 ;
     backgroundImgTrivia.innerHTML = `<img src="images/trivia-images/${images[z]}" id="trivia-bg-img"></img>`;
     z++;
}

},4000);

//questions and answers

const questions = [
    {
question: " What is the The name of the day before  The Mardi Gras? ", answer:"Lundi Gras", choises: ["Orbit Grand","Baby Boom","Lundi Gras","Mundi Gras"]
},
{
question: " What is the signature Mardi Gras dessert? ", answer: "King cake", choises: ["Cheese croissant","Chocolatte muffin","Apple pie","King cake"]
},
{
question: " How many pounds of beads are thrown during an average New Orleans Mardi Gras celebration? ", answer: "25 million", choises: ["25 million","4000","7 billion","400,000"]
},
 {
question: " What is the most popular Mardi Gras saying? ", answer:"Laissez les bon temps rouler.", choises: ["Los muchachos","La nuit porte conseil","L'habit ne fait pas le moine","Laissez les bon temps rouler."]
},
 {
question: " What song is the anthem of Mardi Gras in New Orleans? ", answer:"If I Cease to Love", choises: ["Stairway To Heaven","Nothing Else Matters","If I Cease to Love","Smells Like Teen Spirit"]
},
 {
question: "What does purple signify during Mardi Gras? ", answer:"Justice", choises: ["Honor","Justice","Power","Faith"]
},

 {
question: " What does green signify during Mardi Gras? ", answer:"Faith", choises: ["Faith","Justice","Power","Love"]
},
{
question: " What does gold signify during Mardi Gras? ", answer:"Power", choises: ["Simpathy","Faith","Justice","Power"]
},
 {
question: " When was the first known New Orleans Mardi Gras parade? ", answer:"1837", choises: ["1837","1973","1492","1912"]
},
 {
question: " On average, how many people typically visit New Orleans for Mardi Gras every year? ", answer:"1.4 million", choises: ["0.5 million","20,000","1.4 million","10 million"]
},
];

// first question
const trivia = document.getElementById('trivia');
let score = 0;

//Trivia function

function showQuestion() {
   //show questins and answers inside html by index
trivia.innerHTML = `
     <h2 class="text-center trivia-heading"> ${questions[index].question} </h2>
  <button class="w-50 mx-auto btn btn-primary trivia-button">${questions[index].choises[0]}</button>
  <button class="w-50 mx-auto btn btn-secondary trivia-button">${questions[index].choises[1]}</button>
  <button class="w-50 mx-auto btn btn-success trivia-button">${questions[index].choises[2]}</button>
  <button class="w-50 mx-auto btn btn-info trivia-button">${questions[index].choises[3]}</button> `;

  let buttons = document.querySelectorAll ('#trivia .btn');
  buttons.forEach(b => b.addEventListener('click', (e) =>{
    if (e.target.innerHTML === questions[index].answer) {
        score += 10;
    }
index+=1;
//end page options-above and bellow 50
if (index===questions.length){
  if(score>50){
    
    trivia.innerHTML=`<h2 class="text-center trivia-heading">Well Done!!! your score is ${score}</h2>
   <a href="trivia.html" class="end-button">  <button class="w-50 mx-auto m-3 btn btn-primary trivia-button"> Start Over </button><a>
    <a href="MardiGra.html" class="end-button"> <button class="w-50 mx-auto m-3 btn btn-info trivia-button"> Return Home </button><a>
    `}
    else{
      trivia.innerHTML=`<h2 class="text-center trivia-heading">Nice try... your score is ${score}</h2>
     <a href="trivia.html" class="end-button"> <button class="w-50 mx-auto m-3 btn btn-danger trivia-button"> Start Over </button><a>
     <a href="index.html" class="end-button"> <button class="w-50 mx-auto m-3 btn btn-warning trivia-button"> Return Home </button><a>
   ` }
}
else{
showQuestion();
}
  } ));

}
showQuestion();


