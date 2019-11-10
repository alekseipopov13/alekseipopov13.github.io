function findNums() {
  let outStr = "";
  let n = document.getElementById("A").value;
  let a = [];
  if (n%2!=0) {
    a.length = n;
    let i = 0;
    for(i=0; i<n; i++) {
      a[i] = randomInteger(1,100);
    }
    alert("массив: " + a)
    for(i=n-2; i>0; i-=2) {
      outStr = outStr + "индекс: " + i + " число: " + a[i] + '\n';
    }
    alert(outStr);
  }else{
    alert("проверьте введённые данные");
  }
}

// Функция радномного числа
function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
