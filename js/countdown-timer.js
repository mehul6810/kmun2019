// Set the date we're counting down to
var countDownDate = new Date("July 25, 2019 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
   //Output the result in an element with id="demo"
   document.getElementById("DAYZ").innerHTML = days  ;
   document.getElementById("HOURS").innerHTML =  hours;
   document.getElementById("MIN").innerHTML =  minutes ;
   document.getElementById("SEC").innerHTML =   seconds ;
  // If the count down is over, write some text Dude also if youre reading this change the code below pls
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);