let S1, S2, S3;

function S1Count(R1) {
  S1 = Math.PI * (R1 * R1);
}

function S2Count(R2) {
  S2 = Math.PI * (R2 * R2);
}

function S3Count() {
  S3 = S1 - S2;
}

function countAll(R1, R2) {
  S1Count(R1);
  S2Count(R2);
  S3Count();
  alert("S1 = " + S1 + '\n' + "S2 = " + S2 + '\n' + "S3 = " + S3);
}

function result1(R1, R2) {
  if (document.getElementById('r1').value.length == 0 || document.getElementById('r2').value.length == 0) {
    alert("введите данные");
  } else {
    if (+R1 >= 0 && +R2 >= 0 && +R1 >= +R2) {
      countAll(+R1, +R2);
    } else {
      alert("проверьте правильность введённых данных");
    }
  }

}
