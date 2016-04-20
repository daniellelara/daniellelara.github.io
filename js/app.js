$(function () {
    console.log("pure loaded");

    $( "#about" ).click(function() {
      $( ".box" ).css({'-webkit-transform': 'rotateY(-90deg)'});
      console.log("clicked");
    });
    $( "#projects" ).click(function() {
      $( ".box" ).css({'-webkit-transform': 'rotateX(90deg)'});
      console.log("clicked");
    });
    $( "#home" ).click(function() {
      $( ".box" ).css({'-webkit-transform': 'rotateY(0deg)'});
      console.log("clicked");
    });

    $( "#contact" ).click(function() {
      $( ".box" ).css({'-webkit-transform': 'rotateY(-270deg)'});
      console.log("clicked again");
    });

    $( "#alize" ).click(function() {
      window.scrollBy(0,600);
      console.log("clicked again");
    });



    $(window).scroll(function () {
           if ($(this).scrollTop() > 440) { 
               //change yes to no
               $('.pure-menu-heading').html('<img id="thumb" src="./images/lococircle.png">');
           } else {
               //set h1 text to yes
               $('.pure-menu-heading').html('danielle lara gourgey');
           }
       });

    var menu = document.getElementById('menu'),
        WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';

    function toggleHorizontal() {
        [].forEach.call(
            document.getElementById('menu').querySelectorAll('.custom-can-transform'),
            function(el){
                el.classList.toggle('pure-menu-horizontal');
            }
        );
    };

    function toggleMenu() {
        // set timeout so that the panel has a chance to roll up
        // before the menu switches states
        if (menu.classList.contains('open')) {
            setTimeout(toggleHorizontal, 500);
        }
        else {
            toggleHorizontal();
        }
        menu.classList.toggle('open');
        document.getElementById('toggle').classList.toggle('x');
    };

    function closeMenu() {
        if (menu.classList.contains('open')) {
            toggleMenu();
        }
    }

    document.getElementById('toggle').addEventListener('click', function (e) {
        toggleMenu();
    });

    window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);

});