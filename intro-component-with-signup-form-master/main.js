let submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    let fName = document.getElementById('input-fname');
    let lName = document.getElementById('input-lname');
    let email = document.getElementById('input-email');
    let pass = document.getElementById('input-password');
    let error = document.getElementsByClassName('text-msg');
    console.log('clicked');
    if( fName.value =='' ){
        let fnameMsg = document.querySelector('.fname-Msg')
        addError(fName,"First Name cannot be empty",fnameMsg);

    }else{
        let errorName = document.querySelector(".fname-Msg")
        removeError(fName,errorName);
    }
    if( lName.value =='' ){
        let lnameMsg = document.querySelector('.lname-Msg')
        addError(lName,"Last Name cannot be empty",lnameMsg);

    }else{
        let errorName = document.querySelector(".lname-Msg")
        removeError(lName,errorName);
    }
    if( email.value ==='' ){
        let emailMsg = document.querySelector('.email-Msg')
        addError(email,"Email cannot be empty",emailMsg);

    }else if(!validateEmail(email.value)){
        let emailMsg = document.querySelector('.email-Msg')
        addError(email,"Looks like this is not an Email",emailMsg);

    }else{
        let errorName = document.querySelector(".email-Msg")
        removeError(email,errorName);
    }
    if( pass.value =='' ){
        let passMsg = document.querySelector('.pass-Msg')
        addError(pass,"Password cannot be empty",passMsg);

    }else{
        let errorName = document.querySelector(".pass-Msg")
        removeError(pass,errorName);
    }
    




});
function addError(addName,msg,msg1){
    addName.classList.add("error-cont");
    msg1.innerText = msg;
    msg1.style.color = "red";
    msg1.style.fontStyle = "italic";
    
}
function removeError(removeName,pName){
    removeName.classList.remove("error-cont");
    pName.innerText = "";
}

function validateEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }