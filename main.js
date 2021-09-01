document.getElementById("next2").disabled=true;
document.getElementById("back2").disabled=true;

function ph4() {
    document.getElementById('changeImage').innerHTML='<img src="img/ph4.png">';
}    
function ph5() {
    document.getElementById('changeImage').innerHTML='<img src="img/ph5.png">';
} 
function ph6() {
    document.getElementById('changeImage').innerHTML='<img src="img/ph6.png">';
} 
function ph7() {
    document.getElementById('changeImage').innerHTML='<img src="img/ph7.png">';
} 
function ph8() {
    document.getElementById('changeImage').innerHTML='<img src="img/ph8.png">';
} 
function next(){
    window.location.href="screen2.html";
}
function back(){
    window.location.href="screen1.html";
}
// function next2(){
    
//     var b1 = document.getElementById("blank-1").value;
//     var b2 = document.getElementById("blank-2").value;
//     var b3 = document.getElementById("blank-3").value;
//     if(b1=="8.0" && b2=="14.0" && b3=="23.0"){
//         alert("true");
//         window.location.href="screen3.html";
//     }else{
//         modal.style.display = "block";
//     }
// }
// function back2(){
//     window.location.href="screen1.html";
// }

function blank(){
    var b1 = document.getElementById("blank-1").value;
    var b2 = document.getElementById("blank-2").value;
    var b3 = document.getElementById("blank-3").value;
    if(b1!="" && b2!="" && b3!=""){
        document.getElementById("next2").disabled=false;
    }else{
        document.getElementById("next2").disabled=true;
    }
}

function blank2(){
    var b4 = document.getElementById("blank-4").value;
    var b5 = document.getElementById("blank-5").value;
    if(b4!="" && b5!=""){
        document.getElementById("back2").disabled=false;
    }else{
        document.getElementById("back2").disabled=true;
    }
}