// var arr = ['mohsin','safdar','hamad','ahsan','mohsin']
// document.write(arr.indexOf('mohsinmaqbool'))

// last index
// document.write(arr.indexOf('mohsin',1))


// last index of
// document.write(arr.lastIndexOf('mohsin'))



// character find krna

// var naam = 'RED'
// document.write(naam.charAt('2'))



// Math.Round method

// var perCentage = 72.2
// document.write(Math.round(perCentage))



// ceil method

// var perCentage = 72.2
// document.write(Math.ceil(perCentage))


// floor method

// var perCentage = 72.9
// document.write(Math.floor(perCentage))



// random method

// console.log(Math.random() * 10)




var player1 = prompt("Enter Heads Name")
var player2 = prompt("Enter Tails Name")

var toss = Math.random() * 2
var change = Math.floor(toss)

if(change == 0){
    document.write(player1+ " Heads Win")
}
else{
    document.write(player2+ ' Tails Win')
}