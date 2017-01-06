

$(document).ready(function(){
    // this is for smooth scrolling between ids
    $("a").on('click', function(evnt){
        if(this.hash !== "") {
            evnt.preventDefault()
            var hash = this.hash
            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function(){
                window.location.hash = hash
            })
        }
    })
    // this is to make navbar fixed to top.
    $(window).scroll(function(){
        var lockPoint = $('.jumbotron').height();
        if( $(window).scrollTop() > lockPoint ) {
            $('.navbar-default').addClass('navbar-fixed-top fadded')
            $('#backToTop').removeClass('hideMe')
        }else{
            $('.navbar-default').removeClass('navbar-fixed-top fadded')
            $('#backToTop').addClass('hideMe')
        }
    })
})