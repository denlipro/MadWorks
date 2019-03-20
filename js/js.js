  jQuery(document).ready(function(){
    
    /* Открытие бокового меню */
    jQuery(".menu-button").click(function(){
        jQuery('html').toggleClass('menu-is-opened')
    });

    jQuery(".overlay .menu-container").click(function(e){
        e.stopPropagation();
    });

    jQuery(".overlay").click(function(){
        jQuery('html').removeClass('menu-is-opened');
    });

    jQuery(window).scroll (function () {
        if (jQuery(this).scrollTop () > 80) {
            jQuery('.ip-logo').addClass('logo-small');
        } else {
            jQuery('.ip-logo').removeClass('logo-small');
        }
    });

});

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

$(document).ready(function(){

    $(function (){
        $("#gotoppage").hide();

        $(window).scroll(function (){
            if ($(this).scrollTop() > 700){
                $("#gotoppage").fadeIn();
            } else{
                $("#gotoppage").fadeOut();
            }
        });

        $("#gotoppage").click(function (){
            $("body,html").animate({
                scrollTop:0
            }, 800);
            return false;
        });
    });
});

$(document).ready(function(){
  $(".tooltip-options").tooltip({
    delay: { show: 50, hide: 100 }
  });
});