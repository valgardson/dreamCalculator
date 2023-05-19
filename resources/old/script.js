// todo
// add symbols $, % to input boxes
// determine how to destroy chart to reuse if it is already in use.
// interest https://www.realized1031.com/glossary/compound-interest
var startingInput = document.getElementById("starting");
var interestInput = document.getElementById("interest");
var yearsInput = document.getElementById("years");
var contributionInput = document.getElementById("contribution");
var totalText = document.getElementById("total-text");
var interestText = document.getElementById("interest-text");
var contributionText = document.getElementById("contribution-text");
var inputDiv = document.getElementById('input');
var outputDiv = document.getElementById("output");

const submitButton = document.getElementById('calculate-button');

// set results div to be same size as input div
inputDivHeight = inputDiv.offsetHeight;
inputDivWidth = inputDiv.offsetWidth;

outputDiv.setAttribute('style', "height:"+inputDivHeight+"px; width:"+inputDivWidth+"px");





// todo
// * currently additional contributions is annualy at the end of the year
// it would be good to change this to annual, monthly, start, end of time period
// * graph total amount, your contribution, and interest amount
function calculateCompoundInterest(principal, interest, years, numberCompound=1, contribution=0, ) {
  // convert percent interest rate into decimal
  interest /= 100;

  var value = principal; 
  var totalContributions = principal;
  var totalInterestEarned = 0;
  var totalsArr = [];
  totalsArr.push(value);

  var interestArr = [];
  interestArr.push(totalInterestEarned); // at the time of deposit, no interest is made

  var contributionArr = [];
  contributionArr.push(totalContributions); // this will add the initial contribution to array


  for (var i = 0; i < years; i++) { // this will not work correctly if years is not int i.e., 3.5 years
    var prevValue = value;
    // add total contributions ()
    

    var base = (1 + interest)/numberCompound;
    var exponent = numberCompound * 1; // the 1 is suppose to be time in years, but I want to calculate each year, so it is captured in the i < years. 


    value *= Math.pow(base, exponent); 
    // value = Math.round(value, 2) // round the end product in the array not here - it throws off the math

    // get the amount of interest gained (calculate before adding end of term contribution)
    var interestEarned = value - prevValue;
    totalInterestEarned += interestEarned;
    interestArr.push(totalInterestEarned);

    // add the contribution amount after interest has been calculated (end of term contribution)
    value += contribution;
    totalsArr.push(value);

    // get the total contributions made
    totalContributions += contribution;
    contributionArr.push(totalContributions);

  }
  return {
    totalsArr,
    interestArr,
    contributionArr
  }
}


submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  // not sure hwy this is not working
  if(window.myChart instanceof Chart){
    console.log('chart detected');
    window.myChart.destroy();
}

  var principal = parseFloat(startingInput.value);
  var interest = parseFloat(interestInput.value);
  var years = parseFloat(yearsInput.value);
  var contribution = parseFloat(contributionInput.value);

  // if button pressed again will can this be a const
  const interestAndContributions = calculateCompoundInterest(principal, interest, years, 1, contribution);

  console.log(interestAndContributions);
  
  // could i use a spread operator? probably not, but destructure somehow? tuple unpacking
  const totalsArr = interestAndContributions['totalsArr']
  const contributionArr = interestAndContributions['contributionArr']
  const interestArr = interestAndContributions['interestArr']

  // Create number formatter.
  const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

  // insert text results (arr.length - 1 gets the last element in the arr)
  totalText.innerHTML = formatter.format(totalsArr[totalsArr.length - 1]);
  interestText.innerHTML = formatter.format(interestArr[interestArr.length - 1]);
  contributionText.innerHTML = formatter.format(contributionArr[contributionArr.length - 1]);

  // create array 1 through X number of years (plus 1 year to get initial values)
  const labels = Array.from({length: years+1}, (_, i) => i)
  const data = {
    labels: labels,
    datasets: [{
      label: 'Total',
      data: totalsArr,
      fill: false,
      borderColor: '#00dfc4',
      tension: 0.1,
      background: "#1d2b3a",
      // responsive: false
    },
    {
      label: 'Contributions',
      data: contributionArr,
      fill: false,
      borderColor: '#00dfc4',
      tension: 0.1,
      background: "#1d2b3a",
      // responsive: false
    },
    {
      label: 'Interest Earned',
      data: interestArr,
      fill: false,
      borderColor: '#00dfc4',
      tension: 0.1,
      background: "#1d2b3a",
      // responsive: false
    },
  ]
  };

  const ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
      plugins: {
        legend: {
          display: false
        }
      }
    }
})
})


