//------------------------------(Vaiables, Data types, Operators)------------------------------------------//

                    //difference bwtn Var let const:
//var old Js mai hota tha ES5 mai
//var is a function scoped: function k under var say bana huwa bvariale kaheen bhi use hosakta hain
//var adds itself to the window object 
var a=10; //console mai ja k windows chk koge tou pata chalega ki var ne a or b dono ko wahan add kiya hoga
var b=11;

//let or const new js yani ES6 mai hote hai.
//let const is a braces scoped only between {}
//let const does not adds itself to the new window object
let c=12; //yaa window object mai add nhi huwa wa hoga

//window object: box of features jahan say js apne liya features use krti hain jo js mai nhi hoti hai like alert/prompt/console/print ect
//windows features/objects ko dekhne k liya console mai ja kr windows likh kr enter kro sary show honge


//we use alert to show a pop up value:
alert("hello world");

//for num (addition):
let Num1=5;
let Num2=7;
let NUM3= Num1 + Num2;
console.log(NUM3);

//above for string values (concatination):
let name1="shoaib "
let name2="Azam"
let full_name= name1 + name2;
console.log(full_name);

//the above console will give us false value because capital S is not include in full_name(shoaib azam) here is a small s.
//.includes is a method
let both_name=full_name.includes("S");
console.log(both_name);

//we always use prompt for user input .
let user_input=prompt("are you new in this website?")
console.log(user_input +". you are most welcome in my web site");
document.write(user_input +" you are most welcome in my web site" );

//we use Math.random to get any random num from computer.
let randomNumber= Math.random();
randomNumber= randomNumber * 10;
//if you don't want decimal or floating valuse you can use roundoff trick to round the num.
let roundedNum= Math.round(randomNumber);
console.log(roundedNum); 

//we use ** for gettin a power value. here the value of num will be 25
let num=5**2;
console.log(num);

