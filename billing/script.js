

// Open Safeco Billing:


const safeco = () => {
let policy = document.getElementById("safeco").value;
let url = "https://safesite.safeco.com/personal/billing/postbilling.aspx?page=accountsummary&account=" + policy;
win = window.open(url);
}

// Heritage is buried in script. Cannot get direct URL
// Mercury is buried in script. Cannot get direct URL