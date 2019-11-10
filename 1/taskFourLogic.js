function calcSumN() {
  let n = document.getElementById("N4").value,
    calcSum = 0;
  if (+n>0) {
    for (i = 1; i <= n; i++) {
      calcSum += (1 / i);
    }
    alert('сумма равна: ' + calcSum.toFixed(2));
  } else {
    alert("проверьте введённые данные");
  }
}
