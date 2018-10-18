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
    //console.log(refList);//Debugging
    //**if (document.getElementById().value checked, perform appropriate indentation
    for (let i = refList.length-1; i--;) {//remove any extra new lines
        if (refList[i] === "") refList.splice(i, 1);
    }
    //console.log(refList);//Debugging
    let iQty = document.getElementById("indentQty").value;
    
    console.log(iQty);
    refList = indent(refList,iQty);
    console.log(refList);
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

//let array=["bob","alice","morgan"];//testing
function indent(x, y) {
    let sp = " ";
    let rIndentList = x;
    let rIndentQty = y;
    for (var c = 0; c < rIndentList.length; c++) {
        rIndentList[c] = sp.repeat(y) + rIndentList[c];
    }
    return rIndentList;
}



//var enteredText = document.getElementById("textArea").value;
//var numberOfLineBreaks = (enteredText.match(/\n/g)||[]).length; RegEx

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
