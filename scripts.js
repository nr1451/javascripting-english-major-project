let tipCalculator;
tipCalculator = function(total, rate){
  let tipAmount;
  let tipRate = rate/100;
  tipAmount = tipRate * total;
  $("#response").html("Your tip is $" + tipAmount);
};
tipCalculator(50.00, 20);
