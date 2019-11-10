window.onload = function() {
  let box = document.getElementById("box");
  let left = document.getElementById("left");
  let right = document.getElementById("right");


  document.addEventListener('keydown', function(event){
    if (event.code == "KeyA"){
      let start = Date.now();
      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        box.style.left = box.offsetLeft - 10 + 'px';
        if (timePassed > 100) clearInterval(timer);
      }, 10);//сдвигать влево на 10 пикселей каждые 10 ms, и так до 100 ms
    }else if (event.code == "KeyD"){
        let start = Date.now();
        let timer = setInterval(function() {
          let timePassed = Date.now() - start;
          box.style.left = box.offsetLeft + 10 + 'px';
          if (timePassed > 100) clearInterval(timer);
        }, 10);//сдвигать влево на 10 пикселей каждые 10 ms, и так до 100 ms
    }
  });

  right.onclick = function() {
    let start = Date.now();
    let timer = setInterval(function() {
      let timePassed = Date.now() - start;
      box.style.left = box.offsetLeft + 10 + 'px';
      if (timePassed > 100) clearInterval(timer);
    }, 10); //сдвигать вправо на 10 пикселей каждые 10 ms, и так до 100 ms
  }

  left.onclick = function() {
    let start = Date.now();
    let timer = setInterval(function() {
      let timePassed = Date.now() - start;
      box.style.left = box.offsetLeft - 10 + 'px';
      if (timePassed > 100) clearInterval(timer);
    }, 10);//сдвигать влево на 10 пикселей каждые 10 ms, и так до 100 ms
  }
}
