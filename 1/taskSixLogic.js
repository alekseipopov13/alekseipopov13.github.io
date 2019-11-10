let sixArr = 0;
let counter = 0;
let sixStr;

function setSixArray() {
  sixStr = document.getElementById('nums').value;
  sixArr = sixStr.split(' ');

}

//Function declaration
function IsSquare(K) {
  for (let i=1; i*i <= +K; i++){
    if (i*i === +K) {
      counter += 1;
    }
  }
}


//Function expression
/*let IsSquare = function(K) {
  for (let i=1; i*i <= +K; i++){
    if (i*i === +K) {
      counter += 1;
    }
  }
};*/


//Arrow function
/*let IsSquare = (K) => {
  for (let i = 1; i * i <= +K; i++) {
    if (i * i === +K) {
      counter += 1;
    }
  }
};*/


function countSquares() {
  counter = 0;
  setSixArray();
  for (let i = 0; i <= sixArr.length; i++) {
    IsSquare(sixArr[i]);
  }
  alert(counter);
}
