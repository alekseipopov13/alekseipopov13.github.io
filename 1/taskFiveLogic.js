function powK() {
  let N = document.getElementById("N5").value,
    K = 1;
  if (+N > 1) {
    for (let i = 0; Math.pow(3, i) < N; i++) {
      K = i
    }
    alert("3^" + K + " < " + N);
  } else {
    alert("проверьте введённые данные");
  }
}
