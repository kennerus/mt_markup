$(function () {
    $('.menu_btn').on('click', function () {
        $('.menu_btn').toggleClass('open');
        $('.nav-menu').toggleClass('expand');
    });

    $('.profile_btn').on('click', function () {
        $('.profile_btn').toggleClass('open');
        $('.profile-menu').toggleClass('expand');
    });

    $("[data-fancybox]").fancybox({

    });

    $('.tabcontent a').on('mouseenter', function() {
        $(this).find('.magnifier').fadeIn(200);
    })

    $('.tabcontent a').on('mouseleave', function() {
        $(this).find('.magnifier').fadeOut(200);
    })
});

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove('df');
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" activeTab", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).classList.add('df')
    evt.currentTarget.className += " activeTab";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();