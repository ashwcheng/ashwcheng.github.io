function clickWork() {
    document.getElementsByClassName("content-slider")[0].style.right = "0vw";
    showWorkHome();
    document.getElementsByClassName("box1")[0].style.backgroundColor = 'white';
    document.getElementsByClassName("box2")[0].style.backgroundColor = '#fef8f5';
}

function showWorkZoo() {
    document.getElementsByClassName("workhome")[0].style.display = "none";
    document.getElementsByClassName("workzoo")[0].style.display = "block";
}

function showWorkHome() {
    document.getElementsByClassName("workhome")[0].style.display = "block";
    document.getElementsByClassName("workzoo")[0].style.display = "none";
}

function clickAbout() {
    document.getElementsByClassName("content-slider")[0].style.right = `80vw`;
    document.getElementsByClassName("box1")[0].style.backgroundColor = '#fef8f5';
    document.getElementsByClassName("box2")[0].style.backgroundColor = 'white';
    document.getElementsByClassName("box3")[0].style.backgroundColor = '#fef8f5';
}

function clickConnect() {
    document.getElementsByClassName("content-slider")[0].style.right = `160vw`;
    document.getElementsByClassName("box3")[0].style.backgroundColor = 'white';
    document.getElementsByClassName("box2")[0].style.backgroundColor = '#fef8f5';
}

$(document).ready(function () {
    $("#work").click(function () {
        $(".home-container1").css("display", "none");
        $(".home-container2").css("display", "none");
        $(".home-container1").fadeIn(2000);
    });

    $(".sbzpreview").click(function () {
        $(".sbz-container1").css("display", "none");
        $(".sbz-container2").css("display", "none");
        $(".sbz-container3").css("display", "none");
        $(".sbz-container4").css("display", "none");
        $(".sbz-container5").css("display", "none");
        $(".sbz-container6").css("display", "none");
        $(".sbz-container7").css("display", "none");
        $(".sbz-container8").css("display", "none");
        $(".sbz-container1").fadeIn(2000);
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