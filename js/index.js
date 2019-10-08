function clickWork() {
    document.getElementsByClassName("content-slider")[0].style.right = "0vw";
    document.getElementsByClassName("content-slider")[0].style.height = "auto";
    document.getElementsByClassName("box1")[0].style.backgroundColor = 'white';
    document.getElementsByClassName("box2")[0].style.backgroundColor = '#F7F7F7';
    document.getElementById("work").style.color = 'black';
    document.getElementById("about").style.color = 'lightgray';
    document.getElementById("connect").style.color = 'lightgray';
}

function clickAbout() {
    document.getElementsByClassName("content-slider")[0].style.right = `90vw`;
    // var x = window.matchMedia("(max-width: 700px)")
    // myFunction(x) // Call listener function at run time
    // x.addListener(myFunction) // Attach listener function on state changes

    document.getElementsByClassName("content-slider")[0].style.height = `158vh`;
    document.getElementsByClassName("box1")[0].style.backgroundColor = '#F7F7F7';
    document.getElementsByClassName("box2")[0].style.backgroundColor = 'white';
    document.getElementsByClassName("box3")[0].style.backgroundColor = '#F7F7F7';
    document.getElementById("about").style.color = 'black';
    document.getElementById("work").style.color = 'lightgray';
    document.getElementById("connect").style.color = 'lightgray';
}

function clickConnect() {
    document.getElementsByClassName("content-slider")[0].style.right = `180vw`;
    document.getElementsByClassName("content-slider")[0].style.height = `100vh`;
    document.getElementsByClassName("box3")[0].style.backgroundColor = 'white';
    document.getElementsByClassName("box2")[0].style.backgroundColor = '#F7F7F7';
    document.getElementById("about").style.color = 'lightgray';
    document.getElementById("work").style.color = 'lightgray';
    document.getElementById("connect").style.color = 'black';
}


// $(document).ready(function () {
//     $("#work").click(function () {
//         $(".whcontainer1").css("display", "none");
//         $(".whcontainer2").css("display", "none");
//         $(".whcontainer1").fadeIn(1500);
//     });

//     $("#about").click(function () {
//         // console.log("show fade in")
//         $(".quotecontainer").css("display", "none");
//         $(".aboutcontainer").css("display", "none");
//         $(".funcontainer").css("display", "none");
//         $(".quotecontainer").fadeIn(1500);
//     });

//     $("#connect").click(function () {
//         // console.log("show fade in")
//         $(".social").css("display", "none");
//         $(".social").fadeIn(1500);
//     });

//     $.fn.isInViewport = function () {
//         var elementTop = $(this).offset().top;
//         var elementBottom = elementTop + $(this).outerHeight();

//         var viewportTop = $(window).scrollTop();
//         var viewportBottom = viewportTop + $(window).height();

//         return elementBottom > viewportTop && elementTop < viewportBottom;
//     };

//     $(window).scroll(function () {
//         $('.fadein').each(function () {
//             if ($(this).isInViewport()) {
//                 $(this).fadeIn(1000);
//             }
//         });
//     });
// });


// case study fade in on scroll

$(function () {  // $(document).ready shorthand
    $('.show').fadeIn('slow');
});

$(document).ready(function () {

    /* Every time the window is scrolled ... */
    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.hideme').each(function (i) {

            var top_of_object = $(this).position().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it in */
            if (bottom_of_window > top_of_object) {
                $(this).animate({ 'opacity': '1' }, 1000);
            }
        });
    });
});


// lightbox

function openModal() {
    document.getElementById("myModal").style.display = "block";
    document.getElementsByClassName("returnwork")[0].style.display = "none";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

$(document).ready(function () {
    $("window").click(function () {
        $("div").animate({ up: '250px' });
    });
});