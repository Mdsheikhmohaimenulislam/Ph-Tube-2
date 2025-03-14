const loadButton = async () => {
    
   const res =await fetch ("https://openapi.programming-hero.com/api/phero-tube/categories")
   const data = await res.json()
   displayButton(data.categories);
};


const loadVideo = async () => {

    const res =await fetch ("https://openapi.programming-hero.com/api/phero-tube/videos")
    const data = await res.json()
    displayVideo(data.videos);
}

//?

// display video

const displayVideo = async (videos) => {


    videos.forEach(video => {
        console.log(video);

        const videoCard = document.createElement("div")
        videoCard.innerHTML = `
        <div class="card bg-base-100 ">
            <figure class="related">
              <img  class="w-full h-[150px] object-cover rounded"
                src="${video.thumbnail}"
                alt="" />
                <span class = "absolute bg-black text-white bottom-20 right-2 p-1 rounded">3hrs 56 min ago</span>
            </figure>
            <div class="card-body p-0 mt-3">
                <div class="flex space-x-5 "> 
                    <div>
                    <div class="avatar">
  <div class="ring-primary ring-offset-base-100 w-7 rounded-full ring ring-offset-2">
    <img src="${video.authors[0].profile_picture}" />
  </div>
</div>
                    </div>
                    <div>
                        <h1 class="text-sm font-bold">${video.title}</h1>
                     <p class="text-gray-400">
                        ${video.authors[0].profile_name}<img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=SRJUuaAShjVD&format=png" alt="">
                        </p>

                        <p class="text-gray-400">${video.others.views} views </p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        `
        document.getElementById("video-container").appendChild(videoCard)
    });
    
}



// display button
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

loadVideo ();