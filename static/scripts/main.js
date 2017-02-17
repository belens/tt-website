

var modal = new tingle.modal({
  onOpen: function () {},
  onClose: function () {
    if($('.intro video:visible').length > 0) {
      $('.intro .video').fadeIn()
    }
    $('.js-intro-hidden').fadeIn()
  },
  beforeClose: function () {
    return true; // close the modal
    return false; // nothing happens
  }
});

function beforeOpenModal () {
  $('.js-intro-hidden').fadeOut()
  if($('.intro video:visible').length > 0) {
    $('.intro .video').fadeOut()
  }
}

var text = document.getElementById('info-text').innerHTML
modal.setContent(text);

function toggleModal() {
  if($('body').hasClass('tingle-enabled')) {
    modal.close()
  } else {
    beforeOpenModal()
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

window.bgs = {
  'deathby': {
    src: '/images/deathby.png',
    styleClass: 'deathby',
    caption: 'author is ..'
  }, 
  'bag': {
    src: '/images/TTbag_fashionbackdrop_md.jpg',
    styleClass: 'bag'
  }, 
  'buggy': {
    src: '/images/buggy.jpg',
    styleClass: 'buggy'
  }, 
  'timcoppens': {
    src: '/images/timcoppens.jpg',
    styleClass: 'timcoppens'
  }, 
  'myar': {
    src: '',
    styleClass: 'myar'
  }, 
  'bag2': {
    src: '/images/TTbag_fashionbackdrop2_md.jpg'
  }, 
  'tom_tosseyn_weekenderbag': {
    src: '/images/TOM_Tosseyn_weekenderbag.jpg'
  },
  'ozark_henry_harmony': {
    src: '/images/Ozark_Henry_HARMONY.jpg'
  },
  'atower_screenprint': {
    src: '/images/ATOWER_SCREENPRINT.jpg'
  },
  'tom_tosseyn_foulard': {
    src: '/images/Tom_Tosseyn_foulard.jpg'
  },
  'raf_simons_blanket': {
    src: '/images/RAF_SIMONS_BLANKET.jpg'
  },
  'raf_simons_snakes': {
    src: '/images/RAF_SIMONS_SNAKES.jpg'
  },
  'mcq_totebag2': {
    src: '/images/McQ_totebag2.jpg'
  },
  'frans_masereel_totebags': {
    src: '/images/Frans_Masereel_totebags.jpg'
  },
  'timcoppens_parrot': {
    src: '/images/TimCoppens_parrot.jpg'
  },
  'afvandevorst': {
    src: '/images/AFVANDEVORST.jpg'
  },
  'mcq_swallow01': {
    src: '/images/McQ_swallow01.jpg'
  },
  'timcoppens_spray': {
    src: '/images/TimCoppens_spray.jpg'
  },
  'tomtosseyn_foulard_foto': {
    src: '/images/TomTOsseyn_foulard_foto.jpg'
  },
  'fredperry': {
    src: '/images/FredPerry.jpg'
  },
  'y3_shoe': {
    src: '/images/Y3_shoe.jpg'
  },
  'basito': {
    src: '/images/BASITO.jpg'
  },
  'rafsimons_ss12': {
    src: '/images/RafSimons_SS12.jpg'
  }
}

var backgrounds = Object.keys(bgs)

var index = Math.floor(Math.random() * (backgrounds.length))

$(document).ready(function () {
  selectBg(index)
  $('.intro').click(function () {
    selectBg(getNextArrIndex(index, backgrounds))
  })
})

function selectBg(i) {
  var bg = backgrounds[i]
  var bgObj = bgs[bg]
  console.log(bgObj, i)
  
  var prevBg = backgrounds[getPrevArrIndex(i, backgrounds)]
  
  $('.intro')
    .css('background-image', 'url(\'' + bgObj.src + '\')')
    .addClass(bgObj.styleClass)
    .removeClass(prevBg)
    .find('.caption')
      // .toggle(!!bgObj.caption)
      .html(bgObj.caption || 'placeholder')

  if($('.intro video:visible').length > 0 && !Modernizr.touchevents) {
    $('.intro video')[0].muted = false
  } else {
    $('.intro video:hidden')[0].muted = true
  }

  index = i
}

function getNextArrIndex(i, arr) {
  return arr[i + 1] && i + 1 || 0
}

function getPrevArrIndex (i, arr) {
  return i - 1 < 0 ? arr.length - 1 : i - 1
}
