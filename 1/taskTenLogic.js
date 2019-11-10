
function setTenArray() {
  let S010 =  document.getElementById('S010').value;
  let S10 = document.getElementById('S10').value;

  let S010low = S010.toLowerCase();
  let S10low = S10.toLowerCase();

  let splitS10 = S10low.split(S010low);
  let counter10 = splitS10.length - 1;

  alert ("Количество вхождений строки " + S010 + " в строку " + S10 + " равно " + counter10);
}
