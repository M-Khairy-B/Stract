import $ from "jquery";
import "bootstrap";
import { test } from "./test";

$(document).ready(function () {
    let navbar = $("#mainNavbar");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            navbar.addClass("no-top");
        } else {
            navbar.removeClass("no-top");
        }
    });

    $(".nav-link").click(function () {
        $(".nav-link").removeClass("active");
        $(this).closest(".nav-link").addClass("active");
    });

    $(window)
        .scroll(function () {
            let scrollDistance = $(window).scrollTop();
            $("section").each(function (i) {
                if ($(this).position().top <= scrollDistance) {
                    $("ul.navbar-nav a.active").removeClass("active");
                    $("ul.navbar-nav a").eq(i).addClass("active");
                }
            });
        })
        .scroll();

        if ($(".animation").length) {
            scrollAnimation();
        }
    
        function scrollAnimation() {
            $(window).scroll(function () {
                let scrollDistance = $(window).scrollTop();
                $(".animation").each(function () {
                    let position = $(this).offset().top;
                    let scroll = $(window).scrollTop();
                    let windowHeight = $(window).height();
                    if (scroll > position - windowHeight) {
                        if ($(this).hasClass("more-than")) {
                            setTimeout(function () {
                                $(".more-than").addClass("open");
                            }, 200);
                        }
                        if ($(this).hasClass("explore")) {
                            setTimeout(function () {
                                $(".explore").addClass("open");
                            }, 400);
                        }
                        if ($(this).hasClass("cyber-security")) {
                            setTimeout(function () {
                                $(".cyber-security").addClass("open");
                            }, 600);
                        }
                        if ($(this).hasClass("about-stract")) {
                            setTimeout(function () {
                                $(".about-stract").addClass("open");
                            }, 800);
                        }
                        if ($(this).hasClass("stract-works")) {
                            setTimeout(function () {
                                $(".stract-works").addClass("open");
                            }, 900);
                        }
                    }
                });
            });
        }


        $(".navbar .navbar-brand img").show(500, function () {
            $(".navbar .navbar-nav .nav-item .nav-link").each(function (index) {
                $(this)
                    .delay(100 * index)
                    .animate({ opacity: 1 }, 100);
            });
            $(".navbar .btn-main")
                .delay(500)
                .animate({ opacity: 1 }, 300, function () {
                    $(".header-main .main-text").addClass('open');
                    $(".header-main .btn-head").addClass('open');
                    $(".dashborad").addClass('open');
                });
        });
});



// $(".navbar .navbar-brand img").show(1000 , function(){
//     $(".navbar .navbar-nav .nav-item .nav-link ").show(1500 , function(){
//         $(".navbar .btn-main").fadeIn(2000, function(){
//         })
//     })
// })



