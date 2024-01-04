

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click',function () {
   // console.log('dcd',links.classList);
   //console.log(links.classList.contains('links'));
      //console.log(links.classList.contains('random'));
  
/* method1 for toggle
   if(links.classList.contains('show-links')){
   links.classList.remove('show-links');
   //console.log('remove');
   }

   else{
    links.classList.add('show-links');
    //console.log('add');
   }*/

   //method2 for toggle
   links.classList.toggle('show-links');
});