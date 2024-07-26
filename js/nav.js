$(document).ready(function() {
        $(".navbar-toggler").click(function() {
            $(".overlay").css("width", "100%");
            $("#sidebar").css("width", "40vw");
            localStorage.setItem('sidebarState', 'open');
        });

        $(".closebtn, .overlay").click(function() {
            $(".overlay").css("width", "0");
            $("#sidebar").css("width", "0");
            localStorage.setItem('sidebarState', 'closed');
        });

        // Ensure sidebar state is preserved on page load
        $(window).on('load', function() {
            if (localStorage.getItem('sidebarState') === 'open') {
                $(".overlay").css("width", "100%");
                $("#sidebar").css("width", "40vw");
            } else {
                $(".overlay").css("width", "0");
                $("#sidebar").css("width", "0");
            }
        });

        // Change logo and navbar background on scroll
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('.navbar').addClass('scrolled');
            } else {
                $('.navbar').removeClass('scrolled');
            }
        });
    });