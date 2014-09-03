document.getElementById('update-button').onclick = function() {
  var thimbles = document.getElementById('thimbles').value;
  var swords = document.getElementById('swords').value;
  var thimblesFinal = Number(thimbles);
  var swordsFinal = Number(swords);
  var swordsCost = swordsFinal * 37;
  var total = swordsCost + thimblesFinal;

  document.getElementById('the-total').innerHTML = total + " " + "monies";
};