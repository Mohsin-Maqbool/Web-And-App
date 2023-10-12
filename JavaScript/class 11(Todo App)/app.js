// getAttribute 

// function foo(){
//     var a = document.getElementById('inp')
//     var b = a.getAttribute('name')
//     console.log(b)
// }



// hasAttribute 

// function foo(){
//     var a = document.getElementById('inp')
//     var b = a.hasAttribute('class')
//     console.log(b)
// }




// setAttribute 

// function foo(){
//     var a = document.getElementById('inp')
//     var b = a.setAttribute('class','set')
//     console.log(b)
// }

var getul = document.getElementById('ul')

function foo() {
    var a = document.getElementById('inp')
    // console.log(a)
    // document.write(a)
    var li = document.createElement('li')
    // console.log(li)
    var litext = document.createTextNode(a.value)
    // console.log(litext)
    li.appendChild(litext)
    // console.log(li)
    getul.appendChild(li)
    a.value = ''
    var deleteBTN = document.createElement('button')
    var deleteBTNtext = document.createTextNode('Delete')
    deleteBTN.appendChild(deleteBTNtext)
    li.appendChild(deleteBTN)
    deleteBTN.setAttribute('onclick', 'del(this)')
    deleteBTN.setAttribute('class', 'btn btn-danger space')

    var editBTN = document.createElement('button')
    var editBTNtext = document.createTextNode('Edit')
    editBTN.appendChild(editBTNtext)
    li.appendChild(editBTN)
    editBTN.setAttribute('onclick', 'edit(this)')
    editBTN.setAttribute('class', 'btn btn-info space')


}

function deleteall() {
    getul.innerHTML = ''
}
function del(e) {
    // console.log(e)
    e.parentNode.remove()
}
function edit(e) {
    // console.log(e)
    // var userEdit = prompt(e)
    var a = prompt('Edit Value', e.parentNode.firstChild.nodeValue)
    // console.log(e.parentNode.firstChild)
    e.parentNode.firstChild.nodeValue = a
    // a.parentNode.childNode.edit() = a.value(eval)
}
