//*************************************** Advanced JS concept *******************************/
//Arrow Functions: //kise bhi statement ko chota krte hai

function add(x,y)                        //normal function
{
  return x+y;
}

const subtract= (x,y) =>{               //arrow function
    return(x-y);
};

const multiply= (x,y) => x*y; // ab ES6 mai return bhi dene ki xarurat nhi hai dekho is mai ne return nhi diya direct multiply hogaye.
const round= num => Math.round(num);      //arrow fun se num direct agiya

console.log(add(5,3));
console.log(subtract(5,3));
console.log(multiply(5,3));
console.log(round(5.97));

//arrow function apna koie new scope create nhi krta

//---Default parameters:
function add(x=50, y=10) //ya parameters mai values dene ka matlb agar mau nichy argument na de doon tou by default mai ya parameters print honge.
{
    return(x+y);
}
console.log(add());       //yahan maine arguments nhi diya hai parameters k liya
//console.log(add(5,5)); // agar inko b uncomment kr k chk kro tou uper waly parameters ki value print nhi hogi kiun ki wo by default mai print huyi thi


//rest parameters:         // jab ap sure nhi ho ki apka fun kitne parameters le lega tou ya use krte hai
function printAll(x,y,...z)
{
  console.log(x,y,z);
}
printAll(2,3,4,5,6,7,8);     //sub ko print krega ap bolo gay itne paameters nhi hai arguments kaise de diya yahee tou 3 dots k baat z tak ka bola hai matlb jitne bhi arguments de sakte hai
                             //2 or 3 ko chord k baki sari values z mai jayangi or aik array mai. kiun ki 2 is for x and 3 is for y others for z




                //-------------------------Short syntax /destructuring  objects & Arrays :--------------------------//

const firstName= "shoaib";  //y variable yaha banaya hai lakim object mai bhi khu hi values ayamge Es6 ka kamal
const secondName= "azam";
const obj={
 // firstName: firstName,     //ise tara key de b sakte or or nhi bhi
  firstName,
  secondName               //ager ya key nhi bhi do gay tou bhi call hoga (print)
}; 
console.log(obj);           //ES6 ya krti hai ki agar apka pehle koie vaiable bana wa hai tou phir ap aik object banate ho pr use variable k liye key oe value dena chahte ho


//--------------------obj:
const obj2={
  pehlaName:"shoaibaa",
  dusraName: "azamaa",
  print2Name(){
    console.log("shoaib azam");
  }

};
const {pehlaName,dusraName} =obj;
console.log(pehlaName);




//-----------  ----arrays:
const arr=["shoaib","azam","khan","kuch bhi"];
//const copyWala=[...arr];                      //
const [ , middleName, lastName, abc]=arr;      // indexing==> 0/ :"shoaib", 1/middleName:"azam", 2/lastName:"khan", 3/abc:"kuch bhi"
 console.log(abc);
 
 


 //-----------------------------Spread Operators:-----------//kise bhi obj ko ya kise bhi array ko expend krdete hai
//------arr in spread operator:
 const arr1= ["shoaib","azam","khan1"];
 const newArr= ["copywala:", ...arr];   //pehle array ki dusri copy bana ne k liya slice method ka use krte thy
                                                                  
 console.log(newArr);



 //------obj in spread operator:
 const obj3={
  name1:"shabi",
  lastName1:"raj"
 };
// const copyWala1={ ...obj3, age:21, city:"karachi" ,name1:"shobi"};   //yaha property over right hogi or shabi cancel ho k shobi print hoga.
 const copyWala1={ ...obj3, age:21, city:"karachi" };  //baki waly changes serif nichy waly jo copyy ho kr aya hoga us mai honge.
 console.log(copyWala1);