//------------------------------------- project-------------------------------------------------------//
//js term: IIFE ==> Immediately invoke function Expressions: ak function ko khud hi bana k khud hi call krte ho (function) round brackets k under banate hai

(
    async function()
    {
        const response= await fetch("./recipes.json");
        const recipes= await response.json();  //json method ya kam krta hai ki jab json file se data fetch hokr ayega to wo obj mai convert krega
        console.log(recipes);

        // const inputElem = document.getElementById("searchInput");  //mare user ne kya search krne ki koshish ki hai wopata chalega
        // const btnElem  = document.getElementById("searchBtn");
        // const listElem = docoment.getElementById("reipe-list");
        
        // function search()
        // {
        //     const query= inputElem.value;
        //     console.log(query);

        // }
        // btnElem.addEventListener("click", search);
       
    }
) ();

