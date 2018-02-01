/**
  *
  * Main functions for Range Sliders/Text Inputs
  *
**/
$('.sliderRange').each( function() {
    var _this = $(this);
    _this.rangeslider({
        polyfill: false,
        onSlide: function(position, value) {
        }
    });
});

// Update sliders on text input change or keyup
$('.sliderText').each( function() {
    $(this).on('change keyup', function() {
        $(  'input.sliderRange[data-index="'+$(this).data('index')+'"]').val($(this).val()).change();
    });
});

// Update all text input boxes
function updateAll(arrIndex) {
    $('.sliderText').each( function() {
        var newValue = jsonData[arrIndex]["slider"+$(this).data('index')];
        $('input.sliderText[data-index="'+$(this).data('index')+'"]').val(newValue);
});
    // Keyup called to force slider update
    $('.sliderText').keyup();
}
updateAll(4);        

/**
  *
  *  Scroll-to and reveal form on button click
  *
**/
$('.reveal-form').click(function() {
    $('#form').removeClass('hidden');
    $('html, body').animate({
        scrollTop: $('#form').offset().top
    }, 200);
});



/*
* Fix sidebar at some point and remove
* fixed position at content bottom

$(window).scroll(function () {
  var headerHeight     = $('#header').innerHeight(),
      heroHeight       = $('#hero').innerHeight(),
      contentHeight    = $('#main-content').innerHeight(),
      sidebarHeight    = $('#sidebar').height(),
      sidebarBottomPos = contentHeight - sidebarHeight, 
      trigger          = $(window).scrollTop() - headerHeight;

        if ($(window).scrollTop() >= headerHeight + heroHeight) {
            $('#sidebar .stick').addClass('fixed');
        } else {
            $('#sidebar .stick').removeClass('fixed');
        }

        if (trigger >= sidebarBottomPos) {
            $('#sidebar .stick').addClass('bottom');
        } else {
            $('#sidebar .stick').removeClass('bottom');
        }
});
*/