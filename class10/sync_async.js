//-------------------Synchronous Javascript & Asychronous Javascipt (callbacks, Promises, Async/await)-----------//
//Javascript aik Synchronous behaviour/language hai is mai kam step by step krna hota hai.//Asynchronous mai ak kam ko process mai rakh k dusra kam ksakte hai. 
//abhi yahan pehle alert chalega console jab tak show nhi horaha hoga jab tak alert nhi hota kium ki ya step by step chalta hai. 
    

                           //Synchronous behavious:
// alert("hello world:"); //first
// console.log("welcome world:"); //then this 

//for loop mai abhi 5000 ane tak shoaib wala console print nhi hoga . Sychronour behaviour pay chalti hai
for(let i=1; i<=5000;i++)
{
    console.log(i);
}
console.log("welcome shoaib azam:"); 



                           //Asynchronous: baat wale instruction pehle show krwane kliye 
function runAfter1sec()  //artificially khud create kiya hai ya function //mai is fun mai kehraha hoom ki ya kam itne seconds(2000) k baat perform ho
{
    setTimeout(function ()
    {
        console.log("done");
    }, 2000);                 // done will be print after 200 sec or after console //1 thousand means 1second
}
runAfter1sec();
console.log("hey how are you doing:");


//---------------------------------------------
function runAfter()
{
    setTimeout(function ()
    {
        alert("Sho watus?");
    },2000);
}
runAfter();
console.log("Waan eja:");

//callbacks, Promises, Async/await: ya sari cheezein (phenominas) Asynchronous behaviours ko control krne k liya use hoti hai. 
