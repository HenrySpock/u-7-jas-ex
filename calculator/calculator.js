window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amoprincipleunt: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

let monthlyPayment;
// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {


}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let principle = document.getElementById("loan-amount").value;
  let years = document.getElementById("loan-years").value;
  let rate = document.getElementById("loan-rate").value;
  let intRate = Math.round(((rate / 12) + Number.EPSILON) * 100) / 100;
  let payments = (years * 12);
  let loanNumerator = Math.round(((principle * intRate) + Number.EPSILON) * 100) / 100;
  let loanDenominator = 
  
  Math.round(((1 - ( (1 + intRate) ** -(payments) )) + Number.EPSILON) * 100) / 100
  
  ; 
  monthlyPayment = Math.round(((loanNumerator / loanDenominator) + Number.EPSILON) * 100) / 100
  ;
  
  console.log(principle, years, rate, intRate, payments, loanNumerator, loanDenominator, monthlyPayment);

  updateMonthly(monthlyPayment)
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
let values = 
  {principle: "10000",
  years:"5", 
  rate:".41"};

function calculateMonthlyPayment(values) {
  let intRate = Math.round(((Object.values(values)[2] / 12) + Number.EPSILON) * 100) / 100;
  
  let payments = (Object.values(values)[1] * 12);
  
  let loanNumerator = Math.round(((Object.values(values)[0] * intRate) + Number.EPSILON) * 100) / 100;
  
  let loanDenominator = Math.round(((1 - ( (1 + intRate) ** -(payments) )) + Number.EPSILON) * 100) / 100;
  
  monthlyPayment = Math.round(((loanNumerator / loanDenominator) + Number.EPSILON) * 100) / 100;

  return monthlyPayment; //the "return" is used to prevent Jasmine from encountering the "null" raeding for updateMonthly and give an output. 
  //Commenting out this line completes the function and the updating the DOM respectively.

  console.log(intRate, payments, loanNumerator, loanDenominator, monthlyPayment);
  
  updateMonthly(monthlyPayment)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthlyPayment) {
  document.getElementById("monthly-payment").innerText = monthlyPayment;
}

