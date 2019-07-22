$(function() {


    /* Fixed Header */
    let header = $("#menu");
    let about = $("#about");
    let aboutH = about.innerHeight();
    let scrollPos = $(window).scrollTop();

$(window).on("scroll load", function() {        
        scrollPos = $(this).scrollTop();
        

        if( scrollPos > aboutH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }    
    });   

    });

    
