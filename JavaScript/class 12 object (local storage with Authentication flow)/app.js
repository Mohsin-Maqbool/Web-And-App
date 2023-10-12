
/*
var obj = {
    s_id : '01',
    s_name : 'Mohsin',
    s_age : '23',
    s_roll : '2020-uam-2151',
    s_depart : 'IT'
}
*/


// // for in loop

/*
for(var key in obj){
    document.write(key, " : ",obj[key],"<br>")
}
*/

// for(var value in obj){
//     document.write(value)
// }


// local storage
/*
localStorage.setItem('firstName','Mohsin')

localStorage.clear()

*/

// session storage

// sessionStorage.setItem('lastName','Maqbool')




// Authentication flow


function signup() {
    var email = document.getElementById('semail').value
    var pass = document.getElementById('spass').value
    localStorage.setItem('Email', email)
    localStorage.setItem('Password', pass)
    location.href = './signin.html'
}

function signin() {
    var email = document.getElementById('lemail').value
    var pass = document.getElementById('lpass').value
    if (localStorage.getItem('Email') == email && localStorage.getItem('Password') == pass) {
        location.href = './welcome.html'
    }
    else {
        alert('First SignUP')
        location.href = './signup.html'
    }

}

function logout(){
    localStorage.clear()
   location.href = './signin.html'
}