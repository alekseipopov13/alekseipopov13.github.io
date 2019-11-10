"use strict";

window.onload=function(){
let textHead = document.getElementsByClassName("textHead");
let text = document.getElementsByClassName("textTask");

for (let i = 0 ; i < textHead.length; i++) {
textHead[i].addEventListener("click", function() {
  if(text[i].style.display=="block"){
    text[i].style.display = "none";
  }else{
    text[i].style.display = "block";
  }
});
}
}
