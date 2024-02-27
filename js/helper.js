// some litte helper classes

/* 
// Show or hide the imprint
const toggleImprint = function(){
    document.querySelector('.imprint-content').classList.toggle('open');
}
  
// Make the button to show the Imprint
const showHideImprint = document.querySelector('.imprint-toggler');
showHideImprint.addEventListener('click', toggleImprint);
  
 */
  
// Make the button to show the Imprint
const showHideImprint = document.querySelector('.imprint-toggler');
showHideImprint.addEventListener('click', function(){
    document.querySelector('.imprint').classList.toggle('open');
});
