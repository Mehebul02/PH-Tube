const loadBtnContainer = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const categories =data.data;
    console.log(categories)
    const btnContainer =document.getElementById('btn-container');
    categories.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<button class="btn  btn-ghost bg-slate-700 text-white text-lg">${item.category}</button>`

        
        btnContainer.appendChild(div)
        
    });


}
loadBtnContainer()