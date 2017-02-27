

var modal = new tingle.modal()

function isModalOpen() {
  return $('body').hasClass('tingle-enabled')
}

var text = document.getElementById('info-text').innerHTML
modal.setContent(text)

function toggleModal() {
  if(isModalOpen()) {
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

var backgrounds = Object.keys(bgs)

var index = Math.floor(Math.random() * (backgrounds.length))

$(document).ready(function () {

  setTimeout(function() {
    $('.intro-text').fadeIn()
  }, 1000)

  setTimeout(function() {
    $('.intro-text').fadeOut()
  }, 7500)
  var $slider = $('.intro-slick')
  for (var i = 0 ; i < Object.keys(bgs).length ; i++) {
    var bgObj = bgs[Object.keys(bgs)[i]]
    var $slide = $('<div class="intro-slide"></div>')
    $slide
      .addClass(bgObj.styleClass)
      .css('background-image', 'url(\'' + bgObj.src + '\')')
    if(bgObj.caption) {
      $slide.append('<span class="caption js-bgs-caption">' + bgObj.caption + '</span>')
    }
    $slider.append($slide)
  }

  $slider.on('init', function(event, slick){
    var slide = $(slick.$slides[slick.currentSlide])
    var caption = slide.find('.js-bgs-caption').html() || ''
    $('body > .js-bgs-caption').html(caption)

    if (slide.find('video').length > 0) {
      slide.find('video')[0].play()
      slide.find('video')[0].muted = false
    }
  })

  $slider.slick({
    lazyLoad: 'progressive',
    initialSlide: index,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'ease'
  })

  $slider.click(function () {
    $slider.slick('slickNext')
  })

  $('.intro-text').click(function () {
    $slider.slick('slickNext')
  })
  
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var slide = $(slick.$slides[slick.currentSlide])
    var nextSlide = $(slick.$slides[nextSlide])  
    var caption = nextSlide.find('.js-bgs-caption').html() || ''
    $('body > .js-bgs-caption').html(caption)

    if (slide.find('video').length > 0) {
      slide.find('video')[0].muted = true      
    }
  })

  $slider.on('afterChange', function(event, slick, currentSlide){
    var slide = $(slick.$slides[slick.currentSlide])
    if (slide.find('video').length > 0) {
      slide.find('video')[0].play()
      slide.find('video')[0].muted = false
    }

    updateDebugInputs()
  })
  
})



