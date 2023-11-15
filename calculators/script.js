// Coverage Change Calculator
const covChange = () => {
  // get values from user input
  let currA = document.getElementById("currentA").value;
  let currB = document.getElementById("currentB").value;
  let currC = document.getElementById("currentC").value;
  let currD = document.getElementById("currentD").value;
  let newA_val = document.getElementById("newA").value;

  // calculate new values
  let newB_val = (currB / currA) * newA_val;
  let newC_val = (currC / currA) * newA_val;
  let newD_val = (currD / currA) * newA_val;

  // inject new values into td boxes
  document.getElementById("newB").innerHTML = newB_val;
  document.getElementById("newC").innerHTML = newC_val;
  document.getElementById("newD").innerHTML = newD_val;
};

// Premium Increase Calculator
const premiumInc = () => {
  let renewalDate = document.getElementById("renDate").value;
  let carrier = document.getElementById("carrier").value;
  let cp = document.getElementById("currentP").value;
  let rp = document.getElementById("renewalP").value;
  let fInc = rp - cp;
  let fIncRounded = fInc.toFixed(2);
  document.getElementById("tInc").innerHTML = `$${fIncRounded}`;
  document.getElementById("pInc").innerHTML = `${
    Math.round((fInc / cp) * 10000) / 100
  }%`;
  document.getElementById(
    "premiumIncreaseSentence"
  ).innerHTML = `${renewalDate} - ${carrier} ** Premium Increase $${fIncRounded} // ${
    Math.round((fInc / cp) * 10000) / 100
  }%`;
};

// Prorata or Annualized Calculator
const proAmCalc = () => {
  let termEffDate = new Date(document.getElementById("effectiveDate").value);
  let termExpDate = new Date(document.getElementById("expirationDate").value);
  let endrEffDate = new Date(document.getElementById("endrEffDate").value);
  let proQuotedInc = document.getElementById("proratedQuotedInc").value;
  let annCalcInc = document.getElementById("annCalcInc").innerHTML;
  let annQuotedInc = document.getElementById("annQuotedInc").value;
  let proCalcInc = document.getElementById("proratedCalcInc").innerHTML;

  let termDays = (termExpDate - termEffDate) / (1000 * 3600 * 24);
  let prorataToExpDays = (termExpDate - endrEffDate) / (1000 * 3600 * 24);

  if (proQuotedInc) {
    let solution = (proQuotedInc / prorataToExpDays) * 365.25;
    document.getElementById("annCalcInc").innerHTML = `$${solution.toFixed(2)}`;
  }
  if (annQuotedInc) {
    let solutionTwo = (annQuotedInc / 365.25) * prorataToExpDays;
    document.getElementById(
      "proratedCalcInc"
    ).innerHTML = `$${solutionTwo.toFixed(2)}`;
  }
};
