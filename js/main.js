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


var contactButton = document.querySelector('[href="#button"]');
var contact = document.getElementById("contact-bar");

contactButton.addEventListener("click", a, false);

function a(){
   if (contact.classList.contains('hidden-contact')){
    contact.classList.remove('hidden-contact');
    contact.classList.add('show-contact');

  }else {
    contact.classList.remove('show-contact');
    contact.classList.add('hidden-contact');
  }
}
// document.querySelector('#container').addEventListener('click', a );
