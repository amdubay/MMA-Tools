

// Coverage Change Calculator
const covChange = () => {
// get values from user input
let currA = document.getElementById("currentA").value;
let currB = document.getElementById("currentB").value;
let currC = document.getElementById("currentC").value;
let currD = document.getElementById("currentD").value;
let newA_val = document.getElementById("newA").value;

// calculate new values
let newB_val = (currB/currA)*newA_val
let newC_val = (currC/currA)*newA_val
let newD_val = (currD/currA)*newA_val

// inject new values into td boxes
document.getElementById("newB").innerHTML = newB_val
document.getElementById("newC").innerHTML = newC_val
document.getElementById("newD").innerHTML = newD_val
}



// Premium Increase Calculator
const premiumInc = () => {
	let cp = document.getElementById("currentP").value;
	let rp = document.getElementById("renewalP").value;
	let fInc = rp-cp
	document.getElementById("tInc").innerHTML = `$${fInc}`
	document.getElementById("pInc").innerHTML = `${Math.round((fInc/cp)*10000)/100}%`

}