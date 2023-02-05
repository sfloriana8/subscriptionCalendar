// Your JS code here
//Elements
var subTypeElement = document.querySelector(".subscription-select");
var subDurationElement = document.querySelector(".duration-select");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = Number("1");

//Change Event Listeners
subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  // console.log(subType);
  updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = e.target.value;
  //console.log(subDuration);
  updateSubscriptionDiv();
});

var updateSubscriptionDiv = function () {
  var monthlyCost = 5;
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  var total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}`;
};
