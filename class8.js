//--------------------------------------Date/Time, Math Functions.--------------------------------------------//
 
const date= new Date();     //new k baat haisha kise class ka name ayega.//yaha pe Date as a class use huwa hai class or constructor ka first latter capital rakhna hai.
                            //first latter capital ho or round brackets ho tou smjhna hai ki ya koie class hai or aj kal constructor khtm hogaye hai serif classes.
console.log(date);              //ajj ki current date show hogi
 //console.log(date.getDay());  //ya ak method hai or object k under rakhawa function hain.ya round brackets k st hai
                            
                                //ES5(eigma scipt) Classes nhi thi constructors thy. 
 
        //methods:
console.log(date.getDay());  
console.log(date.getMonth());   // ya humain 6 batayega jab ki ya month july ka hai tou 7 hona chahiya tha iski waja ya hai ki ya Array k mutabiq chalta hai.indexing mai zero say start hota hai is liya 
console.log(date.getFullYear()); // for year
console.log(date.getHours());
console.log(date.getMinutes());

//now we will set not get: set say humain comparison miljati hai, logics banane k liya kam ata hain.countdown timer banate waqt kam ata hai.actual time mai se is time tak kitna time rehgiya or kitna time guzar chuka hain.
date.setDate(12);
console.log(date); 


//new const: hum khud set kwarahai hai ki ise din mai date time year mai yaa ho. customly set krwaya hai
const doomsday= new Date();
doomsday.setDate(10);
doomsday.setHours(0);          // 0 means raat k 12bjy
doomsday.setMinutes(30);       // 12:30 pay ayegi
doomsday.setMonth(9);
doomsday.setFullYear(2024);
console.log( "The doomsday will be",doomsday);

//make a logic
// const date2= new Date();
// let diff = doomsday.getTime - date2.getTime;
// console.log((diff / (1000 * 60 * 60 *24 *365)).toFixed(1));


// making a digital clock:ya ids html mai jo div banaye hai wahan say get krwaliya hai.
const hoursElem= document.getElementById("hours");
const minutesElem= document.getElementById("minutes");
const secondsElem= document.getElementById("seconds");

setInterval(function() 
{
const date3= new Date();
hoursElem.innerText= date3.getHours();
minutesElem.innerText= date3.getMinutes();
secondsElem.innerText= date3.getSeconds();
}), 1000;