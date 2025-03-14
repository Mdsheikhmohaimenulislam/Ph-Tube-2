const loadButton = async () => {
    
   const res =await fetch ("https://openapi.programming-hero.com/api/phero-tube/categories")
   const data = await res.json()
 

   displayButton(data.categories);
};


//?



const displayButton = (categories) => {

    for(let categorie of categories) {


        const btnCategory =document.createElement("div")
        btnCategory.innerHTML =`
         <button  class="btn  btn-sm hover:bg-[#FF1F3D] hover:text-white">${categorie.category}</button> 
        `
        document.getElementById("catagory-container").appendChild(btnCategory)
    }
};

loadButton();