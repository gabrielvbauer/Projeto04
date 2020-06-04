window.onload = function() {

    /* MOBILE MENU */

    var menu_icon = $('.menu-mobile');

    function abrirMenuM() {
        menu_icon.click(function(e) {
            e.stopPropagation();
            $(this).find('ul').slideToggle();
        })

        $('.menu-mobile ul').click(function(e) {
            e.stopPropagation();
        })
    };

    abrirMenuM();

    /* MOBILE MENU END */

}