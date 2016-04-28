$(function () {
    console.log("pure loaded");
    $('#two, #one, #three, #four').hide();

    $( "#about" ).click(function() {
      $( ".box" ).removeClass("skills-click contact-click home-click projects-click play-click")
      $( ".box" ).addClass("about-click")
      console.log("clicked");
    });

    $( "#projects" ).click(function() {
      $( ".box" ).removeClass("skills-click contact-click home-click about-click play-click")
      $( ".box" ).addClass("projects-click")
    });

    $( "#skills" ).click(function() {
      $( ".box" ).removeClass("about-click contact-click home-click projects-click play-click")
      $( ".box" ).addClass("skills-click")
    });

    $( "#home" ).click(function() {
      $( ".box" ).removeClass("about-click contact-click skills-click projects-click play-click")
      $( ".box" ).addClass("home-click")
    });

    $( "#contact" ).click(function() {
      $( ".box" ).removeClass("about-click skills-click home-click projects-click play-click")
        $( ".box" ).addClass("contact-click")
    });

    $( "#play" ).click(function() {
      $( ".box" ).removeClass("about-click skills-click home-click projects-click contact-click")
        $( ".box" ).addClass("play-click")
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
        console.log("this ", WINDOW_CHANGE_EVENT);
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