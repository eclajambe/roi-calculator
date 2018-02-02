
// Stores all the sliders' values.
// Key-value pairs
slide_data = {};

// And stores total.
total = 12345

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
            var slide_id = strange_substring(_this[0].id);

            if (slide_data[slide_id] != value) {
                propagate_out(slide_id, value, 'slider');
            }
        }
    });
});

// [EVAN]
// Validates and sanitizes the data at the same time.
function strange_substring(string) {
    if (string == 'slider-') {
        console.log('ASSIGN THIS AN ID!');
    }
    return string.substring(7);
}

// [EVAN]
// We track who called this, so we don't cause an endless loop.
// (Probably a better way to do it. And probably redundant.)
function propagate_out(slide_id, value, ignore) {
    console.log('propagate');
    slide_data[slide_id] = value;

    if (ignore != 'number') {
        $('#number-'+slide_id).val(value);
    }

    if (ignore != 'slider') {
        $('#slider-'+slide_id).val(value).change();
    }

    total = 0;
    for (var i in slide_data) {
        total += slide_data[i];
    }

    // Something random.
    var final_score = 20000 + total*175;
    $('#final_score').text("$" + final_score); 

    var final_efficiency = (3.5 + total / 7).toFixed(2);
    $('#final_efficiency').text(final_efficiency + "%"); 
}


// Update sliders on text input change or keyup
$('.js-amount-input').each( function() {
    $(this).on('change keyup', function() {
        var slide_id = strange_substring($(this)[0].id)
        var old_number = slide_data[slide_id];
        var new_number = $(this)[0].value;
        console.log("From "+old_number+" to "+new_number);

        if (slide_data[slide_id] != new_number) {
            propagate_out(slide_id, new_number, 'number');
        }
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