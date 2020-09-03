var burguer = document.querySelector(".burguer");

burguer.addEventListener("click",function(){
    document.querySelector(".sidebar").classList.toggle("show-menu");
})