const sideMenu = document.getElementById("sideMenu");

const navBar = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');

function openMenu() {
  sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu() {
  sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', () => {
  if (scrollY > 50) {
    navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
    navBar.style.transition = 'all 0.5s ease';

    navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
    navLinks.style.transition = 'all 0.5s ease';
  } else {
    navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
    navBar.style.transition = 'all 0.5s ease';

    navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
    navLinks.style.transition = 'all 0.5s ease';
  }
})


function darkMode() {
  Toastify({
    text: "This feature is under development.",
    duration: 5000,
    close: true,
    gravity: "bottom",
    position: "center",
    style: {
      background: "black",
    },
    offset: {
      y: 20
    }
  }).showToast();
}


document.querySelectorAll('.comingSoon').forEach(item => {
  item.addEventListener('click', event => {
    Toastify({
      text: "This feature is under development.",
      duration: 5000,
      close: true,
      gravity: "bottom",
      position: "center",
      style: {
        background: "black",
      },
      offset: {
        y: 20
      }
    }).showToast();
  })
});


//Tailwind Configuration

tailwind.config = {
  theme: {
    gridTemplateColumns: {
      'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
    },
    fontFamily: {
      Outfit: ["Outfit", "sans-serif"],
      Ovo: ["Ovo", "serif"]
    },
    animation: {
      'spin_slow': 'spin 6s linear infinite',
    },
  }
}