

function clickWork() {
    document.getElementsByClassName("content-slider")[0].style.right = "0vw";
    showWorkHome();
    document.getElementsByClassName("box1")[0].style.backgroundColor = 'white';
    document.getElementsByClassName("box2")[0].style.backgroundColor = '#fef8f5';
    document.getElementById("work").style.color = 'black';
    document.getElementById("about").style.color = 'lightgray';
    document.getElementById("connect").style.color = 'lightgray';
}

function clickArrow() {
    document.getElementsByClassName("header")[0].style.display = "block";
    document.getElementsByClassName("workhome")[0].style.display = "block";
    document.getElementsByClassName("returnwork")[0].style.display = "none";
}

function showWorkZoo() {
    document.getElementsByClassName("workhome")[0].style.display = "none";
    document.getElementsByClassName("workzoo")[0].style.display = "block";
    document.getElementsByClassName("header")[0].style.display = "none";
    document.getElementsByClassName("returnwork")[0].style.display = "block";
}

function showWorkHome() {
    document.getElementsByClassName("workhome")[0].style.display = "block";
    document.getElementsByClassName("workzoo")[0].style.display = "none";
    document.getElementsByClassName("returnwork")[0].style.display = "none";
}

function clickAbout() {
    document.getElementsByClassName("content-slider")[0].style.right = `90vw`;
    document.getElementsByClassName("box1")[0].style.backgroundColor = '#fef8f5';
    document.getElementsByClassName("box2")[0].style.backgroundColor = 'white';
    document.getElementsByClassName("box3")[0].style.backgroundColor = '#fef8f5';
    document.getElementById("about").style.color = 'black';
    document.getElementById("work").style.color = 'lightgray';
    document.getElementById("connect").style.color = 'lightgray';
}

function clickConnect() {
    document.getElementsByClassName("content-slider")[0].style.right = `180vw`;
    document.getElementsByClassName("box3")[0].style.backgroundColor = 'white';
    document.getElementsByClassName("box2")[0].style.backgroundColor = '#fef8f5';
    document.getElementById("about").style.color = 'lightgray';
    document.getElementById("work").style.color = 'lightgray';
    document.getElementById("connect").style.color = 'black';
}

$(document).ready(function () {

    /* Every time the window is scrolled ... */
    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.fadein').each(function (i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 00);

            }

        });

    });

});

$(document).ready(function () {
    $("#work").click(function () {
        $(".home-container1").css("display", "none");
        $(".home-container2").css("display", "none");
        $(".home-container1").fadeIn(2000);
    });

    $(".sbzpreview").click(function () {
        $(".sbz1").css("display", "none");
        $(".sbz2").css("display", "none");
        $(".sbz3").css("display", "none");
        $(".sbz4").css("display", "none");
        $(".sbz5").css("display", "none");
        $(".sbz6").css("display", "none");
        $(".sbz7").css("display", "none");
        $(".sbz8").css("display", "none");
        $(".sbz9").css("display", "none");
        $(".sbz10").css("display", "none");
        $(".sbz11").css("display", "none");
        $(".sbz1").fadeIn(2000);
    });

    $("#about").click(function () {
        // console.log("show fade in")
        $(".quotecontainer").css("display", "none");
        $(".aboutcontainer").css("display", "none");
        $(".funcontainer").css("display", "none");
        $(".quotecontainer").fadeIn(2000);

    });

    $("#connect").click(function () {
        // console.log("show fade in")
        $(".social").css("display", "none");
        $(".social").fadeIn(2000);
    });

    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).scroll(function () {
        $('.fadein').each(function () {
            if ($(this).isInViewport()) {
                $(this).fadeIn(2000);
            }
        });
    });

    $(".home-container1").css("display", "none");
    $(".home-container2").css("display", "none");
    $(".home-container1").fadeIn(2000);
});


function openModal() {
    document.getElementById("myModal").style.display = "block";
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
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}