var modal = new tingle.modal(),
  startIndex = Math.floor(Math.random() * (Object.keys(bgs).length)),
  // index = 0,
  index = startIndex,
  $slick,
  didLogoFadeIn = false;

function isModalOpen() {
  return $('body').hasClass('tingle-enabled')
}

var text = document.getElementById('info-text').innerHTML
modal.setContent(text)

function toggleModal() {
  if (isModalOpen()) {
    modal.close()
  } else {
    modal.open()
  }
}

$(function () {
  $('.js-info-open').on('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    toggleModal()

  })
})

$(document).ready(function () {
  $slick = $('.intro-slick')
  addBackgroundSlides()
  addWelcomeSlide()
  initSlick()
  // initWelcomeText()
  initLogoPage()

})

function initSlick() {
  $slick
    .on('init', function (event, slick) {
      var slide = $(slick.$slides[slick.currentSlide])
      var caption = slide.find('.js-bgs-caption').html() || ''
      $('body > .js-bgs-caption').toggle(!!caption).html(caption)

      if (slide.find('video').length > 0) {
        slide.find('video')[0].play()
        slide.find('video')[0].muted = false
      }
    })
    .slick({
      lazyLoad: 'progressive',
      initialSlide: index,
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      fade: true,
      cssEase: 'ease'
    })
  $slick.click(function () {
    $slick.slick('slickNext')
  })

  $slick.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var slide = $(slick.$slides[slick.currentSlide])
    var nextSlide = $(slick.$slides[nextSlide])
    var caption = nextSlide.find('.js-bgs-caption').html() || ''
    $('body > .js-bgs-caption').toggle(!!caption).html(caption)

    if (slide.find('video').length > 0) {
      slide.find('video')[0].muted = true
    }
  })

  $slick.on('afterChange', function (event, slick, currentSlide) {
    var slide = $(slick.$slides[slick.currentSlide])
    if (slide.find('video').length > 0) {
      slide.find('video')[0].play()
      slide.find('video')[0].muted = false
    }
    if (slide.hasClass('intro-slide--logos') && !didLogoFadeIn) {
      setTimeout(function () {
        showLogos()
      }, 400);

      didLogoFadeIn = true
    }
    updateDebugInputs()
  })
}

function showLogos(params) {
  var viewportLogos = []
  var hiddenLogos = []
  $(".logos path, .logos polygon").each(function (i, el) {
    var dims = el.getBoundingClientRect()
    if (dims.top < $(window).height()) {
      viewportLogos.push(el)
    } else {
      hiddenLogos.push(el)
    }
  })
  var tl = new TimelineMax({})
  viewportLogos = $(".logos path, .logos polygon")
  // console.log(viewportLogos[2], viewportLogos[2].getBoundingClientRect())
  var keys = []
  $.each(viewportLogos, function (i) {
    keys.push(i)
  }, this);

  console.log(keys)

  var arr = keys.sort(function (a, b) {
    var ela = viewportLogos[a].getBoundingClientRect()
    var elb = viewportLogos[b].getBoundingClientRect()
    if (ela && elb) {
      return Math.round(ela.top) - Math.round(elb.top)
    }
  })

  var sortedViewportLogos = []
  arr.forEach(function (i) {
    var dimensions = viewportLogos[i].getBoundingClientRect()
    sortedViewportLogos.push(viewportLogos[i])
  }, this);

  tl.staggerFromTo(sortedViewportLogos, 0.5, {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    ease: Back.ease
  }, .1)

  // // Controller
  // var controller = new ScrollMagic.Controller();

  // var tween = TweenMax.fromTo(hiddenLogos, 1,
	// 							{autoAlpha: 0},
	// 							{autoAlpha: 1}
	// 						);
  // // 2. Curtain Scene
  // new ScrollMagic.Scene({
  //     triggerElement: "body",
  //     duration: 300

  //   })
  //   .setTween(tween)
  //   .addTo(controller);

}

function addBackgroundSlides() {
  shuffle(bgs)
  for (var i = 0; i < bgs.length; i++) {
    var bgObj = bgs[i]
    var $slide = $('<div class="intro-slide"></div>')
    $slide
      .css(bgObj.style)
      .css('background-image', 'url(\'' + bgObj.src + '\')')
    if (bgObj.caption) {
      $slide.append('<span class="caption js-bgs-caption">' + bgObj.caption + '</span>')
    }
    $slick.append($slide)
  }
}

function addWelcomeSlide() {
  var welcomeBgIndex = Math.floor(Math.random() * (welcomeBgs.length))
  var bg = welcomeBgs[welcomeBgIndex]

  var $slide = $('<div class="intro-slide"></div>')
    .css(bg.style)
    .css('background-image', 'url(\'' + bg.src + '\')')
  $($slick.children()[startIndex]).before($slide)
}

function initLogoPage() {
  var bgObj = {
    src: '/images/logoBACKGR.jpg',
    style: {
      'background-size': 'cover',
      'background-position': 'top left'
    }
  }
  $('.intro-slide--logos')
    .css(bgObj.style)
    .css('background-image', 'url(\'' + bgObj.src + '\')')

  var tl = new TimelineMax({})
  tl.set('.logos path, .logos polygon', {
    autoAlpha: 0
  })


}

function initWelcomeText() {
  setTimeout(function () {
    $('.intro-text').fadeIn()
  }, 1000)

  setTimeout(function () {
    $('.intro-text').fadeOut()
  }, 7500)

  // $slick.on('init', function () {
  //   $('.intro-text').click(function () {
  //     $slick.slick('slickNext')
  //   })
  // })
}