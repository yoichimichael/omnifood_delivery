jQuery.noConflict()(function ($){
    
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky')
        }
    }, {
        offset: '60px;'
    })
//    var waypoints = $('#handler-first').waypoint(function(direction) {
//        notify(this.element.id + ' hit 25% from top of window') 
//    }, {
//        offset: '25%'
//    })
    
})





//jQuery.noConflict()(function ($){
//    $(document).ready(function() {
//        $('h1').click(function(){
//            $(this).css('background-color', '#ff0000');
//        })
//    }) 
//})

//
//$(document).ready(function() {
//    $('h1').click(function(){        
//        $(this).hide();
//    })
//}) 
//
//

