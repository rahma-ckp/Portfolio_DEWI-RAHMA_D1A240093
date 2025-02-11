// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector("#to-top");

        if (window.pageYOffset > fixedNav) {
            header.classList.add("navbar-fixed");
            toTop.classList.remove('hidden');
            toTop.classList.add('flex');
        } else {
            header.classList.remove("navbar-fixed");
            toTop.classList.remove('flex');
            toTop.classList.add('hidden');
        }
    };
    // Hamburger
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");
    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("hamburger-active");
        navMenu.classList.toggle("hidden");
    });

   //Darkmode toggle
   const darkToggle = document.querySelector('#dark-toggle');
   const html = document.querySelector('html');

   darkToggle.addEventListener('click', function(){
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
   });

   // On page load or when changing themes, best to add inline in `head` to avoid FOUC
document.documentElement.classList.toggle(
    'dark',
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
  
  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light'
  
  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'
  
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')

//pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    document.documentElement.classList.remove('dark');
}

// klik diluar hamburger
window.addEventListener('click', function (e){
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});