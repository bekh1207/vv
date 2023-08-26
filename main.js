$(window).scroll(function() {
    if(document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
       $('.earth-container').css('transform', 'translateY(-100vh)');
       $('.earth-container').css('transition', 'all .7s ease');
    }
    else {
        $('.earth-container').css('transform', 'translateY(0)')
    }
});

$(window).scroll(function() {
    if(document.documentElement.scrollTop > 30 || document.body.scrollTop > 30) {
       $('.container').css('opacity', '1');
       $('.container').css('transition', 'all .7s ease');
       $('.box1').css('transform', 'translateY(0px)');
       $('.box1').css('transition', 'all 1s ease');
       $('.box1').css('opacity', '1')
       $('.box2').css('transform', 'scale(1)');
       $('.box2').css('transition', 'all 1s ease');
       $('.box2').css('opacity', '1')
       $('.box3').css('transform', 'translateY(0px)');
       $('.box3').css('transition', 'all 1s ease');
       $('.box3').css('opacity', '1');
       $('h1').css('transform', 'scale(1)');
       $('h1').css('opacity', '1');
       $('h1').css('transition', 'all .7s ease');
       $('p').css('transform', 'scale(1)');
       $('p').css('opacity', '1');
       $('p').css('transition', 'all .7s ease');
       $('.img_1').css('transform', 'scale(1)')
       $('.img_1').css('opacity', '1')
       $('.img_1').css('transition', 'all 1s ease')
    }
    else {
        $('.container').css('opacity', '0');
        $('.container').css('transition', 'all .7s ease');
        $('.box1').css('transform', 'translateY(-100px)');
       $('.box1').css('transition', 'all 1s ease');
       $('.box1').css('opacity', '0')
       $('.box2').css('transform', 'scale(0.7)');
       $('.box2').css('transition', 'all 1s ease');
       $('.box2').css('opacity', '1')
       $('.box3').css('transform', 'translateY(100px)');
       $('.box3').css('transition', 'all 1s ease');
       $('.box3').css('opacity', '0');
       $('h1').css('transform', 'scale(0)');
       $('h1').css('opacity', '0');
       $('h1').css('transition', 'all .7s ease');
       $('p').css('transform', 'scale(0.7)');
       $('p').css('opacity', '0');
       $('p').css('transition', 'all .7s ease');
       $('.img_1').css('transform', 'scale(0.6)')
       $('.img_1').css('opacity', '0')
       $('.img_1').css('transition', 'all .9s ease')
    }
})



$(window).scroll(function() {
    if(document.documentElement.scrollTop > 450 || document.body.scrollTop > 450){
        $('.container2').css('opacity', '1')
        $('.container2').css('transition', 'all .7s ease');
        $('.card2').css('transform', 'scale(1)')
        $('.card2').css('transition', 'all 1s ease');
        $('.card2').css('opacity', '1');
        $('.card1').css('transform', 'rotate(0deg)')
        $('.card1').css('transition', 'all 1s ease');
        $('.card1').css('opacity', '1');
        $('.card3').css('transform', 'rotate(0deg)')
        $('.card3').css('transition', 'all 1s ease');
        $('.card3').css('opacity', '1');
        $('.informatsiya').css('transform', 'rotate(0deg)')
        $('.informatsiya').css('transition', 'all 1s ease');

    }
    else {
        $('.container2').css('opacity', '0')
        $('.container2').css('transition', 'all .7s ease');
        $('.card2').css('transform', 'scale(1.5)')
        $('.card2').css('transition', 'all 1s ease');
        $('.card2').css('opacity', '0');
        $('.card1').css('transform', 'rotate(160deg)')
        $('.card1').css('transition', 'all 1s ease');
        $('.card1').css('opacity', '0');
        $('.card3').css('transform', 'rotate(-160deg)')
        $('.card3').css('transition', 'all 1s ease');
        $('.card3').css('opacity', '0');
        $('.informatsiya').css('transform', 'rotate(160deg)')
        $('.informatsiya').css('transition', 'all 1s ease');
    }

})

var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')

btn1.addEventListener('click', function() {
    $('.informatsiya').css('display', 'block');
    $('.card1').css('display', 'none');
    $('.card2').css('display', 'none');
    $('.card3').css('margin-left', '300px')
    $('#btn1').css('display', 'none')
    $('#btn2').css('display', 'block')
    gsap.from('.informatsiya', {
        x: 30,
        duraction: 0.7,
        delay: 0.5,
    })
})
btn2.addEventListener('click', function() {
    $('.informatsiya').css('display', 'none');
    $('.card1').css('display', 'flex');
    $('.card2').css('display', 'flex');
    $('.card3').css('margin-left', '0px')
    $('#btn1').css('display', 'block')
    $('#btn2').css('display', 'none');
   
})