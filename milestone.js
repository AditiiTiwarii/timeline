var countElement1 = document.getElementById("count1");
var count1 = 0;

setInterval(function() {
  if(count1<10000){
    count1++;
  countElement1.innerText = numberWithCommas(count1);
}
  
}, 0.1);

function numberWithCommas(count1) {
  return count1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var countElement2 = document.getElementById("count2");
var count2 = 0;

setInterval(function() {
  if(count2<1000){
    count2++;
  countElement2.innerText = numberWithCommas(count2);
}
  
}, 0.5);

function numberWithCommas(count2) {
  return count2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var countElement3 = document.getElementById("count3");
var count3 = 0;

setInterval(function() {
  if(count3<1500){
    count3++;
  countElement3.innerText = numberWithCommas(count3);
}
  
}, 0.4);

function numberWithCommas(count3) {
  return count3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}