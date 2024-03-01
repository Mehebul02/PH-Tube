const loadBtnContainer = async (id) => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  const categories = data.data;
  console.log(categories);
  const btnContainer = document.getElementById("btn-container");
  categories.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `<button onclick="fetchCategory('${item.category_id}')" class="btn  btn-ghost bg-slate-700 text-white text-lg">${item.category}</button>`;

    btnContainer.appendChild(div);
  });
};
let selectCategory = 100;
const fetchCategory = async (categoryId) => {
  selectCategory = categoryId;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
  const data = await res.json();
  const categoryVideo = data.data;

  const cardContainer = document.getElementById("card-container");
  const errorEl = document.getElementById("error-element");
  if (categoryVideo.length === 0) {
    errorEl.classList.remove("hidden");
  } else {
    errorEl.classList.add("hidden");
  }
  cardContainer.innerHTML = "";
  categoryVideo.forEach((item) => {
    const div = document.createElement("div");
    div.classList = `card w-full bg-base-100 shadow-xl`;
    let verifiedBridge = "";
    if (item.authors[0].verified) {
      verifiedBridge = `<img class="w-6 h-6" src="./images/verify.png" alt="">`;
    }
    div.innerHTML = ` <figure class="overflow-hidden h-72">
        <img class="w-full" src='${item.thumbnail}' alt="Shoes" />
        <h6 class="absolute bottom-[40%] right-12">0 hr</h6>
    </figure>
    <div class="card-body">
        <div class="flex space-x-4 justify-start items-start">
            <div>
                <img class="w-12 h-12 rounded-full" src='${item.authors[0].profile_picture}' alt="Shoes" />
            </div>
            <div>
                <h2 class="card-title">${item.title}</h2>
                <div class="flex mt-3">
                    <p class="">${item.authors[0].profile_name}</p>
                   ${verifiedBridge}
                </div>
                <p class="mt-3">${item.others.views}</p>
            </div>
        </div>
    </div>`;
    cardContainer.appendChild(div);
  });
};

fetchCategory();
loadBtnContainer();
