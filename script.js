// TABS
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content');

// Contract type
var contractType = document.getElementById('contract-select');

// 0 - 12 month inputs
var finl0 = document.getElementById('finl0');
var ofnl0 = document.getElementById('ofnl0');
var finlcb0 = document.getElementById('finlcb0');
var ofnlcb0 = document.getElementById('ofnlcb0');
var finlcb50 = document.getElementById('finlcb50');
var ofnlcb50 = document.getElementById('ofnlcb50');
var fill0 = document.getElementById('fill0');
var ofll0 = document.getElementById('ofll0');
var fidsc0 = document.getElementById('fidsc0');
var ofdsc0 = document.getElementById('ofdsc0');

// 13 to 36 month inputs
var finl13 = document.getElementById('finl13');
var ofnl13 = document.getElementById('ofnl13');
var finlcb13 = document.getElementById('finlcb13');
var ofnlcb13 = document.getElementById('ofnlcb13');
var finlcb513 = document.getElementById('finlcb513');
var ofnlcb513 = document.getElementById('ofnlcb513');
var fill13 = document.getElementById('fill13');
var ofll13 = document.getElementById('ofll13');
var fidsc13 = document.getElementById('fidsc13');
var ofdsc13 = document.getElementById('ofdsc13');

// 37 to 48 month inputs
var finl37 = document.getElementById('finl37');
var ofnl37 = document.getElementById('ofnl37');
var finlcb37 = document.getElementById('finlcb37');
var ofnlcb37 = document.getElementById('ofnlcb37');
var finlcb537 = document.getElementById('finlcb537');
var ofnlcb537 = document.getElementById('ofnlcb537');
var fill37 = document.getElementById('fill37');
var ofll37 = document.getElementById('ofll37');
var fidsc37 = document.getElementById('fidsc37');
var ofdsc37 = document.getElementById('ofdsc37');

// 49+ month inputs
var finl49 = document.getElementById('finl49');
var ofnl49 = document.getElementById('ofnl49');
var finlcb49 = document.getElementById('finlcb49');
var ofnlcb49 = document.getElementById('ofnlcb49');
var finlcb549 = document.getElementById('finlcb549');
var ofnlcb549 = document.getElementById('ofnlcb549');
var fill49 = document.getElementById('fill49');
var ofll49 = document.getElementById('ofll49');
var fidsc49 = document.getElementById('fidsc49');
var ofdsc49 = document.getElementById('ofdsc49');



var aumButton = document.getElementById('aum-button');




/////// Tab logic  ///////
// https://www.youtube.com/watch?v=5L6h_MrNvsk
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    })
    tabs.forEach(tab => {
      tab.classList.remove('active');
    })
    tab.classList.add('active');
    target.classList.add('active');
  })
})

// TODO: format currency for the goals / jpersonal seciton
// format currency output (in US dollars, but CAD can be used but output says CA$###.##)
let USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

// Business Development Commission Rate
const trainingAssociateCR = .26;
const associateCR = .36;
const marketingDirectorCR = .51 ;
const seniorMarketingDirectorCR = .66;
const executiveMarketingDirectorCR = .66;
const ceoMarketingDirectorCR = .66;
const executiveViceChairmanCR = .66;

const getContractCommission = contract => {
  switch (contract) {
    case 'Training Associate':
      return trainingAssociateCR;
    case 'Associate':
      return associateCR;
    case 'Marketing Director':
      return marketingDirectorCR;
    case 'Senior Marketing Director':
      return seniorMarketingDirectorCR;
    case 'Executive Marketing Director':
      return executiveMarketingDirectorCR;
    case 'CEO Marketing Director':
      return ceoMarketingDirectorCR;
    case 'Executive Vice Chairman':
      return executiveViceChairmanCR;
    default:
      return 0; // Return a default value if the contract is not recognized
  }
};

// Upfront Sales Charge
const nlSc = 0
const nlCbSc = .035
const nlCbsSc = .056

// update DOM to reflect selected 
// https://stackoverflow.com/questions/37902166/html-change-text-based-on-input-field
document.getElementById("contract-select").addEventListener("change", myFunction);
function myFunction() {
	var contract= document.getElementById("contract-select").value;
  var percent = getContractCommission(contract);
    document.getElementById("contract-level").innerHTML = contract;
    // todo: this is bad form duck typing... multiplying as if float, then adding as if string
    document.getElementById("percent").innerHTML = percent * 100 + "% commission rate";
}


// auto formatting currency
// chatgpt
function formatUserCurrency(input) {
  // remove all non-digit characters
  input = input.replace(/\D/g, '');
  // convert to number and divide by 100 to get cents (not sure why this works,but its buggy if not included)
  input = Number(input)/100;
  console.log(typeof(input));
   // format with commas and decimal for cents
   return input.toLocaleString("en-US", {style:"currency", currency:"USD"});
}

// watch for input on cells to update currency format
// there has to be a better way!
// finl0.addEventListener('input', function() {
//   finl0.value = formatUserCurrency(finl0.value);
// }); 
// 0 - 12 month inputs
finl0.addEventListener('input', function() {
  finl0.value = formatUserCurrency(finl0.value);
});
ofnl0.addEventListener('input', function() {
  ofnl0.value = formatUserCurrency(ofnl0.value);
});
finlcb0.addEventListener('input', function() {
  finlcb0.value = formatUserCurrency(finlcb0.value);
});
ofnlcb0.addEventListener('input', function() {
  ofnlcb0.value = formatUserCurrency(ofnlcb0.value);
});
finlcb50.addEventListener('input', function() {
  finlcb50.value = formatUserCurrency(finlcb50.value);
});
ofnlcb50.addEventListener('input', function() {
  ofnlcb50.value = formatUserCurrency(ofnlcb50.value);
});
fill0.addEventListener('input', function() {
  fill0.value = formatUserCurrency(fill0.value);
});
ofll0.addEventListener('input', function() {
  ofll0.value = formatUserCurrency(ofll0.value);
});
fidsc0.addEventListener('input', function() {
  fidsc0.value = formatUserCurrency(fidsc0.value);
});
ofdsc0.addEventListener('input', function() {
  ofdsc0.value = formatUserCurrency(ofdsc0.value);
});

// 13 to 36 month inputs
finl13.addEventListener('input', function() {
  finl13.value = formatUserCurrency(finl13.value);
});
ofnl13.addEventListener('input', function() {
  ofnl13.value = formatUserCurrency(ofnl13.value);
});
finlcb13.addEventListener('input', function() {
  finlcb13.value = formatUserCurrency(finlcb13.value);
});
ofnlcb13.addEventListener('input', function() {
  ofnlcb13.value = formatUserCurrency(ofnlcb13.value);
});
finlcb513.addEventListener('input', function() {
  finlcb513.value = formatUserCurrency(finlcb513.value);
});
ofnlcb513.addEventListener('input', function() {
  ofnlcb513.value = formatUserCurrency(ofnlcb513.value);
});
fill13.addEventListener('input', function() {
  fill13.value = formatUserCurrency(fill13.value);
});
ofll13.addEventListener('input', function() {
  ofll13.value = formatUserCurrency(ofll13.value);
});
fidsc13.addEventListener('input', function() {
  fidsc13.value = formatUserCurrency(fidsc13.value);
});
ofdsc13.addEventListener('input', function() {
  ofdsc13.value = formatUserCurrency(ofdsc13.value);
});

// 37 to 48 month inputs
finl37.addEventListener('input', function() {
  finl37.value = formatUserCurrency(finl37.value);
});
ofnl37.addEventListener('input', function() {
  ofnl37.value = formatUserCurrency(ofnl37.value);
});
finlcb37.addEventListener('input', function() {
  finlcb37.value = formatUserCurrency(finlcb37.value);
});
ofnlcb37.addEventListener('input', function() {
  ofnlcb37.value = formatUserCurrency(ofnlcb37.value);
});
finlcb537.addEventListener('input', function() {
  finlcb537.value = formatUserCurrency(finlcb537.value);
});
ofnlcb537.addEventListener('input', function() {
  ofnlcb537.value = formatUserCurrency(ofnlcb537.value);
});
fill37.addEventListener('input', function() {
  fill37.value = formatUserCurrency(fill37.value);
});
ofll37.addEventListener('input', function() {
  ofll37.value = formatUserCurrency(ofll37.value);
});
fidsc37.addEventListener('input', function() {
  fidsc37.value = formatUserCurrency(fidsc37.value);
});
ofdsc37.addEventListener('input', function() {
  ofdsc37.value = formatUserCurrency(ofdsc37.value);
});

// 49+ month inputs
finl49.addEventListener('input', function() {
  finl49.value = formatUserCurrency(finl49.value);
});
ofnl49.addEventListener('input', function() {
  ofnl49.value = formatUserCurrency(ofnl49.value);
});
finlcb49.addEventListener('input', function() {
  finlcb49.value = formatUserCurrency(finlcb49.value);
});
ofnlcb49.addEventListener('input', function() {
  ofnlcb49.value = formatUserCurrency(ofnlcb49.value);
});
finlcb549.addEventListener('input', function() {
  finlcb549.value = formatUserCurrency(finlcb549.value);
});
ofnlcb549.addEventListener('input', function() {
  ofnlcb549.value = formatUserCurrency(ofnlcb549.value);
});
fill49.addEventListener('input', function() {
  fill49.value = formatUserCurrency(fill49.value);
});
ofll49.addEventListener('input', function() {
  ofll49.value = formatUserCurrency(ofll49.value);
});
fidsc49.addEventListener('input', function() {
  fidsc49.value = formatUserCurrency(fidsc49.value);
});
ofdsc49.addEventListener('input', function() {
  ofdsc49.value = formatUserCurrency(ofdsc49.value);
});




const cleanCurrency = input => {
  // Remove $ and , from the input string
  const cleaned = input.replace(/\$|,/g, '');
  // Convert the cleaned string to a float
  const floatValue = parseFloat(cleaned);
  // Return the float value
  return floatValue;
}

aumButton.addEventListener("click", function(e) {
  e.preventDefault();
  console.log('button pressed');

  commissionRate = getContractCommission(contractType.value);
  console.log(commissionRate);

  ///////////// NL ///////////////
  // todo: can i put the .00504 and 84 into variables? what would they be called?
  // todo: what are the tiered bonous rates and where do they come into play?
  // fixed income
  nlTotalAnnualTrailingCommissionsFi = (cleanCurrency(finl0.value) + cleanCurrency(finl13.value) + cleanCurrency(finl37.value) + cleanCurrency(finl49.value)) * .00504 * .84 * commissionRate; 
  // other funds
  nlTotalAnnualTrailingCommissionsOf = (cleanCurrency(ofnl0.value) + cleanCurrency(ofnl13.value) + cleanCurrency(ofnl37.value) + cleanCurrency(ofnl49.value)) * .01008 * .84 * commissionRate; 
  // combined
  nlTotalAnnualTrailingCommissions = (nlTotalAnnualTrailingCommissionsFi + nlTotalAnnualTrailingCommissionsOf).toFixed(2);

  console.log(`Total NL Annual Trailing Commissions: ${USDollar.format(nlTotalAnnualTrailingCommissions)}`);


  //////////// NL-CB ////////////////
  // todo: tested on marketing director... but the first two times by 0% i think this has to do with the bonuses
  
  fixedMultiply = 0.00252 * .84 * commissionRate;
  otherMultiply = 0.00504 *.84 * commissionRate;
  nlcbTotalATC0 = (cleanCurrency(finlcb0.value) * 0 * .84 * commissionRate) + (cleanCurrency(ofnlcb0.value) * 0 * .84 * commissionRate);
  nlcbTotalATC13 = (cleanCurrency(finlcb13.value) * fixedMultiply) + (cleanCurrency(ofnlcb13.value) * otherMultiply);
  nlcbTotalATC37 = (cleanCurrency(finlcb37.value) * fixedMultiply) + (cleanCurrency(ofnlcb37.value) * otherMultiply);
  nlcbTotalATC49 = (cleanCurrency(finlcb49.value) * 0.00504 * .84 * commissionRate) + (cleanCurrency(ofnlcb49.value) * 0.01008 * .84 * commissionRate);
  
  nlcbTotal = nlcbTotalATC0 + nlcbTotalATC13 + nlcbTotalATC37+ nlcbTotalATC49;
  console.log(`Total NLCB Annual Trailing Comissionsns: ${USDollar.format(nlcbTotal)}`);


  //////////// NL-CB5 ////////////////
  nlcb5TotalATC0 = (cleanCurrency(finlcb50.value) * 0 * .84 * commissionRate) + (cleanCurrency(ofnlcb0.value) * 0 * .84 * commissionRate);
  nlcb5TotalATC13 = (cleanCurrency(finlcb513.value) * fixedMultiply) + (cleanCurrency(ofnlcb513.value) * otherMultiply);
  nlcb5TotalATC37 = (cleanCurrency(finlcb537.value) * fixedMultiply) + (cleanCurrency(ofnlcb537.value) * otherMultiply);
  nlcb5TotalATC49 = (cleanCurrency(finlcb549.value) * fixedMultiply) + (cleanCurrency(ofnlcb49.value) * otherMultiply); // todo: this does not follow the pattern

  nlcb5Total = nlcb5TotalATC0 + nlcb5TotalATC13 + nlcb5TotalATC37+ nlcb5TotalATC49;
  console.log(`Total NLCB5 Annual Trailing Comissionsns: ${USDollar.format(nlcb5Total)}`);

  
  //////////// LL ////////////////
  llTotalATC0 = (cleanCurrency(fill0.value) * fixedMultiply) + (cleanCurrency(ofll0.value) * otherMultiply);
  llTotalATC13 = (cleanCurrency(fill13.value) * fixedMultiply) + (cleanCurrency(ofll13.value) * otherMultiply);
  llTotalATC37 = (cleanCurrency(fill37.value) * otherMultiply) + (cleanCurrency(ofll37.value) * 0.01008 * .84 * commissionRate); // todo this has otherMultiply where fixed usually is and the last .01008 check if correct
  llTotalATC49 = (cleanCurrency(fill49.value) * 0.00504 * .84 * commissionRate) + (cleanCurrency(ofll49.value) * 0.01008 * .84 * commissionRate); 

  llTotal = llTotalATC0 + llTotalATC13 + llTotalATC37+ llTotalATC49;
  console.log(`Total LL Annual Trailing Comissionsns: ${USDollar.format(llTotal)}`);

  //////////// DSC ////////////////
  dscTotalATC0 = (cleanCurrency(fidsc0.value) * fixedMultiply) + (cleanCurrency(ofdsc0.value) * otherMultiply);
  dscTotalATC13 = (cleanCurrency(fidsc13.value) * fixedMultiply) + (cleanCurrency(ofdsc13.value) * otherMultiply);
  dscTotalATC37 = (cleanCurrency(fidsc37.value) * fixedMultiply) + (cleanCurrency(ofdsc37.value) * otherMultiply); 
  dscTotalATC49 = (cleanCurrency(fidsc49.value) * fixedMultiply) + (cleanCurrency(ofdsc49.value) * otherMultiply); 

  dscTotal = dscTotalATC0 + dscTotalATC13 + dscTotalATC37+ dscTotalATC49;
  console.log(`Total DSC Annual Trailing Comissionsns: ${USDollar.format(dscTotal)}`);

  // Invoke showChart function
  // showChart();


});



function showChart() {
  // Data for the horizontal bar chart
  // Data for the stacked horizontal bar chart
  const data = [
    { category: 'Stacked Bar', values: [100, 200, 300] }
  ];
  const keys = ['Category 1', 'Category 2', 'Category 3'];
  
  // Chart dimensions
  const width = 500;
  const height = 50;

  // Stack generator
  const stack = d3.stack()
    .keys(keys);

  // Stacked data
  const stackedData = stack(data.map(d => d.values));

  // Create the SVG element
  const svg = d3.select('#chart')
    .attr('width', width)
    .attr('height', height);

  // Create the stacked horizontal bar chart
  const bars = svg.selectAll('g')
    .data(stackedData)
    .enter()
    .append('g')
    .attr('fill', (d, i) => {
      const colors = ['steelblue', 'lightblue', 'cornflowerblue'];
      return colors[i];
    });

  // Add stacked bars
  bars.selectAll('rect')
    .data(d => d)
    .enter()
    .append('rect')
    .attr('x', d => d[0])
    .attr('y', 0)
    .attr('width', d => d[1] - d[0])
    .attr('height', height);

  // Show the chart by changing its container display style
  document.getElementById('chartContainer').style.display = 'block';
}



// TODO
// need to account for cells that have nothing entered into them. Maybe I should have a default $0.00
// the select drop-down needs to be fixed so that "training associate" registeres the commission rate... maybe set defualt or say select contract type...
// i think sm-box and small-box-currency could be made into one class (i initially did it to test somthing out - double check this.)