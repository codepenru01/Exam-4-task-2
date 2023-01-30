"use strict";

let wrapper = document.querySelector(".wrapper");

(function inc() {
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
        renderFunction(data)
    })
})()

function renderFunction(data = []){
    wrapper.innerHTML = ''
    data.forEach(item => {
        wrapper.innerHTML += `
        <div class="card">
            <img src="${item.image}" alt="svg" width="200" height="200">
            <h3 class="image__price">${item.price}</h3>
            <h3 class="image__description">${item.description.slice(0, 90)}</h3>
            <h3 class="image__title">${item.title.slice(0, 100)}</h3>
            <img  id="${item.id}" class="vector__img" src="img/vector.svg" width="13" height="14">
        </div>
        `
    })
}


wrapper.addEventListener("click", async function(e) {
    e.preventDefault()
        if (e.target.className === 'vector__img') {
            wrapper.removeChild(e.target.parentNode)
        }
})