window.onload=function(){
let ms =  document.querySelector('#cursor')
document.querySelector('#bg').onmousemove = event => {
	if(event.target.id != 'bg') return
  ms.style.top = event.clientY + 'px'
  ms.style.left =  event.clientX + 'px'
}
}
