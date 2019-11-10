window.onload = function(){

let button = document.getElementById('button');
let hidden = document.getElementById('hidden');

hidden.style.height = '0px';

button.addEventListener("click", function() {
    if (hidden.style.height == '0px') {
        hidden.style.visibility = 'visible';
        hidden.style.height = '200px';
    } else {
        hidden.style.height = '0px';
        hidden.style.visibility = 'hidden';
    }
});

};
