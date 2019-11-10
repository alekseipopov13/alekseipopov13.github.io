
let images = new Array();
let i = 0;

images[0] = 'images/1.jpeg';
images[1] = 'images/2.jpeg';
images[2] = 'images/3.jpeg';
images[3] = 'images/4.jpeg';
images[4] = 'images/5.jpeg';
images[5] = 'images/6.jpeg';
images[6] = 'images/7.jpeg';
images[7] = 'images/9.jpeg';



document.addEventListener("DOMContentLoaded", function() {
  viewImages();
});

function viewImages() {
  document.getElementById("img_main").src = images[i];
  i++;
  if (i == images.length) {
    i = 0;
  }
  setTimeout("viewImages()", 2000);
}
