// for back to Top
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>300){
            $('#backtoTop').fadeIn();
        }else {
            $('#backtoTop').fadeOut();
        }
    });


// for backtop
    $('#backtoTop').click(function(){
        $('body, html').animate({scrollTop:0},1000);
    })

});