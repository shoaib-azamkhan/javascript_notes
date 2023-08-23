//----------------------------------------------objects and browser stroge------------------------------------//

let person= //object
{
    name:"shoaib azam",         //property
    CNIC: 714024678363,         //property
    age : "25",                 //property
    eyecolor:"black",           //property
    englishspeak: false,        //property
     speak: function(sentence) // ise tarah agar object mai/objct k under koie function aye tou wo method kehlati hain 
    {
        console.log(sentence);

    }

}
let person2= //object
{
    name:"sher nawaz",         //property
    CNIC: 714024678363,         //key
    age : "31",                 //property
    eyecolor:"black",           //value
    englishspeak: true,        //property
     speak: function(sentence) // ise tarah agar object mai/objct k under koie function aye tou wo method kehlati hain 
    {
        console.log(sentence);

    } 
}
person2.speak("hello, i am shoaib bhai");
console.log(person);
console.log(person.eyecolor); //specific aik property ko call karane k liya object k sth .dot or property.

let student1= //object
{
    name: "azam",
    course:"javascipt",
    rollNo:123,
    instructor:"mir azam"
}
let student2=   //object
{
    name: "raju",
    course:"python",
    rollNo:222,
    instructor:"nafas jan"
}
let student3=   //object
{
    name: "nawaz",
    course:"metaverse",
    rollNo:333,
    instructor:"shoaib"
}

//let students=[student1, student2, student3, ];
//console.log(students);

//hum  functions k through bhi krwasakte hain
//let previousStudent=localStorage.getItem("stdnts");  //get from local storage
//let stdnts= previousStudent? JSON.parse(previousStudent): [];
let stdnts=[]; 
function provideStudent()
{
  let std =
   { 
    name:prompt("enter your name"),
    rollno:+prompt("enter your rollno"),
    teacher:prompt("whos is your teacher"),
    courses:prompt("which course you are entroled in"),
   };
}
stdnts.push(std);
console.log(stdnts);
//let stringify=JSON.stringify(stdnts); //convert it to string
//localStorage.setItem("stdnts" ,stringify);  //save it to localstorage
//console.log(students);


let obj= {name:"azam"};
obj.name="shoaib";    // azam ki jagah change ho k shoaib ayega
//delete obj.name     hamisha k liya dlt hoga
//obj.replace("azam","shoaib");