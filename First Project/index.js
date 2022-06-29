//init previously es uses var but now let


//contains the behaviour of html pages
console.log('Hello World');//Statement

/* 
document.getElementById("myID").onclick = function(){
    var myName = document.getElementById("IDName").value;
    console.log("hello", myName);
}
*/
function myFunc (name) 
{
    name =  document.getElementById("IDName").value;;
    alert("hello " + name);
}