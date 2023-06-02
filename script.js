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

/////////////////////////
///// Baseshop AUM /////
///////////////////////

///// Training Associate /////
// Training Associate 0 - 12 month
var bstaFinl0 = document.getElementById('bsta-finl0');
var bstaOfnl0 = document.getElementById('bsta-ofnl0');
var bstaFinlcb0 = document.getElementById('bsta-finlcb0');
var bstaOfnlcb0 = document.getElementById('bsta-ofnlcb0');
var bstaFinlcb50 = document.getElementById('bsta-finlcb50');
var bstaOfnlcb50 = document.getElementById('bsta-ofnlcb50');
var bstaFill0 = document.getElementById('bsta-fill0');
var bstaOfll0 = document.getElementById('bsta-ofll0');
var bstaFidsc0 = document.getElementById('bsta-fidsc0');
var bstaOfdsc0 = document.getElementById('bsta-ofdsc0');

// Training Associate13 to 36 month inputs
var bstaFinl13 = document.getElementById('bsta-finl13');
var bstaOfnl13 = document.getElementById('bsta-ofnl13');
var bstaFinlcb13 = document.getElementById('bsta-finlcb13');
var bstaOfnlcb13 = document.getElementById('bsta-ofnlcb13');
var bstaFinlcb513 = document.getElementById('bsta-finlcb513');
var bstaOfnlcb513 = document.getElementById('bsta-ofnlcb513');
var bstaFill13 = document.getElementById('bsta-fill13');
var bstaOfll13 = document.getElementById('bsta-ofll13');
var bstaFidsc13 = document.getElementById('bsta-fidsc13');
var bstaOfdsc13 = document.getElementById('bsta-ofdsc13');

// Training Associate 37 to 48 month inputs
var bstaFinl37 = document.getElementById('bsta-finl37');
var bstaOfnl37 = document.getElementById('bsta-ofnl37');
var bstaFinlcb37 = document.getElementById('bsta-finlcb37');
var bstaOfnlcb37 = document.getElementById('bsta-ofnlcb37');
var bstaFinlcb537 = document.getElementById('bsta-finlcb537');
var bstaOfnlcb537 = document.getElementById('bsta-ofnlcb537');
var bstaFill37 = document.getElementById('bsta-fill37');
var bstaOfll37 = document.getElementById('bsta-ofll37');
var bstaFidsc37 = document.getElementById('bsta-fidsc37');
var bstaOfdsc37 = document.getElementById('bsta-ofdsc37');

// Training Associate 49+ month inputs
var bstaFinl49 = document.getElementById('bsta-finl49');
var bstaOfnl49 = document.getElementById('bsta-ofnl49');
var bstaFinlcb49 = document.getElementById('bsta-finlcb49');
var bstaOfnlcb49 = document.getElementById('bsta-ofnlcb49');
var bstaFinlcb549 = document.getElementById('bsta-finlcb549');
var bstaOfnlcb549 = document.getElementById('bsta-ofnlcb549');
var bstaFill49 = document.getElementById('bsta-fill49');
var bstaOfll49 = document.getElementById('bsta-ofll49');
var bstaFidsc49 = document.getElementById('bsta-fidsc49');
var bstaOfdsc49 = document.getElementById('bsta-ofdsc49');

///// ASSOCIATE /////
// Associate 0 - 12 month
var bsaFinl0 = document.getElementById('bsa-finl0');
var bsaOfnl0 = document.getElementById('bsa-ofnl0');
var bsaFinlcb0 = document.getElementById('bsa-finlcb0');
var bsaOfnlcb0 = document.getElementById('bsa-ofnlcb0');
var bsaFinlcb50 = document.getElementById('bsa-finlcb50');
var bsaOfnlcb50 = document.getElementById('bsa-ofnlcb50');
var bsaFill0 = document.getElementById('bsa-fill0');
var bsaOfll0 = document.getElementById('bsa-ofll0');
var bsaFidsc0 = document.getElementById('bsa-fidsc0');
var bsaOfdsc0 = document.getElementById('bsa-ofdsc0');

// Associate 13 to 36 month inputs
var bsaFinl13 = document.getElementById('bsa-finl13');
var bsaOfnl13 = document.getElementById('bsa-ofnl13');
var bsaFinlcb13 = document.getElementById('bsa-finlcb13');
var bsaOfnlcb13 = document.getElementById('bsa-ofnlcb13');
var bsaFinlcb513 = document.getElementById('bsa-finlcb513');
var bsaOfnlcb513 = document.getElementById('bsa-ofnlcb513');
var bsaFill13 = document.getElementById('bsa-fill13');
var bsaOfll13 = document.getElementById('bsa-ofll13');
var bsaFidsc13 = document.getElementById('bsa-fidsc13');
var bsaOfdsc13 = document.getElementById('bsa-ofdsc13');

// Associate 37 to 48 month inputs
var bsaFinl37 = document.getElementById('bsa-finl37');
var bsaOfnl37 = document.getElementById('bsa-ofnl37');
var bsaFinlcb37 = document.getElementById('bsa-finlcb37');
var bsaOfnlcb37 = document.getElementById('bsa-ofnlcb37');
var bsaFinlcb537 = document.getElementById('bsa-finlcb537');
var bsaOfnlcb537 = document.getElementById('bsa-ofnlcb537');
var bsaFill37 = document.getElementById('bsa-fill37');
var bsaOfll37 = document.getElementById('bsa-ofll37');
var bsaFidsc37 = document.getElementById('bsa-fidsc37');
var bsaOfdsc37 = document.getElementById('bsa-ofdsc37');

// Associate 49+ month inputs
var bsaFinl49 = document.getElementById('bsa-finl49');
var bsaOfnl49 = document.getElementById('bsa-ofnl49');
var bsaFinlcb49 = document.getElementById('bsa-finlcb49');
var bsaOfnlcb49 = document.getElementById('bsa-ofnlcb49');
var bsaFinlcb549 = document.getElementById('bsa-finlcb549');
var bsaOfnlcb549 = document.getElementById('bsa-ofnlcb549');
var bsaFill49 = document.getElementById('bsa-fill49');
var bsaOfll49 = document.getElementById('bsa-ofll49');
var bsaFidsc49 = document.getElementById('bsa-fidsc49');
var bsaOfdsc49 = document.getElementById('bsa-ofdsc49');


///// MARKETING DIRECTOR /////
// Marketing Director 0 - 12 month
var bsmdFinl0 = document.getElementById('bsmd-finl0');
var bsmdOfnl0 = document.getElementById('bsmd-ofnl0');
var bsmdFinlcb0 = document.getElementById('bsmd-finlcb0');
var bsmdOfnlcb0 = document.getElementById('bsmd-ofnlcb0');
var bsmdFinlcb50 = document.getElementById('bsmd-finlcb50');
var bsmdOfnlcb50 = document.getElementById('bsmd-ofnlcb50');
var bsmdFill0 = document.getElementById('bsmd-fill0');
var bsmdOfll0 = document.getElementById('bsmd-ofll0');
var bsmdFidsc0 = document.getElementById('bsmd-fidsc0');
var bsmdOfdsc0 = document.getElementById('bsmd-ofdsc0');

// Marketing Director 13 to 36 month inputs
var bsmdFinl13 = document.getElementById('bsmd-finl13');
var bsmdOfnl13 = document.getElementById('bsmd-ofnl13');
var bsmdFinlcb13 = document.getElementById('bsmd-finlcb13');
var bsmdOfnlcb13 = document.getElementById('bsmd-ofnlcb13');
var bsmdFinlcb513 = document.getElementById('bsmd-finlcb513');
var bsmdOfnlcb513 = document.getElementById('bsmd-ofnlcb513');
var bsmdFill13 = document.getElementById('bsmd-fill13');
var bsmdOfll13 = document.getElementById('bsmd-ofll13');
var bsmdFidsc13 = document.getElementById('bsmd-fidsc13');
var bsmdOfdsc13 = document.getElementById('bsmd-ofdsc13');

// Marketing Director 37 to 48 month inputs
var bsmdFinl37 = document.getElementById('bsmd-finl37');
var bsmdOfnl37 = document.getElementById('bsmd-ofnl37');
var bsmdFinlcb37 = document.getElementById('bsmd-finlcb37');
var bsmdOfnlcb37 = document.getElementById('bsmd-ofnlcb37');
var bsmdFinlcb537 = document.getElementById('bsmd-finlcb537');
var bsmdOfnlcb537 = document.getElementById('bsmd-ofnlcb537');
var bsmdFill37 = document.getElementById('bsmd-fill37');
var bsmdOfll37 = document.getElementById('bsmd-ofll37');
var bsmdFidsc37 = document.getElementById('bsmd-fidsc37');
var bsmdOfdsc37 = document.getElementById('bsmd-ofdsc37');

// Marketing Director 49+ month inputs
var bsmdFinl49 = document.getElementById('bsmd-finl49');
var bsmdOfnl49 = document.getElementById('bsmd-ofnl49');
var bsmdFinlcb49 = document.getElementById('bsmd-finlcb49');
var bsmdOfnlcb49 = document.getElementById('bsmd-ofnlcb49');
var bsmdFinlcb549 = document.getElementById('bsmd-finlcb549');
var bsmdOfnlcb549 = document.getElementById('bsmd-ofnlcb549');
var bsmdFill49 = document.getElementById('bsmd-fill49');
var bsmdOfll49 = document.getElementById('bsmd-ofll49');
var bsmdFidsc49 = document.getElementById('bsmd-fidsc49');
var bsmdOfdsc49 = document.getElementById('bsmd-ofdsc49');


///// SENIOR MARKETING DIRECTOR /////
// Senior Marketing Director 0 - 12 month
var bssmdFinl0 = document.getElementById('bssmd-finl0');
var bssmdOfnl0 = document.getElementById('bssmd-ofnl0');
var bssmdFinlcb0 = document.getElementById('bssmd-finlcb0');
var bssmdOfnlcb0 = document.getElementById('bssmd-ofnlcb0');
var bssmdFinlcb50 = document.getElementById('bssmd-finlcb50');
var bssmdOfnlcb50 = document.getElementById('bssmd-ofnlcb50');
var bssmdFill0 = document.getElementById('bssmd-fill0');
var bssmdOfll0 = document.getElementById('bssmd-ofll0');
var bssmdFidsc0 = document.getElementById('bssmd-fidsc0');
var bssmdOfdsc0 = document.getElementById('bssmd-ofdsc0');

// Senior Marketing Director 13 to 36 month inputs
var bssmdFinl13 = document.getElementById('bssmd-finl13');
var bssmdOfnl13 = document.getElementById('bssmd-ofnl13');
var bssmdFinlcb13 = document.getElementById('bssmd-finlcb13');
var bssmdOfnlcb13 = document.getElementById('bssmd-ofnlcb13');
var bssmdFinlcb513 = document.getElementById('bssmd-finlcb513');
var bssmdOfnlcb513 = document.getElementById('bssmd-ofnlcb513');
var bssmdFill13 = document.getElementById('bssmd-fill13');
var bssmdOfll13 = document.getElementById('bssmd-ofll13');
var bssmdFidsc13 = document.getElementById('bssmd-fidsc13');
var bssmdOfdsc13 = document.getElementById('bssmd-ofdsc13');

// Senior Marketing Director 37 to 48 month inputs
var bssmdFinl37 = document.getElementById('bssmd-finl37');
var bssmdOfnl37 = document.getElementById('bssmd-ofnl37');
var bssmdFinlcb37 = document.getElementById('bssmd-finlcb37');
var bssmdOfnlcb37 = document.getElementById('bssmd-ofnlcb37');
var bssmdFinlcb537 = document.getElementById('bssmd-finlcb537');
var bssmdOfnlcb537 = document.getElementById('bssmd-ofnlcb537');
var bssmdFill37 = document.getElementById('bssmd-fill37');
var bssmdOfll37 = document.getElementById('bssmd-ofll37');
var bssmdFidsc37 = document.getElementById('bssmd-fidsc37');
var bssmdOfdsc37 = document.getElementById('bssmd-ofdsc37');

// Senior Marketing Director 49+ month inputs
var bssmdFinl49 = document.getElementById('bssmd-finl49');
var bssmdOfnl49 = document.getElementById('bssmd-ofnl49');
var bssmdFinlcb49 = document.getElementById('bssmd-finlcb49');
var bssmdOfnlcb49 = document.getElementById('bssmd-ofnlcb49');
var bssmdFinlcb549 = document.getElementById('bssmd-finlcb549');
var bssmdOfnlcb549 = document.getElementById('bssmd-ofnlcb549');
var bssmdFill49 = document.getElementById('bssmd-fill49');
var bssmdOfll49 = document.getElementById('bssmd-ofll49');
var bssmdFidsc49 = document.getElementById('bssmd-fidsc49');
var bssmdOfdsc49 = document.getElementById('bssmd-ofdsc49');





// var aumButton = document.getElementById('aum-button');



// todo: change tabs to nextButtons or changePage buttons - previous and next page
/////// Tab logic (now next-button logic) ///////
// https://www.youtube.com/watch?v=5L6h_MrNvsk
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.getElementById(tab.dataset.tabTarget);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    })
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
// function formatUserCurrency(input) {
//   if (typeof input !== "string") {
//     input = input.toString();
//   }
//   // remove all non-digit characters
//   input = input.replace(/\D/g, '');
//   // convert to number and divide by 100 to get cents (not sure why this works,but its buggy if not included)
//   input = Number(input)/100;
//    // format with commas and decimal for cents
//    return input.toLocaleString("en-US", {style:"currency", currency:"USD"});
// }

function formatUserCurrency(input) {
  if (typeof input !== "string") {
    input = input.toString();
  }
  // remove all non-digit characters
  input = input.replace(/\D/g, '');
  input = Number(input);
  // format with commas and no decimal for cents
  return "$ " + input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const currencyInputs = [...document.getElementsByClassName('currency-input')];
currencyInputs.forEach((el) => {
  el.addEventListener('input', function() {
    el.value = formatUserCurrency(el.value);
  });
});


// watch for input on cells to update currency format
const personalAumEls = [
  finl0, ofnl0, finlcb0, ofnlcb0, finlcb50, ofnlcb50, fill0, ofll0, 
  fidsc0, ofdsc0, finl13, ofnl13, finlcb13, ofnlcb13, finlcb513, 
  ofnlcb513, fill13, ofll13, fidsc13, ofdsc13, finl37, ofnl37, finlcb37, 
  ofnlcb37, finlcb537, ofnlcb537, fill37, ofll37, fidsc37, ofdsc37, 
  finl49, ofnl49, finlcb49, ofnlcb49, finlcb549, ofnlcb549, fill49, 
  ofll49, fidsc49, ofdsc49, 
]

personalAumEls.forEach((el) => {
  el.addEventListener('input', function() {
    el.value = formatUserCurrency(el.value);
  })
});

const baseshopAumEls = [
  bstaFinl0, bstaOfnl0, bstaFinlcb0, bstaOfnlcb0, bstaFinlcb50, bstaOfnlcb50, bstaFill0, bstaOfll0, bstaFidsc0, bstaOfdsc0,
  bstaFinl13, bstaOfnl13, bstaFinlcb13, bstaOfnlcb13, bstaFinlcb513, bstaOfnlcb513, bstaFill13, bstaOfll13, bstaFidsc13, bstaOfdsc13,
  bstaFinl37, bstaOfnl37, bstaFinlcb37, bstaOfnlcb37, bstaFinlcb537, bstaOfnlcb537, bstaFill37, bstaOfll37, bstaFidsc37, bstaOfdsc37,
  bstaFinl49, bstaOfnl49, bstaFinlcb49, bstaOfnlcb49, bstaFinlcb549, bstaOfnlcb549, bstaFill49, bstaOfll49, bstaFidsc49, bstaOfdsc49,
  bsaFinl0, bsaOfnl0, bsaFinlcb0, bsaOfnlcb0, bsaFinlcb50, bsaOfnlcb50, bsaFill0, bsaOfll0, bsaFidsc0, bsaOfdsc0,
  bsaFinl13, bsaOfnl13, bsaFinlcb13, bsaOfnlcb13, bsaFinlcb513, bsaOfnlcb513, bsaFill13, bsaOfll13, bsaFidsc13, bsaOfdsc13,
  bsaFinl37, bsaOfnl37, bsaFinlcb37, bsaOfnlcb37, bsaFinlcb537, bsaOfnlcb537, bsaFill37, bsaOfll37, bsaFidsc37, bsaOfdsc37,
  bsaFinl49, bsaOfnl49, bsaFinlcb49, bsaOfnlcb49, bsaFinlcb549, bsaOfnlcb549, bsaFill49, bsaOfll49, bsaFidsc49, bsaOfdsc49,
  bsmdFinl0, bsmdOfnl0, bsmdFinlcb0, bsmdOfnlcb0, bsmdFinlcb50, bsmdOfnlcb50, bsmdFill0, bsmdOfll0, bsmdFidsc0, bsmdOfdsc0,
  bsmdFinl13, bsmdOfnl13, bsmdFinlcb13, bsmdOfnlcb13, bsmdFinlcb513, bsmdOfnlcb513, bsmdFill13, bsmdOfll13, bsmdFidsc13, bsmdOfdsc13,
  bsmdFinl37, bsmdOfnl37, bsmdFinlcb37, bsmdOfnlcb37, bsmdFinlcb537, bsmdOfnlcb537, bsmdFill37, bsmdOfll37, bsmdFidsc37, bsmdOfdsc37,
  bsmdFinl49, bsmdOfnl49, bsmdFinlcb49, bsmdOfnlcb49, bsmdFinlcb549, bsmdOfnlcb549, bsmdFill49, bsmdOfll49, bsmdFidsc49, bsmdOfdsc49,
  bssmdFinl0, bssmdOfnl0, bssmdFinlcb0, bssmdOfnlcb0, bssmdFinlcb50, bssmdOfnlcb50, bssmdFill0, bssmdOfll0, bssmdFidsc0, bssmdOfdsc0,
  bssmdFinl13, bssmdOfnl13, bssmdFinlcb13, bssmdOfnlcb13, bssmdFinlcb513, bssmdOfnlcb513, bssmdFill13, bssmdOfll13, bssmdFidsc13, bssmdOfdsc13,
  bssmdFinl37, bssmdOfnl37, bssmdFinlcb37, bssmdOfnlcb37, bssmdFinlcb537, bssmdOfnlcb537, bssmdFill37, bssmdOfll37, bssmdFidsc37, bssmdOfdsc37,
  bssmdFinl49, bssmdOfnl49, bssmdFinlcb49, bssmdOfnlcb49, bssmdFinlcb549, bssmdOfnlcb549, bssmdFill49, bssmdOfll49, bssmdFidsc49, bssmdOfdsc49,
]
  
baseshopAumEls.forEach((el) => {
  el.addEventListener('input', function() {
    el.value = formatUserCurrency(el.value);
  });
});



const cleanCurrency = input => {
  // Check if the input is a string
  if (typeof input === 'string') {
    // Remove $ and , from the input string
    const cleaned = input.replace(/\$|,/g, '');
    // Convert the cleaned string to a float
    const floatValue = parseFloat(cleaned);
    // Return the float value
    return floatValue;
  } else {
    // Return the input value as is (not a string)
    return input;
  }
};

// aumButton.addEventListener("click", function(e) {
//   e.preventDefault();
//   console.log('button pressed');

//   commissionRate = getContractCommission(contractType.value);
//   console.log(commissionRate);

//   ///////////// NL ///////////////
//   // todo: can i put the .00504 and 84 into variables? what would they be called?
//   // todo: what are the tiered bonous rates and where do they come into play?
//   // fixed income
//   nlTotalAnnualTrailingCommissionsFi = (cleanCurrency(finl0.value) + cleanCurrency(finl13.value) + cleanCurrency(finl37.value) + cleanCurrency(finl49.value)) * .00504 * .84 * commissionRate; 
//   // other funds
//   nlTotalAnnualTrailingCommissionsOf = (cleanCurrency(ofnl0.value) + cleanCurrency(ofnl13.value) + cleanCurrency(ofnl37.value) + cleanCurrency(ofnl49.value)) * .01008 * .84 * commissionRate; 
//   // combined
//   nlTotalAnnualTrailingCommissions = (nlTotalAnnualTrailingCommissionsFi + nlTotalAnnualTrailingCommissionsOf).toFixed(2);

//   console.log(`Total NL Annual Trailing Commissions: ${USDollar.format(nlTotalAnnualTrailingCommissions)}`);


//   //////////// NL-CB ////////////////
//   // todo: tested on marketing director... but the first two times by 0% i think this has to do with the bonuses
  
//   fixedMultiply = 0.00252 * .84 * commissionRate;
//   otherMultiply = 0.00504 *.84 * commissionRate;
//   nlcbTotalATC0 = (cleanCurrency(finlcb0.value) * 0 * .84 * commissionRate) + (cleanCurrency(ofnlcb0.value) * 0 * .84 * commissionRate);
//   nlcbTotalATC13 = (cleanCurrency(finlcb13.value) * fixedMultiply) + (cleanCurrency(ofnlcb13.value) * otherMultiply);
//   nlcbTotalATC37 = (cleanCurrency(finlcb37.value) * fixedMultiply) + (cleanCurrency(ofnlcb37.value) * otherMultiply);
//   nlcbTotalATC49 = (cleanCurrency(finlcb49.value) * 0.00504 * .84 * commissionRate) + (cleanCurrency(ofnlcb49.value) * 0.01008 * .84 * commissionRate);
  
//   nlcbTotal = nlcbTotalATC0 + nlcbTotalATC13 + nlcbTotalATC37+ nlcbTotalATC49;
//   console.log(`Total NLCB Annual Trailing Comissionsns: ${USDollar.format(nlcbTotal)}`);


//   //////////// NL-CB5 ////////////////
//   nlcb5TotalATC0 = (cleanCurrency(finlcb50.value) * 0 * .84 * commissionRate) + (cleanCurrency(ofnlcb0.value) * 0 * .84 * commissionRate);
//   nlcb5TotalATC13 = (cleanCurrency(finlcb513.value) * fixedMultiply) + (cleanCurrency(ofnlcb513.value) * otherMultiply);
//   nlcb5TotalATC37 = (cleanCurrency(finlcb537.value) * fixedMultiply) + (cleanCurrency(ofnlcb537.value) * otherMultiply);
//   nlcb5TotalATC49 = (cleanCurrency(finlcb549.value) * fixedMultiply) + (cleanCurrency(ofnlcb49.value) * otherMultiply); // todo: this does not follow the pattern

//   nlcb5Total = nlcb5TotalATC0 + nlcb5TotalATC13 + nlcb5TotalATC37+ nlcb5TotalATC49;
//   console.log(`Total NLCB5 Annual Trailing Comissionsns: ${USDollar.format(nlcb5Total)}`);

  
//   //////////// LL ////////////////
//   llTotalATC0 = (cleanCurrency(fill0.value) * fixedMultiply) + (cleanCurrency(ofll0.value) * otherMultiply);
//   llTotalATC13 = (cleanCurrency(fill13.value) * fixedMultiply) + (cleanCurrency(ofll13.value) * otherMultiply);
//   llTotalATC37 = (cleanCurrency(fill37.value) * otherMultiply) + (cleanCurrency(ofll37.value) * 0.01008 * .84 * commissionRate); // todo this has otherMultiply where fixed usually is and the last .01008 check if correct
//   llTotalATC49 = (cleanCurrency(fill49.value) * 0.00504 * .84 * commissionRate) + (cleanCurrency(ofll49.value) * 0.01008 * .84 * commissionRate); 

//   llTotal = llTotalATC0 + llTotalATC13 + llTotalATC37+ llTotalATC49;
//   console.log(`Total LL Annual Trailing Comissionsns: ${USDollar.format(llTotal)}`);

//   //////////// DSC ////////////////
//   dscTotalATC0 = (cleanCurrency(fidsc0.value) * fixedMultiply) + (cleanCurrency(ofdsc0.value) * otherMultiply);
//   dscTotalATC13 = (cleanCurrency(fidsc13.value) * fixedMultiply) + (cleanCurrency(ofdsc13.value) * otherMultiply);
//   dscTotalATC37 = (cleanCurrency(fidsc37.value) * fixedMultiply) + (cleanCurrency(ofdsc37.value) * otherMultiply); 
//   dscTotalATC49 = (cleanCurrency(fidsc49.value) * fixedMultiply) + (cleanCurrency(ofdsc49.value) * otherMultiply); 

//   dscTotal = dscTotalATC0 + dscTotalATC13 + dscTotalATC37+ dscTotalATC49;
//   console.log(`Total DSC Annual Trailing Comissionsns: ${USDollar.format(dscTotal)}`);

//   // Invoke showChart function
//   // showChart();


// });



// TODO
// need to account for cells that have nothing entered into them. Maybe I should have a default $0.00
// the select drop-down needs to be fixed so that "training associate" registeres the commission rate... maybe set defualt or say select contract type...
// i think sm-box and small-box-currency could be made into one class (i initially did it to test somthing out - double check this.)



/////////////////////////////
// Slider and Input logic //
///////////////////////////
const primaryBlue = '#005596';

// RANGE (SLIDER) DOM ELEMENTS
const yearSlider = document.getElementById("year-slider");
const pmSlider = document.getElementById("pm-slider");
const mpaSlider = document.getElementById("mpa-slider");
// baseshop monthly lump sum
const bMlsTaSlider = document.getElementById("mls-ta-slider");
const bMlsASlider = document.getElementById("mls-a-slider");
const bMlsMdSlider = document.getElementById("mls-md-slider");
const bMlsSmdSlider = document.getElementById("mls-smd-slider");
// baseshop monthly pre-authorized debits
const bPaTaSlider = document.getElementById("bpa-ta-slider");
const bPaASlider = document.getElementById("bpa-a-slider");
const bPaMdSlider = document.getElementById("bpa-md-slider");
const bPaSmdSlider = document.getElementById("bpa-smd-slider");

// INPUTS DOM ELEMENTS
const inputYear = document.getElementById("year-input");
const inputPm = document.getElementById("pm-input");
const inputMpa = document.getElementById("mpa-input");
// baseshop monthly lump sum
const inputBMlsTa = document.getElementById("mls-ta-input");
const inputBMlsA = document.getElementById("mls-a-input");
const inputBMlsMd = document.getElementById("mls-md-input");
const inputBMlsSmd = document.getElementById("mls-smd-input");
// baseshop monthly pre-authorized debits todo: capitalized B for monthly lump sum, but not for the pre-authorized
const inputbPaTa = document.getElementById("bpa-ta-input");
const inputbPaA = document.getElementById("bpa-a-input");
const inputbPaMd = document.getElementById("bpa-md-input");
const inputbPaSmd = document.getElementById("bpa-smd-input");


// color the left side of slider and set input value to equal slider value
function slider() {
  // Year Slider
  valPercent = (yearSlider.value / yearSlider.max) * 100;
  yearSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputYear.value = yearSlider.value;

  // Personal Monthly (mp) Slider
  valPercent = (pmSlider.value / pmSlider.max) * 100;
  pmSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputPm.value = formatUserCurrency(pmSlider.value);

  // Monthly Pre-authorized (mpa) Slider
  valPercent = (mpaSlider.value / mpaSlider.max) * 100;
  mpaSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputMpa.value = formatUserCurrency(mpaSlider.value);

  // Baseshop Monthly Lump Sum - Training Associate
  valPercent = (bMlsTaSlider.value / bMlsMdSlider.max) * 100;
  bMlsTaSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputBMlsTa.value = formatUserCurrency(bMlsTaSlider.value);

  // Baseshop Monthly Lump Sum - Associate
  valPercent = (bMlsASlider.value / bMlsASlider.max) * 100;
  bMlsASlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputBMlsA.value = formatUserCurrency(bMlsASlider.value);

  // Baseshop Monthly Lump Sum - Marketing Director
  valPercent = (bMlsMdSlider.value / bMlsMdSlider.max) * 100;
  bMlsMdSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputBMlsMd.value = formatUserCurrency(bMlsMdSlider.value);

  // Baseshop Monthly Lump Sum - Senior Marketing Director
  valPercent = (bMlsSmdSlider.value / bMlsSmdSlider.max) * 100;
  bMlsSmdSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputBMlsSmd.value = formatUserCurrency(bMlsSmdSlider.value);

  // Baseshop Pre-authorized debit - Training Associate
  valPercent = (bPaTaSlider.value / bPaMdSlider.max) * 100;
  bPaTaSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputbPaTa.value = formatUserCurrency(bPaTaSlider.value);

  // Baseshop Pre-authorized debit - Associate
  valPercent = (bPaASlider.value / bPaASlider.max) * 100;
  bPaASlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputbPaA.value = formatUserCurrency(bPaASlider.value);

  // Baseshop Pre-authorized debit - Marketing Director
  valPercent = (bPaMdSlider.value / bPaMdSlider.max) * 100;
  bPaMdSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputbPaMd.value = formatUserCurrency(bPaMdSlider.value);

  // Baseshop Pre-authorized debit - Senior Marketing Director
  valPercent = (bPaSmdSlider.value / bPaSmdSlider.max) * 100;
  bPaSmdSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputbPaSmd.value = formatUserCurrency(bPaSmdSlider.value);
}

slider();

// format input value and set to equal slider value
function goalInput() {
  // set and format value 
  yearSlider.value = inputYear.value;
  pmSlider.value = inputPm.value.replace(/[^0-9.-]+/g, '');
  mpaSlider.value = inputMpa.value.replace(/[^0-9.-]+/g, '');
  // baseshop monthly lump sum
  bMlsTaSlider.value = inputBMlsTa.value.replace(/[^0-9.-]+/g, '');
  bMlsASlider.value = inputBMlsA.value.replace(/[^0-9.-]+/g, '');
  bMlsMdSlider.value = inputBMlsMd.value.replace(/[^0-9.-]+/g, '');
  bMlsSmdSlider.value = inputBMlsSmd.value.replace(/[^0-9.-]+/g, '');
  // baseshop pre-authorized debit
  bPaTaSlider.value = inputbPaTa.value.replace(/[^0-9.-]+/g, '');
  bPaASlider.value = inputbPaA.value.replace(/[^0-9.-]+/g, '');
  bPaMdSlider.value = inputbPaMd.value.replace(/[^0-9.-]+/g, '');
  bPaSmdSlider.value = inputbPaSmd.value.replace(/[^0-9.-]+/g, '');

  slider();
}

///// ADD EVENT LISTENERS TO SLIDERS & INPUT /////
///// SLIDERS
// Years Input
yearSlider.addEventListener('input', function() {
  valPercent = (yearSlider.value / yearSlider.max) * 100;
  yearSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputYear.value = yearSlider.value;
});

// Personal Monthly (mp) Input
pmSlider.addEventListener('input', function() {
  valPercent = (pmSlider.value / pmSlider.max) * 100;
  pmSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputPm.value = formatUserCurrency(pmSlider.value);
});

// Monthly Pre-authorized Input
mpaSlider.addEventListener('input', function() {
  valPercent = (mpaSlider.value / mpaSlider.max) * 100;
  mpaSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputMpa.value = formatUserCurrency(mpaSlider.value);
});

// Monthly Lump Sum Training Associate 
bMlsTaSlider.addEventListener('input', function() {
  valPercent = (bMlsTaSlider.value / bMlsTaSlider.max) * 100;
  bMlsTaSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputBMlsTa.value = formatUserCurrency(bMlsTaSlider.value);
});

// Monthly Lump Sum  Associate
bMlsASlider.addEventListener('input', function() {
  valPercent = (bMlsASlider.value / bMlsASlider.max) * 100;
  bMlsASlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputBMlsA.value = formatUserCurrency(bMlsASlider.value);
});

// Monthly Lump Sum Marketing Director 
bMlsMdSlider.addEventListener('input', function() {
  valPercent = (bMlsMdSlider.value / bMlsMdSlider.max) * 100;
  bMlsMdSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputBMlsMd.value = formatUserCurrency(bMlsMdSlider.value);
});

// Monthly Lump Sum Senior Marketing Director
bMlsSmdSlider.addEventListener('input', function() {
  valPercent = (bMlsSmdSlider.value / bMlsSmdSlider.max) * 100;
  bMlsSmdSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputBMlsSmd.value = formatUserCurrency(bMlsSmdSlider.value);
});

// Monthly Pre-authorized Debit Training Associate 
bPaTaSlider.addEventListener('input', function() {
  valPercent = (bPaTaSlider.value / bPaTaSlider.max) * 100;
  bPaTaSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputbPaTa.value = formatUserCurrency(bPaTaSlider.value);
});

// Monthly Pre-authorized Debit  Associate
bPaASlider.addEventListener('input', function() {
  valPercent = (bPaASlider.value / bPaASlider.max) * 100;
  bPaASlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputbPaA.value = formatUserCurrency(bPaASlider.value);
});

// Monthly Pre-authorized Debit Marketing Director 
bPaMdSlider.addEventListener('input', function() {
  valPercent = (bPaMdSlider.value / bPaMdSlider.max) * 100;
  bPaMdSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputbPaMd.value = formatUserCurrency(bPaMdSlider.value);
});

// Monthly Pre-authorized Debit Senior Marketing Director
bPaSmdSlider.addEventListener('input', function() {
  valPercent = (bPaSmdSlider.value / bPaSmdSlider.max) * 100;
  bPaSmdSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputbPaSmd.value = formatUserCurrency(bPaSmdSlider.value);
});

///// INPUTS 
// Years 
inputYear.addEventListener('input', function() {
  yearSlider.value = inputYear.value;
  slider();
});

// Personal Monthly (mp) 
inputPm.addEventListener('input', function() {
  pmSlider.value = inputPm.value.replace(/[^0-9.-]+/g, '');
  inputPm.value = formatUserCurrency(pmSlider.value);
  slider();
});

//  Monthly Pre-authorized 
inputMpa.addEventListener('input', function() {
  mpaSlider.value = inputMpa.value.replace(/[^0-9.-]+/g, '');
  inputMpa.value = formatUserCurrency(mpaSlider.value);
  slider();
});

//  Monthly Lump Sum Training Associate 
inputBMlsTa.addEventListener('input', function() {
  mpaSlider.value = inputBMlsTa.value.replace(/[^0-9.-]+/g, '');
  inputBMlsTa.value = formatUserCurrency(bMlsTaSlider.value);
  slider();
});

//  Monthly Lump Sum  Associate 
inputBMlsA.addEventListener('input', function() {
  mpaSlider.value = inputBMlsA.value.replace(/[^0-9.-]+/g, '');
  inputBMlsA.value = formatUserCurrency(bMlsASlider.value);
  slider();
});

//  Monthly Lump Sum Training Associate 
inputBMlsMd.addEventListener('input', function() {
  mpaSlider.value = inputBMlsMd.value.replace(/[^0-9.-]+/g, '');
  inputBMlsMd.value = formatUserCurrency(bMlsMdSlider.value);
  slider();
});

//  Monthly Lump Sum Training Associate 
inputBMlsSmd.addEventListener('input', function() {
  mpaSlider.value = inputBMlsSmd.value.replace(/[^0-9.-]+/g, '');
  inputBMlsSmd.value = formatUserCurrency(bMlsSmdSlider.value);
  slider();
});








// take out the function from the forEach so they can be referenced inside both forEach. need to run 
// sliders function in the sliderInput so it updates the bar progress

// collapsible script
// todo change to foreach
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible_animate
var coll = document.getElementsByClassName("collapsible");
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active-collapse");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


var innerColl = document.getElementsByClassName("inner-collapsible");

for (var i = 0; i < innerColl.length; i++) {
  var collapseContainer = innerColl[i];
  collapseContainer.addEventListener("click", createCollapseListener(collapseContainer, i));
}

function createCollapseListener(container, index) {
  return function() {
    var parentCollapsable = container.parentElement;
    var parentHeight = parentCollapsable.style.maxHeight;
    this.classList.toggle("active-inner-collapse");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      parentCollapsable.style.maxHeight = parseInt(content.scrollHeight) + parseInt(parentHeight) + "px";
    } 
  };
}


// Toggle plus minus 
// https://stackoverflow.com/questions/49910174/plus-minus-toggle-on-clicking-a-link
function toggle_plus(id) {
  var f = document.getElementById(id);
  f.classList.toggle("show-plus");
  f.classList.toggle("show-minus");
}


// total Personal AUM update value
const personalAumInputs = document.getElementsByClassName("personal-aum-input");
const personalAumTotal = document.getElementById("personal-aum-total");
const replaceEmpty = (array) => {
  const updateArray = array.map((value) => {
    if (value === "") {
      return 0;
    } else {
      return value;
    }
  });
  return updateArray
}

const sumArray = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

// get the sum of all personal AUM input cells
for (i = 0; i < personalAumInputs.length; i++) {
  personalAumInputs[i].addEventListener("input", function() {
    // this list of arrays must be here to update everytime a input is updated
    const personalAumValues = [
      finl0.value, ofnl0.value, finlcb0.value, ofnlcb0.value, finlcb50.value, ofnlcb50.value, fill0.value, ofll0.value, 
      fidsc0.value, ofdsc0.value, finl13.value, ofnl13.value, finlcb13.value, ofnlcb13.value, finlcb513.value, 
      ofnlcb513.value, fill13.value, ofll13.value, fidsc13.value, ofdsc13.value, finl37.value, ofnl37.value, finlcb37.value, 
      ofnlcb37.value, finlcb537.value, ofnlcb537.value, fill37.value, ofll37.value, fidsc37.value, ofdsc37.value, 
      finl49.value, ofnl49.value, finlcb49.value, ofnlcb49.value, finlcb549.value, ofnlcb549.value, fill49.value, 
      ofll49.value, fidsc49.value, ofdsc49.value, 
    ]
    const arrayNoEmpty = replaceEmpty(personalAumValues);
    const cleanedPersonalAumValues = arrayNoEmpty.map(cleanCurrency);
    let sum = sumArray(cleanedPersonalAumValues);
    personalAumTotal.textContent = formatUserCurrency(sum);
    
  });
}

const baseshopAumInputs = document.getElementsByClassName("bs-aum-input");
const baseshopAumTotal = document.getElementById("bs-aum-total");
// get the sum of all personal AUM input cells
for (i = 0; i < baseshopAumInputs.length; i++) {
  baseshopAumInputs[i].addEventListener("input", function() {
    // this list of arrays must be here to update everytime a input is updated
    const baseshopAumValues = [
      bstaFinl0.value, bstaOfnl0.value, bstaFinlcb0.value, bstaOfnlcb0.value, bstaFinlcb50.value, bstaOfnlcb50.value, bstaFill0.value, bstaOfll0.value, bstaFidsc0.value, bstaOfdsc0.value,
      bstaFinl13.value, bstaOfnl13.value, bstaFinlcb13.value, bstaOfnlcb13.value, bstaFinlcb513.value, bstaOfnlcb513.value, bstaFill13.value, bstaOfll13.value, bstaFidsc13.value, bstaOfdsc13.value,
      bstaFinl37.value, bstaOfnl37.value, bstaFinlcb37.value, bstaOfnlcb37.value, bstaFinlcb537.value, bstaOfnlcb537.value, bstaFill37.value, bstaOfll37.value, bstaFidsc37.value, bstaOfdsc37.value,
      bstaFinl49.value, bstaOfnl49.value, bstaFinlcb49.value, bstaOfnlcb49.value, bstaFinlcb549.value, bstaOfnlcb549.value, bstaFill49.value, bstaOfll49.value, bstaFidsc49.value, bstaOfdsc49.value,
      bsaFinl0.value, bsaOfnl0.value, bsaFinlcb0.value, bsaOfnlcb0.value, bsaFinlcb50.value, bsaOfnlcb50.value, bsaFill0.value, bsaOfll0.value, bsaFidsc0.value, bsaOfdsc0.value,
      bsaFinl13.value, bsaOfnl13.value, bsaFinlcb13.value, bsaOfnlcb13.value, bsaFinlcb513.value, bsaOfnlcb513.value, bsaFill13.value, bsaOfll13.value, bsaFidsc13.value, bsaOfdsc13.value,
      bsaFinl37.value, bsaOfnl37.value, bsaFinlcb37.value, bsaOfnlcb37.value, bsaFinlcb537.value, bsaOfnlcb537.value, bsaFill37.value, bsaOfll37.value, bsaFidsc37.value, bsaOfdsc37.value,
      bsaFinl49.value, bsaOfnl49.value, bsaFinlcb49.value, bsaOfnlcb49.value, bsaFinlcb549.value, bsaOfnlcb549.value, bsaFill49.value, bsaOfll49.value, bsaFidsc49.value, bsaOfdsc49.value,
      bsmdFinl0.value, bsmdOfnl0.value, bsmdFinlcb0.value, bsmdOfnlcb0.value, bsmdFinlcb50.value, bsmdOfnlcb50.value, bsmdFill0.value, bsmdOfll0.value, bsmdFidsc0.value, bsmdOfdsc0.value,
      bsmdFinl13.value, bsmdOfnl13.value, bsmdFinlcb13.value, bsmdOfnlcb13.value, bsmdFinlcb513.value, bsmdOfnlcb513.value, bsmdFill13.value, bsmdOfll13.value, bsmdFidsc13.value, bsmdOfdsc13.value,
      bsmdFinl37.value, bsmdOfnl37.value, bsmdFinlcb37.value, bsmdOfnlcb37.value, bsmdFinlcb537.value, bsmdOfnlcb537.value, bsmdFill37.value, bsmdOfll37.value, bsmdFidsc37.value, bsmdOfdsc37.value,
      bsmdFinl49.value, bsmdOfnl49.value, bsmdFinlcb49.value, bsmdOfnlcb49.value, bsmdFinlcb549.value, bsmdOfnlcb549.value, bsmdFill49.value, bsmdOfll49.value, bsmdFidsc49.value, bsmdOfdsc49.value,
      bssmdFinl0.value, bssmdOfnl0.value, bssmdFinlcb0.value, bssmdOfnlcb0.value, bssmdFinlcb50.value, bssmdOfnlcb50.value, bssmdFill0.value, bssmdOfll0.value, bssmdFidsc0.value, bssmdOfdsc0.value,
      bssmdFinl13.value, bssmdOfnl13.value, bssmdFinlcb13.value, bssmdOfnlcb13.value, bssmdFinlcb513.value, bssmdOfnlcb513.value, bssmdFill13.value, bssmdOfll13.value, bssmdFidsc13.value, bssmdOfdsc13.value,
      bssmdFinl37.value, bssmdOfnl37.value, bssmdFinlcb37.value, bssmdOfnlcb37.value, bssmdFinlcb537.value, bssmdOfnlcb537.value, bssmdFill37.value, bssmdOfll37.value, bssmdFidsc37.value, bssmdOfdsc37.value,
      bssmdFinl49.value, bssmdOfnl49.value, bssmdFinlcb49.value, bssmdOfnlcb49.value, bssmdFinlcb549.value, bssmdOfnlcb549.value, bssmdFill49.value, bssmdOfll49.value, bssmdFidsc49.value, bssmdOfdsc49.value,
    ]
    const arrayNoEmpty = replaceEmpty(baseshopAumValues);
    const cleanedBaseshopAumValues = arrayNoEmpty.map(cleanCurrency);
    let sum = sumArray(cleanedBaseshopAumValues);
    baseshopAumTotal.textContent = formatUserCurrency(sum);
    
  });
}









// TODO: change all the contribution amount ID names
// for the baseshop slider and inputs the names are toggle-inner-mls-smd but I should identify it is from baseshop not personal
