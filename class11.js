//---------------------------------http request:----------------------------------------------//
//server or client ki communication http equest pay hi hoti hain.
//how to perform http request by Javascript: request ko perform krane k liya humare pass multiple cheexein hoti hai
//public apis(for testing): sahi gin connect ne buun khali chk thok been sahi bilen a ne thy, js pay ka kr k datebase k sth connect hona chahrahy ho kam krna chahta ho ki wo thk chalraha hai ki nhi tou ya apis hoti hai
//json placeholder: ya website Fake APIs deti hain (APIs (application programming interface) wo hoti hai jis k zariye jis k uper hit kr k apna data manguwa sakte ho)
//http request Asynchronously chalti hai.(k kam process mai rakh kr baki wala kam krsakte ho). 
//fetch is a builtun function in javascript to fatching data.
//fetch k under hum koie bhi url de detein hain.

// fetch('https://jsonplaceholder.typicode.com/todos/1') //ya url ya API json placeholder se copy kiya hai
//       .then(function ( response)
//       {
//         return response.json();
//       })
//       .then(function(data)
//       {
//         console.log(data);
//       })


// fetch("https://jsonplaceholder.typicode.com/users") //ya url ya API json placeholder se copy kiya hai
//       .then(function ( response)
//       {
//         return response.json();
//       })
//       .then(function(data)
//       {
//         console.log(data);
//       })


const imagesContainer= document.getElementById("images");
fetch("https://jsonplaceholder.typicode.com/photos") //ya url ya API json placeholder se copy kiya hai
      .then(function ( response)
      {
        return response.json();                    //json method ya kam krta hai ki jab json file se data fetch hokr ayega to wo obj mai convert krega
      })
      .then(function(data)
      {
        data.forEach(function(image)
        {
          const url= image.url; 
          const imageElem= document.createElement("img");
          imageElem.src= url; 
          imagesContainer.appendChild(imageElem); 

        });
      })
