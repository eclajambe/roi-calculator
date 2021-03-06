
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

    // EVAN-06: this changes the number in the gray box.
    $('#extra-'+slide_id).text(value);

    total = 0;
    for (var i in slide_data) {
        total += slide_data[i];
    }

    // Add commas to thousands
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // Generate random results for demo purposes
    var reports_filed = numberWithCommas(total*4);
    $('#reports_filed').text(reports_filed); 
    // Generate random results for demo purposes
    var final_score = numberWithCommas(20000 + total*175);
    $('#final_score').text("$" + final_score); 
    // Generate random results for demo purposes
    var final_efficiency = (3.5 + total / 7).toFixed(1);
    $('#final_efficiency').text(final_efficiency + "%"); 
    // Generate random results for demo purposes
    var final_roi = numberWithCommas(284000 + total*175);
    $('#final_roi').text("$" + final_roi);  

}


// Update sliders on text input change or keyup
$('.value-number').each( function() {
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



// Artifically click a button:
// $('#employee-expense-distribution .category-title').click();
// Uses jQuery's default hide/show
$('#company-info .category-title').on(
    'click',
    function() {
        $('#reverseCollapseOne').toggle(400);
    }
)
$('#employee-expense-distribution .category-title').on(
    'click',
    function() {
        $('#reverseCollapseTwo').toggle(400);
    }
)
$('#losses-fraud-violations .category-title').on(
    'click',
    function() {
        $('#reverseCollapseThree').toggle(400);
    }
)
$('#time-effort .category-title').on(
    'click',
    function() {
        $('#reverseCollapseFour').toggle(400);
    }
)

if ( $('body').hasClass('disable-input') ) {
    $( '.category-title' ).each().css( 'display', 'none' );
}

/**
    Set Cookies!
**/
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

/**
    Create Tooltips
**/
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
