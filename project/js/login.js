$(document).ready(function () {
  $("#formLogin").validate({
    rules: {
      username: "required",
      password: "required",
    },
    messages: {
      username: "Username is required",
      password: "Password is required",
    }
  });


  $("#formLogin").submit(function(e){
    e.preventDefault();
    console.log('submit login');

    $.ajax({
      type: "json",
      method: 'post',
      url: "/project/php/checklogin.php",
      data: $(this).serialize(),
      success: function (data) {
        console.log('Response', data);
        if (data && data.logged) {
          document.location.href = "/project/html/dashboard.html";
        } else {
          alert('Wrong password');
        }
      },
      error: function() {
        console.error('An error occurs');
      }
    });
  });

});