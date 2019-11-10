window.onload=function(){
  let controls = document.querySelectorAll('.controls');
  for(let i=0; i<controls.length; i++){
      controls[i].style.display = 'inline-block';
  }

  let slides = document.querySelectorAll('#slides .slide');
  let currentSlide = 0;


  function nextSlide(){
      goToSlide(currentSlide+1);
  }

  function previousSlide(){
      goToSlide(currentSlide-1);
  }

  function goToSlide(n){
      slides[currentSlide].className = 'slide';
      currentSlide = (n+slides.length)%slides.length;
      slides[currentSlide].className = 'slide showing';
  }

  let next = document.getElementById('next');
  let previous = document.getElementById('previous');

  next.onclick = function(){
      nextSlide();
  };
  previous.onclick = function(){
      previousSlide();
  };

}
