$(function () {
  $('#answer').hide();

  var words = ["HTML", "javascript", "Ruby", "angular", "array", "function", "class", "programming"];
  console.log("connected");
  var i = words.length;

 
  
    $('#start').click(function(){ 
      if (i > 0) {
        var word = Math.floor(Math.random() * i);
        console.log(word);
        var wordReal = words[word];
        var shuffled = wordReal.split('').sort(function(){return 0.5-Math.random()}).join('');
        console.log(shuffled);
        $('#start').html(shuffled);
        $('#answer').show();
        $( "#answer" ).submit(function( event ) {
          event.preventDefault();
          console.log("submitted");
          if ($( "input" ).val() == words[word]) {
            $('#start').html('next');
            $('#message').html('correct');
            word = words.splice(word, 1);
            i = words.length;
            console.log(words);
          }
          else {
            $('#message').html('try again');

          }
        });
      }
      else {
        $('#message').html('all completed');
      }
    });
   


  


})