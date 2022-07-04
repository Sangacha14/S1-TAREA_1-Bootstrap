
$(document).ready(function () {
    var menuBtn = $('div span .fa-burger'),
        menu= $('.naveg ul');

    menuBtn.click(function(){

        if ( menu.hasClass ('show') ) {

            menu.removeClass ('show');
        
        } else {
        
            menu.addClass ('show');
        
        }

    });
});