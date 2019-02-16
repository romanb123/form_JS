
// function to show num input

function shownum(){
    var x=document.getElementById("showage");
    if(x.checked==true){
    document.getElementById("age").style.display="block";
 }
 else{
    document.getElementById("age").style.display="none";    
 }


 // function to show color input


}
function colors(){
    var y=document.getElementById("showcolor");
    if(y.checked==true){
    document.getElementById("color").style.display="block";
 }
 else{
    document.getElementById("color").style.display="none";    
 }
}

// function to show age

function setage(){
var x=document.getElementById("agevalue").value;
console.log(x);
document.getElementById("screen").innerHTML="<span>"+x+"</span>";


}
// function to show backround color

function setbackground(){
    var y=document.getElementById("colorvalue").value;
    console.log(y);
    document.getElementById("screen").style.backgroundColor=y;
    
    
    }