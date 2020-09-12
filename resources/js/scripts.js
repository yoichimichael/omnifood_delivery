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



