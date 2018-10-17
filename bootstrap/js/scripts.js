function genCode() {//Generates unique Quiz code
    let x = document.getElementById("ID").value;//Assign ID to variable
    let y = document.getElementById("DA").value;//Assign date to variable
    let d = "//";
    if(x == "" && y ==""){
        document.getElementById("generatedCode").innerHTML="Please enter ID & date!";
    }
    else if(x == "" || x.length != 14){
        document.getElementById("generatedCode").innerHTML = "Please enter a valid ID!";
    }
    else if(y == ""){
        document.getElementById("generatedCode").innerHTML="Please enter a valid date!";
    }
    else {
        document.getElementById("generatedCode").innerHTML=x+d+y;//Format = ID//DATE
    }
}

function sortRef() { //v2, adds new line option
    //let ref = document.getElementById("refInput").value;
    let refList = document.getElementById("refInput").value.split('\n');//List of references to sort through/give back
    refList=refList.sort();//sort references into alphabetical order
    console.log(refList);//Debugging
    for (let i = refList.length-1; i--;) {//remove any extra new lines
        if (refList[i] === "") refList.splice(i, 1);
    }
    console.log(refList);//Debugging
    if (document.getElementById("with").checked) {
        document.getElementById("refOutput").innerHTML=refList.join('<br><br>');
    }
    else if(document.getElementById("wout").checked) {
        document.getElementById("refOutput").innerHTML=refList.join('<br>');
    }
    else {
        document.getElementById("refOutput").innerHTML=refList.join('<br><br>');
    }

}

//var enteredText = document.getElementById("textArea").value;
//var numberOfLineBreaks = (enteredText.match(/\n/g)||[]).length;

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