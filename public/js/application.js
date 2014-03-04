$(document).ready(function() {

  $('form').on('submit', function(event) {
    event.preventDefault();
    $("#form").toggle();
    $("#message").text("Tweeting--please wait!")
    $.ajax({
      url: '/',
      dataType: 'json',
      accepts: 'application/json',
      data: $(this).serialize(),
      type: 'POST',
      success: function(response) {
        console.log('tweet successful');
        console.log(response);
        $("#message").text("Tweet successful!");
      },
      error: function(){
        $("#message").text("Yikes, tweet failed.  Try again!");
      },
      complete: function(){
        document.getElementById("form").reset();
        $("#form").toggle();
        console.log($("form"));
      }
    });
  });
});
