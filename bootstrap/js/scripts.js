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

function si(x,y){
    localStorage.setItem(x,y);
}

function gi(x){
    return localStorage.getItem(x);
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
/*{
    "Title":"",
    "img":"",
    "inside":"",
    "price":""
},
{
        "Title":"",
        "img":"",
        "text":"",
        "price":""
    }*/
//list of products
bgList = [
    {
        "Title":"Cards Against Humanity",
        "img":"bg0.jpg",
        "inside":"bg0i.jpg",
        "price":10.99
    },
    {
        "Title":"Exploding Kittens",
        "img":"bg1.jpg",
        "inside":"bg1i.jpg",
        "price":9.99
    },
    {
        "Title":"Settlers of Catan",
        "img":"bg2.jpg",
        "inside":"bg2i.jpg",
        "price":15.99
    },
    {
        "Title":"Monopoly",
        "img":"bg3.jpg",
        "inside":"bg3i.jpg",
        "price":20.99
    },
    {
        "Title":"Town of Salem",
        "img":"bg4.jpg",
        "inside":"bg4i.jpg",
        "price":14.99
    },
    {
        "Title":"Pandemic",
        "img":"bg5.jpg",
        "inside":"bg5i.jpg",
        "price":19.99
    },
    {
        "Title":"Ticket To Ride",
        "img":"bg6.jpg",
        "inside":"bg6i.jpg",
        "price":20.99
    },
    {
        "Title":"Castle Panic",
        "img":"bg7.jpg",
        "inside":"bg7i.jpg",
        "price":5.99
    },
    {
        "Title":"Guess Who?",
        "img":"bg8.jpg",
        "inside":"bg8i.jpg",
        "price":10.99
    },
    {
        "Title":"Operation",
        "img":"bg9.jpg",
        "inside":"bg9i.jpg",
        "price":10.99
    },
    {
        "Title":"Mouse Trap",
        "img":"bg10.jpg",
        "inside":"bg10i.jpg",
        "price":12.99
    },
    //items that don't have what's inside
    {
        "Title":"Food",
        "img":"bg11.jpeg",
        "text":"",
        "price":3.49
    },
    {
        "Title":"Ludo spares",
        "img":"bg12.jpeg",
        "text":"",
        "price":4.99
    },
    {
        "Title":"Poker",
        "img":"bg13.jpeg",
        "text":"",
        "price":9.99
    },
    {
        "Title":"Scrabble spares",
        "img":"bg14.jpeg",
        "text":"",
        "price":5.99
    },
    {
        "Title":"Plain ol' dice",
        "img":"bg15.jpeg",
        "text":"",
        "price":1.99
    },
    {
        "Title":"Monopoly spares",
        "img":"bg16.jpeg",
        "text":"",
        "price":7.99
    },
];

cList = {
    "BTC":{
        "desc":"Check out more info at <a href='https://bitcoin.org/en/'>Bitcoin.org</a>",
        "fn":"Bitcoin"
    },
    "LTC":{
        "desc":"Check out more info at <a href='https://litecoin.org/'>Litecoin.org</a>",
        "fn":"Litecoin"
    },
    "ETH":{
        "desc":"Check out more info at <a href='https://www.ethereum.org/'>Ethereum.org</a>",
        "fn":"Ethereum"
    },
    "XRP":{
        "desc":"Check out more info at <a href='https://ripple.com/'>Ripple.com</a>",
        "fn":"Ripple"
    },
    "DGE":{
        "desc":"Check out more info at <a href='https://dogecoin.com/'>dogecoin.com</a>",
        "fn":"Dogecoin"
    }
};