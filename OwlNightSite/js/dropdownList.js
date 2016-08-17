$('.dropdown-inside').mouseenter(function(){
    //$('#qwe').css('background-color','white');
    $('#qwe').removeClass("lin:link, lin:visited");
    $('#qwe').addClass("qwe");
});

$('.dropdown-inside').mouseleave(function(){
    //$('#qwe').css('background-color','white');
    $('#qwe').removeClass("qwe");
    $('#qwe').addClass("lin:link, lin:visited");
});