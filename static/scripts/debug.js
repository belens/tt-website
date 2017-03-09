$(function () {
  initDebugBtn()
  var props = [
    'background-color',
    'background-size',
    'background-position'
  ]

  var changes = {}

  $('.js-slick-active-css-change').on('change', function () {
    var $el = $(this)
    var prop = $el.data('prop')
    var val = $el.val()
    $('.slick-current').css(prop, val)

    save()
  })

  function save(params) {
    var index = $('.slick-current').index()

    var obj = {}
    props.forEach(function (prop) {
      obj[prop] = $('.slick-current').css(prop)
    }, this);
    changes[index] = obj
    console.log(changes)
    $('.js-email').attr('href', 'mailto:sander@novemberfive.co?subject=saving&body=' + JSON.stringify(changes))
  }

  $('.js-email').click(function (e) {

    e.stopPropagation()
  })

  function readURL(input) {

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        console.log('done')
        $('.slick-current').css('background-image', 'url(' + e.target.result + ')');
      }

      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#imgInp").change(function () {
    readURL(this);
  });

  window.updateDebugInputs = function () {

    props.forEach(function (prop) {
      var val = $('.slick-current').css(prop)
      $('.js-slick-active-css-change[data-prop="' + prop + '"]').val(val)
    }, this);
  }

})

function initDebugBtn() {
  $('.js-toggle-debug').click(function () {
    $('.debug').toggle()
  })
}