// check whether the letter is lower or upper case
// // function lett() {
// //     var lett = document.getElementById("lett").value;
// //     var upp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// //     for (let I = 0; I < upp.length; I++) {
// //         const element = upp[I];
        
// //     switch (lett) {
       
// //         case element:{
// //             alert("The alphabit is in upper case")
// //         }
            
// //             break;
    
// //         default:{
// //             alert("The alphabit is in lower case")
// //         }
// //             break;
// //     }}
// //     var lowe = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];



// // }

// // function to print day
// function da() {
// var da = document.getElementById("week").value;

// switch (da) {
//     case "1":{
//         alert("Monday")
//     }
        
//         break;
//         case "2":{
//             alert("Tuesday")
//         }
            
//             break;
//             case "3":{
//                 alert("Wednesday")
//             }
                
//                 break;
//                 case "4":{
//                     alert("Thursday")
//                 }
                    
//                     break;
//                     case "5":{
//                         alert("Friday")
//                     }
                        
//                         break;
//                         case "6":{
//                             alert("Saturday")
//                         }
                            
//                             break;
//                             case "7":{
//                                 alert("Sunday")
//                             }
                                
//                                 break;

//     default:{
//         alert("The number doesn't represents a day")
//     }
//         break;
// }}

// // write a program that inputs month number and give output the month days
// function mont(){
//     var mont = document.getElementById("month").value;
// switch (mont) {
//     case "1":{
//         alert("31 days")
//     }
        
//         break;
//         case "2":{
//             alert("28 days")
//         }
            
//             break;
//             case "3":{
//                 alert("31 days")
//             }
                
//                 break;
//                 case "4":{
//                     alert("30 days")
//                 }
                    
//                     break;
//                     case "5":{
//                         alert("31 days")
//                     }
                        
//                         break;
//                         case "6":{
//                             alert("30 days")
//                         }
                            
//                             break;
//                             case "7":{
//                                 alert("31 days")
//                             }
                                
//                                 break;
//                                 case "8":{
//                                     alert("31 days")
//                                 }
                                    
//                                     break;
//                                     case "9":{
//                                         alert("30 days")
//                                     }
                                        
//                                         break;
//                                         case "10":{
//                                             alert("31 days")
//                                         }
                                            
//                                             break;
//                                             case "11":{
//                                                 alert("30 days")
//                                             }
                                                
//                                                 break;
//                                                 case "12":{
//                                                     alert("31 days")
//                                                 }
                                                    
//                                                     break;
                                                                                                                                                                                                                                                                        
//     default:{
//         alert("The number you have typed is not recognizing a month")
//     }
//         break;
// }}


function angle() {
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    const c = parseInt(document.getElementById("c").value);
    const all = parseInt(a+b+c);
    console.log(all);
    // all="180"?alert("The triangle is valid"):alert("The triangle is not valid")
if (all!==180) {
    alert("The triangle is not valid")
} else {
    alert("Triangle is valid")
}
}


// side check the validity of triangle
function side() {
    const e = parseInt(document.getElementById("on").value);
    const f = parseInt(document.getElementById("tw").value);
    const g = parseInt(document.getElementById("thr").value);

const i = parseInt(e+f)
const j = parseInt(e+g)
const k = parseInt(g+f)
// console.log(i);
// console.log(j);
// console.log(k);
if (i==g) {
    alert("This is a valid triangle")
}
if (j==f) {
    alert("This is a valid triangle")
}
if (k==e) {
    alert("This is a valid triangle")
}
else{
    alert("This is not a valid triangle")
}
}

// // find roots of a quadratic equation
// function roots() {
//     const x2 = parseInt(document.getElementById("x2").value);
//     const x = parseInt(document.getElementById("x").value);
//     const no = parseInt(document.getElementById("no").value);
// const mul = parseInt(x2*no)

// }


// // find profit or loss
// function prof() {
//     const buy = parseInt(document.getElementById("buy").value);
//     const sell = parseInt(document.getElementById("sell").value);
// if (buy>sell) {
//     const bu = parseInt(buy-sell);
//     // console.log(bu)
//     alert("The profit of the product is"+ bu);
// break;
// }

// if (sell>buy) {
//     const se = parseInt(sell-buy);
//     alert("The loss of the product is", se);
// }else {
//     alert("There is no profit or loss")
// }

// }



// // find first and last sum



// function summ() {
//     const  sum = document.getElementById("sum").value;
//     const s = parseInt(sum.slice(0,1));
//     const ss = parseInt(sum.slice(4,5))
//     alert(s+ss)
// } 

// function firs() {
//     const  su = document.getElementById("sum").value;
//     const sa = parseInt(su.slice(0,1));
//     const ssa = parseInt(su.slice(4,5))
//     alert(sa+"and"+ssa)
// } 

// function su() {
//     const  sss = document.getElementById("sum").value;
//     const aa = parseInt(sss.slice(0,1));
//     const bb = parseInt(sss.slice(1,2));
//     const cc = parseInt(sss.slice(2,3));
//     const dd = parseInt(sss.slice(3,4));
//     const ee = parseInt(sss.slice(4,5));
    
//     alert(aa+bb+cc+dd+ee)
//     alert("Now the product is")
//     alert(aa*bb*cc*dd*ee)
// } 


// function sep() {
//     const sep = [1,2,3,4,5,6,7,8,9,10,11,12,13,45,76,54,87,95,43,57,98,42,56,89,76,09,78,76,554,443,32];
//     const seee = sep.filter((item%2===0){
    
//     })
//     const seeee = sep.filter((item%2!==0)=>{
    
//     })
//     alert(seee,"is even one and",seeee,"is odd one")
// }



// // counta substring
// function find() {
// var strr =document.getElementById("strr").value;
// var st = document.getElementById("st").value;
// // const fin = parseInt(count(strr, st));
// // // alert(find)
// // console.log(fin);
// console.log(count(strr, st));

 
// }

// function al(){
// var myStr = 'freedom is not worth having if it does not include the freedom to make mistakes.';
// var newStr = myStr.replace(/freedom/g, "liberty");

// // Printing the modified string
// document.write(newStr);
// }




// check whether the triangle is equalant or not
function equ() {
    
    var ab = parseInt(document.getElementById("ab").value);
    var bc = parseInt(document.getElementById("bc").value);
    var ca = parseInt(document.getElementById("ca").value);
 var hhh = ab===bc
 var hhhh = bc===ca
    if (hhh===hhhh) {
     alert("the triangle is equalant")
 }
 else{
     alert("the triangle is not equalant")
 }}
 // check whether the triangle is equalant or not
function iso() {
    
    var ab = parseInt(document.getElementById("ab").value);
    var bc = parseInt(document.getElementById("bc").value);
    var ca = parseInt(document.getElementById("ca").value);
 var hhh = ab===bc
 var hhhh = ab===ca
    if (hhh===hhhh) {
     alert("the triangle is isoselos")
 }
 else{
     alert("the triangle is not isoselos")
 }}// check whether the triangle is equalant or not
 function sca() {
     
     var ab = parseInt(document.getElementById("ab").value);
     var bc = parseInt(document.getElementById("bc").value);
     var ca = parseInt(document.getElementById("ca").value);
  var hhh = ab!==bc
  var hhhh = bc!==ca
     if (hhh===hhhh) {
      alert("the triangle is scalane")
  }
  else{
      alert("the triangle is not scalane")
  }}


// check week by its number
function week() {
const week = parseInt(document.getElementById("week").value);

switch (week) {
    case 1:
        var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
        newDiv.innerText = "The Day in Monday"
       document.getElementById('1').appendChild(newDiv)
        break;
        case 2:
        var newDiv = document.createElement('div');
            newDiv.style.backgroundColor = "yellow";
            newDiv.style.fontSize = "40px";
            newDiv.innerText = "The Day in Tuesday"
           document.getElementById('1').appendChild(newDiv)
        break;
        case 3:
            var newDiv = document.createElement('div');
            newDiv.style.backgroundColor = "yellow";
            newDiv.style.fontSize = "40px";
            newDiv.innerText = "The Day in Wednesday"
           document.getElementById('1').appendChild(newDiv)
        break;
        case 4:
            var newDiv = document.createElement('div');
            newDiv.style.backgroundColor = "yellow";
            newDiv.style.fontSize = "40px";
            newDiv.innerText = "The Day in Thursday"
           document.getElementById('1').appendChild(newDiv)
        break;
        case 5:
            var newDiv = document.createElement('div');
            newDiv.style.backgroundColor = "yellow";
            newDiv.style.fontSize = "40px";
            newDiv.innerText = "The Day in Friday"
           document.getElementById('1').appendChild(newDiv)
        break;
        case 6:
            var newDiv = document.createElement('div');
            newDiv.style.backgroundColor = "yellow";
            newDiv.style.fontSize = "40px";
            newDiv.innerText = "The Day in Saturday"
           document.getElementById('1').appendChild(newDiv)
        break;
        case 7:
            var newDiv = document.createElement('div');
            newDiv.style.backgroundColor = "yellow";
            newDiv.style.fontSize = "40px";
            newDiv.innerText = "The Day in Sunday"
           document.getElementById('1').appendChild(newDiv)
        break;

    default:
        var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
        newDiv.innerText = "The number doesn't represent a day"
       document.getElementById('1').appendChild(newDiv)
        break;
}
}


// by number month
function mon() {
    const mon = parseInt(document.getElementById("mon").value);
    var monn = {
        a:'January',
        b:'February',
        c:'March',
        d:'April',
        e:'May',
        f:'June',
        g:'July',
        h:'August',
        i:'September',
        j:'October',
        k:'November',
        l:'December'
    }


switch (mon) {
    case 1:
        var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
        newDiv.innerText = monn.a
       document.getElementById('2').appendChild(newDiv)
        break;
        case 2:
        var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
        newDiv.innerText = monn.b
       document.getElementById('2').appendChild(newDiv)
        break;
        case 3:
        var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
        newDiv.innerText = monn.c
       document.getElementById('2').appendChild(newDiv)
        break;
        case 4:
        var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
        newDiv.innerText = monn.d
       document.getElementById('2').appendChild(newDiv)
        break;
        case 5:
        var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
        newDiv.innerText = monn.e
       document.getElementById('2').appendChild(newDiv)
        break;
        case 6:
        var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
        newDiv.innerText = monn.f
       document.getElementById('2').appendChild(newDiv)
        break;
        case 7:
        var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
        newDiv.innerText = monn.g
       document.getElementById('2').appendChild(newDiv)
        break;
        case 8:
        var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
        newDiv.innerText = monn.h
       document.getElementById('2').appendChild(newDiv)
        break;
        case 9:
        var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
        newDiv.innerText = monn.i
       document.getElementById('2').appendChild(newDiv)
        break;
        case 10:
        var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
        newDiv.innerText = monn.j
       document.getElementById('2').appendChild(newDiv)
        break;
        case 11:
        var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
        newDiv.innerText = monn.k
       document.getElementById('2').appendChild(newDiv)
        break;case 12:
        var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
        newDiv.innerText = monn.l
       document.getElementById('2').appendChild(newDiv)
        break;

    default:
        var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
        newDiv.innerText = "This number doesn't represent a number assigned to month"
       document.getElementById('2').appendChild(newDiv)
        break;
}
}


// check the notes in a value
function notes() {
    const notes = parseInt(document.getElementById("notes").value);
    if (notes<10) {
        alert("not notes")
    
    }
    if(notes<100){
        var s =parseInt( notes/10);
        alert("There will be "+s+" notes of 10")
    
    }
    if(notes<500){
        var s = parseInt(notes/100);
        var hh = s.slice(0,1)
        var hhh = s.slice(2,3)
        alert(hh+hhh)
    }

    else{
        alert("the given value is greater then the money in ATM")
    }
    
}



// check by anlge whether the triangle is valid or not 
// function ang() {
//     var aa = parseInt(document.getElementById("aa").value);
//     var bb = parseInt(document.getElementById("bb").value);
//     var cc = parseInt(document.getElementById("cc").value);
//     var ab = parseInt(aa+bb);
//     var bc = parseInt(bb+cc);
//     var ac = parseInt(aa+cc);
//     if(ab=cc){
//         alert("The triangle is valid")
//     }
//     if(bc=aa){
//         alert("The triangle is valid")
//     }
//     if(ac=bb){
//         alert("The triangle is valid")
//     }
//     else{
//         alert("The triangle is not valid")
//     }
// }



// check the profit or loss
function pro(){
    const buy = parseInt(document.getElementById("buy").value);
const sell =parseInt(document.getElementById("sell").value);
if (buy>sell) {
    var s = parseInt(buy-sell);
    alert("The loss is"+s)
}
if (sell>buy) {
    var s = parseInt(sell-buy)
    alert("The profit is"+s)
}
else{
    alert("There is not profit or loss")
}
}



// remove first character of string
function remo() {
    const remo = document.getElementById("remo").value;
    var s = parseInt(remo.length)
alert(remo.slice(1,s))
}


// remove last character of string
function rem() {
    const remo = document.getElementById("remo").value;
    var s = parseInt(remo.length-1)
alert(remo.slice(1,s))
}



// remove all character of string
function re() {
    const remo = document.getElementById("remo").value;
    var s = parseInt(remo.length-1)
alert(" ")
}


// replace first character to another string
function rep() {
    const repla = document.getElementById("repla").value;
    const torepla = document.getElementById("torepla").value;
    var s = repla.slice(1,repla.length)

    alert(torepla+s)
}


// replace last character to another string
function rep1() {
    const repla = document.getElementById("repla").value;
    const torepla = document.getElementById("torepla").value;
    var s = repla.slice(0,repla.length-1)

    alert(s+torepla)
}


// replace all character to another string
function repall() {
    const repla = document.getElementById("repla").value;
    const torepla = document.getElementById("torepla").value;

    alert(torepla)
}


// print all elements of array
function prin() {
    var s = ["Ali","Adnan","Umeed","Fahad","Faheem","Farooq","Fahmedda","Karan"]
//     var newDiv = document.createElement('div');
//     newDiv.style.backgroundColor = "yellow";
//     newDiv.style.fontSize = "40px";
//     newDiv.innerText =s
//    document.getElementById('2').appendChild(newDiv)
alert(s)
}

// merge two rays in third one
function mer() {
    var s = ["Ali","Usama","Ramzan"]
    var t = ["Umeed","Uzma","Urooda"]
    alert(s+t)
}

// seperate even and odd elements of array seperately
function eve() {
    var s =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,32,54,65,75,4,3,2,54,24,64,76,35,365,576]
for (let index = 0; index < s.length; index++) {
    // const element = array[index];
    if(index%2===0){
// alert("The"+index+"is even")
console.log("The"+index+"is even")
}
else{console.log("The"+index+"is odd")}
}

}



// sum till n
function findSum() {
    var n = parseInt(document.getElementById("n").value)
    let result = 0;
    for(let i = 1; i <= n; i++) {
      result = result + i;
    }
 
    var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
        newDiv.innerText = result
       document.getElementById('rr').appendChild(newDiv)
  }



//   sum till n all even number
function evenSum() {
    var n = parseInt(document.getElementById("n").value)
    let result = 0;
    for(let i = 1; i <= n; i++) {
    if (i%2===0) {
        result = result + i;     
    }
    else{

    }
   
    }
 
    var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
        newDiv.innerText = result
       document.getElementById('rr').appendChild(newDiv)
  }
  


  //   sum till n all odd  number
function oddSum() {
    var n = parseInt(document.getElementById("n").value)
    let result = 0;
    for(let i = 1; i <= n; i++) {
    if (i%2!==0) {
        result = result + i;     
    }
    else{
        
    }
   
    }
 
    var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
        newDiv.innerText = result
       document.getElementById('rr').appendChild(newDiv)
  }
  

//   print table of the letter
// function table() {
//     var tabl = parseInt(document.getElementById("table").value)
//     console.log(tabl+tabl);
//     var newDiv = document.createElement('div');
//     newDiv.style.backgroundColor = "yellow";
//     newDiv.style.fontSize = "40px";
//     newDiv.innerText = tabl+"x"+"1"+"="+tabl + "        "+tabl+"x"+"1"+"="+tabl+tabl
//    document.getElementById('rra').appendChild(newDiv)
// }
  
function table() {
  
const number = parseInt(document.getElementById("table").value);

for(let i = 1; i <= 10; i++) {

    const result = i * number;
    
    var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
        newDiv.innerText = number+"X"+i+"=" +result     
       document.getElementById('rra').appendChild(newDiv)
   
}
}

// count digits in a number
function digit() {
    var digit = document.getElementById("digits").value

    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
    newDiv.innerText =digit.length
   document.getElementById('rrb').appendChild(newDiv)
}

// find first and last number of digit
function dig() {
    var digit = document.getElementById("digits").value
console.log(digit.slice(0,digit.length-1));
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
    newDiv.innerText =digit.slice(0,digit.length-1)
   document.getElementById('rrb').appendChild(newDiv)
}

// swap first and last digit
function swap() {
    var digit = document.getElementById("digits").value
var di = digit.slice(0,1)
var dig = digit.slice(1,digit.length-1)
var digt=digit.slice(digit.length-1,digit.length)
        var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
        newDiv.innerText =digt+dig+di
       document.getElementById('rrb').appendChild(newDiv)
}


// sum of all digits
function su() {
    var digit = document.getElementById("digits").value
    let result = 0;
    for(let i = 1; i <= digit; i++) {
      result = result + i;
    }
    alert(result)
 
}

// sum of all digits
function prod() {
    var digit = document.getElementById("digits").value
    let result = 1;
    for(let i = 1; i <= digit; i++) {
      result = result * i;
    }
    alert(result)
 
}


// find occurance of a character
function occur(){
    var r = document.getElementById("full").value; 
    var s = document.getElementById("find").value;
    var g =r.split('');
    var result=1;
    for (let index = 0; index < g.length; index++) {
        if(index=s){
            result=result+1
        }
        else{

        }
        
    }
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
    newDiv.innerText ="The "+s+" is "+result+" time in the string"
   document.getElementById('rrb').appendChild(newDiv)
console.log(result);
}



function word() {
    var r = document.getElementById("word").value;
    var arr=r.trim().split(" ")
    console.log(arr);
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
    newDiv.innerText =arr.slice(1,arr.length)
   document.getElementById('rrb').appendChild(newDiv)
}


function word1() {
    var r = document.getElementById("word").value;
    var arr=r.trim().split(" ")
    console.log(arr);
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
    newDiv.innerText =arr.slice(0,arr.length-1)
   document.getElementById('rrb').appendChild(newDiv)
}



function word2() {
    var r = document.getElementById("word").value;
    var arr=r.trim().split(" ")
    console.log(arr);
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
    newDiv.innerText =arr.slice(0,1)
   document.getElementById('rrb').appendChild(newDiv)
}

function word3() {
    var r = document.getElementById("word").value;
    var arr=r.trim().split(" ")
    console.log(arr);
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
    newDiv.innerText =arr.slice(arr.length-1,arr.length)
   document.getElementById('rrb').appendChild(newDiv)
}


function word4() {
    var r = document.getElementById("word").value;
    var arr=r.trim().split(" ")
    console.log(arr);
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
    newDiv.innerText =" "
   document.getElementById('rrb').appendChild(newDiv)
}


function word5() {
    var r = document.getElementById("word").value;

    console.log(arr);
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
    newDiv.innerText =r.trim()
   document.getElementById('rrb').appendChild(newDiv)
}


// array handling
var arr = [1,3,4,3,5,7,5,4,6,54,4,3,5,4,3,5,7,5,4,3,6,7,5,4,3,5,7,5,4,2,9,0,7,6,5,4,3,4,6,4,6,4,8,3,3]

function reve() {
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
    newDiv.innerText =arr.reverse()
   document.getElementById('arr').appendChild(newDiv)
}

function sear() {
    var sear = document.getElementById("fre").value
    for (let index = 0; index < arr.length; index++) {
       if(index=sear){

           var newDiv = document.createElement('div');
           newDiv.style.backgroundColor = "yellow";
           newDiv.style.fontSize = "40px";
           newDiv.innerText =index+"This element is present in array"
          document.getElementById('arr').appendChild(newDiv)
        }
       else{
        var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
        newDiv.innerText =index+"This element is not present in array"
       document.getElementById('arr').appendChild(newDiv)
       }
        
    }
}



function sep() {
    var even=[]
    var odd=[]
    for (let index = 0; index < arr.length; index++) {
        if(index%2===0){
            even.push(index)
        }
        else{
            odd.push(index)
        }
    }
    var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
        newDiv.innerText =even +"  ^==Even Array   Odd Array==^  "+ odd
       document.getElementById('arr').appendChild(newDiv)
}


function sorr(){
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
    newDiv.innerText =arr.sort()
   document.getElementById('arr').appendChild(newDiv)
}


function sorrr(){
   var s=arr.sort()
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
    newDiv.innerText =s.reverse()
   document.getElementById('arr').appendChild(newDiv)
}
var rrr=[1,2,3,4,5]

function lef(){
    var s=rrr.slice(0,1)
    var ss = rrr.slice(1,rrr.length)
     var newDiv = document.createElement('div');
     newDiv.style.backgroundColor = "yellow";
     newDiv.style.fontSize = "40px";
     newDiv.innerText =ss+","+s
    document.getElementById('arr').appendChild(newDiv)
 }

 function rigt(){
    var s=rrr.slice(rrr.length-1,rrr.length)
    var ss = rrr.slice(0,rrr.length-1)
     var newDiv = document.createElement('div');
     newDiv.style.backgroundColor = "yellow";
     newDiv.style.fontSize = "40px";
     newDiv.innerText =s+","+ss
    document.getElementById('arr').appendChild(newDiv)
 }







// find highest frequency character in string
function fre() {
    var free = document.getElementById("fre").value
    var fr = free.split('');
  var max = 0,
            maxx = '';
         
       fr.forEach(element => {
        if(free.split(element).length > max) {
            max = free.split(element).length;
            maxx = element;
return maxx;
         }
       });
       console.log(maxx)
       var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
    newDiv.innerText ="The highest frequency character is "+maxx
   document.getElementById('free').appendChild(newDiv)
}


// find lowest frequency character in string
function lower() {
    var free = document.getElementById("fre").value
    var fr = free.split('');
  var max = 1,
            maxx = '';
         
       fr.forEach(element => {
        if(free.split(element).length = max) {
            max = free.split(element).length;
            maxx = element;
return maxx;
         }
       });
       console.log(maxx)
       var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
    newDiv.innerText ="The lowest frequency character is "+maxx
   document.getElementById('free').appendChild(newDiv)
}