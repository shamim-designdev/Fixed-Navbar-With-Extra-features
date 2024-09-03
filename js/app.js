$(document).ready(function() {
    // Show sticky navbar after scrolling 15% of the page
    $(window).scroll(function() {
        if ($(this).scrollTop() > $(document).height() * 0.15) {
            $('#navbar').css('top', '0');
        } else {
            $('#navbar').css('top', '-60px');
        }
    });

    // Toggle dark and light mode
    $('#toggle-dark-mode').click(function() {
        $('body').toggleClass('dark-mode');
        if ($('body').hasClass('dark-mode')) {
            $(this).html('<i class="fas fa-sun"></i>');
        } else {
            $(this).html('<i class="fas fa-moon"></i>');
        }
    });

    // Toggle navbar visibility
    $('#toggle-navbar').click(function() {
        $('#navbar').slideToggle(300); // Smooth toggle effect
        if ($('#navbar').is(':visible')) {
            $(this).html('<i class="fas fa-times"></i>');
        } else {
            $(this).html('<i class="fas fa-bars"></i>');
        }
    });
});
