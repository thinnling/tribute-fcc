backToTopButton = document.querySelector('.back-to-top');

// // Scroll event
window.addEventListener('scroll', scrollFunction);

// // Button appears after scrolled down 300px
function scrollFunction() {
    if (window.pageYOffset > 300) { // button hidden
        if (!backToTopButton.classList.contains('btnEntrance')) {
            backToTopButton.classList.remove('btnExit');
            backToTopButton.classList.add('btnEntrance');
            backToTopButton.style.display = 'block';
        }
    } else { // button appears
        if (backToTopButton.classList.contains('btnEntrance')) {
            backToTopButton.classList.remove('btnEntrance');
            backToTopButton.classList.add('btnExit');
            setTimeout(function() {
                backToTopButton.style.display = 'none';
            }, 250);
        }
    }
}

// // Click event
backToTopButton.addEventListener('click', smoothScrollBackToTop);

// // Button click scrolls to top of page
function backToTop() {
    window.scrollTo(0,0);
}

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 250;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/20;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};

// ////////////////////////////////////////////////////////////////////////

// //Hamburger dropdown
// // Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItem = document.querySelectorAll('.nav-item');

// // Set Initial State of the Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

 function toggleMenu() {
     if(!showMenu) {
         menuBtn.classList.add('close');
         menu.classList.add('show');
         menuNav.classList.add('show');
         navItem.forEach(item => item.classList.add('show'));
     
//         // Set Menu State
        showMenu = true;
        } else {
            menuBtn.classList.remove('close');
            menu.classList.remove('show');
            menuNav.classList.remove('show');
            navItem.forEach(item => item.classList.remove('show'));

//             //Set Menu State
            showMenu = false;
     }
 }

//////////////////////////////////////////////////////////////////

// Select DOM Items
const navLinks = document.querySelector('.nav-link');


let togglesS = true;

//  // Mobile Nav disappears after user clicks a link
 navLinks.addEventListener('click', closeMenu);

 function closeMenu() {
    if (togglesS) {
        menuNav.style.display = 'none';
        menuBtn.classList.remove('close');
    }   
 }
 
 menuBtn.addEventListener('click', openMenu);

 function openMenu() {
     if (menuNav.style.display = 'none') {
        menuNav.style.display = 'flex';
     }
 }
