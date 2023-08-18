var elForm = document.querySelector(".js-form");
var elFirstInput = document.querySelector(".js-input");
var elSecondInput = document.querySelector(".js-next-input");
var elDeleteBtnBefore = document.querySelector(".delete-befor-btn");
var elDeleteBtnAfter = document.querySelector(".delete-after-btn");
var elOutputList = document.querySelector(".js-list");

var nameArr = ["Abdulhafiz", "Avaz", "Elyorbek", "Jo'rabek", "Ulug'bek"];

function refactorName (){
  for (const item of nameArr) {
    var newItem = document.createElement("li");
    var output = document.createElement("output");

    newItem.textContent = item;
    newItem.appendChild(output);
    elOutputList.appendChild(newItem);
  }
}
refactorName();

elForm.addEventListener("submit", function (evt){
  evt.preventDefault();

  elOutputList.innerHTML = null;

  var elFirstInputVal = elFirstInput.value.trim();
  var elSecondInputVal = elSecondInput.value.trim();

  if(elFirstInputVal !== "" && elSecondInputVal !== ""){
    nameArr.unshift(elFirstInputVal);
    nameArr.push(elSecondInputVal);
  } else if(elFirstInputVal !== "" && elSecondInputVal === ""){
    nameArr.unshift(elFirstInputVal);
  } else if(elFirstInputVal === "" && elSecondInputVal !== ""){
    nameArr.push(elSecondInputVal);
  } else {
    alert ("Malumot kiritilmadi 🔞");
  }
  refactorName();
});

elDeleteBtnBefore.addEventListener("click", function(evt){
  evt.preventDefault();
  nameArr.shift();
  elOutputList.textContent = nameArr.join(" ");
});
elDeleteBtnAfter.addEventListener("click", function(evt){
  evt.preventDefault();
  nameArr.pop();
  elOutputList.textContent = nameArr.join(" ");
});