document.addEventListener("DOMContentLoaded", () => {
  // Get input elements
  const dateInput = document.getElementById("date");
  const durationSelect = document.getElementById("duration");
  const slAdultInput = document.getElementById("slAdult");
  const slChildInput = document.getElementById("slChild");
  const foreignAdultInput = document.getElementById("foreignAdult");
  const foreignChildInput = document.getElementById("foreignChild");
  const infantInput = document.getElementById("infant");
 

  function updateSummary() {
    const date = dateInput.value;
    const duration = durationSelect.value;
    const slAdult = parseFloat(slAdultInput.value) || 0;
    const slChild = parseFloat(slChildInput.value) || 0;
    const foreignAdult = parseFloat(foreignAdultInput.value) || 0;
    const foreignChild = parseFloat(foreignChildInput.value) || 0;
    const infant = parseFloat(infantInput.value) || 0;

    const slAdultnPrice = 4.00;
    const slChildnPrice = 2.00;
    const foreignAdultnPrice = 10.00;
    const foreignChildnPrice = 5.00;
    const infantnPrice = 0.00;

    // Calculate total payable
  
    const slatotalnPayable = (slAdult * slAdultnPrice);
    const slctotalnPayable = (slChild * slChildnPrice);
    const fatotalnPayable = (foreignAdult * foreignAdultnPrice);
    const fctotalnPayable =(foreignChild * foreignChildnPrice);
    const totalnPayable = slatotalnPayable + slctotalnPayable + fatotalnPayable + fctotalnPayable;
    const slAdultnpPrice = 6.00;
    const slChildnpPrice = 3.00;
    const foreignAdultnpPrice = 13.00;
    const foreignChildnpPrice = 8.00;
    const infantnpPrice = 0.00;
                    
    // Calculate total payable
    
    const slatotalpPayable = (slAdult * slAdultnpPrice);
    const slctotalpPayable = (slChild * slChildnpPrice);
    const fatotalpPayable = (foreignAdult * foreignAdultnpPrice);
    const fctotalpPayable =(foreignChild * foreignChildnpPrice);

    const totalpPayable = slatotalpPayable + slctotalpPayable + fatotalpPayable + fctotalpPayable;
                          
    const totalPay = totalnPayable + totalpPayable;

    // Update summary table
    document.getElementById("summaryDate").textContent = date;
    document.getElementById("summaryDuration").textContent = duration;
    document.getElementById("slan").textContent = slAdult;
    document.getElementById("slcn").textContent = slChild;
    document.getElementById("fan").textContent = foreignAdult;
    document.getElementById("fcn").textContent = foreignChild;
    document.getElementById("in").textContent = infant;
    document.getElementById("summarySLAdult").textContent = slatotalnPayable + slatotalpPayable;
    document.getElementById("summarySLChild").textContent = slctotalnPayable + slctotalpPayable;
    document.getElementById("summaryForeignAdult").textContent = fatotalnPayable + fatotalpPayable;
    document.getElementById("summaryForeignChild").textContent = fctotalnPayable + fctotalpPayable;
    document.getElementById("summaryInfant").textContent = infantnPrice + infantnpPrice;
    document.getElementById("summaryDuration").textContent = duration;
    document.getElementById("summaryTotal").textContent = totalPay.toFixed(2);

    localStorage.setItem("date",date);
    localStorage.setItem("du",duration);
    localStorage.setItem("sla",slAdult);
    localStorage.setItem("slc",slChild);
    localStorage.setItem("fa",foreignAdult);
    localStorage.setItem("fc",foreignChild);
    localStorage.setItem("i",infant);
    localStorage.setItem("tp",totalPay.toFixed(2));

    // Enable or disable continue button based on total payable
    
  }

  // Add event listeners to input elements
  dateInput.addEventListener("change", updateSummary);
  durationSelect.addEventListener("change", updateSummary);
  slAdultInput.addEventListener("input", updateSummary);
  slChildInput.addEventListener("input", updateSummary);
  foreignAdultInput.addEventListener("input", updateSummary);
  foreignChildInput.addEventListener("input", updateSummary);
  infantInput.addEventListener("input", updateSummary);
});





