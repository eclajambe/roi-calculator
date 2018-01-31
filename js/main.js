/*    
    Rules for text input:
    
    - Allow ONLY numbers
    - Do not allow user to delete all numbers.
        - If user attempts to delete all numbers, value should revert to 'min' number allowed in range once
    - As a user interacts with number input, every change they make should reflect in the range slider

*/

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


/*
    Smooth Scroll to form
*/
// Select all links with hashes
$('a[href*="#"][class="ss"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 200, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });