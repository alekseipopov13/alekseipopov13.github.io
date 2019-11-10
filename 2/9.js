window.onload=function(){
  let modal = document.getElementById('myModal');
  let img = document.getElementsByClassName('myImg');
  let modalImg = document.getElementById('img01');
  let captionText = document.getElementById('caption');


  for (i=0; i< img.length; i++)
     img[i].onclick = function()
    {
      modal.style.display = "block";
      modalImg.src =  this.src;
    };


  // img.onclick = function(){
  //   modal.style.display = "block";
  //   modalImg.src =  this.src;
  // }
}
