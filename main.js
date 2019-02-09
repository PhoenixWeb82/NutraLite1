/* JavaScript Jquery*/
$('.jumbotron-text, .btn').click(function(){
    alert('Eat Well and Live Well', function(){
        $('p').hide();
    });
});

$('.card').mouseenter(function(){
    $(this).hide();
});

$('.card').mouseleave(function(){
    $(this).show();
});

$('.info-text').hover(function(){
    alert('Our Clients Say About US');
});




