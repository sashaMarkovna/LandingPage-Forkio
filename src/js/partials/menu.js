$(document).ready(function(){

    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href');
        let top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
