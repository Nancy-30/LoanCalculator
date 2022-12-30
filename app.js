let monthlyPayment = document.querySelector(".monthlyResult");
let totalPayment = document.querySelector(".totalResult");
let totalInterest = document.querySelector(".totalIntrest");
let calc = document.querySelector(".calcbtn");
let loanAmount = document.querySelector(".loanAmount");
let intrestRate = document.querySelector(".intrestRate");
let repayYears = document.querySelector(".repay");
let hideResult = document.querySelector("#resultDiv");
let loader = document.querySelector("#loading");
loadEventListner();


// loan formula

function loadEventListner(){
    calc.addEventListener('click' , calculate);
    // calc.addEventListener('click' , function(e){
    //     // Hide results
    //     hideResult.style.display = 'none';

    //      // Show loader
    //      loader.style.display = 'block';

    //      setTimeout(calculate, 2000);
    //      e.preventDefault();
    // });
}


function calculate(e){
    if(loanAmount.value === '' || intrestRate.value  === '' || repayYears.value === '' ){
        alert("Fill all the details");
    }
    // formula to calculate the values
    else{
    const principal = parseFloat(loanAmount.value);
    const calculatedInterest = parseFloat(intrestRate.value) / 100 / 12;
    const calculatedPayments = parseFloat(repayYears.value) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);

    loanAmount.value = '';
    intrestRate.value = '';
    repayYears.value = '';
    setInterval(loading , 10000);
    e.preventDefault();
    }
}

function loading(e){
    monthlyPayment.value = "Monthly Payment";
    totalPayment.value = "Total Payment";
    totalInterest.value = "Total Interest";
    // e.preventDefault();
}