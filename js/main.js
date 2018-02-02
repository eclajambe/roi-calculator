
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

            // Find closest input number, add .sliding class
            _this.parent().next('.value-toggle').addClass('sliding');

        },
        onSlideEnd: function() {

            // Find closest input number, add .sliding class
            _this.parent().next('.value-toggle').removeClass('sliding');

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

    // Add commas to thousands
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // Generate random results for demo purposes
    var final_score = numberWithCommas(20000 + total*175);

    $('#final_score').text("$" + final_score); 
    // Generate random results for demo purposes
    var final_efficiency = (3.5 + total / 7).toFixed(1);
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