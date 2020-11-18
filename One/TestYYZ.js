window.onload=function(){
        var inputClick=document.querySelector("#inputS");
        var inputSpanMove=document.querySelector(".songSearch span");
        var inputClear=document.querySelector("#inputF");
        var showAudio=document.querySelector("audio");
        var showImg=document.querySelector(".imgMusic img");
        var showP=document.querySelector("#commentsMusic p");

        inputClick.onfocus=function(){
            inputSpanMove.classList.add("inputSpanMove");  
            showAudio.classList.add("showAudio"); 
            showImg.classList.add("showImg");
            showP.classList.add("showP");
        };
        inputClick.onblur=function(){
            if(!this.value)
                inputSpanMove.classList.remove("inputSpanMove");
        };
        inputClear.onclick=function(){
            inputClick.value=null;
            inputSpanMove.classList.remove("inputSpanMove");
            showAudio.classList.remove("showAudio");
            showImg.classList.remove("showImg");
            showP.classList.remove("showP");
        };
};