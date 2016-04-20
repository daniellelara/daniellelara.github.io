$(function () {
    console.log("pure loaded");
    $('#two, #one, #three, #four').hide();
    $( "#about" ).click(function() {
      $( ".box" ).css({'-webkit-transform': 'rotateY(-90deg)'});
      console.log("clicked");
    });
    $( "#projects" ).click(function() {
      $( ".box" ).css({'-webkit-transform': 'rotateX(90deg)'});
      console.log("clicked");
    });
    $( "#skills" ).click(function() {
      $( ".box" ).css({'-webkit-transform': 'rotateX(-90deg)'});
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
      toBottom();
      $('#two').show();
      $('#one, #three, #four').hide();
      console.log("clicked again");
    });

    $( "#puzzle" ).click(function() {
      toBottom();
      $('#one').show();
      $('#two, #three, #four').hide();
      console.log("clicked again");
    });

    $( "#cross" ).click(function() {
     toBottom();
      $('#three').show();
      $('#two, #one, #four').hide();
      console.log("clicked again");
    });

    $( "#dose" ).click(function() {
      toBottom();
      $('#four').show();
      $('#two, #one, #three').hide();
      console.log("clicked again");
    });

    $("#backtwo").click(function(){
        console.log("working??");
        toTop();
    });

    $("#backthree").click(function(){
        console.log("working??");
        toTop();
    });

    $("#backfour").click(function(){
        console.log("working??");
        toTop();
    });

    $("#backone").click(function(){
        console.log("working??");
        toTop();
    });

    function toBottom() {
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
         return false;
    } 

    function toTop() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
         return false;
    }  

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