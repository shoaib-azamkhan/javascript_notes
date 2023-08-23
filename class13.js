//------------------------------------------Class & OOPs-------------------------------------------//
//aise programming jo objects k around involve ko OOPs (object oriented programming) kehlati hai
//classes ka kam hota hai objects bana kar dena. classes are blue print antity for an object
// class ka name hamisha Caiptal latter say start hota ha. class name{} 
//---class name{}-----
class Product
{
    constructor(title, amount, description)
    {
        this.title= title;      //title ki jaga kuch bhi
        this.price = amount;    //yahan this.price mai ap kuch bhi raksakte ho value se related amoumt b raksakte hai
        this.details= description; //details ki jaga description b de sakte hai

    }
}
//ab ap yahan uper wali class yani aik blue print hai us k jitne bhi objects banana chaho banasakte ho.
const Product1= new Product("LED TV", 12000, "4K Ultra HD Display");
const Product2= new Product("Samsung", 22000, "Android 12 OS");
const Product3= new Product("Lenovo", 9000, "LXR full HD Display");
const Product4=      //is tarah alag se obj banane se bugs b ajate hai 
{
    title:"Lenovo",
    details: "8th Gen Intel Core i7 Processor",
    price :56000   //price key value pair add krna

}
console.log(Product1,Product2,Product3,Product4);
console.log(Product1 instanceof Product); //you will see true here.kiun ki ya obj instance hai Product class ka.
console.log(Product4 instanceof Product); //false ayega kiun ki ya obj uper wali class ka instance hai hi nhi alag ha.


//----
class Shape {
    constructor (id, x, y) 
    {
        this.id = id;
        this.move(x, y)
        // this.x=x;            //ise tara b krwasakte hai move cancel kr k
        // this.y=y;
    }
    move (x, y)               //move krwa k x,y k under mai nichy waly arguments rakhwana chahta hoon
                     //is tara krne se value prototype mai milti hai. kiun ki prototype ki ak hi copy banti hai
    {                //ya method hai jab bhi create krno ho ise tara krna hai constructor k baher a k.baki function bana k 
                     //kroge tou us ki aik nhi bohot sari copies banti hai jis say space ya storage jaldi khtm hojati ha
        this.x = x
        this.y = y
    }
}
let shapeA = new Shape('shape-a', 10, 20);
console.log(shapeA);
//shapeA.move();               //ya method hai ise tarah call b karwasakte hai



//---
const students=[];
class Student 
{
    constructor(firstName,lastName,rollNo,batch,course,teacher) //{name:'John Doe'} object ka property ko set hogi ya name ke li
    {
        this.firstname= "firstName";
        this.lname= "lastName" ;
        this.rollNo= "rollNo";
        this.batch= "batch";
        this.course= "course";
        this.staff= "teacher";
    }
}
const shoaib= new Student("shoaib", "azam", 254029, 11, "metaverse", "ishaq bhojani");
const nawaz= new Student("sher", "nawaz", 222, 1, "javascript", "ishaq");
students.push(shoaib);
students.push(nawaz);
console.log(students);

//----------------------------------------------classes inheritance-----------------------------------------//
class Volenteer extends Student
{
    constructor(name,id,batch,subject)
    {
        super(name,id,batch,subject);           //jab bhi inherit krawoge tou super ka use krna hota hai
        
    }
}
const Volenteer1= new Volenteer("ishaq bhojani", 221, 9, "javascript");
students.push(Volenteer1);
console.log(students);


//------------------------------------------------Classes static---------------------------------------------//
//hum instance banaye bagair ise use karsakte hai.
//