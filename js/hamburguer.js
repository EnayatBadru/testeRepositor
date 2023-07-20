var btn = document.querySelector(".btn-mobile");
var modal = document.querySelector(".modal");
var ul = document.querySelector(".modal ul");

function hamburguer() {
  btn.classList.toggle("burguer");
  modal.classList.toggle("active");
}

btn.addEventListener("click", hamburguer);
modal.addEventListener("click", hamburguer);
