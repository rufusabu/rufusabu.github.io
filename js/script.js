// Drop shadow for navigation
$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#header").addClass("active");
    }
    else {
        $("#header").removeClass("active");
    }
});

// Underline Contact on hover
$("#contact-link").hover(
    function() {
        $("#contact-link > span").addClass('black-underline')
    },
    function() {
        $("#contact-link > span").removeClass('black-underline')
    }
)

// Scroll to top of page
function scroll() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}