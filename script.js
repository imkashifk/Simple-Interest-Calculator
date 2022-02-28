function show_value(x)
{
 document.getElementById("value").innerHTML = x;
}

function compute(){
    var amount = parseInt(document.getElementById("principal").value);
    var rate = document.getElementById("rate").value;
    var time = parseInt(document.getElementById("mySelect").value);
    //console.log(amount, rate, time);
    var interest = (amount * rate * time) / 100;
    var yearInTheFuture = new Date().getFullYear() + time;
    //Create the Interest text
    var total = amount + interest;
    //var totalTime = 
    document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + amount + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + total + "</mark>,<br/> " +
        "in the year <mark>" + yearInTheFuture + "</mark>"; 
}

//Check for positive values
function validateAmount() {
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

}