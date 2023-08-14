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