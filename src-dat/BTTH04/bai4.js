$(document).ready(function () {
  var dict = new Object();
  var dict = {
    "apple":"/img/apple_.jpg",
    "banana":"/img/banana.jpg",
    "strawbery":"/img/strawbery.jpg",
    "black grape":"/img/black-grapes.jpg",
    "orange":"/img/orange.jpg",
    "pomegranate":"/img/pomegranate.jpg",
  }
  $("#btn").click(function () {
    var data = $("#fruit").val();
    for (var key in dict) {
      var value = dict[key];
      if (String(key) == String(data)) {
        $("#my_image").attr("src",value);
      }
    };
  });
});
