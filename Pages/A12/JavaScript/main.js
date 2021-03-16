window.onload=function(){
    let innerBox=document.querySelector("#inner-box");
    let login=document.querySelector(".card-front .btn");
    let register=document.querySelector(".card-back .btn");
    let inputL=document.querySelector(".card-front");
    let inputR=document.querySelector(".card-back");

    login.onclick=function openRegisrer(){
        innerBox.style.transform="rotateY(180deg)";
        inputL.style.transform="rotateY(20deg)";
        // inputL.style.transform="";

    }
    register.onclick=function openLogin(){
        innerBox.style.transform="rotateY(0deg)";
        inputL.style.transform="rotateY(0deg)";
    }
}