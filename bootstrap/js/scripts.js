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

function sortRef() {
    //let ref = document.getElementById("refInput").value;
    let refList = document.getElementById("refInput").value.split('\n');//List of references to sort through/give back
    refList=refList.sort();
    console.log(refList);//Debugging
    refList.delete("");
    console.log(refList);//Debugging
    document.getElementById("refOutput").innerHTML=refList.join('<br>');
}

/* -Add option to remove line separation or add it
   -In case that we want:
   get list, clean it, append new line as well
refList = ["","a","z","t","f",""];

console.log(refList);

refList=refList.sort();

for (var i = refList.length-1; i--;) {
if (refList[i] === "") refList.splice(i, 1);
}

console.log(refList);
======================================
if option 1:

else option 2:
*/

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
