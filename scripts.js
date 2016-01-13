$(function(){
  var overage = confirm("Are you 18 or over?");

  if (overage) {
    $("#votinginfo").show();
  } else {
    $("#minors").show();
  }

  });
$(function(){
  var polparty = prompt("Are you a republican or a democrat?").toLowerCase();

  if (polparty === "democrat") {
    $("#democrat").show();
  } else if (polparty === "republican"){
    $('#republican').show();
  } else {
    alert("You didn't pick a party. That's okay. Here's general info.");
  }
});
