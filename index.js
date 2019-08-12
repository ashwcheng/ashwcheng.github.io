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
        $(".home-container1").fadeIn(1500);
    });

    $(".sbzpreview").click(function () {
        $(".sbz-container1").css("display", "none");
        $(".sbz-container2").css("display", "none");
        $(".sbz-container3").css("display", "none");
        $(".sbz-container4").css("display", "none");
        $(".sbz-container5").css("display", "none");
        $(".sbz-container6").css("display", "none");
        $(".sbz-container1").fadeIn(1500);
    });

    $("#about").click(function () {
        // console.log("show fade in")
        $(".quotecontainer").css("display", "none");
        $(".aboutcontainer").css("display", "none");
        $(".funcontainer").css("display", "none");
        $(".quotecontainer").fadeIn(1500);

    });

    $("#connect").click(function () {
        // console.log("show fade in")
        $(".social").css("display", "none");
        $(".social").fadeIn(1500);
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
                $(this).fadeIn(1500);
            }
        });
    });

    $(".home-container1").css("display", "none");
    $(".home-container2").css("display", "none");
    $(".home-container1").fadeIn(1500);
});
