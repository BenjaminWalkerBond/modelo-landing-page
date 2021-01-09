$(document).ready( function() {
    

    let topOfOthDiv = $("#top").offset().top;

    $("#button_info").click(function() {
        document.getElementById("info").scrollIntoView();
    });
    
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $(".reveal-scroll").css('animation','fadeIn ease 0.7s');//hide your div initially
            $(".reveal-scroll").css('opacity','1.0');//hide your div initially
        }
        
    });


    $(document).on("scroll", function(){

        if ($(document).scrollTop() > 80){
            $(".primary-nav").addClass("shrink");
        } else {
            $(".primary-nav").removeClass("shrink");
        }

  });
});