// *********************************FUNCTIONS, Recursions, Closures****************************************//

//functions: those  peace of code which we can run by our on need, and run any where
                   //if(){}, for(){}, function(){}, 
//variable banane k liya hum let k baat variable name de detein thy ise tarah function k liya bhi fun k baat name dena hai
//function ko jab bhi banawo gay tou call bhi karana hota hai warna code nhi chalega
function name(employeeNam) //parameter
{
    console.log("hello" +employeeNam);
}
name(" shoaib " ); //argument
name(" azam " );
name(" nawaz " )

                                   //RETURN:
//use of function with return. jb b return ka use krte hai tou nichy argument ko kise variable bana k waha akhte hai
//jaise yahan nichy result k naam say variable bana k arguments ko rakha hain
function add(num1,num2) //parameter
{
    return(num1 + num2);
}
let result=add(5,9); //argument
console.log(result);


                                //Resursions:
//kisee bhi kam ko krne k liya hum loops ka use krte thy ise tarah Recursion ka bhi use ksakte hai koie bhi fun apne ap ko khud call kare karwane k liya recursion


                              //closures/ sccoes:
//globle or parent scope: for whole file
//local o child scope    : for inside the function.
let a=7;     //global scope
function num()
{
    let b=8; //local scope
    console.log(b);
    //console.log(a);
}
console.log(a);
//console.log(b); //ya call nhi hoga kiun ki ya local hai tou serif function k under hi call hoga.

