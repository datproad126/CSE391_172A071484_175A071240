$(document).ready(function () {
  //Khi bàn phím được nhấn và thả ra thì sẽ chạy phương thức này
  $("#formRegister").validate({
    rules: {
      user: "required",
      displayname: {
        required: true,
        minlength: 2
      },
      pswd: {
        required: true,
        minlength: 6
      },
      pswd_confirm: {
        required: true,
        minlength: 6,
        equalTo: "#pswd"
      },
      email: {
        required: true,
        email: true
      },
    },
    messages: {
      user: "Username is required",
      displayname: {
        required: "Displayed name is incorrect",
        minlength: "Min length must at least 2 characters"
      },
      email: {
        required: "Email is required",
        email: "Email is incorrect"
      },
    }
  });


  $("#formRegister").submit(function () {
    alert("đăng kí thành công");
    // add account in json
    // account["User"] = String(user);
    // account["DisplayName"] = String(displayname);
    // account["Password"] = String(pswd_confirm);
    // account["Email"] = String(email);
    $.ajax({
      type: "json",
      url: "../json/account.json",
      data: {},
      success: function (data) {
        console.log(data);
        var parse_obj = JSON.parse(data);
        parse_obj['theTeam'].push({ "User": String(user), "DisplayName": String(displayname), "Password": String(pswd_confirm), "Email": String(email) });
        data = JSON.stringify(parse_obj);
      }
    });
  });

  $("#btnRegister").click(function () {
    $("#formRegister").submit();
    window.location.replace("../html/login.html");
  });

});