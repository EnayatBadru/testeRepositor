var link = document.querySelector(".link");

function active(){
    link.classList.toggle('link-active')

}

link.addEventListener("click", active)