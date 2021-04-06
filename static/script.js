// For ham burger

var navbar = document.querySelector('.navbar');
var right_nav = document.querySelector('.right-nav');
var navbar_link = document.querySelector('.navbar-link');
var burger = document.querySelector('.burger');

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav');
    right_nav.classList.toggle('resp');
    navbar_link.classList.toggle('resp');
});

// For close buttons
var btn = document.querySelectorAll('.close');
Array.from(btn).forEach((e)=>{
    e.addEventListener("click",()=> {
        e.parentElement.style.display = "none";
    });
});

// For live html

function live(){
    var html = document.getElementById("html").value;
    var css = document.getElementById("css").value;
    var js = document.getElementById("js").value;
    var result = document.querySelector(".result");
    result.innerHTML = html + "<style>" + css + "</style>" + "<script>" + js + "<script>";
}