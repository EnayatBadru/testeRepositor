window.addEventListener("scroll", (e)=>{
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    console.log(window.scrollY);
})