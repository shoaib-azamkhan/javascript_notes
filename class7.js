//------------------------------------------------DOM manipulation & Event Hanling----------------------------//


//hamara actual browser HTML ko nhi smjhta serif Javascript ko smjhta hai
//DOM change is called DOM manipulation
//use krne k liya document. phir dot k baat method ki tarah bohot sary ayange jo bhi use krsaktebho
//Javascript multiple enironments k uper chalrahi hoti hoti hai. jab b browser mai chalegi tou wahan humein DOM miljata hai. browser k elawa kise or environment mai DOM nhi melaga like node mai
   
                //dom call/updation by querySelector like "h"
let headlines= document.querySelector("h");
headlines.innerHTML= "<b> shoaib azam</b>"
console.log(headlines);
headlines.style.backgroundColor="lightpink"



                  //by id
let myPara= document.getElementById("my-para");
console.log(myPara);
myPara.innerText= "Hello world";          //dom manipulition or updation
myPara.style.backgroundColor= "lightblue" //backgroundColor for bg
myPara.style.color="#fff"                 //tripple f for white color and style.colo fo only text
setInterval(function()                //step by step code ko perform krwane k liya use krte hai. for loop or resursion say b ak kam bar bar krwasakte hai lakinwo forun say hi chalte hai.
               {
                console.log("shabiM");     //step by step bar bar shoaibm print hoga console main. 
               },500
            );                            

                   //by class
let para2= document.getElementsByClassName("para2");
console.log(para2);
para2.innerHTML= "this is second paragraph.";




     //making an animation by using javascript setinterval
let newpara= document.getElementById("newPara");
newpara.innerHTML= "<b> Welcome to sylani Javascript course</b>";
setInterval
(
    function()
    {
        let color1= Math.round(Math.random() * 1000000);
        let color2= Math.round(Math.random() * 1000000);
        console.log(color1,color2);
        newpara.style.backgroundColor= "#" + color1;
        newpara.style.color="#" + color2 ;    //for text
    }, 500

)