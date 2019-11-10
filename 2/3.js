window.onload=function(){

let text = document.getElementById("text");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");

one.addEventListener("click",
  function() {
    text.style.color = "coral";
  }
);

one.addEventListener("contextmenu",
  function() {
    document.body.style.backgroundColor = 'coral';
  }
);

two.addEventListener("click",
  function() {
    text.style.color = "pink";
  }
);

two.addEventListener("contextmenu",
  function() {
    document.body.style.backgroundColor = 'pink';
  }
);

three.addEventListener("click",
  function() {
    text.style.color = "dodgerblue";
  }
);

three.addEventListener("contextmenu",
  function() {
    document.body.style.backgroundColor = 'dodgerblue';
  }
);

four.addEventListener("click",
  function() {
    text.style.color = "aquamarine";
  }
);

four.addEventListener("contextmenu",
  function() {
    document.body.style.backgroundColor = 'aquamarine';
  }
);

}
