
function whereMinMax() {
  let n7 = document.getElementById("n7").value;
  let arr7 = [];
  arr7.length = n7;
  for (let i = 0; i < n7; i++) {
    arr7[i] = randomInteger(0, 100);
  }
  alert("Набор из " + n7 + " чисел: " + arr7);
  let max = getMaxOfArray(arr7);
  let min = getMinOfArray(arr7);
  let indexMin = 0,
    indexMax = 0,
    indexMax2 = 0;

  for (let i = 0; i < n7; i++) {
    if (arr7[i] == min) {
      indexMin = i;
    } else if (arr7[i] == max) {
      indexMax = i;
    }
  }
  if (indexMin < indexMax) {
    alert("Минимальное число: " + min + "\nНомер в массиве: " + indexMin);
  } else {
    alert("Максимальное число: " + max + "\nНомер в массиве: " + indexMax);
  }
}


// Функция радномного числа
function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// Максимальное число
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

// Минимальное число
function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}
