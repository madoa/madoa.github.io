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

function sortRef() { //v2.2, adds indent functionality
    let refList = document.getElementById("refInput").value.split('\n');//List of references to sort through/give back
    
    refList=refList.sort();//sort references into alphabetical order
    
    for (let i = refList.length-1; i--;) {//remove any extra new lines
        if (refList[i] === "") refList.splice(i, 1);
    }
    let iQty = document.getElementById("indentQty").value;

    if (iQty > 0 && iQty <= 10) {//Adds indents, if necessary
        refList = indent(refList,iQty);
    }
    
    if (document.getElementById("with").checked) {
        document.getElementById("refOutput").innerHTML=refList.join('<br><br>');
    }
    else if(document.getElementById("wout").checked) {
        document.getElementById("refOutput").innerHTML=refList.join('<br>');
    }
    else {//default
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

function getRob() {
    let urlList = document.getElementById("robInput").value.split('\n');//List of URLs to check through
    
    urlList=urlList.sort();//sorts URLs into alphabetical order - needed for rob?
    
    for (let i = urlList.length-1; i--;) {//remove any extra new lines
        if (urlList[i] === "") urlList.splice(i, 1);
    }
	console.log(urlList);//["d", "d", "f", "f", "f"] - iterate through this with GET
    document.getElementById("robOutput").innerHTML=urlList.join('<br>');
}

function getTxt(x) {//GETs robots.txt contents
	let url=x;
	return 1;
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
