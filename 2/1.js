function outputAll() {
  let sname = document.getElementById("sname").value;
  let name = document.getElementById("name").value;
  let nickname = document.getElementById("nickname").value;
  let email = document.getElementById("email").value;
  document.getElementById("textHere").textContent = "Я так полагаю, Вас зовут " + name + ", Ваша фамилия - " + sname + ", однако, здесь Вас принято называть " + nickname + ". " + "Ещё мы напишем на Вашу почту: " + email + ", окей?";
}
