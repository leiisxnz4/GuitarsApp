/*
import { db } from './guitarras.js';

// Iterar arrays
// ciclos
// for(let i = 0; i < db.length; i ++){
//     console.log(db[i].nombre);
// }

const createCard = (name) => {
    const div = document.createElement('div')
    div.className = 'col-md-6 col-lg-4 my-4 row align-items-center'
    div.innerText = name
    return div
}

const container = document.querySelector('main div')


// Métodos de Arrays para Iterar
db.forEach((guitar) => 
    {console.log(guitar.nombre)
    container.appendChild(createCard(guitar.nombre))
});
*/

import { db } from './guitarras.js';

const divContainer = document.querySelector('main div');
// const carrito = []

const createCard = (guitar) => {
    const div = document.createElement('div')
    div.className = 'col-md-6 col-lg-4 my-4 row align-items-center'
    const html = ` <div class="col-4">
                    <img class="img-fluid" src="./img/${guitar.imagen}.jpg" alt="imagen guitarra">
                </div>
                <div class="col-8">
                    <h3 class="text-black fs-4 fw-bold text-uppercase">${guitar.nombre}</h3>
                    <p>${guitar.descripcion}</p>
                    <p class="fw-black text-primary fs-3">$${guitar.precio}</p>
                    <button 
                        data-id="${guitar.id}"
                        type="button"
                        class="btn btn-dark w-100 "
                    >Agregar al Carrito</button>
                </div>`
    div.innerHTML = html;
    return div
}

const buttonClicked = (e) => {
    if (e.target.classList.contains('btn')){
        const dataId = e.target.getAttribute('data-id')
    console.log(db [Number(dataId) - 1])
    }
}

/*
    const idGuitar = 
    const indexdb= db.findIndex(guitar => guitar.id === Number (idGuitar))
    carrito.push({...db[indexdb], 
        cantidad: 1
    })
    console.log(carrito)
    }
}
*/

/*
const createDiv = (guitar) => {
    const div = document.createElement('div');
    div.className = 'col-md-6 col-lg-4 my-4 row align-items-center'
    const html = `<div class="col-4">
                    <img class="img-fluid" src="./img/${guitar.imagen}.jpg" alt="imagen guitarra">
                </div>
                <div class="col-8">
                    <h3 class="text-black fs-4 fw-bold text-uppercase">${ guitar.nombre }</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                    <p class="fw-black text-primary fs-3">$${ guitar.precio}</p>
                    <button 
                        type="button"
                        class="btn btn-dark w-100 "
                    >Agregar al Carrito</button>
                </div>`
    div.innerHTML = html;
    return div;
}
*/

//utilizando interadores
db.forEach( guitar => {
    divContainer.appendChild(createCard(guitar) );
})

divContainer.addEventListener('click', buttonClicked)