

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click',function () {


   //method2 for toggle
   links.classList.toggle('show-links');
});
