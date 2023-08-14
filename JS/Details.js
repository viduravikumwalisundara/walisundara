let name;
let phone;
let email;
let cemail;
let cwpbtn = document.getElementById("cwp-btn");
function nameValid(){
  Name = document.getElementById("name").value;
    let nerror = document.getElementById("n-error");
    if(Name == ""){
     nerror.innerHTML="Name required";
     cwpbtn.disabled = true;
    }
    else{
        
        cwpbtn.disabled = false;
        nerror.innerHTML=" ";
    }
}
function phoneValid(){
    phone = document.getElementById("phone").value;
    let perror = document.getElementById("m-error");
    if(phone == ""){
     perror.innerHTML="Phone required";
     cwpbtn.disabled = true;
    }
    else{
        cwpbtn.disabled = false;
        perror.innerHTML=" ";
    }
}
function emailValid(){
    email = document.getElementById("email").value;
    let eerror = document.getElementById("e-error");
    if(email == ""){
      eerror.innerHTML="Email required";
      cwpbtn.disabled = true;
    }
    else{
        cwpbtn.disabled = false;
        eerror.innerHTML=" ";
    }
}
function cemailValid(){
    cemail= document.getElementById("cemail").value;
    let ceerror = document.getElementById("ce-error");
    if(cemail == ""){
     ceerror.innerHTML="Confirm email required";
     cwpbtn.disabled = true;
    }
    else{
        cwpbtn.disabled = false;
        ceerror.innerHTML=" ";
    }
}
window.addEventListener("load",init);
function init(){
    document.getElementById("summaryDate").textContent = localStorage.getItem("date");
    document.getElementById("summaryDuration").textContent = localStorage.getItem("du");
    document.getElementById("summaryForeignAdult").textContent = localStorage.getItem("fa");
    document.getElementById("summaryForeignChild").textContent = localStorage.getItem("fc");
    document.getElementById("summarySLAdult").textContent = localStorage.getItem("sla");
    document.getElementById("summarySLChild").textContent = localStorage.getItem("slc");
    document.getElementById("summaryInfant").textContent = localStorage.getItem("i");
    document.getElementById("summaryTotal").textContent = localStorage.getItem("tp");
}

