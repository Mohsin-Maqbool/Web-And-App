// var num = 5

// var res = ++num + num++ + num + ++num - --num
            // 6   +   6   +   7 +   8   -  7
// document.write(res)





// var arr = [1,2,3,'dalal',4,5,6,7,'Jalal',8,9,10,'Saad']

// for(var i=0; i<arr.length; i++){
//     document.write(arr[i],"<br>")
// }




// document.write(2+" x "+1+" = "+2*1)
// document.write(2+" x "+2+" = "+2*2)
// document.write(2+" x "+3+" = "+2*3)

var userinp = +prompt('Enter value')
var tableEnd = +prompt('Value kahan tk print krni hai')

for(var i=1; i<=tableEnd; i++){
    document.write(userinp+" x "+i+" = "+userinp*i,"<br>")
}