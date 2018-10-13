function checkPi() {
    let txt="";
    let pi="3.141592653589793238462643383279502884197169399375105820974944";
    if (document.getElementById("typePi").toString() == pi.toString()) {
        txt = "Spot on!";
    } else {

        txt = "Please try again!";
    }
    document.getElementById("result").innerHTML = txt;
}



/*function logpi(){
    let pi="3.141592653589793238462643383279502884197169399375105820974944";
    for(i=0;i<1;i++) {
        console.log(i)
    }
}
*/
/*(function checkPi() {
    let pi = "3.141592653589793238462643383279502884197169399375105820974944";
    let test = document.forms["typePi"]["test"];
    for(i=0;i<1;i++) {
        console.log(test)
    }
    if (test.value == pi) {
        alert("Spot on!");
    }
    else {
        alert("Please try again");
    }
}
*/