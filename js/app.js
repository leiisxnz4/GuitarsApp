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