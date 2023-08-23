//------------------------------------Operators, if/else, for loops-------------------------------------------//

//mai ne yahan kaha hai ki user jo bhi num de dega us mai 5 add krna
//let userFavNum= +prompt("enter your fav num?")
//console.log(userFavNum + 5);


// **********comparison operators:**************
// ==,=== tipple = checks the datatype and value both but double = is only check the value.
//console.log(5=="5"); yahan double = hai true de dega jab ki ak num mai hai aik string main. q ki ya data type chk nhi krta
//console.log(5==="5"); it will give false. always use tripple equels 2

//NOT EQUALS TO: !=,!== single not = can not check the data type and !== chk the datatype and value both.
//console.log(5!="5"); false
//console.log(5!=="5"); true

//<=, >=


//if else conditions.***************** Conditional statements ******************
//prompt hamisha value string mai dedeta hai is liya hum + ka use kte hai us se pehla num mai convert kwane k liya
setTimeout (function()
{
let userAge= +prompt("Please enter your age?");
if (userAge>=18)
{
    console.log("you are eligible for CNIC.");
    document.write("yor can take your CNIC");
}
else
{
    console.log("sorry you are not eligible for CNIC.");
   // document.write(" sorry not eligible");
}
},20000)
//making a game by using if else statement
setTimeout(function()
{
let user_Num=+prompt("Enter your num?");
let com_Num= Math.round(Math.random() * 10);
if (user_Num === com_Num)
{
    console.log("Congratularion you won the game:"+com_Num);
}
else
{
   console.log("sorry you loss," + com_Num);
}
},15000)


//ziyadah conditions agar hai tou hum and or or operators use krte hai
//yahan prompt say pehle + nhi lagayange kiun ki yahan pay hum string value chahte hai
let User_Num= prompt("Select Even or Odd?");
let Com_Num= Math.round(Math.random() * 10);
if (Com_Num % 2 === 0 && User_Num ==="even")
{
  console.log("Congratularion you won computer also selected the even num:"+Com_Num);
}
else if (Com_Num % 2 !== 0 && User_Num ==="odd")
{
    console.log("you won." +Com_Num);
}
else
{
   console.log("you lose." + Com_Num);
}



//koie bhi kam ko multiple time karane k liya loops ka istimal krtein hain
for(let i=1; i<=10; i++)
{
   console.log("shoaib azam" +i);
   //document.write("shoaib" +i);
}


//table-------------------------------------------
for (let n=1; n<=20; n++)
{
   console.log("2 x" +n +"=" +2*n);
   //document.write("/t 2 x" +n + "=" +2*n);
}


