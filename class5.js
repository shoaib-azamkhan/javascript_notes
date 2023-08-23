//--------------------------------------------Arrays ans its methods---------------------------------------//

let months= ["January", "February", "sept", "March","April" ];
//console.log(months[months.getMonth()]);
//months[4]="May"; not recomanded ise tarah add kr k use na karein.
//add karane k liya methods ka use kro acha hai .like this
let store= prompt("Should i add the month of may in the index or not?");
if (store === "yes")
{
    months.push("May");    
}

//-------Array methods:----- months k jagay mai kuch bhi hosakta hai.jo variable rakha hoga woayega dot se pehle
   //1-months.push();        ==> push is a method to add the value in the last index od array.
   //2-months.shift();       ==> remove 1st index
   //3-months.unshift(Jan);  ==> this will add Jan inplace of January. agar uoer wala shift use nhi k k serif unshift use kroge tou dono rahange pehle jan ayega phir January
   //4-months.pop();         ==> remove value from last index of an array.
   //5-months.push();        ==> push is a method to add the value in the last index od array.
   //6-months.forEach();     ==> loops trough array values.loo ki tarah kam krta hai aik kam ko bar bar krwane k liya use krtehai
   //7-months.filter();      ==> fillter array values. jaise excel mai kte hai
   //8-months.sort();        ==> sorting or sequencing array values
   //9-months.reduce();      ==>
   //10-months.map();        ==>
   //11-months.length        ==> tell the quantity of values. ya function nhi hai is liya legth k baat hmne roundbrackets nhi lagaye hai.this is a property
   months.splice(2, 1);  //splice matlb desired location say index ko dlt krwana or 1 meains ak hi value dlt ho warna by default 2index say baki waly sary dlt honge
  //12-months.splice(2, 1 ,june, july, august); splice ka use kr k index ki value ko dlt krwane k sth add bhi krwasakte hai.you can say remove or replace values.
  //13-months.slice();                          ==> provide a new copy of an Array.
  //.toLoweCase();           ==> everything will be in small 
  //.join();                 ==> array mai jinti values hai unko concatinate k k dega string mai bhi join kr k

  let newArr= months.slice(2,5  );
  console.log(months);
  console.log(newArr);

  //console.log(typeof ...); jo bhi var mai value diya hai uski datatype ya fun hai kya hai chk krsaktein hain.