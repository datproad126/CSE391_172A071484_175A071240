$(document).ready(function () {
  $.ajax({
    dataType: "json",
    url: "/src-dat/BTTH05/bai5.json",
    data: {},
    success: function (data) {
      $.each(data, function (idx, item) {
        // var $th = $('<th scope="row">'++'</th>');
        var img = '<img id="' + item.id + '" src="' + item.source + '" alt="' + item.id + ': ' + item.fname + ' class="modal-hover-opacity">';
        // var $tr = $('<tr id="+'idx'+"></tr>');
        var $td = $('<td>' + img + '</td>');
        if (idx < 10) {
          // $('#col').appendTo('<th>' + idx + 1 + '</th>');
          $td.appendTo($("#row1"));
        }
        if (idx < 20 && idx> 9) {
          $td.appendTo($("#row2"));
        }
        if (idx<30 && idx>19){
          $td.appendTo($("#row3"));
        }
        if (idx<40 && idx>29){
          $td.appendTo($("#row4"));
        }
        // if (idx<50 && idx>39){
        //   $td.appendTo($("#row5"));
        // }
        $('#' + item.id).css({ "width": "60px", "height": "80px", "border": "1px solid slategray", "cursor": "pointer" });
        $('#' + item.id).click(function () {
          $('#img01').attr('src', item.source);
          $('#img01').css({ "width": "300px", "height": "auto" });
          $('#modal01').css({ "display": "block" });
        });
      });

    }
  });
});