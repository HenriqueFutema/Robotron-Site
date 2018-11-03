$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').removeClass('navbar-inverse');
    } else{
        $('nav').addClass('navbar-inverse');
    }

});

var $doc =$('html, body');
var menut =$("#menu").innerHeight();
$('nav a').click(function(){
$doc.animate({
    scrollTop:$($.attr(this,'href')).offset().top - menut},500);
 return false;
});
