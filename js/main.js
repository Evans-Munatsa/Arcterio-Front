// window.addEventListener('scroll', function() {
//     var navbar = document.getElementById('navbar');
//     if (window.scrollY > 50) {
//       navbar.classList.add('scrolled');
//     } else {
//       navbar.classList.remove('scrolled');
//     }
//   });
//   document.querySelector('.menu-toggle').addEventListener('click', function() {
//     document.querySelector('.menu').classList.toggle('show');
// });

document.addEventListener('DOMContentLoaded', function() {
  var logo = document.getElementById('logo');
  var originalText = '.img/logos/arcterio.png';
  var navBar = document.querySelector('nav'); // Assuming your navbar is in a <nav> element

  var imageUrl = './img/logo-small.png';
  var lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down - show image
      logo.innerHTML = '<img src="' + imageUrl + '" alt="Logo">';
      navBar.style.backgroundColor = '#e5e5e59e';

    } else {
      // Scrolling up - show text
      logo.innerHTML = '<img src="' + imageUrl + '" alt="Logo">';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  }, false);
});

document.addEventListener("DOMContentLoaded", function() {
    const masonry = document.getElementById('masonry');
    const images = masonry.querySelectorAll('img');
    
    let loadedCount = 0;
    images.forEach((img) => {
        img.onload = () => {
            loadedCount++;
            if (loadedCount === images.length) {
                // All images are loaded, trigger any additional JS here if needed
                console.log('All images loaded');
            }
        };
    });
});


let currentIndex = 0;

function showNextSlide() {
    const slides = document.querySelectorAll('.slides img');
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

setInterval(showNextSlide, 5000);

// Initialize the first image as active
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.slides img')[0].classList.add('active');
});


window.onload = function() {
    const masonryItems = document.querySelectorAll('.masonry-item img');
    masonryItems.forEach(img => {
        img.onload = function() {
            this.parentNode.style.height = this.height + 'px';
        }
    });
}

// Initiate the wowjs
    new WOW().init();



class Slider{
    constructor(_element){
      this.slider = _element;
      this.items = [this.slider.querySelector('.item-1'), this.slider.querySelector('.item-2'), this.slider.querySelector('.item-3')];
      // this.background = this.slider.querySelector('.background');
      this.listeners();
      this.setBackground();
    }

    setBackground = () => {
      console.log(this.background);
      let pic = this.items[0].querySelector('img').getAttribute('src');
      this.background.style.background = `linear-gradient(180deg, rgba(0,0,0,0.6),rgba(0,0,0,0.3)), url(${pic}) no-repeat center fixed`
      this.background.style.backgroundSize = `cover`;
    }
  
    item_3Click = () => {
        this.items[0].removeEventListener('mousedown', this.item_1Click);
        this.items[2].removeEventListener('mousedown', this.item_3Click);
        this.next();
    }

    item_1Click = () => {
        this.items[0].removeEventListener('mousedown', this.item_1Click);
        this.items[2].removeEventListener('mousedown', this.item_3Click);
        this.previous();
    }

    listeners = () => {
        this.items[2].addEventListener('mousedown', this.item_3Click);
        this.items[0].addEventListener('mousedown', this.item_1Click);
    }

    reclass = () => {
      for(let i = 0; i < this.items.length; i++){
        this.items[i].classList.remove('item-1', 'item-2', 'item-3');
        this.items[i].classList.add('item-' + String(i + 1))
      }
      
    }
    
    next = () => {
      this.items.unshift(this.items[2]);
      this.items.pop();
      this.reclass();
      this.listeners();
      this.setBackground();
    }

    previous = () => {
        this.items.push(this.items[0]);
        this.items.shift();
        this.reclass();
        this.listeners();
        this.setBackground();
    }
  }
  
  const slider = new Slider(document.querySelector('#slider'));