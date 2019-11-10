function result2 (N1, N2, N3){
  if (N1>=0 && N2>=0 && N3>=0) {
    let arr2 = [];
    arr2[0] = N1;
    arr2[1] = N2;
    arr2[2] = N3;
    arr2.sort();

    alert("Среднее число: " + arr2[1]);
  }else{
   alert("проверьте введённые данные")
  }
}
