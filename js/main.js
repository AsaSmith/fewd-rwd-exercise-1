var parent = document.querySelector("ul");
var myNavitems = document.querySelectorAll('li a');

parent.addEventListener("click", handler, false);

function handler(e) {

  if (e.target !== e.currentTarget) {

    for(i = 0; i < myNavitems.length; i++) {
      myNavitems[i].classList.remove('active');
    }

    e.target.classList.add('active');
   }

  e.stopPropagation();
}


var button = document.getElementById("button");
var contact = document.getElementById("contact-bar");

button.addEventListener("click", a);

function a(){
  // document.getElementById("hidden").classList.remove("hidden-contact");
    contact.classList.remove('hidden-contact');
    contact.classList.add('show-contact');
}
// document.querySelector('#container').addEventListener('click', a );
