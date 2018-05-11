$(function() {
  $(".tab").click(function(e) {
    e.preventDefault();
    $(".tab").removeClass("selected");
    $(this).addClass("selected");
    $(function(){
      if ($("#tab-1").hasClass('selected')) {
        $(".tab-2").hide();
        $(".tab-1").show();
      }
    });
    $(function(){
      if ($("#tab-2").hasClass('selected')) {
        $(".tab-1").hide();
        $(".tab-2").show();
      }
    });
  });
});

const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');
const menuToggle = document.querySelector('.nav__toggle');
let isMenuOpen = false;


// TOGGLE MENU ACTIVE STATE
menuToggle.addEventListener('click', e => {
  e.preventDefault();
  isMenuOpen = !isMenuOpen;
  
  // toggle a11y attributes and active class
  menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
  menu.hidden = !isMenuOpen;
  nav.classList.toggle('nav--open');
});


// TRAP TAB INSIDE NAV WHEN OPEN
nav.addEventListener('keydown', e => {
  // abort if menu isn't open or modifier keys are pressed
  if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
    return;
  }
  
  // listen for tab press and move focus
  // if we're on either end of the navigation
  const menuLinks = menu.querySelectorAll('.nav__link');
  if (e.keyCode === 9) {
    if (e.shiftKey) {
      if (document.activeElement === menuLinks[0]) {
        menuToggle.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === menuToggle) {
      menuLinks[0].focus();
      e.preventDefault();
    }
  }
});

const burenie = document.querySelector('#burenie');
const geo = document.querySelector('#geo');


burenie.addEventListener('click', e => {
  e.preventDefault();
  geo.parentElement.classList.remove('is-open');
  burenie.parentElement.classList.toggle('is-open');
});;

geo.addEventListener('click', e => {
  e.preventDefault();
  geo.parentElement.classList.toggle('is-open');
  burenie.parentElement.classList.remove('is-open');
});;

$('#SendEmail').on('click', function () {   
  $(this).val("Ошибка!");
  $(this).css("background-color","#eaad44");
});
