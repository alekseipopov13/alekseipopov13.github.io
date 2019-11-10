let max = 0, min = 0;
let str = 0;
let arr = 0;


function setArray(){
  str = document.getElementById('arrN').value;
  arr = str.split(' ');
}

function findMax() {
  max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] > Number(arr[max])) {
      max = i;
    }
  }
}

function findMin() {
  min = 0;
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] < +arr[min]) {
      min = i;
    }
  }
}

function toZero() {
  for (let i = min+1; i < max; i++) {
    arr[i] = 0;
  }
}

function change() {
setArray();
  findMax();
  findMin();
  toZero();
  alert(arr);
}
