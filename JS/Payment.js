let cnumber;
let expdate;
let cvccvv;
let nameonc;
let cwpbtn = document.getElementById("cwp-btn");
function cnumberValid(){
  cnumber = document.getElementById("cn").value;
    let cnerror = document.getElementById("cn-error");
    if(cnumber == ""){
     cnerror.innerHTML="Card number required";
     cwpbtn.disabled = true;
    }
    else{
        cwpbtn.disabled = false;
        cnerror.innerHTML=" ";
    }
}
function exdateValid(){
    expdate = document.getElementById("expd").value;
    let expderror = document.getElementById("exd-error");
    if(expdate == ""){
     expderror.innerHTML="Expire date required";
     cwpbtn.disabled = true;
    }
    else{
        cwpbtn.disabled = false;
        expderror.innerHTML=" ";
    }
}
function cvccvvValid(){
    cvccvv = document.getElementById("cvcc").value;
    let cvccerror = document.getElementById("cvcc-error");
    if(cvccvv == ""){
      cvccerror.innerHTML= "CVC/CVV required";
      cwpbtn.disabled = true;
    }
    else{
        cwpbtn.disabled = false;
        cvccerror.innerHTML= " ";
    }
}
function nocValid(){
    nameonc= document.getElementById("noc").value;
    let nocerror = document.getElementById("noc-error");
    if(nameonc == ""){
     nocerror.innerHTML="Name on card required";
     cwpbtn.disabled = true;
    }
    else{
        cwpbtn.disabled = false;
        nocerror.innerHTML=" ";
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