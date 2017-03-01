var modal = new tingle.modal(),
  startIndex = Math.floor(Math.random() * (Object.keys(bgs).length)),
  index = startIndex,
  $slick;

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

})

function initSlick() {
  $slick
    .on('init', function (event, slick) {
      var slide = $(slick.$slides[slick.currentSlide])
      var caption = slide.find('.js-bgs-caption').html() || ''
      $('body > .js-bgs-caption').html(caption)

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
    $('body > .js-bgs-caption').html(caption)

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
    updateDebugInputs()
  })
}

function addBackgroundSlides() {
  for (var i = 0; i < Object.keys(bgs).length; i++) {
    var bgObj = bgs[Object.keys(bgs)[i]]
    var $slide = $('<div class="intro-slide"></div>')
    $slide
      .addClass(bgObj.styleClass)
      .css('background-image', 'url(\'' + bgObj.src + '\')')
    if (bgObj.caption) {
      $slide.append('<span class="caption js-bgs-caption">' + bgObj.caption + '</span>')
    }
    $slick.append($slide)
  }
}

function addWelcomeSlide() {
  var keys = Object.keys(welcomeBgs)
  var welcomeBgIndex = Math.floor(Math.random() * (keys.length))
  var bg = welcomeBgs[keys[welcomeBgIndex]]

  var $slide = $('<div class="intro-slide"></div>')
    .css(bg.style)
    .css('background-image', 'url(\'' + bg.src + '\')')
  $($slick.children()[startIndex]).before($slide)
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