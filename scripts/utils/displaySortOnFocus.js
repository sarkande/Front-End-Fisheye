var btnFame    = document.querySelector(".photograph-content__search-container--fame");
var btnDate    = document.querySelector(".photograph-content__search-container--date");
var btnTitle   = document.querySelector(".photograph-content__search-container--title");

var containerBtn = document.querySelector(".btn-list-box");

var chevronUp = document.querySelector("i.fa-chevron-up");
var chevronDown =document.querySelector("i.fa-chevron-down"); 

btnFame.addEventListener('focus', (event) => {    
     displayOnfocus();
});

btnDate.addEventListener('focus', (event) => {
     displayOnfocus();
});


btnTitle.addEventListener('focus', (event) => {
     displayOnfocus();
});

btnFame.addEventListener('focusout', (event) => {
     hideFocusOut();
});
btnDate.addEventListener('focusout', (event) => {
     hideFocusOut();
});
btnTitle.addEventListener('focusout', (event) => {
     hideFocusOut();
});


function displayOnfocus(){
     containerBtn.style.transform ='scaleY(1)';
     chevronUp.style.display ='inline';
     chevronDown.style.display ='none';
}
function hideFocusOut(){
     containerBtn.style.transform ='';
     chevronUp.style.display ='';
     chevronDown.style.display ='';
}