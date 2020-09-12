$(document).ready(function() {
    
    
                // for sticky navigation
    $('.js--section-features').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }}, {
            offset: '60px;'
    });
    
            // for auto-scrolling from button clicks
    
        // scrolls to top of .section-plans in 1000ms
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);     
    });
    
    // scrolls to top of .section-features in 1000ms
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);     
    });

    // navigation scroll
    // below script is 'Smooth Scrolling' from css-tricks, no edits
    // in order to work, all links in html file need to have something descriptive after '#' and the corresponding section elements need to have id attributes that match the descriptions after '#'
    
    // Select all links with hashes
    $('a[href*="#"]')
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
                }, 1000, function() {
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
    
});

//    var waypoints = $('#handler-first').waypoint(function(direction) {
//        notify(this.element.id + ' hit 25% from top of window') 
//    }, {
//        offset: '25%'
//    })






//jQuery.noConflict()(function ($){
//    $(document).ready(function() {
//        $('h1').click(function(){
//            $(this).css('background-color', '#ff0000');
//        })
//    }) 
//})

//$(document).ready(function() {
//    $('h1').click(function(){        
//        $(this).hide();
//    })
//}) 



