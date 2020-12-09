document.addEventListener('DOMContentLoaded', function () {
  console.log('Desde ./js/script.js')
})

gsap.registerPlugin(ScrollTrigger)

/* Constantes */

const videoHero = document.getElementById('video-hero'),
  sectionMain = document.getElementById('section-main'),
  h1SectionMain = document.querySelectorAll('#section-main h1'),
  sectionActions = document.getElementById('section-actions'),
  bgColors = document.getElementById('bg-colors')

/* Aparición del título */
gsap.fromTo(
  h1SectionMain,
  {
    opacity: 0,
  },
  {
    duration: 0.5,
    opacity: 1,
  }
)

setTimeout(() => {
  gsap.to(sectionMain, {
    duration: 2.5,
    backgroundColor: 'transparent',
  })
}, 1500)

gsap.to(bgColors, {
  scrollTrigger: {
    trigger: sectionMain,
    toggleActions: 'play reverse none none',
    start: '75% 65%',
    end: 'bottom bottom',
    endTrigger: sectionActions,
    scrub: true,
    //markers: true, // Solo para debugger
  },
  backgroundColor: 'white',
  duration: 1,
})

const acciones = document.getElementById('acciones')

var slider = tns({
  container: acciones,
  items: 1,
  slideBy: 1,
  autoplay: true,
  center: true,
  nav: false,
  mouseDrag: true,
  fixedWidth: 320,
  speed: 400,
  autoplayButtonOutput: false,
  controlsContainer: '#acciones-controls',
  gutter: 16,
  responsive: {
    640: {
      items: 2,
      gutter: 20,
      fixedWidth: false,
    },

    768: {
      items: 3,
      fixedWidth: false,
    },
  },
})

function Navs() {
  console.log('Soy para los Menús')
}

Navs()

$(document).ready(function () {
  //general classes
  var active = 'wpb-current',
    wrapper = '.wpb-tab-content',
    heading = 'wpb-heading'

  // code for creating accodion heading
  $('<h2></h2>', {
    class: heading + ' wpb-destophide',
  }).insertBefore(wrapper)
  // code for creating accodion panel
  $('.wpb-tabs-menu a').each(function () {
    var tab = $(this).attr('href')
    $(this)
      .clone()
      .appendTo($(tab).prev($('.' + heading)))
  })
  // code For tabs
  $('.wpb-tabs-menu a').click(function (event) {
    event.preventDefault()
    $(this).addClass(active)
    $(this).parent().siblings().children().removeClass(active)
    var tab = $(this).attr('href')
    $(wrapper).not(tab).css('display', 'none').removeClass('active')
    $(tab).fadeIn().addClass('active')

    $('.wpb-tabs-menu a').each(function () {
      var tab = $(this).attr('href')
      $(this)
        .clone()
        .appendTo($(tab).prev($('.' + heading)))
    })
    $('.' + heading + ' a')
      .prev()
      .remove()
  })

  // code for accodion function
  $(document).on('click', '.wpb-heading a', function (e) {
    e.preventDefault()
    if (!$(this).hasClass(active)) {
      $(this).addClass(active)
      $(this)
        .parent()
        .siblings('.' + heading)
        .children()
        .removeClass(active)
      $(this).parent().next().slideDown()
      $(this).parent().next().siblings(wrapper).slideUp()
    } else {
      $(this).removeClass(active)
      $(this).parent().next().slideUp()
    }
  })

  // code for back to desktopview
  if ($(window).width() >= 768) {
    $('.wpb-tabs-menu  a.wpb-current').each(function () {
      var tab = $(this).attr('href')
      $(tab).fadeIn()
      $(tab).siblings().hide()
    })
  }
})

$(window).on('resize', function () {
  // code for back to desktopview
  if ($(window).width() >= 768) {
    $('.wpb-tabs-menu  a.wpb-current').each(function () {
      var tab = $(this).attr('href')
      $(tab).fadeIn()
      $(tab).siblings().hide()
    })
  }
})


//# sourceMappingURL=app.js.map
