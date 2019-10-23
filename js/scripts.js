var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// JQuery

$(document).ready(function () {


  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);

    //The add is the only one that displays in the div #output
    $("#output").text(result);
  });

  $("#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("input#subtract1").val());
    var number2 = parseInt($("input#subtract2").val());
    alert(subtract(number1, number2));
  });

  $("#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("input#multiply1").val());
    var number2 = parseInt($("input#multiply2").val());
    alert(multiply(number1, number2));
  });

  $("#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("input#divide1").val());
    var number2 = parseInt($("input#divide2").val());
    alert(divide(number1, number2));
  });

});
