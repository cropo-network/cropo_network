/**
* Template Name: OnePage
* Updated: Mar 10 2023 with Bootstrap v5.2.3
* Template URL: https://bootstrapmade.com/onepage-multipurpose-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
// import "../vendor/aos/aos.cjs"
// import {Swiper,swiper} from "../vendor/swiper/swiper-bundle.min.js";
// import Swiper from 'swiper';
import aos from "../vendor/aos/aos.cjs";

export function mainjs() {
  "use strict";
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
      lazyloadGif('.gif1', 'assets/img/gifServices/3dcloud.gif')
      lazyloadGif('.gif2', 'assets/img/gifServices/Audio Collection.gif')
      lazyloadGif('.gif3', 'assets/img/gifServices/segmentation.gif')
      lazyloadGif('.gif4', 'assets/img/gifServices/Video Label.gif')
      lazyloadGif('.gif5', 'assets/img/gifServices/Data Collection Text.gif')
    });
  }

  /**
   * Initiate glightbox 
   */
  // const glightbox = GLightbox({
  //   selector: '.glightbox'
  // });

  /**
   * Testimonials slider
   */
  const roadmapswiper = new Swiper('.roadmap-slider', {
    speed: 600,
    loop: false,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    slidesPerView: 3.5,
    // centeredSlides: true,
    // slidesPerGroup: 3,
    slidesOffsetBefore:100,
    // slidesOffsetAfter:100,
    pagination: {
      el: '.roadmap-pagination',
      clickable: true,
      // renderBullet: function (index, className) {
      //   return '<span class="' + className + '">' +'Q' + (index + 1) + "</span>";
      // }
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        var bullets = '';
        let texts = ['Q3','Q4','Q1','Q2','Q3','Q4']
        for (var i = 1; i <= 6; i++) {
          var activeClass = (i === current) ? 'swiper-pagination-bullet-active' : '';
          bullets += '<span class="swiper-pagination-bullet paginationnav'+i+' ' + activeClass + '">' + texts[i-1] + '</span>';
        }
        return bullets;
      }
    },
    navigation: {
      nextEl: '.roadmap-next',
      prevEl: '.roadmap-prev',
    },
    on: {
      slideChange: function () {
        var activeIndex = this.activeIndex;
        var slides = this.slides;
        // check the year
        if (activeIndex<=1) {
          select('.time2023').classList.add('time-active');
          select('.time2024').classList.remove('time-active');
        } else {
          select('.time2024').classList.add('time-active');
          select('.time2023').classList.remove('time-active');
        }
        for (var i = 0; i < slides.length; i++) {
          if (i === activeIndex) {
            slides[i].classList.add('active');
          } else {
            slides[i].classList.remove('active');
          }
        }
        if (activeIndex == 5) {
          autoplay.stop();
        }
      }
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20
      }, 
      768: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3.5,
        slidesPerGroup: 1,
        spaceBetween: 20
      }
    }
  });

  on('click', '.paginationnav5', function(e) {
    console.log(5)
    roadmapswiper.slideTo(5)
  }, true)


  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          aos.refresh()
        });
      }, true);
    }

  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  // new PureCounter();
  



}



function lazyloadGif(selector, gifUrl) {
  var ele = document.querySelector(selector);
      var imgUrl = gifUrl;
      var imgObject = new Image();

      imgObject.src = imgUrl;
      imgObject.onload = function(){
          ele.src = imgUrl;
          ele.setAttribute('class', 'gif complete');
      }
}