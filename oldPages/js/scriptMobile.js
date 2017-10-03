// JavaScript Document

    window.onload = function() {
            $("nav div").on("click", function () {
                $('body > div').animate({scrollTop: this.id * window.innerHeight}, 500);
            });
            
            $('body > div').on("scroll", function() {
                $("body > nav > figure").css("left", 
                    Math.round($("body > div").scrollTop() / window.innerHeight) * (window.innerWidth / 5) + "px"
                )
        });
    }