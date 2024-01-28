document.addEventListener('DOMContentLoaded', function () {
    var scrollToTopButton = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // scrollToTopButton.addEventListener('click', function () {
    //     document.body.scrollTop = 0; // For Safari
    //     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    // });
    scrollToTopButton.addEventListener('click', function () {
        // Smooth scrolling
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
