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

////////////////////////////////////////////
//////// Personal Monthly Activity ////////
//////////////////////////////////////////

// Monthly Lump Sum
var pmaMlsNl = document.getElementById('pma-mls-nl');
var pmaMlsNlcb = document.getElementById('pma-mls-nlcb');
var pmaMlsNlcb5 = document.getElementById('pma-mls-nlcb5');
var pmaMlsTotal = document.getElementById("pma-mls-total");

// Monthly Pre-Authorized Debit
var pmaMpadNl = document.getElementById('pma-mpad-nl');
var pmaMpadNlcb = document.getElementById('pma-mpad-nlcb');
var pmaMpadNlcb5 = document.getElementById('pma-mpad-nlcb5');
var pmaMpadTotal = document.getElementById("pma-mpad-total");

////////////////////////////////////////////
//////// Baseshop Monthly Activity ////////
//////////////////////////////////////////

//// Monthly Lump Sum ////
// Training Associate
var bsMlsTaNl = document.getElementById("bs-mls-ta-nl");
var bsMlsTaNlCb = document.getElementById("bs-mls-ta-nlcb");
var bsMlsTaNlCb5 = document.getElementById("bs-mls-ta-nlcb5");
var bsMlsTaNlSpan = document.getElementById("bs-mls-ta-nl-span");
var bsMlsTaNlCbSpan = document.getElementById("bs-mls-ta-nlcb-span");
var bsMlsTaNlCb5Span = document.getElementById("bs-mls-ta-nlcb5-span");
var bsMlsTaTotal = document.getElementById("bs-mls-ta-total");

// Associate
var bsMlsaNl = document.getElementById("bs-mls-a-nl");
var bsMlsaNlCb = document.getElementById("bs-mls-a-nlcb");
var bsMlsaNlCb5 = document.getElementById("bs-mls-a-nlcb5");
var bsMlsaNlSpan = document.getElementById("bs-mls-a-nl-span");
var bsMlsaNlCbSpan = document.getElementById("bs-mls-a-nlcb-span");
var bsMlsaNlCb5Span = document.getElementById("bs-mls-a-nlcb5-span");
var bsMlsaTotal = document.getElementById("bs-mls-a-total");

// Marketing Director
var bsMlsMdNl = document.getElementById("bs-mls-md-nl");
var bsMlsMdNlCb = document.getElementById("bs-mls-md-nlcb");
var bsMlsMdNlCb5 = document.getElementById("bs-mls-md-nlcb5");
var bsMlsMdNlSpan = document.getElementById("bs-mls-md-nl-span");
var bsMlsMdNlCbSpan = document.getElementById("bs-mls-md-nlcb-span");
var bsMlsMdNlCb5Span = document.getElementById("bs-mls-md-nlcb5-span");
var bsMlsMdTotal = document.getElementById("bs-mls-md-total");

// Senior Marketing Director
var bsMlsSmdNl = document.getElementById("bs-mls-smd-nl");
var bsMlsSmdNlCb = document.getElementById("bs-mls-smd-nlcb");
var bsMlsSmdNlCb5 = document.getElementById("bs-mls-smd-nlcb5");
var bsMlsSmdNlSpan = document.getElementById("bs-mls-smd-nl-span");
var bsMlsSmdNlCbSpan = document.getElementById("bs-mls-smd-nlcb-span");
var bsMlsSmdNlCb5Span = document.getElementById("bs-mls-smd-nlcb5-span");
var bsMlsSmdTotal = document.getElementById("bs-mls-smd-total");

//// Monthly Pre-Authorized Debit ////
// Training Associate
var bsMpadTaNl = document.getElementById("bs-mpad-ta-nl");
var bsMpadTaNlCb = document.getElementById("bs-mpad-ta-nlcb");
var bsMpadTaNlCb5 = document.getElementById("bs-mpad-ta-nlcb5");
var bsMpadTaNlSpan = document.getElementById("bs-mpad-ta-nl-span");
var bsMpadTaNlCbSpan = document.getElementById("bs-mpad-ta-nlcb-span");
var bsMpadTaNlCb5Span = document.getElementById("bs-mpad-ta-nlcb5-span");
var bsMpadTaTotal = document.getElementById("bs-mpad-ta-total");

// Associate
var bsMpadaNl = document.getElementById("bs-mpad-a-nl");
var bsMpadaNlCb = document.getElementById("bs-mpad-a-nlcb");
var bsMpadaNlCb5 = document.getElementById("bs-mpad-a-nlcb5");
var bsMpadaNlSpan = document.getElementById("bs-mpad-a-nl-span");
var bsMpadaNlCbSpan = document.getElementById("bs-mpad-a-nlcb-span");
var bsMpadaNlCb5Span = document.getElementById("bs-mpad-a-nlcb5-span");
var bsMpadaTotal = document.getElementById("bs-mpad-a-total");

// Marketing Director
var bsMpadMdNl = document.getElementById("bs-mpad-md-nl");
var bsMpadMdNlCb = document.getElementById("bs-mpad-md-nlcb");
var bsMpadMdNlCb5 = document.getElementById("bs-mpad-md-nlcb5");
var bsMpadMdNlSpan = document.getElementById("bs-mpad-md-nl-span");
var bsMpadMdNlCbSpan = document.getElementById("bs-mpad-md-nlcb-span");
var bsMpadMdNlCb5Span = document.getElementById("bs-mpad-md-nlcb5-span");
var bsMpadMdTotal = document.getElementById("bs-mpad-md-total");

// Senior Marketing Director
var bsMpadSmdNl = document.getElementById("bs-mpad-smd-nl");
var bsMpadSmdNlCb = document.getElementById("bs-mpad-smd-nlcb");
var bsMpadSmdNlCb5 = document.getElementById("bs-mpad-smd-nlcb5");
var bsMpadSmdNlSpan = document.getElementById("bs-mpad-smd-nl-span");
var bsMpadSmdNlCbSpan = document.getElementById("bs-mpad-smd-nlcb-span");
var bsMpadSmdNlCb5Span = document.getElementById("bs-mpad-smd-nlcb5-span");
var bsMpadSmdTotal = document.getElementById("bs-mpad-smd-total");

// number of agents inputs
var blsTaAgents = document.getElementById("bls-ta-agents"); // bpa-a-agents
var blsAAgents = document.getElementById("bls-a-agents");
var blsMdAgents = document.getElementById("bls-md-agents");
var blsSmdAgents = document.getElementById("bls-smd-agents");

var bpaTaAgents = document.getElementById("bpa-ta-agents"); // bpa-a-agents
var bpaAAgents = document.getElementById("bpa-a-agents");
var bpaMdAgents = document.getElementById("bpa-md-agents");
var bpaSmdAgents = document.getElementById("bpa-smd-agents");




///////////////////////////////////////////////////////////
////////////////  Summary Pages///////////////////////////
///////////////////////////////////////////////////////////
var monthlyPointsPayout = document.getElementById("monthly-points-payout");
var yearlyPointsPayout = document.getElementById("yearly-points-payout");
var goalPointsPayout = document.getElementById("goal-points-payout");

var monthlyCommissionPayout = document.getElementById('monthly-commission-payout');
var yearlyCommissionPayout = document.getElementById('yearly-commission-payout');
var goalCommissionPayout = document.getElementById('goal-commission-payout');

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
const nlcbSc = .035
const nlcb5Sc = .056

// update DOM to reflect selected 
// https://stackoverflow.com/questions/37902166/html-change-text-based-on-input-field


function formatUserCurrency(input) {
  if (typeof input !== "string") {
    input = input.toString();
  }
  // remove all non-digit characters
  input = input.replace(/\D/g, '');
  input = Number(input);
  // format with commas and no decimal for cents
  return "$" + input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
    calculatePersonalAum();
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


const personalMonthlyActivityEls = [pmaMlsNl, pmaMlsNlcb, pmaMlsNlcb5, pmaMpadNl, pmaMpadNlcb, pmaMpadNlcb5];

personalMonthlyActivityEls.forEach((el) => {
  el.addEventListener('input', function() {
    el.value = formatUserCurrency(el.value);
  });
});

const baseshopMonthlyActivityEls = 
  [
  bsMlsTaNl, bsMlsTaNlCb, bsMlsTaNlCb5, bsMlsaNl, bsMlsaNlCb, bsMlsaNlCb5, 
  bsMlsMdNl, bsMlsMdNlCb, bsMlsMdNlCb5, bsMlsSmdNl, bsMlsSmdNlCb, bsMlsSmdNlCb5, 
  bsMpadTaNl, bsMpadTaNlCb, bsMpadTaNlCb5, bsMpadaNl, bsMpadaNlCb, bsMpadaNlCb5, 
  bsMpadMdNl, bsMpadMdNlCb, bsMpadMdNlCb5, bsMpadSmdNl, bsMpadSmdNlCb, bsMpadSmdNlCb5
];

baseshopMonthlyActivityEls.forEach((el) => {
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


// function calculatePersonalAum() {
//   
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

//   personalDscTotal = dscTotalATC0 + dscTotalATC13 + dscTotalATC37+ dscTotalATC49;
//   console.log(`Total DSC Annual Trailing Comissionsns: ${USDollar.format(personalDscTotal)}`);

// };



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
// projections
const rateReturnSlider = document.getElementById("rate-of-return-slider");
const rateReturnInput = document.getElementById("rate-of-return-input");

// color the left side of slider and set input value to equal slider value
function slider() {
  // Year Slider
  valPercent = (yearSlider.value / yearSlider.max) * 100;
  yearSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputYear.value = yearSlider.value;

  // Personal Monthly (mp) Slider
  valPercent = (pmSlider.value / pmSlider.max) * 100;
  pmSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  // inputPm.value = formatUserCurrency(pmSlider.value);

  // Monthly Pre-authorized (mpa) Slider
  valPercent = (mpaSlider.value / mpaSlider.max) * 100;
  mpaSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  // inputMpa.value = formatUserCurrency(mpaSlider.value);

  // Baseshop Monthly Lump Sum - Training Associate
  valPercent = (bMlsTaSlider.value / bMlsMdSlider.max) * 100;
  bMlsTaSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  // inputBMlsTa.value = formatUserCurrency(bMlsTaSlider.value);

  // Baseshop Monthly Lump Sum - Associate
  valPercent = (bMlsASlider.value / bMlsASlider.max) * 100;
  bMlsASlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  // inputBMlsA.value = formatUserCurrency(bMlsASlider.value);

  // Baseshop Monthly Lump Sum - Marketing Director
  valPercent = (bMlsMdSlider.value / bMlsMdSlider.max) * 100;
  bMlsMdSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  // inputBMlsMd.value = formatUserCurrency(bMlsMdSlider.value);

  // Baseshop Monthly Lump Sum - Senior Marketing Director
  valPercent = (bMlsSmdSlider.value / bMlsSmdSlider.max) * 100;
  bMlsSmdSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  // inputBMlsSmd.value = formatUserCurrency(bMlsSmdSlider.value);

  // Baseshop Pre-authorized debit - Training Associate
  valPercent = (bPaTaSlider.value / bPaMdSlider.max) * 100;
  bPaTaSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  // inputbPaTa.value = formatUserCurrency(bPaTaSlider.value);

  // Baseshop Pre-authorized debit - Associate
  valPercent = (bPaASlider.value / bPaASlider.max) * 100;
  bPaASlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  // inputbPaA.value = formatUserCurrency(bPaASlider.value);

  // Baseshop Pre-authorized debit - Marketing Director
  valPercent = (bPaMdSlider.value / bPaMdSlider.max) * 100;
  bPaMdSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  // inputbPaMd.value = formatUserCurrency(bPaMdSlider.value);

  // Baseshop Pre-authorized debit - Senior Marketing Director
  valPercent = (bPaSmdSlider.value / bPaSmdSlider.max) * 100;
  bPaSmdSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  // inputbPaSmd.value = formatUserCurrency(bPaSmdSlider.value);

  // projections rate of return slider
  rateReturnSlider
  valPercent = (rateReturnSlider.value / rateReturnSlider.max) * 100;
  rateReturnSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;

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
  // projectsions
  rateReturnSlider.value = rateReturnInput.value;

  slider();
}

///// ADD EVENT LISTENERS TO SLIDERS & INPUT /////
///// SLIDERS
// Years Input
yearSlider.addEventListener('input', function() {
  valPercent = (yearSlider.value / yearSlider.max) * 100;
  yearSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputYear.value = yearSlider.value + " years";
});

// Personal Monthly (mp) Input
pmSlider.addEventListener('input', function() {
  valPercent = (pmSlider.value / pmSlider.max) * 100;
  pmSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputPm.value = pmSlider.value + "%";
});

// Monthly Pre-authorized Input
mpaSlider.addEventListener('input', function() {
  valPercent = (mpaSlider.value / mpaSlider.max) * 100;
  mpaSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputMpa.value = mpaSlider.value + "%";
});

// Monthly Lump Sum Training Associate 
bMlsTaSlider.addEventListener('input', function() {
  valPercent = (bMlsTaSlider.value / bMlsTaSlider.max) * 100;
  bMlsTaSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputBMlsTa.value = bMlsTaSlider.value + "%";
});

// Monthly Lump Sum  Associate
bMlsASlider.addEventListener('input', function() {
  valPercent = (bMlsASlider.value / bMlsASlider.max) * 100;
  bMlsASlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputBMlsA.value = bMlsASlider.value + "%";
});

// Monthly Lump Sum Marketing Director 
bMlsMdSlider.addEventListener('input', function() {
  valPercent = (bMlsMdSlider.value / bMlsMdSlider.max) * 100;
  bMlsMdSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputBMlsMd.value = bMlsMdSlider.value + "%";
});

// Monthly Lump Sum Senior Marketing Director
bMlsSmdSlider.addEventListener('input', function() {
  valPercent = (bMlsSmdSlider.value / bMlsSmdSlider.max) * 100;
  bMlsSmdSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputBMlsSmd.value = bMlsSmdSlider.value + "%";
});

// Monthly Pre-authorized Debit Training Associate 
bPaTaSlider.addEventListener('input', function() {
  valPercent = (bPaTaSlider.value / bPaTaSlider.max) * 100;
  bPaTaSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputbPaTa.value = bPaTaSlider.value + "%";
});

// Monthly Pre-authorized Debit  Associate
bPaASlider.addEventListener('input', function() {
  valPercent = (bPaASlider.value / bPaASlider.max) * 100;
  bPaASlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputbPaA.value = bPaASlider.value + "%";
});

// Monthly Pre-authorized Debit Marketing Director 
bPaMdSlider.addEventListener('input', function() {
  valPercent = (bPaMdSlider.value / bPaMdSlider.max) * 100;
  bPaMdSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputbPaMd.value = bPaMdSlider.value + "%";
});

// Monthly Pre-authorized Debit Senior Marketing Director
bPaSmdSlider.addEventListener('input', function() {
  valPercent = (bPaSmdSlider.value / bPaSmdSlider.max) * 100;
  bPaSmdSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  inputbPaSmd.value = bPaSmdSlider.value + "%";
});

// projected rate of return
rateReturnSlider.addEventListener('input', function() {
  valPercent = (rateReturnSlider.value / rateReturnSlider.max) * 100;
  rateReturnSlider.style.background = `linear-gradient(to right, ${primaryBlue} ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  rateReturnInput.value = rateReturnSlider.value + "%";
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

//  projections rate of return 
rateReturnInput.addEventListener('input', function() {
  rateReturnSlider.value = rateReturnInput.value.replace(/[^0-9.-]+/g, '');
  rateReturnInput.value = formatUserCurrency(rateReturnSlider.value);
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
const personalAumSum = document.getElementById("personal-aum-total");
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
    personalAumSum.textContent = formatUserCurrency(sum);
    calculatePersonalAum(cleanedPersonalAumValues);
    
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
    ];
    const arrayNoEmpty = replaceEmpty(baseshopAumValues);
    const cleanedBaseshopAumValues = arrayNoEmpty.map(cleanCurrency);
    let sum = sumArray(cleanedBaseshopAumValues);
    baseshopAumTotal.textContent = formatUserCurrency(sum);
    
  });
}

// personal monthly activity monthly lump sum & Pre-authorized total and format
const pmaBmaElements = [pmaMlsNl, pmaMlsNlcb, pmaMlsNlcb5, 
                        pmaMpadNl, pmaMpadNlcb, pmaMpadNlcb5,
                        // Baseshop values
                        bsMlsTaNl, bsMlsTaNlCb, bsMlsTaNlCb5,
                        bsMlsaNl, bsMlsaNlCb, bsMlsaNlCb5,
                        bsMlsMdNl, bsMlsMdNlCb, bsMlsMdNlCb5,
                        
                        bsMlsSmdNl, bsMlsSmdNlCb, bsMlsSmdNlCb5,
                        bsMpadTaNl, bsMpadTaNlCb, bsMpadTaNlCb5,
                        bsMpadaNl, bsMpadaNlCb, bsMpadaNlCb5,
                        bsMpadMdNl, bsMpadMdNlCb, bsMpadMdNlCb5,
                        bsMpadSmdNl, bsMpadSmdNlCb, bsMpadSmdNlCb5];



// todo add event listener to run pmabma stuff (will have to extract everything from for loop and add it to a function and run the function right away
// and then run it in the for loop)
// here I am updateing the values under the amount multipley by number of associates
// function updateMultipliers(inputValue) {
//   console.log('hi there!')
//   const agentsInput = document.getElementById('bls-ta-agents');
//   const multiplierSpans = document.getElementsByClassName('multiplier-mls-ta');

//   const agentCount = parseInt(agentsInput.value);

//   for (let i = 0; i < multiplierSpans.length; i++) {
//     const multiplierSpan = multiplierSpans[i];
//     multiplierSpan.textContent = `x${agentCount} = ${agentCounts * inputValue}`;
//   }
// }



// terrible name 
const doPmaBma = () => { 
  const pmaBmaValues = pmaBmaElements.map(el => el.value);
  const arrayNoEmpty = replaceEmpty(pmaBmaValues);
  const cleanedPmaBmaValues = arrayNoEmpty.map(cleanCurrency);
  const baseshopMonthlyTotals = [
    pmaMlsTotal, pmaMpadTotal,
    bsMlsTaTotal,bsMlsaTotal,bsMlsMdTotal,bsMlsSmdTotal,
    bsMpadTaTotal,bsMpadaTotal,bsMpadMdTotal,bsMpadSmdTotal
  ];
  const multiplierSpans = [      
    bsMlsTaNlSpan, bsMlsTaNlCbSpan, bsMlsTaNlCb5Span, 
    bsMlsaNlSpan, bsMlsaNlCbSpan, bsMlsaNlCb5Span, 
    bsMlsMdNlSpan, bsMlsMdNlCbSpan, bsMlsMdNlCb5Span, 
    bsMlsSmdNlSpan, bsMlsSmdNlCbSpan, bsMlsSmdNlCb5Span, 
    bsMpadTaNlSpan, bsMpadTaNlCbSpan, bsMpadTaNlCb5Span, 
    bsMpadaNlSpan, bsMpadaNlCbSpan, bsMpadaNlCb5Span, 
    bsMpadMdNlSpan, bsMpadMdNlCbSpan, bsMpadMdNlCb5Span, 
    bsMpadSmdNlSpan, bsMpadSmdNlCbSpan, bsMpadSmdNlCb5Span
  ];

  let baseshopMonthlyTotalValues = [];
    // todo: when the number of associates on your team is updated in the bsma it should rerun all calculations (otherwise on reload if number are entured the totals will just be 0)
  // I want to keep the groups here so I'm iterating 
  // and grabbing 3 at a time (nl, nlcb, nlcb5)
  const onlyBaseshopMonthlyTotals = baseshopMonthlyTotals.slice(2);  // i think i can delete this
  for (let i = 0; i < cleanedPmaBmaValues.length; i += 3) {
    
    const numberAssociatesArray = [1, 1, // for pma 
      blsTaAgents.value,  blsAAgents.value,  blsMdAgents.value, blsSmdAgents.value, 
      bpaTaAgents.value, bpaAAgents.value,  bpaMdAgents.value,  bpaSmdAgents.value
    ]
    let baseIndex = parseInt(i / 3); // todo? if i > 0 else should cause error on first itter of i = 0
    let numAssociates = numberAssociatesArray[baseIndex];
    let firstElement = cleanedPmaBmaValues[i] * numAssociates;
    let secondElement = cleanedPmaBmaValues[i + 1] * numAssociates;
    let thirdElement = cleanedPmaBmaValues[i + 2] * numAssociates;

    
    var sum = sumArray([firstElement, secondElement, thirdElement]);
    let bsMonthlyTotal = formatUserCurrency(sum)
    baseshopMonthlyTotalValues.push(bsMonthlyTotal);
    baseshopMonthlyTotals[baseIndex].textContent = bsMonthlyTotal; 

    // I don't want to include pma elements so I need to skip first 6 itterations 
    // hence if i is greater than 5 and j -6 to get to index of 0.
    if (i >= 6) {
      let j = i - 6;
      let firstSpan = multiplierSpans[j];
      let secondSpan = multiplierSpans[j+1];
      let thirdSpan = multiplierSpans[j+2];

      
      // this is for the little subscript to indicate what the multiplied value is
      firstSpan.textContent = `x${numAssociates} = ${firstElement}`;
      secondSpan.textContent = `x${numAssociates} = ${secondElement}`;
      thirdSpan.textContent = `x${numAssociates} = ${thirdElement}`;
    }


  }
  calculateSummaryValues(cleanedPmaBmaValues, baseshopMonthlyTotalValues);
}

// add doPmaBma to each element
for (let i=0; i <pmaBmaElements.length; i++) {
  pmaBmaElements[i].addEventListener("input", function() {
    doPmaBma();
  });
}

// Summary page button toggles
// let togglePersonalPointsBaseshop = document.getElementById("personal-points-baseshop"); // removed in html
let togglePersonalPointsBaseshopMonthly = document.getElementById("personal-points-baseshop-monthly");
let togglePersonalPointsBaseshopOverridesMonthly = document.getElementById("personal-points-basehop-overrides"); // todo: could add -monthly to end of all these
let togglePersonalPointsBaseshopStepMonthly = document.getElementById("personal-points-step-up");
// let toggleBaseshopPointsBaseshop = document.getElementById("baseshop-points-baseshop"); // removed in html
let toggleBaseshopPointsBaseshopMonthly = document.getElementById("baseshop-points-baseshop-monthly");
let toggleBaseshopPointsBaseshopOverridesMonthly = document.getElementById("baseshop-points-basehop-overrides");
let toggleBaseshopPointsBaseshopStepMonthly = document.getElementById("baseshop-points-step-up");
// yearly
let togglePersonalPointsBaseshopYearly = document.getElementById("personal-points-baseshop-yearly");
let togglePersonalPointsBaseshopOverridesYearly = document.getElementById("personal-points-basehop-overrides-yearly"); // todo: could add -monthly to end of all these
let togglePersonalPointsBaseshopStepYearly = document.getElementById("personal-points-step-up-yearly");
let toggleBaseshopPointsBaseshopYearly = document.getElementById("baseshop-points-baseshop-yearly");
let toggleBaseshopPointsBaseshopOverridesYearly = document.getElementById("baseshop-points-basehop-overrides-yearly");
let toggleBaseshopPointsBaseshopStepYearly = document.getElementById("baseshop-points-step-up-yearly");
// goal
let togglePersonalPointsBaseshopGoal = document.getElementById("personal-points-baseshop-goal");
let togglePersonalPointsBaseshopOverridesGoal = document.getElementById("personal-points-basehop-overrides-yearly"); // todo: could add -monthly to end of all these
let togglePersonalPointsBaseshopStepGoal = document.getElementById("personal-points-step-up-goal");
let toggleBaseshopPointsBaseshopGoal = document.getElementById("baseshop-points-baseshop-goal");
let toggleBaseshopPointsBaseshopOverridesGoal = document.getElementById("baseshop-points-basehop-overrides-goal");
let toggleBaseshopPointsBaseshopStepGoal = document.getElementById("baseshop-points-step-up-goal");

// togglePersonalPointsBaseshop.addEventListener("click", () => {
//   togglePersonalPointsBaseshop.classList.toggle('inactive');
// })

var summaryToggles = [...document.getElementsByClassName('summary-toggles')];

// summaryToggles.forEach(summaryToggle => {
//   summaryToggle.addEventListener('click', () => {
//     let id = summaryToggle.getAttribute("id");
//     toggle = document.getElementById(id);
//     toggle.classList.toggle('active-summary');
//     doPmaBma();
//   })
// }) 


summaryToggles.forEach(summaryToggle => {
  summaryToggle.addEventListener('click', () => {
    let id = summaryToggle.getAttribute("id");
    toggle = document.getElementById(id);
    toggle.classList.toggle('active-summary');
    doPmaBma();

    // Get the <span> element within the toggle
    let spanElement = toggle.querySelector('span');

    // Check if the <span> element exists
    if (spanElement) {
      // Check if the "active-summary" class is applied
      if (toggle.classList.contains('active-summary')) {
        spanElement.textContent = "";
      } else {
        spanElement.textContent = "(Excluded)";
      }
    } else {
      // Create a new <span> element and set the text content to "Excluded"
      spanElement = document.createElement('span');
      spanElement.textContent = "Excluded";
      toggle.appendChild(spanElement);
    }
  });
});


/////////////////////////////////////////////////
////////// Formulas and Calculations ///////////
///////////////////////////////////////////////


///////// ELITE ADVISOR /////////////
// Get all the radio buttons
var radioButtons = document.querySelectorAll('input[name="elite-advisor"]');

var eliteAdvisor = ''; // elite-yes or elite-no
// Add event listener to each radio button
radioButtons.forEach(function(radioButton) {
  radioButton.addEventListener('change', function() {
    // Get the selected radio button value
    eliteAdvisor = document.querySelector('input[name="elite-advisor"]:checked').id;
  });
});

/////////////////////////////////////////////////
/////////////// PERSONAL AUM /////////////////// 
///////////////////////////////////////////////

// set commissionRate as global variable
var commissionRate = 0;
const calculatePersonalAum = (arr) => {
  const commissionRate = getContractCommission(contractType.value);
  // const commissionRate = getContractCommission(contractType.value);

  ///////////// 0 - 12 months ///////////////
  const nlFixedIncomeMultiply = 0.00504 * 0.84 * commissionRate;
  const nlOtherFundsMultiply = 0.01008 * 0.84 * commissionRate;
 
  // name each element in the array for easier and clearer use
  const [
    finl0Value, ofnl0Value, finlcb0Value, ofnlcb0Value, finlcb50Value, ofnlcb50Value, fill0Value, ofll0Value, 
    fidsc0Value, ofdsc0Value, finl13Value, ofnl13Value, finlcb13Value, ofnlcb13Value, finlcb513Value, 
    ofnlcb513Value, fill13Value, ofll13Value, fidsc13Value, ofdsc13Value, finl37Value, ofnl37Value, finlcb37Value, 
    ofnlcb37Value, finlcb537Value, ofnlcb537Value, fill37Value, ofll37Value, fidsc37Value, ofdsc37Value, 
    finl49Value, ofnl49Value, finlcb49Value, ofnlcb49Value, finlcb549Value, ofnlcb549Value, fill49Value, 
    ofll49Value, fidsc49Value, ofdsc49Value, 
  ] = arr;

  const nlTotalAnnualTrailingCommissionsFi = (finl0Value + finl13Value + finl37Value + finl49Value) * nlFixedIncomeMultiply;
  const nlTotalAnnualTrailingCommissionsOf = (ofnl0Value + ofnl13Value + ofnl37Value + ofnl49Value) * nlOtherFundsMultiply;
  const personalNlTotal = (nlTotalAnnualTrailingCommissionsFi + nlTotalAnnualTrailingCommissionsOf).toFixed(2);

  //////////// NL-CB ////////////////
  const nlcbFixedMultiply = 0.00252 * 0.84 * commissionRate;
  const nlcbOtherMultiply = 0.00504 * 0.84 * commissionRate;
  
  const nlcbTotalATC0 = (finlcb0Value * 0 + ofnlcb0Value * 0) * nlcbFixedMultiply;
  const nlcbTotalATC13 = (finlcb13Value * nlcbFixedMultiply) + (ofnlcb13Value * nlcbOtherMultiply);
  const nlcbTotalATC37 = (finlcb37Value * nlcbFixedMultiply) + (ofnlcb37Value * nlcbOtherMultiply);
  const nlcbTotalATC49 = (finlcb49Value * 0.00504 * 0.84 * commissionRate) + (ofnlcb49Value * 0.01008 * 0.84 * commissionRate);

  const personalNlcbTotal = nlcbTotalATC0 + nlcbTotalATC13 + nlcbTotalATC37 + nlcbTotalATC49;

  //////////// NL-CB5 ////////////////
  const nlcb5TotalATC0 = (finlcb50Value * 0 + ofnlcb0Value * 0) * nlcbFixedMultiply;
  const nlcb5TotalATC13 = (finlcb513Value * nlcbFixedMultiply) + (ofnlcb513Value * nlcbOtherMultiply);
  const nlcb5TotalATC37 = (finlcb537Value * nlcbFixedMultiply) + (ofnlcb537Value * nlcbOtherMultiply);
  const nlcb5TotalATC49 = (finlcb549Value * nlcbFixedMultiply) + (ofnlcb49Value * nlcbOtherMultiply);

  const personalNlcb5Total = nlcb5TotalATC0 + nlcb5TotalATC13 + nlcb5TotalATC37 + nlcb5TotalATC49;

  //////////// LL ////////////////
  const llTotalATC0 = (fill0Value * nlcbFixedMultiply) + (ofll0Value * nlcbOtherMultiply);
  const llTotalATC13 = (fill13Value * nlcbFixedMultiply) + (ofll13Value * nlcbOtherMultiply);
  const llTotalATC37 = (fill37Value * nlcbOtherMultiply) + (ofll37Value * 0.01008 * 0.84 * commissionRate);
  const llTotalATC49 = (fill49Value * 0.00504 * 0.84 * commissionRate) + (ofll49Value * 0.01008 * 0.84 * commissionRate);

  const personalLlTotal = llTotalATC0 + llTotalATC13 + llTotalATC37 + llTotalATC49;

  //////////// DSC ////////////////
  const dscTotalATC0 = (fidsc0Value * nlcbFixedMultiply) + (ofdsc0Value * nlcbOtherMultiply);
  const dscTotalATC13 = (fidsc13Value * nlcbFixedMultiply) + (ofdsc13Value * nlcbOtherMultiply);
  const dscTotalATC37 = (fidsc37Value * nlcbFixedMultiply) + (ofdsc37Value * nlcbOtherMultiply);
  const dscTotalATC49 = (fidsc49Value * nlcbFixedMultiply) + (ofdsc49Value * nlcbOtherMultiply);

  const personalDscTotal = dscTotalATC0 + dscTotalATC13 + dscTotalATC37 + dscTotalATC49;

  //////////// Total ////////////////
  var personalAumTotal = personalNlTotal + personalNlcbTotal + personalNlcb5Total + personalLlTotal + personalDscTotal;
};


//////////////////////////////////////////////////////
////////////////// BASESHOP AUM /////////////////////
////////////////////////////////////////////////////
// TODO: new excel - the commission is the spread (subtract contract level from the drop down level )


////////////////////////////////////////////////////////////////
///////////// PERSONAL & BASESHOP MONTHLY ACTIVITY ////////////
//////////////////////////////////////////////////////////////
const calculateSummaryValues = (arr, baseshopMonthlyTotalValues) => {
  const commissionRate = getContractCommission(contractType.value);
  const [
    // Personal MLS
    pmaMlsNlValue, 
    pmaMlsNlcbValue, 
    pmaMlsNlcb5Value,
    // Personal MPAD
    pmaMpadNlValue, 
    pmaMpadNlcbValue, 
    pmaMpadNlcb5Value,
    // baseshop Mls
    bsMlsTaNlValue, bsMlsTaNlcbValue, bsMlsTaNlcb5Value,
    bsMlsaNlValue, bsMlsaNlcbValue, bsMlsaNlcb5Value,
    bsMlsMdNlValue, bsMlsMdNlcbValue, bsMlsMdNlcb5Value,
    bsMlsSmdNlValue, bsMlsSmdNlcbValue, bsMlsSmdNlcb5Value,
    // baseshop Mpad
    bsMpadTaNlValue, bsMpadTaNlcbValue, bsMpadTaNlcb5Value,
    bsMpadaNlValue, bsMpadaNlcbValue, bsMpadaNlcb5Value,
    bsMpadMdNlValue, bsMpadMdNlcbValue, bsMpadMdNlcb5Value,
    bsMpadSmdNlValue, bsMpadSmdNlcbValue, bsMpadSmdNlcb5Value
  ] = arr;

  const [
    pmaMlsTotalValue, pmaMpadTotalValue,
    bsMlsTaTotalValue,bsMlsaTotalValue,bsMlsMdTotalValue,bsMlsSmdTotalValue,
    bsMpadTaTotalValue,bsMpadaTotalValue,bsMpadMdTotalValue,bsMpadSmdTotalValue
  ] = baseshopMonthlyTotalValues.map(val => cleanCurrency(val)); // to calculate step up wealth



  ///////////////////
  ///// Points ///// 
  /////////////////

  // Total Monthly Personal Upfront Points (personal monthly activity - pma)
  const pmaNlCalc = Math.ceil((nlSc*pmaMlsNlValue*.84)+(nlSc*pmaMpadNlValue*.84));
  const pmaNlcbCalc = Math.ceil((nlcbSc*pmaMlsNlcbValue*.84)+(nlcbSc*pmaMpadNlcbValue*.84));
  const pmaNlcb5Calc = Math.ceil((nlcb5Sc*pmaMlsNlcb5Value*.84)+(nlcb5Sc*pmaMpadNlcb5Value*.84));
  var totalPmaUpfrontPoints = pmaNlCalc + pmaNlcbCalc + pmaNlcb5Calc; 

  // console.log(`Total Personal Montly Activity ${totalPmaUpfrontPoints}`);

  // Total Monthly Personal Trailing Points (mpa = monthly pre-authorized)
  const pmSliderDecimal = pmSlider.value / 100;
  const pmSliderInverse = 1 - pmSliderDecimal;
  const mpaSliderDecimal = mpaSlider.value / 100;
  const mpaSliderInverse = 1 - mpaSliderDecimal;
  const pmaNlTrailingCalc = Math.ceil((pmaMlsNlValue*pmSliderDecimal*0.00504*0.84)+(pmaMpadNlValue*mpaSliderDecimal*0.00504*0.84)+
                                      (pmaMlsNlValue*pmSliderInverse*0.01008*0.84)+(pmaMpadNlValue*mpaSliderInverse*0.01008*0.84));
  const pmaNlcbTrailingCalc = Math.ceil((pmaMlsNlcbValue*pmSliderDecimal*0.00504*0.84)+(pmaMpadNlcbValue*mpaSliderDecimal*0.00504*0.84)+
                                      (pmaMlsNlcbValue*pmSliderInverse*0.01008*0.84)+(pmaMpadNlcbValue*mpaSliderInverse*0.01008*0.84))*0; // times 0
  const pmaNlcb5TrailingCalc = Math.ceil((pmaMlsNlcb5Value*pmSliderDecimal*0.00504*0.84)+(pmaMpadNlcb5Value*mpaSliderDecimal*0.00504*0.84)+
                                        (pmaMlsNlcb5Value*pmSliderInverse*0.01008*0.84)+(pmaMpadNlcb5Value*mpaSliderInverse*0.01008*0.84))*0; // times 0
  var totalPmaTrailingPoints = pmaNlTrailingCalc + pmaNlcbTrailingCalc + pmaNlcb5TrailingCalc;

  // Step Up your Wealth Points
  const pmaNlStepUp = Math.ceil((pmaMlsNlValue*nlSc*0.84)+(pmaMpadNlValue*nlSc*0.84));
  const pmaNlcbStepUp = Math.ceil((pmaMlsNlcbValue*nlcbSc*0.84)+(pmaMpadNlcbValue*nlcbSc*0.84));
  const pmaNlcb5StepUp = Math.ceil((pmaMlsNlcb5Value*nlcb5Sc*0.84)+(pmaMpadNlcb5Value*nlcb5Sc*0.84));
  var totalPmaStepUp = pmaNlStepUp + pmaNlcbStepUp + pmaNlcb5StepUp;

  ////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////// CALCULATE BASESHOP MONTHLY ACTIVITY POINTS /////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////
  const numBlsTaAgents = blsTaAgents.value;
  const numBlsAAgents = blsAAgents.value;
  const numBlsMdAgents = blsMdAgents.value;
  const numBlsSmdAgents = blsSmdAgents.value;
  // TODO: check that the numbers 0.0504 and .84 are the same for TA, A, MD, and SMD
  ///// Training Associate /////  /
  // Total monthly baseshop upfront points (baseshop monthly activity = bma)
  const bsUpfrontNl = Math.ceil(((bsMlsTaNlValue*numBlsTaAgents)*nlSc*0.84)+((bsMpadTaNlValue*numBlsTaAgents)*nlSc*0.84));
  const bsUpfrontNlcb = Math.ceil(((bsMlsTaNlcbValue*numBlsTaAgents)*nlcbSc*0.84)+((bsMpadTaNlcbValue*numBlsTaAgents)*nlcbSc*0.84));
  const bsUpfrontNlcb5 = Math.ceil(((bsMlsTaNlcb5Value*numBlsTaAgents)*nlcb5Sc*0.84)+((bsMpadTaNlcb5Value*numBlsTaAgents)*nlcb5Sc*0.84));
  const bsUpfrontTotal = bsUpfrontNl + bsUpfrontNlcb + bsUpfrontNlcb5;

  // Total monthly baseshop trailing points 
  const bMlsTaSliderDecimal = bMlsTaSlider.value / 100;
  const bMlsTaSliderInverse = 1 - bMlsTaSliderDecimal;
  const bPaTaSliderDecimal = bPaTaSlider.value / 100;
  const bPaTaSliderInverse = 1 - bPaTaSliderDecimal;
  const bsTrailingNl = Math.ceil(((bsMlsTaNlValue*numBlsTaAgents)*bMlsTaSliderDecimal*0.00504*0.84)+
                                 ((bsMpadTaNlValue*numBlsTaAgents)*bPaTaSliderDecimal*0.00504*0.84)+
                                 ((bsMlsTaNlValue*numBlsTaAgents)*bMlsTaSliderInverse*0.01008*0.84)+
                                 ((bsMpadTaNlValue*numBlsTaAgents)*bPaTaSliderInverse*0.01008*0.84));
  const bsTrailingNlcb = Math.ceil(((bsMlsTaNlcbValue*numBlsTaAgents)*bMlsTaSliderDecimal*0.00504*0.84)+
                                ((bsMpadTaNlcbValue*numBlsTaAgents)*bPaTaSliderDecimal*0.00504*0.84)+
                                ((bsMlsTaNlcbValue*numBlsTaAgents)*bMlsTaSliderInverse*0.01008*0.84)+
                                ((bsMpadTaNlcbValue*numBlsTaAgents)*bPaTaSliderInverse*0.01008*0.84))*0; // times 0    
  const bsTrailingNlcb5 = Math.ceil(((bsMlsTaNlcb5Value*numBlsTaAgents)*bMlsTaSliderDecimal*0.00504*0.84)+
                                ((bsMpadTaNlcb5Value*numBlsTaAgents)*bPaTaSliderDecimal*0.00504*0.84)+
                                ((bsMlsTaNlcb5Value*numBlsTaAgents)*bMlsTaSliderInverse*0.01008*0.84)+
                                ((bsMpadTaNlcb5Value*numBlsTaAgents)*bPaTaSliderInverse*0.01008*0.84))*0; // times 0
  const bsTrailingTotal = bsTrailingNl + bsTrailingNlcb + bsTrailingNlcb5; 

  // baseshop up your wealth points (only calculated annually)
  // const bsUpWealthNl = Math.ceil(((bsMlsTaNlValue*numBlsTaAgents)*nlSc*0.84)+((bsMpadTaNlValue*numBlsTaAgents)*nlSc*0.84)); 
  // const bsUpWealthNlcb = Math.ceil(((bsMlsTaNlcbValue*numBlsTaAgents)*nlcbSc*0.84)+((bsMpadTaNlcbValue*numBlsTaAgents)*nlcbSc*0.84)); 
  // const bsUpWealthNlcb5 = Math.ceil(((bsMlsTaNlcb5Value*numBlsTaAgents)*nlcb5Sc*0.84)+((bsMpadTaNlcb5Value*numBlsTaAgents)*nlcb5Sc*0.84));
  // const bsUpWealthTotal = bsUpWealthNl + bsUpWealthNlcb + bsUpWealthNlcb5;
   
  ///// Associate /////
  // Total monthly baseshop upfront points (baseshop monthly activity = bma)
  const bsUpfrontNlA = Math.ceil((bsMlsaNlValue*numBlsAAgents*nlSc*0.84)+(bsMpadaNlValue*numBlsAAgents*nlSc*0.84));
  const bsUpfrontNlcbA = Math.ceil((bsMlsaNlcbValue*numBlsAAgents*nlcbSc*0.84)+(bsMpadaNlcbValue*numBlsAAgents*nlcbSc*0.84));
  const bsUpfrontNlcb5A = Math.ceil((bsMlsaNlcb5Value*numBlsAAgents*nlcb5Sc*0.84)+(bsMpadaNlcb5Value*numBlsAAgents*nlcb5Sc*0.84));
  const bsUpfrontTotalA = bsUpfrontNlA + bsUpfrontNlcbA + bsUpfrontNlcb5A;
  
  // Total monthly baseshop trailing points 
  const bMlsaSliderDecimal = bMlsASlider.value / 100;
  const bMlsaSliderInverse = 1 - bMlsaSliderDecimal;
  const bPaaSliderDecimal = bPaASlider.value / 100;
  const bPaaSliderInverse = 1 - bPaaSliderDecimal;
  const bsTrailingNlA = Math.ceil((bsMlsaNlValue*numBlsAAgents*bMlsaSliderDecimal*0.00504*0.84)+
                                 (bsMpadaNlValue*numBlsAAgents*bPaaSliderDecimal*0.00504*0.84)+
                                 (bsMlsaNlValue*numBlsAAgents*bMlsaSliderInverse*0.01008*0.84)+
                                 (bsMpadaNlValue*numBlsAAgents*bPaaSliderInverse*0.01008*0.84));
  const bsTrailingNlcbA = Math.ceil((bsMlsaNlcbValue*numBlsAAgents*bMlsaSliderDecimal*0.00504*0.84)+
                                (bsMpadaNlcbValue*numBlsAAgents*bPaaSliderDecimal*0.00504*0.84)+
                                (bsMlsaNlcbValue*numBlsAAgents*bMlsaSliderInverse*0.01008*0.84)+
                                (bsMpadaNlcbValue*numBlsAAgents*bPaaSliderInverse*0.01008*0.84))*0; // times 0    
  const bsTrailingNlcb5A = Math.ceil((bsMlsaNlcb5Value*numBlsAAgents*bMlsaSliderDecimal*0.00504*0.84)+
                                (bsMpadaNlcb5Value*numBlsAAgents*bPaaSliderDecimal*0.00504*0.84)+
                                (bsMlsaNlcb5Value*numBlsAAgents*bMlsaSliderInverse*0.01008*0.84)+
                                (bsMpadaNlcb5Value*numBlsAAgents*bPaaSliderInverse*0.01008*0.84))*0; // times 0
  const bsTrailingTotalA = bsTrailingNlA + bsTrailingNlcbA + bsTrailingNlcb5A;   

  // baseshop up your wealth points only annually
  // const bsUpWealthNlA = Math.ceil((bsMlsaNlValue*numBlsAAgents*nlSc*0.84)+(bsMpadaNlValue*numBlsAAgents*nlSc*0.84)); 
  // const bsUpWealthNlcbA = Math.ceil((bsMlsaNlcbValue*numBlsAAgents*nlcbSc*0.84)+(bsMpadaNlcbValue*numBlsAAgents*nlcbSc*0.84)); 
  // const bsUpWealthNlcb5A = Math.ceil((bsMlsaNlcb5Value*numBlsAAgents*nlcb5Sc*0.84)+(bsMpadaNlcb5Value*numBlsAAgents*nlcb5Sc*0.84));
  // const bsUpWealthTotalA = bsUpWealthNlA + bsUpWealthNlcbA + bsUpWealthNlcb5A;

  ///// Marketing Director /////
  // Total monthly baseshop upfront points (baseshop monthly activity = bma)
  const bsUpfrontNlMd = Math.ceil((bsMlsMdNlValue*numBlsMdAgents*nlSc*0.84)+(bsMpadMdNlValue*numBlsMdAgents*nlSc*0.84));
  const bsUpfrontNlcbMd = Math.ceil((bsMlsMdNlcbValue*numBlsMdAgents*nlcbSc*0.84)+(bsMpadMdNlcbValue*numBlsMdAgents*nlcbSc*0.84));
  const bsUpfrontNlcb5Md = Math.ceil((bsMlsMdNlcb5Value*numBlsMdAgents*nlcb5Sc*0.84)+(bsMpadMdNlcb5Value*numBlsMdAgents*nlcb5Sc*0.84));
  const bsUpfrontTotalMd = bsUpfrontNlMd + bsUpfrontNlcbMd + bsUpfrontNlcb5Md;
  
  // Total monthly baseshop trailing points 
  const bMlsMdSliderDecimal = bMlsMdSlider.value / 100;
  const bMlsMdSliderInverse = 1 - bMlsMdSliderDecimal;
  const bPaMdSliderDecimal = bPaMdSlider.value / 100;
  const bPaMdSliderInverse = 1 - bPaMdSliderDecimal;
  const bsTrailingNlMd = Math.ceil((bsMlsMdNlValue*numBlsMdAgents*bMlsMdSliderDecimal*0.00504*0.84)+
                                 (bsMpadMdNlValue*numBlsMdAgents*bPaMdSliderDecimal*0.00504*0.84)+
                                 (bsMlsMdNlValue*numBlsMdAgents*bMlsMdSliderInverse*0.01008*0.84)+
                                 (bsMpadMdNlValue*numBlsMdAgents*bPaMdSliderInverse*0.01008*0.84));
  const bsTrailingNlcbMd = Math.ceil((bsMlsMdNlcbValue*numBlsMdAgents*bMlsMdSliderDecimal*0.00504*0.84)+
                                (bsMpadMdNlcbValue*numBlsMdAgents*bPaMdSliderDecimal*0.00504*0.84)+
                                (bsMlsMdNlcbValue*numBlsMdAgents*bMlsMdSliderInverse*0.01008*0.84)+
                                (bsMpadMdNlcbValue*numBlsMdAgents*bPaMdSliderInverse*0.01008*0.84))*0; // times 0    
  const bsTrailingNlcb5Md = Math.ceil((bsMlsMdNlcb5Value*numBlsMdAgents*bMlsMdSliderDecimal*0.00504*0.84)+
                                (bsMpadMdNlcb5Value*numBlsMdAgents*bPaMdSliderDecimal*0.00504*0.84)+
                                (bsMlsMdNlcb5Value*numBlsMdAgents*bMlsMdSliderInverse*0.01008*0.84)+
                                (bsMpadMdNlcb5Value*numBlsMdAgents*bPaMdSliderInverse*0.01008*0.84))*0; // times 0
  const bsTrailingTotalMd = bsTrailingNlMd + bsTrailingNlcbMd + bsTrailingNlcb5Md;   
  
  // baseshop up your wealth points
  // const bsUpWealthNlMd = Math.ceil((bsMlsMdNlValue*numBlsMdAgents*nlSc*0.84)+(bsMpadMdNlValue*numBlsMdAgents*nlSc*0.84));
  // const bsUpWealthNlcbMd = Math.ceil((bsMlsMdNlcbValue*numBlsMdAgents*nlcbSc*0.84)+(bsMpadMdNlcbValue*numBlsMdAgents*nlcbSc*0.84));
  // const bsUpWealthNlcb5Md = Math.ceil((bsMlsMdNlcb5Value*numBlsMdAgents*nlcb5Sc*0.84)+(bsMpadMdNlcb5Value*numBlsMdAgents*nlcb5Sc*0.84));
  // const bsUpWealthTotalMd = bsUpWealthNlMd + bsUpWealthNlcbMd + bsUpWealthNlcb5Md;

    ///// Senior Marketing Director /////
  // Total monthly baseshop upfront points (baseshop monthly activity = bma)
  const bsUpfrontNlSmd = Math.ceil((bsMlsSmdNlValue*numBlsSmdAgents*nlSc*0.84)+(bsMpadSmdNlValue*numBlsSmdAgents*nlSc*0.84));
  const bsUpfrontNlcbSmd = Math.ceil((bsMlsSmdNlcbValue*numBlsSmdAgents*nlcbSc*0.84)+(bsMpadSmdNlcbValue*numBlsSmdAgents*nlcbSc*0.84));
  const bsUpfrontNlcb5Smd = Math.ceil((bsMlsSmdNlcb5Value*numBlsSmdAgents*nlcb5Sc*0.84)+(bsMpadSmdNlcb5Value*numBlsSmdAgents*nlcb5Sc*0.84));
  const bsUpfrontTotalSmd = bsUpfrontNlSmd + bsUpfrontNlcbSmd + bsUpfrontNlcb5Smd;

  // Total monthly baseshop trailing points // todo: this is the spread of your contract level to associates contract level if smd and you are over smd then you get 12% spread
  const bMlsSmdSliderDecimal = bMlsSmdSlider.value / 100;
  const bMlsSmdSliderInverse = 1 - bMlsSmdSliderDecimal;
  const bPaSmdSliderDecimal = bPaSmdSlider.value / 100;
  const bPaSmdSliderInverse = 1 - bPaSmdSliderDecimal;
  const bsTrailingNlSmd = Math.ceil((bsMlsSmdNlValue*numBlsSmdAgents*bMlsSmdSliderDecimal*0.00504*0.84)+
                                 (bsMpadSmdNlValue*numBlsSmdAgents*bPaSmdSliderDecimal*0.00504*0.84)+
                                 (bsMlsSmdNlValue*numBlsSmdAgents*bMlsSmdSliderInverse*0.01008*0.84)+
                                 (bsMpadSmdNlValue*numBlsSmdAgents*bPaSmdSliderInverse*0.01008*0.84));
  const bsTrailingNlcbSmd = Math.ceil((bsMlsSmdNlcbValue*numBlsSmdAgents*bMlsSmdSliderDecimal*0.00504*0.84)+
                                (bsMpadSmdNlcbValue*numBlsSmdAgents*bPaSmdSliderDecimal*0.00504*0.84)+
                                (bsMlsSmdNlcbValue*numBlsSmdAgents*bMlsSmdSliderInverse*0.01008*0.84)+
                                (bsMpadSmdNlcbValue*numBlsSmdAgents*bPaSmdSliderInverse*0.01008*0.84))*0; // times 0   
  const bsTrailingNlcb5Smd = Math.ceil((bsMlsSmdNlcb5Value*numBlsSmdAgents*bMlsSmdSliderDecimal*0.00504*0.84)+
                                (bsMpadSmdNlcb5Value*numBlsSmdAgents*bPaSmdSliderDecimal*0.00504*0.84)+
                                (bsMlsSmdNlcb5Value*numBlsSmdAgents*bMlsSmdSliderInverse*0.01008*0.84)+
                                (bsMpadSmdNlcb5Value*numBlsSmdAgents*bPaSmdSliderInverse*0.01008*0.84))*0; // times 0
  const bsTrailingTotalSmd = bsTrailingNlSmd + bsTrailingNlcbSmd + bsTrailingNlcb5Smd;   

  // baseshop up your wealth points
  // const bsUpWealthNlSmd = Math.ceil((bsMlsSmdNlValue*numBlsSmdAgents*nlSc*0.84)+(bsMpadSmdNlValue*numBlsSmdAgents*nlSc*0.84)); 
  // const bsUpWealthNlcbSmd = Math.ceil((bsMlsSmdNlcbValue*numBlsSmdAgents*nlcbSc*0.84)+(bsMpadSmdNlcbValue*numBlsSmdAgents*nlcbSc*0.84)); 
  // const bsUpWealthNlcb5Smd = Math.ceil((bsMlsSmdNlcb5Value*numBlsSmdAgents*nlcb5Sc*0.84)+(bsMpadSmdNlcb5Value*numBlsSmdAgents*nlcb5Sc*0.84));
  // const bsUpWealthTotalSmd = bsUpWealthNlSmd + bsUpWealthNlcbSmd + bsUpWealthNlcb5Smd;

  const bsUpfrontTotalAll = bsUpfrontTotal + bsUpfrontTotalA + bsUpfrontTotalMd + bsUpfrontTotalSmd;
  const bsTrailingTotalAll = bsTrailingTotal + bsTrailingTotalA + bsTrailingTotalMd + bsTrailingTotalSmd;
  // const bsUpwealthTotalAll = bsUpWealthTotal + bsUpWealthTotalA + bsUpWealthTotalMd + bsUpWealthTotalSmd;
 
  ////////////////////////////////
  ///////// Commissions /////////
  //////////////////////////////
  // Question: double check - the commision spread is only on trailing commisions not trailing points?
  // get the spread between commisionRate, if it is a negative number, set it to 0
  const commissionSpreadTa = Math.max(commissionRate - trainingAssociateCR, 0);
  const commissionSpreadA = Math.max(commissionRate - associateCR, 0);
  const commissionSpreadMd = Math.max(commissionRate - marketingDirectorCR, 0);
  // for senior marketing director if spread is 0 (i.e., they are both smd's then rate is 12%)
  const commissionSpreadSmd = Math.max(commissionRate - seniorMarketingDirectorCR, 0.12); // todo check to make sure this works

  // Personal Commission - Total monthly personal upfront commissions
  const pmaNlUpCom = (pmaMlsNlValue * nlSc * 0.84* commissionRate)+(pmaMpadNlValue*nlSc*0.84*commissionRate);
  const pmaNlcbUpCom = (pmaMlsNlcbValue * nlcbSc * 0.84* commissionRate)+(pmaMpadNlcbValue*nlcbSc*0.84*commissionRate);
  const pmaNlcb5UpCom = (pmaMlsNlcb5Value * nlcb5Sc * 0.84* commissionRate)+(pmaMpadNlcb5Value*nlcb5Sc*0.84*commissionRate);
  const pmaTmpUpfrontc = Math.ceil(pmaNlUpCom + pmaNlcbUpCom + pmaNlcb5UpCom);

  // Total Monthly Personal Trailing Commissions
  const pmaNlTrailCom = (pmaMlsNlValue*pmSliderDecimal*0.00504*0.84*commissionRate)+
                        (pmaMlsNlValue*pmSliderInverse*0.01008*0.84*commissionRate)+
                        (pmaMpadNlValue*mpaSliderDecimal*.00504*0.84*commissionRate)+
                        (pmaMpadNlValue*mpaSliderInverse*0.01008*0.84*commissionRate);
  const pmaNlcbTrailCom = (pmaMlsNlcbValue*pmSliderDecimal*0.00504*0.84*commissionRate)+
                          (pmaMlsNlcbValue*pmSliderInverse*0.01008*0.84*commissionRate)+
                          (pmaMpadNlcbValue*mpaSliderDecimal*.00504*0.84*commissionRate)+
                          (pmaMpadNlcbValue*mpaSliderInverse*0.01008*0.84*commissionRate);
  const pmaNlcb55TrailCom = (pmaMlsNlcb5Value*pmSliderDecimal*0.00504*0.84*commissionRate)+
                            (pmaMlsNlcb5Value*pmSliderInverse*0.01008*0.84*commissionRate)+
                            (pmaMpadNlcb5Value*mpaSliderDecimal*.00504*0.84*commissionRate)+
                            (pmaMpadNlcb5Value*mpaSliderInverse*0.01008*0.84*commissionRate);
  const pmatmpTrailc = Math.ceil(sumArray([pmaNlTrailCom,pmaNlcbTrailCom,pmaNlcb55TrailCom]));

  /////// BASESHOP COMMISSIONS /////////////
  ////////////// Training Associate /////////////////
  // total monthly baseshop upfront overide commissions
  const bsUpfrontNlTaCom = (bsMlsTaNlValue*numBlsTaAgents*nlSc*0.84*commissionSpreadTa)+(bsMpadTaNlValue*numBlsTaAgents*nlSc*0.84*commissionSpreadTa);
  const bsUpfrontNlcbTaCom = (bsMlsTaNlcbValue*numBlsTaAgents*nlcbSc*0.84*commissionSpreadTa)+(bsMpadTaNlcbValue*numBlsTaAgents*nlcbSc*0.84*commissionSpreadTa);
  const bsUpfrontNlcb5TaCom = (bsMlsTaNlcb5Value*numBlsTaAgents*nlcb5Sc*0.84*commissionSpreadTa)+(bsMpadTaNlcb5Value*numBlsTaAgents*nlcb5Sc*0.84*commissionSpreadTa);
  const bsUpfrontTaTotalCom = Math.ceil(bsUpfrontNlTaCom + bsUpfrontNlcbTaCom + bsUpfrontNlcb5TaCom);
  
  // Total Monthly Baseshop Trailing Override Commissions
  const bsTrailingNlTaCom = (bsMlsTaNlValue*bMlsTaSliderDecimal*.00504*0.84*commissionSpreadTa)+
                            (bsMlsTaNlValue*bMlsTaSliderInverse*0.01008*0.84*commissionSpreadTa)+
                            (bsMpadTaNlValue*bPaTaSliderDecimal*.00504*0.84*commissionSpreadTa)+
                            (bsMpadTaNlValue*bPaTaSliderInverse*0.01008*0.84*commissionSpreadTa);
  const bsTrailingNlcbTaCom = (bsMlsTaNlcbValue*bMlsTaSliderDecimal*.00504*0.84*commissionSpreadTa)+
                              (bsMlsTaNlcbValue*bMlsTaSliderInverse*0.01008*0.84*commissionSpreadTa)+
                              (bsMpadTaNlcbValue*bPaTaSliderDecimal*.00504*0.84*commissionSpreadTa)+
                              (bsMpadTaNlcbValue*bPaTaSliderInverse*0.01008*0.84*commissionSpreadTa);
  const bsTrailingNlcb5TaCom = (bsMlsTaNlcb5Value*bMlsTaSliderDecimal*.00504*0.84*commissionSpreadTa)+
                               (bsMlsTaNlcb5Value*bMlsTaSliderInverse*0.01008*0.84*commissionSpreadTa)+
                               (bsMpadTaNlcb5Value*bPaTaSliderDecimal*.00504*0.84*commissionSpreadTa)+
                               (bsMpadTaNlcb5Value*bPaTaSliderInverse*0.01008*0.84*commissionSpreadTa);
  const bsTrailingTaTotalCom = Math.ceil(bsTrailingNlTaCom + bsTrailingNlcbTaCom + bsTrailingNlcb5TaCom);

    ////////////// Associate /////////////////
  // total monthly baseshop upfront overide commissions
  const bsUpfrontNlaCom = (bsMlsaNlValue*nlSc*0.84*commissionSpreadA)+(bsMpadaNlValue*nlSc*0.84*commissionSpreadA);
  const bsUpfrontNlcbaCom = (bsMlsaNlcbValue*nlcbSc*0.84*commissionSpreadA)+(bsMpadTaNlcbValue*nlcbSc*0.84*commissionSpreadA);
  const bsUpfrontNlcb5aCom = (bsMlsaNlcb5Value*nlcb5Sc*0.84*commissionSpreadA)+(bsMpadTaNlcb5Value*nlcb5Sc*0.84*commissionSpreadA);
  const bsUpfrontaTotalCom = Math.ceil(bsUpfrontNlaCom + bsUpfrontNlcbaCom + bsUpfrontNlcb5aCom);

  // Total Monthly Baseshop Trailing Override Commissions
  const bsTrailingNlACom = (bsMlsaNlValue*numBlsTaAgents*bMlsaSliderDecimal*.00504*0.84*commissionSpreadA)+
                            (bsMlsaNlValue*numBlsTaAgents*bMlsaSliderInverse*0.01008*0.84*commissionSpreadA)+
                            (bsMpadaNlValue*numBlsTaAgents*bPaaSliderDecimal*.00504*0.84*commissionSpreadA)+
                            (bsMpadaNlValue*numBlsTaAgents*bPaaSliderInverse*0.01008*0.84*commissionSpreadA);
  const bsTrailingNlcbACom = (bsMlsaNlcbValue*numBlsTaAgents*bMlsaSliderDecimal*.00504*0.84*commissionSpreadA)+
                              (bsMlsaNlcbValue*numBlsTaAgents*bMlsaSliderInverse*0.01008*0.84*commissionSpreadA)+
                              (bsMpadaNlcbValue*numBlsTaAgents*bPaaSliderDecimal*.00504*0.84*commissionSpreadA)+
                              (bsMpadaNlcbValue*numBlsTaAgents*bPaaSliderInverse*0.01008*0.84*commissionSpreadA);
  const bsTrailingNlcb5ACom = (bsMlsaNlcb5Value*numBlsTaAgents*bMlsaSliderDecimal*.00504*0.84*commissionSpreadA)+
                               (bsMlsaNlcb5Value*numBlsTaAgents*bMlsaSliderInverse*0.01008*0.84*commissionSpreadA)+
                               (bsMpadaNlcb5Value*numBlsTaAgents*bPaaSliderDecimal*.00504*0.84*commissionSpreadA)+
                               (bsMpadaNlcb5Value*numBlsTaAgents*bPaaSliderInverse*0.01008*0.84*commissionSpreadA);
  const bsTrailingATotalCom = Math.ceil(bsTrailingNlACom + bsTrailingNlcbACom + bsTrailingNlcb5ACom);

    ////////////// Marketing Director /////////////////
  // total monthly baseshop upfront overide commissions
  const bsUpfrontNlMdCom = (bsMlsMdNlValue*numBlsTaAgents*nlSc*0.84*commissionSpreadMd)+(bsMpadMdNlValue*numBlsTaAgents*nlSc*0.84*commissionSpreadMd);
  const bsUpfrontNlcbMdCom = (bsMlsMdNlcbValue*numBlsTaAgents*nlcbSc*0.84*commissionSpreadMd)+(bsMpadMdNlcbValue*numBlsTaAgents*nlcbSc*0.84*commissionSpreadMd);
  const bsUpfrontNlcb5MdCom = (bsMlsMdNlcb5Value*numBlsTaAgents*nlcb5Sc*0.84*commissionSpreadMd)+(bsMpadMdNlcb5Value*numBlsTaAgents*nlcb5Sc*0.84*commissionSpreadMd);
  const bsUpfrontMdTotalCom = Math.ceil(bsUpfrontNlMdCom + bsUpfrontNlcbMdCom + bsUpfrontNlcb5MdCom);

  // Totol Monthly Baseshop Trailing Override Commissions
  const bsTrailingNlMdCom = (bsMlsMdNlValue*numBlsTaAgents*bMlsMdSliderDecimal*.00504*0.84*commissionSpreadMd)+
                            (bsMlsMdNlValue*numBlsTaAgents*bMlsMdSliderInverse*0.01008*0.84*commissionSpreadMd)+
                            (bsMpadMdNlValue*numBlsTaAgents*bPaMdSliderDecimal*.00504*0.84*commissionSpreadMd)+
                            (bsMpadMdNlValue*numBlsTaAgents*bPaMdSliderInverse*0.01008*0.84*commissionSpreadMd);
  const bsTrailingNlcbMdCom = (bsMlsMdNlcbValue*numBlsTaAgents*bMlsMdSliderDecimal*.00504*0.84*commissionSpreadMd)+
                              (bsMlsMdNlcbValue*numBlsTaAgents*bMlsMdSliderInverse*0.01008*0.84*commissionSpreadMd)+
                              (bsMpadMdNlcbValue*numBlsTaAgents*bPaMdSliderDecimal*.00504*0.84*commissionSpreadMd)+
                              (bsMpadMdNlcbValue*numBlsTaAgents*bPaMdSliderInverse*0.01008*0.84*commissionSpreadMd);
  const bsTrailingNlcb5MdCom = (bsMlsMdNlcb5Value*numBlsTaAgents*bMlsMdSliderDecimal*.00504*0.84*commissionSpreadMd)+
                               (bsMlsMdNlcb5Value*numBlsTaAgents*bMlsMdSliderInverse*0.01008*0.84*commissionSpreadMd)+
                               (bsMpadMdNlcb5Value*numBlsTaAgents*bPaMdSliderDecimal*.00504*0.84*commissionSpreadMd)+
                               (bsMpadMdNlcb5Value*numBlsTaAgents*bPaMdSliderInverse*0.01008*0.84*commissionSpreadMd);
  const bsTrailingMdTotalCom = Math.ceil(bsTrailingNlMdCom + bsTrailingNlcbMdCom + bsTrailingNlcb5MdCom);

    ////////////// Senior Marketing Director /////////////////
  // total monthly baseshop upfront overide commissions
  const bsUpfrontNlSmdCom = (bsMlsSmdNlValue*numBlsTaAgents*nlSc*0.84*commissionSpreadSmd)+(bsMpadSmdNlValue*numBlsTaAgents*nlSc*0.84*commissionSpreadSmd);
  const bsUpfrontNlcbSmdCom = (bsMlsSmdNlcbValue*numBlsTaAgents*nlcbSc*0.84*commissionSpreadSmd)+(bsMpadSmdNlcbValue*numBlsTaAgents*nlcbSc*0.84*commissionSpreadSmd);
  const bsUpfrontNlcb5SmdCom = (bsMlsSmdNlcb5Value*numBlsTaAgents*nlcb5Sc*0.84*commissionSpreadSmd)+(bsMpadSmdNlcb5Value*numBlsTaAgents*nlcb5Sc*0.84*commissionSpreadSmd);
  const bsUpfrontSmdTotalCom = Math.ceil(bsUpfrontNlSmdCom + bsUpfrontNlcbSmdCom + bsUpfrontNlcb5SmdCom);

  // Total Monthly Baseshop Trailing Override Commissions
  const bsTrailingNlSmdCom = (bsMlsSmdNlValue*numBlsTaAgents*bMlsSmdSliderDecimal*.00504*0.84*commissionSpreadSmd)+
                            (bsMlsSmdNlValue*numBlsTaAgents*bMlsSmdSliderInverse*0.01008*0.84*commissionSpreadSmd)+
                            (bsMpadSmdNlValue*numBlsTaAgents*bPaSmdSliderDecimal*.00504*0.84*commissionSpreadSmd)+
                            (bsMpadSmdNlValue*numBlsTaAgents*bPaSmdSliderInverse*0.01008*0.84*commissionSpreadSmd);
  const bsTrailingNlcbSmdCom = (bsMlsSmdNlcbValue*numBlsTaAgents*bMlsSmdSliderDecimal*.00504*0.84*commissionSpreadSmd)+
                              (bsMlsSmdNlcbValue*numBlsTaAgents*bMlsSmdSliderInverse*0.01008*0.84*commissionSpreadSmd)+
                              (bsMpadSmdNlcbValue*numBlsTaAgents*bPaSmdSliderDecimal*.00504*0.84*commissionSpreadSmd)+
                              (bsMpadSmdNlcbValue*numBlsTaAgents*bPaSmdSliderInverse*0.01008*0.84*commissionSpreadSmd);
  const bsTrailingNlcb5SmdCom = (bsMlsSmdNlcb5Value*numBlsTaAgents*bMlsSmdSliderDecimal*.00504*0.84*commissionSpreadSmd)+
                               (bsMlsSmdNlcb5Value*numBlsTaAgents*bMlsSmdSliderInverse*0.01008*0.84*commissionSpreadSmd)+
                               (bsMpadSmdNlcb5Value*numBlsTaAgents*bPaSmdSliderDecimal*.00504*0.84*commissionSpreadSmd)+
                               (bsMpadSmdNlcb5Value*numBlsTaAgents*bPaSmdSliderInverse*0.01008*0.84*commissionSpreadSmd);
  const bsTrailingSmdTotalCom = Math.ceil(bsTrailingNlSmdCom + bsTrailingNlcbSmdCom + bsTrailingNlcb5SmdCom);

  const bsUpfrontComAll = bsUpfrontTaTotalCom + bsUpfrontaTotalCom + bsUpfrontMdTotalCom + bsUpfrontSmdTotalCom;
  const bsTrailingComAll = bsTrailingTaTotalCom + bsTrailingATotalCom + bsTrailingMdTotalCom + bsTrailingSmdTotalCom;




    /// adding points (provide toggle functionality to turn off or remove certain parts from total)
    // todo; make sure I'm accounting for the number of associates. currently june 12 I am not accounting for # associates in points calculation
  // todo: could store monthlyPointsPayout value and rather than rerunning everything, just do this part
  /////////// MONTHLY SUMMARY PAGE ////////////////// 
  var monthlyPointsTotal = 0; 
  var monthlyCommisionTotal = 0;
  // upfront
  if (togglePersonalPointsBaseshopMonthly.classList.contains("active-summary")) {
    monthlyPointsTotal += totalPmaUpfrontPoints;
    monthlyPointsPayout.textContent = monthlyPointsTotal.toLocaleString();

    monthlyCommisionTotal += pmaTmpUpfrontc;
    monthlyCommissionPayout.textContent = '$' + monthlyCommisionTotal.toLocaleString();
  } else {
    monthlyPointsPayout.textContent = monthlyPointsTotal.toLocaleString();
    monthlyCommissionPayout.textContent = '$' + monthlyCommisionTotal.toLocaleString();
  }

  // Trailing
  if (togglePersonalPointsBaseshopOverridesMonthly.classList.contains("active-summary")) {
    monthlyPointsTotal += totalPmaTrailingPoints;
    monthlyPointsPayout.textContent = monthlyPointsTotal.toLocaleString();

    monthlyCommisionTotal += pmatmpTrailc;
    monthlyCommissionPayout.textContent = '$' + monthlyCommisionTotal.toLocaleString();
  } else {
    monthlyPointsPayout.textContent = monthlyPointsTotal.toLocaleString();
    monthlyCommissionPayout.textContent = '$' + monthlyCommisionTotal.toLocaleString();
  }

  // // Stepup - stepup is only for annual not for monthly
  // if (togglePersonalPointsBaseshopStepMonthly.classList.contains("active-summary")) {
  //   monthlyPointsTotal += totalPmaStepUp;
  //   monthlyPointsPayout.textContent = monthlyPointsTotal.toLocaleString();
  // } else {
  //   monthlyPointsPayout.textContent = monthlyPointsTotal.toLocaleString();
  // }
  //// BASESHOP /////
  // upfront
  if (toggleBaseshopPointsBaseshopMonthly.classList.contains("active-summary")) {
    monthlyPointsTotal += bsUpfrontTotalAll;
    monthlyPointsPayout.textContent = monthlyPointsTotal.toLocaleString();

    monthlyCommisionTotal += bsUpfrontComAll;
    monthlyCommissionPayout.textContent = '$' + monthlyCommisionTotal.toLocaleString();
  } else {
    monthlyPointsPayout.textContent = monthlyPointsTotal.toLocaleString();
    monthlyCommissionPayout.textContent = '$' + monthlyCommisionTotal.toLocaleString();
  }

  // Trailing
  if (toggleBaseshopPointsBaseshopOverridesMonthly.classList.contains("active-summary")) {
    monthlyPointsTotal += bsTrailingTotalAll;
    monthlyPointsPayout.textContent = monthlyPointsTotal.toLocaleString();

    monthlyCommisionTotal += bsTrailingComAll;
    monthlyCommissionPayout.textContent = '$' + monthlyCommisionTotal.toLocaleString();
  } else {
    monthlyPointsPayout.textContent = monthlyPointsTotal.toLocaleString();
    monthlyCommissionPayout.textContent = '$' + monthlyCommisionTotal.toLocaleString();
  }

  // stepup -- stepup is only for annual not monthly
  // if (toggleBaseshopPointsBaseshopStepMonthly.classList.contains("active-summary")) {
  //   monthlyPointsTotal += bsUpwealthTotalAll;
  //   monthlyPointsPayout.textContent = monthlyPointsTotal.toLocaleString();
  // } else {
  //   monthlyPointsPayout.textContent = monthlyPointsTotal.toLocaleString();
  // }

 ////////// YEARLY SUMMARY PAGE //////////////////
  // POINTS

  // todo: are thse suppose to be multiplied by 12 for the year total? or perhaps the total is just multiplied by 12?? this is annual but using month values
  const personalStepupNlPoints = Math.ceil(((pmaMlsNlValue) * nlSc * 0.84)+((pmaMpadNlValue)*nlSc*0.84));
  const personalStepupNlcbPoints = Math.ceil(((pmaMlsNlcbValue) * nlcbSc * 0.84)+((pmaMpadNlcbValue)*nlcbSc*0.84));
  const personalStepupNlcb5Points = Math.ceil(((pmaMlsNlcb5Value) * nlcb5Sc * 0.84)+((pmaMpadNlcb5Value)*nlcb5Sc*0.84));
  const personalStepupPointsAll = (personalStepupNlPoints + personalStepupNlcbPoints + personalStepupNlcb5Points); 

  // baseshop points
  // todo: are thse suppose to be multiplied by 12 for the year total? or perhaps the total is just multiplied by 12?? this is annual but using month values
  const bsStepupPointsNlTa = (bsMlsTaNlValue * nlSc *0.84)+(bsMpadTaNlValue * nlSc * 0.84);
  const bsStepupPointsNlcbTa = (bsMlsTaNlcbValue * nlcbSc *0.84)+(bsMpadTaNlcbValue * nlcbSc * 0.84);
  const bsStepupPointsNlcb5Ta = (bsMlsTaNlcb5Value * nlcb5Sc *0.84)+(bsMpadTaNlcb5Value * nlcb5Sc * 0.84);

  const bsStepupPointsNlA = (bsMlsaNlValue * nlSc *0.84)+(bsMpadaNlValue * nlSc * 0.84);
  const bsStepupPointsNlcbA = (bsMlsaNlcbValue * nlcbSc *0.84)+(bsMpadaNlcbValue * nlcbSc * 0.84);
  const bsStepupPointsNlcb5A = (bsMlsaNlcb5Value * nlcb5Sc *0.84)+(bsMpadaNlcb5Value * nlSc * 0.84);
  
  const bsStepupPointsNlMd = (bsMlsMdNlValue * nlSc *0.84)+(bsMpadMdNlValue * nlSc * 0.84);
  const bsStepupPointsNlcbMd = (bsMlsMdNlcbValue * nlcbSc *0.84)+(bsMpadMdNlcbValue * nlcbSc * 0.84);
  const bsStepupPointsNlcb5Md = (bsMlsMdNlcb5Value * nlcb5Sc *0.84)+(bsMpadMdNlcb5Value * nlcb5Sc * 0.84);


  const bsStepupPointsNlSmd = (bsMlsSmdNlValue * nlSc *0.84)+(bsMpadSmdNlValue * nlSc * 0.84);
  const bsStepupPointsNlcbSmd = (bsMlsSmdNlcbValue * nlcbSc *0.84)+(bsMpadSmdNlcbValue * nlcbSc * 0.84);
  const bsStepupPointsNlcb5Smd = (bsMlsSmdNlcb5Value * nlcb5Sc *0.84)+(bsMpadSmdNlcb5Value * nlcbSc * 0.84);

  const bsStepupPointsAll = Math.ceil(bsStepupPointsNlTa + bsStepupPointsNlcbTa + bsStepupPointsNlcb5Ta + 
    bsStepupPointsNlA + bsStepupPointsNlcbA + bsStepupPointsNlcb5A +
    bsStepupPointsNlMd + bsStepupPointsNlcbMd + bsStepupPointsNlcb5Md +
    bsStepupPointsNlSmd + bsStepupPointsNlcbSmd + bsStepupPointsNlcb5Smd
    );

  // COMMISSIONS
  const notEliteBonusRate = {
    '0.00 - 249999.99': 0.00,
    '250000.00 - 499999.99': 0.0025,
    '500000.00 - 749999.99': 0.005,
    '750000.00 - 10000000': 0.0075
  };

  const eliteBonusRates = {
    '0.00 - 249999.99': 0.0,
    '250000.00 - 499999.99': 0.0025,
    '500000.00 - 749999.99': 0.0050,
    '750000.00 - 999999.99': 0.0075, // changed 
    '1000000 - 10000000': 0.001 // changed 
  };

  const findBonusRate = (value, bonusrate) => {
    // if number is larger than 10m use 10 mill to get 10m rate
    value = Math.min(10_000_000, value)
    // Iterate over the keys (ranges) of the bonusrate object
    for (const range in bonusrate) {
      if (bonusrate.hasOwnProperty(range)) {
        const [lower, upper] = range.split(' - ');  // Split the range into lower and upper bounds
        // Convert lower and upper bounds to numbers
        const lowerBound = Number(lower);
        const upperBound = Number(upper);
        // Check if the value is within the range
        if (value >= lowerBound && value <= upperBound) {
          return bonusrate[range];
          break;  // Exit the loop if a match is found
        }
      }
    }
  }

  // Personal step up your wealth
  const pmaSumOfLumpSumAndPad = (pmaMlsTotalValue + pmaMpadTotalValue)*12;
  let pmaBonusRate = 0;

  if (eliteAdvisor === "elite-yes") {
    pmaBonusRate = findBonusRate(pmaSumOfLumpSumAndPad, eliteBonusRates);
  } else {
    pmaBonusRate = findBonusRate(pmaSumOfLumpSumAndPad, notEliteBonusRate);
  }
  
  const pmaYearlyStepUpCommission = Math.ceil(Math.min(10_000_000, pmaSumOfLumpSumAndPad) * pmaBonusRate * 0.84 * commissionRate);

  // BS step up your wealth
  // total step up your wealth program rate
  // need to x12 to get total for the year
  const bsSumOfLumpSumAndPadTa = (bsMlsTaTotalValue + bsMpadTaTotalValue)*12;
  const bsSumOfLumpSumAndPadA = (bsMlsaTotalValue + bsMpadaTotalValue)*12;
  const bsSumOfLumpSumAndPadMd = (bsMlsMdTotalValue + bsMpadMdTotalValue)*12;
  const bsSumOfLumpSumAndPadSmd = (bsMlsSmdTotalValue + bsMpadSmdTotalValue)*12;
 
  let bsBonusRateTa = 0;
  let bsBonusRateA = 0;
  let bsBonusRateMd = 0;
  let bsBonusRateSmd = 0;

  // Step up your wealth personal commission  
  if (eliteAdvisor === "elite-yes") {
    bsBonusRateTa = findBonusRate(bsSumOfLumpSumAndPadTa, eliteBonusRates);
    bsBonusRateA = findBonusRate(bsSumOfLumpSumAndPadA, eliteBonusRates);
    bsBonusRateMd = findBonusRate(bsSumOfLumpSumAndPadMd, eliteBonusRates);
    bsBonusRateSmd = findBonusRate(bsSumOfLumpSumAndPadSmd, eliteBonusRates);
    
  } else { // todo: if the page is reloaded the button needs to be presseed again if not it is an empty string
    bsBonusRateTa = findBonusRate(bsSumOfLumpSumAndPadTa, notEliteBonusRate);
    bsBonusRateA = findBonusRate(bsSumOfLumpSumAndPadA, notEliteBonusRate);
    bsBonusRateMd = findBonusRate(bsSumOfLumpSumAndPadMd, notEliteBonusRate);
    bsBonusRateSmd = findBonusRate(bsSumOfLumpSumAndPadSmd, notEliteBonusRate);
  } 

  const bsYearlyStepUpCommissionTa = Math.min(10_000_000,bsSumOfLumpSumAndPadTa) * bsBonusRateTa * 0.84 * commissionSpreadTa;
  const bsYearlyStepUpCommissionA = Math.min(10_000_000,bsSumOfLumpSumAndPadA) * bsBonusRateA * 0.84 * commissionSpreadTa;
  const bsYearlyStepUpCommissionMd = Math.min(10_000_000,bsSumOfLumpSumAndPadMd) * bsBonusRateMd * 0.84 * commissionSpreadTa;
  const bsYearlyStepUpCommissionSmd = Math.min(10_000_000,bsSumOfLumpSumAndPadSmd) * bsBonusRateSmd * 0.84 * commissionSpreadTa;
  const bsYearlyStepUpCommissionAll = Math.ceil(bsYearlyStepUpCommissionTa + bsYearlyStepUpCommissionA + bsYearlyStepUpCommissionMd + bsYearlyStepUpCommissionSmd);


// TODO step up your wealth baseshop points

 var yearlyPointsTotal = 0; 
 var yearlyCommisionTotal = 0;
   /// adding points (provide toggle functionality to turn off or remove certain parts from total)
   // todo; make sure I'm accounting for the number of associates. currently june 12 I am not accounting for # associates in points calculation
 // todo: could store monthlyPointsPayout value and rather than rerunning everything, just do this part
 // todo: it looks like totalPmaUpfrontPoints and totalPmaStepup are not being used... (they are lighter blue)
  const allMonthlySummaryValues = [totalPmaUpfrontPoints, pmaTmpUpfrontc, pmatmpTrailc,
    totalPmaStepUp, bsUpfrontTotalAll, bsUpfrontComAll, bsTrailingTotalAll, bsTrailingComAll,
    ]; 
  const [
    totalPmaUpfrontYearlyPoints, pmaTmpUpfrontcYearly, pmatmpTrailcYearly,
    totalPmaStepUpYearly, bsUpfrontYearlyTotalAll, bsUpfrontYearlyComAll, 
    bsTrailingYearlyTotalAll, bsTrailingYearlyComAll
  ] = allMonthlySummaryValues.map(x => x*12);
 // upfront
 if (togglePersonalPointsBaseshopYearly.classList.contains("active-summary")) {
   yearlyPointsTotal += totalPmaUpfrontYearlyPoints;
   yearlyPointsPayout.textContent = yearlyPointsTotal.toLocaleString();

   yearlyCommisionTotal += pmaTmpUpfrontcYearly; // pmaTmpUpfrontc is darker blue??
   yearlyCommissionPayout.textContent = '$' + yearlyCommisionTotal.toLocaleString();
 } else {
   yearlyPointsPayout.textContent = yearlyPointsTotal.toLocaleString();
   yearlyCommissionPayout.textContent = '$' + yearlyCommisionTotal.toLocaleString();
 }

 // Trailing
 if (togglePersonalPointsBaseshopOverridesYearly.classList.contains("active-summary")) {
   yearlyPointsTotal += totalPmaTrailingPoints;
   yearlyPointsPayout.textContent = yearlyPointsTotal.toLocaleString();

   yearlyCommisionTotal += pmatmpTrailcYearly; // is darker blue??
   yearlyCommissionPayout.textContent = '$' + yearlyCommisionTotal.toLocaleString();
 } else {
   yearlyPointsPayout.textContent = yearlyPointsTotal.toLocaleString();
   yearlyCommissionPayout.textContent = '$' + yearlyCommisionTotal.toLocaleString();
 }

 // Stepup
 if (togglePersonalPointsBaseshopStepYearly.classList.contains("active-summary")) {
   yearlyPointsTotal += personalStepupPointsAll;
   yearlyPointsPayout.textContent = personalStepupPointsAll.toLocaleString();
   
   yearlyCommisionTotal += pmaYearlyStepUpCommission;
   yearlyCommissionPayout.textContent = '$' + yearlyCommisionTotal.toLocaleString();
 } else {
   yearlyPointsPayout.textContent = yearlyPointsTotal.toLocaleString();
   yearlyCommissionPayout.textContent = '$' + yearlyCommisionTotal.toLocaleString();
   
 }
 //// BASESHOP /////
 // upfront
 if (toggleBaseshopPointsBaseshopYearly.classList.contains("active-summary")) {
   yearlyPointsTotal += bsUpfrontYearlyTotalAll;
   yearlyPointsPayout.textContent = yearlyPointsTotal.toLocaleString();

   yearlyCommisionTotal += bsUpfrontYearlyComAll;
   yearlyCommissionPayout.textContent = '$' + yearlyCommisionTotal.toLocaleString();
 } else {
   yearlyPointsPayout.textContent = yearlyPointsTotal.toLocaleString();
   yearlyCommissionPayout.textContent = '$' + yearlyCommisionTotal.toLocaleString();
 }

 // Trailing
 if (toggleBaseshopPointsBaseshopOverridesYearly.classList.contains("active-summary")) {
   yearlyPointsTotal += bsTrailingYearlyTotalAll;
   yearlyPointsPayout.textContent = yearlyPointsTotal.toLocaleString();

   yearlyCommisionTotal += bsTrailingYearlyComAll;
   yearlyCommissionPayout.textContent = '$' + yearlyCommisionTotal.toLocaleString();
 } else {
   yearlyPointsPayout.textContent = yearlyPointsTotal.toLocaleString();
   yearlyCommissionPayout.textContent = '$' + yearlyCommisionTotal.toLocaleString();
 }

 // stepup
 if (toggleBaseshopPointsBaseshopStepYearly.classList.contains("active-summary")) {
   yearlyPointsTotal += bsStepupPointsAll; // bsUpwealthYearlyTotalAll;
   yearlyPointsPayout.textContent = yearlyPointsTotal.toLocaleString();

  yearlyCommisionTotal += bsYearlyStepUpCommissionAll;
  yearlyCommissionPayout.textContent = '$' + yearlyCommisionTotal.toLocaleString();
 } else {
   yearlyPointsPayout.textContent = yearlyPointsTotal.toLocaleString();
  yearlyCommissionPayout.textContent = '$' + yearlyCommisionTotal.toLocaleString();
 }


}


// custom dropdown 
function show(anything) {
  document.querySelector('.textBox').value = anything;
}

let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function() {
  dropdown.classList.toggle('active');
}





// TODO: change all the contribution amount ID names
// for the baseshop slider and inputs the names are toggle-inner-mls-smd but I should identify it is from baseshop not personal
// When getting totals/sums check to see if there are values in the cell. If there are then run the function on startup
//      if there are no values then wait. Otherwise, on refresh there will be values in input, but the totals won't be correct
// create a reset button






// todo; did I miss the personal baseshop calculations?
