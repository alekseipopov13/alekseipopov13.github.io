window.onload=function(){
let input = document.getElementById('input');
input.addEventListener('keypress', (e) => {
    let keyCode = e.keyCode || e.which;
    if (/[A-Z ]/.test(String.fromCharCode(keyCode)) || (/[ ]/.test(input.value) && keyCode == 32)) {
        e.preventDefault();
    }
});
}
