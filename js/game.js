$(function () {
  $('#answer').hide();

  var words = ["HTML", "Javascript", "Ruby", "angular", "array", "function", "class", "programming"];
  console.log("connected");
  var i = words.length;

 
  
    $('#start').click(function(){ 
      if (i > 0) {
        var word = Math.floor(Math.random() * i);
        console.log(word);
        $('#start').html(words[word]);
        $('#answer').show();
        $( "#answer" ).submit(function( event ) {
          event.preventDefault();
          console.log("submitted");
          if ($( "input" ).val() == words[word]) {
            $('#start').html('next');
            $('#message').html('correct');
            words.splice(word, 1);
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