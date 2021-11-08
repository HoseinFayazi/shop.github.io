$(document).ready(function() {

    /////////////////////////////////////////////
    ///////////  menu list hover action  ////////
    /////////////////////////////////////////////
    if (window.innerWidth >= 900) {
        $(".menu-item").hover(function() {
            if (window.innerWidth >= 900)
                $(this).children(".menu-child").slideToggle(200);
        })
    } else {
        $(".menu-item").click(function() {
            $(this).children(".menu-child").slideToggle(200);
            $(this).siblings().children(".menu-child").slideUp(200);
            // $(this).animate({
            //     height: '500px'
            // });
        })
    }




    //////////////////////////////////////////////////////////////////
    ////////////////       sliders of slick lb       ////////////////
    /////////////////////////////////////////////////////////////////
    $('.shgft-angiz-products').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [{
                breakpoint: 868,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 680,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });



    ///////////////////////////////////////////////////////
    ////////////////////   nav sticky   ///////////////////
    /////////////////////////////////////////////////////

    // window.onscroll = function() { myFunction() };
    // var navbar = document.querySelector("nav>ul");
    // var navicon = document.querySelector("nav>.menu-icon");
    // var sticky0 = navicon.offsetTop;
    // var sticky = navbar.offsetTop;

    // function myFunction() {
    //     if (window.innerWidth >= 900) {
    //         if (window.pageYOffset >= sticky) {
    //             navbar.classList.add("sticky")
    //         } else {
    //             navbar.classList.remove("sticky");
    //         }
    //     } else {
    //         if (window.pageYOffset >= sticky0) {
    //             navicon.classList.add("sticky")
    //         } else {
    //             navicon.classList.remove("sticky");
    //         }
    //     }
    // } //end scroll fn


    window.onresize = function() {
        location.reload()
    }


    $(".menu-icon>button").click(function() {
        $(".menu").slideToggle(200);
    })










    ///////////////////////////////////////////////////
    ///////////suggestion box slick   slider ///////////
    ///////////////////////////////////////////////////
    $('.suggestion-content').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });






})