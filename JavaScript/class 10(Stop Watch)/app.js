
// Set Interval function

// setInterval(function(){
//     document.write("Hello World"+" ")
// },1000)


// function timer(){
//     document.write("Mohsin"+" ")
// }
// setInterval(timer,4000)



// Set Time Out Function

// setTimeout(function(){
//     document.write("Mohsin"+" ")
// },5000)


// function timer(){
//     document.write("Mohsin"+" ")
// }
// setTimeout(timer,5000)





// var num = 0;
// setInterval(function(){
//     console.log(num);
//     num++;
// },10)









// Stop Watch

var hours = 0
var minutes = 0
var seconds = 0
var miliseconds = 0
var gethour = document.getElementById('hour')
var getmin = document.getElementById('min')
var getsec = document.getElementById('sec')
var getmilisec = document.getElementById('msec')
var interval;



function start(){
   interval = setInterval(function(){
      miliseconds++
      getmilisec.innerHTML = miliseconds
      if(miliseconds >=100){
         seconds++
         getsec.innerHTML = seconds
         miliseconds = 0
      }
      else if(seconds >=60){
       minutes++
       getmin.innerHTML = minutes
       seconds = 0
      }
      else if(minutes >=60){
       hours++
         gethour.innerHTML = hours
         minutes = 0
        }
     },1)
     document.getElementById('disable').disabled = true;
}


function stop(){
   clearInterval(interval)
   document.getElementById('disable').disabled = false;
}

function reset(){
   hours = 0
   minutes = 0
   seconds = 0
   miliseconds = 0
   gethour.innerHTML = hours
   getmin.innerHTML = minutes
   getsec.innerHTML = seconds
   getmilisec.innerHTML = miliseconds
}


















