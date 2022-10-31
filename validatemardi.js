function validateEmail(email) {
    //1) אורך המחרוזת גדול מ0
    //2) @ המחרוזת מכילה 
    //3) .com המחרוזת מסתיימת ב
    return email.length > 0
        && email.indexOf('@') != -1
        && (email.endsWith('.com') || email.endsWith('.co.il'));
}
function validateFirstName(name){
    return name.length > 0;
}
function validatelastName(lastName){
    return lastName.length > 0;
}

function validatesThoughts(thoughts){
    return thoughts.length > 0;
}

const btnSend = document.getElementById('btn-send');
const emailInput = document.getElementById('email');
const emailFeedback = document.getElementById('email-feedback');
const firstName = document.getElementById('first-name-input');
const nameFeedback = document.getElementById('name-feedback');
const lastName = document.getElementById('last-name-input');
const lastNameFeedback = document.getElementById('last-name-feedback');
const thoughts = document.getElementById('thoughts-input');
const thoughtsFeedback = document.getElementById('thoughts-feedback');

btnSend.addEventListener('click', function(){
    //1) get the email from the input (value)
    let email = emailInput.value;

    //2) check that email is valid
    let isEmailValid = validateEmail(email); //true/false

    //3) if email is VALID send the form
    //   else -> unhide error message
    if(isEmailValid){
       
         emailFeedback.classList.add('hidden');
    }else{
      
        emailFeedback.classList.remove('hidden');
    }
      //1) get the  name from the input (value)
    let name = firstName.value;
       //2) check that name is valid
    let isNameValid = validateFirstName(name);
//3) if last name is VALID hide error message
    //   else -> unhide error message
     if(isNameValid){
       
         nameFeedback.classList.add('hidden');
    }else{
      
        nameFeedback.classList.remove('hidden');
    }
 //1) get the last name from the input (value)
     let lastNameInput = lastName.value;
 //2) check that last name is valid
    let isLastNameValid = validatelastName(lastNameInput);
//3) if last name is VALID hide error message
    //   else -> unhide error message
     if(isLastNameValid){
       
         lastNameFeedback.classList.add('hidden');
    }else{
      
        lastNameFeedback.classList.remove('hidden');
    }
 //1) get the thoughts from the input (value)
     let thoughtsInput = thoughts.value;
//2) check that thoughts is valid
    let isthoughtsValid = validatesThoughts(thoughtsInput);
//3) if thoughts is VALID hide error message
    //   else -> unhide error message
     if(isthoughtsValid){
        
         thoughtsFeedback.classList.add('hidden');
    }else{
       
        thoughtsFeedback.classList.remove('hidden');
    }
});