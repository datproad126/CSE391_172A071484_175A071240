$(function () {
  $.ajax({
    url: "/src-dat/BTTH06/bai6.html",
    success: function () {
      var idx = 0;
      var array = [];
      // handle event click add_task
      $('#add_task').click(function () {
        if ($("#modelForm").find("#inputPlaceholderEx").length) {
          return;
        }
        var $input_form = $('<div class="task_form"><div class="md-form"><i class="fas fa-cog fa-spin prefix"></i><input placeholder="nhập tên task của bạn" type="text" id="inputPlaceholderEx" class="form-control" value=""></div></div>');
        $('.task_menu').prepend($input_form);
      });
      // handle event blur input type=text
      $(document).on('blur', '#inputPlaceholderEx', function () {
        idx += 1;
        var value_textbox = $(this).val();
        var str = '< label class= " custom-control-label" for= "defaultUnchecked' + String(idx) + '" >' + value_textbox + '</label>';
        $('.task_form').remove();
        var $checked_form = $('<div class="task_item"><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="defaultUnchecked' + String(idx) + '"><label class="custom-control-label" for="defaultUnchecked' + String(idx) + '">' + value_textbox + '</label></div></div>');
        $('.task_menu').prepend($checked_form);
        array.push(idx);
      });
      // handle event click dark_mode
      $('#dark_mode').click(function () {
        if ($("body").css("background-color") == "rgb(252, 149, 166)") {
          $("body").css("background-color", "#6c757d");
          $(".container").css("background-color", "#f8f9fa)");
          $('.fa-bookmark').remove();
          $('.fa-moon').remove();
          $('.fa-plus-square').remove();
          $('#add_task').append($('<i class="far fa-plus-square indigo-text fa-lg pr-2"></i>'));
          $('#mark_all').append($('<i class="far fa-bookmark indigo-text fa-lg pr-2"></i>'));
          $('#dark_mode').append($('<i class="far fa-moon indigo-text fa-lg pr-2"></i>'));
        }
        else {
          $("body").css("background-color", "rgb(252, 149, 166)");
          $(".container").css("background-color", "white");
          $('.fa-bookmark').remove();
          $('.fa-moon').remove();
          $('.fa-plus-square').remove();
          $('#add_task').append($('<i class="fas fa-plus-square indigo-text fa-lg pr-2"></i>'));
          $('#mark_all').append($('<i class="fas fa-bookmark indigo-text fa-lg pr-2"></i>'));
          $('#dark_mode').append($('<i class="fas fa-moon indigo-text fa-lg pr-2"></i>'));
        }
      });
      //handle event click button mark_all
      // handle chưa triệt để trường hợp vì ko biết lý do ở đâu (sẽ fix tiếp)
      $(document).on('click', '#mark_all', function () {
        if (!$('.custom-control-input').is(':checked')) {
          console.log($('.custom-control-input').attr('checked', true).length);
          $('.custom-control-input').attr('checked', true);
          $('.task_item').css('background-color', '#20c997');
        }
      });
      // handle event click input type=checkbox, change color 
      $(document).on('click', '.custom-control-input', function () {
        if ($(this).is(':checked')) {
          $(this).attr('checked', false);
          $(this).parent().parent().css('background-color', '#20c997');
        } else {
          $(this).attr('checked', true);
          $(this).parent().parent().css('background-color', 'rgba(0, 0, 0, 0)');
        };
      });

      $('#doala').click(function () {
        alert('Edit by: Đạt Ken :)) ấn ok để bất ngờ!!!!!!!');
        window.location.href = "https://media.giphy.com/media/K3mLbBlK1BW4U/giphy.gif";
      });

    }
  });
});