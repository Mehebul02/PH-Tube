const loadBtnContainer = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  const categories = data.data;
  console.log(categories);
  const btnContainer = document.getElementById("btn-container");
  categories.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `<button class="btn  btn-ghost bg-slate-700 text-white text-lg">${item.category}</button>`;

    btnContainer.appendChild(div);
  });
};
// load Video 
const loadVideo = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const data = await res.json();
     const categoryVideo = data.data;
     const cardContainer = document.getElementById('card-container');
     categoryVideo.forEach((item) =>{
        const div = document.createElement('div');
        div.innerHTML = ` <figure class="overflow-hidden h-72">
        <img class="w-full" src='${item.thumbnail}' alt="Shoes" />
        <h6 class="absolute bottom-[40%] right-12">0 hr</h6>
    </figure>
    <div class="card-body">
        <div class="flex space-x-4 justify-start items-start">
            <div>
                <img class="w-12 h-12 rounded-full" src="./images/smells.jpg" alt="Shoes" />
            </div>
            <div>
                <h2 class="card-title">Laugh At My Pain</h2>
                <div class="flex mt-3">
                    <p class="">Author Name</p>
                    <img class="w-6 h-6" src="./images/verify.png" alt="">
                </div>
                <p class="mt-3">100k Views</p>
            </div>
        </div>
    </div>`;
    cardContainer.appendChild(div)

     })
}
loadVideo()
loadBtnContainer();
