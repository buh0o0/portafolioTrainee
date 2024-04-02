
import{ barcelona, roma, paris,londres,bogota} from './ciudades.js'

let ciudades = document.querySelectorAll('a')
let titulo1 = document.getElementById('titulo');
let subtitulo1 = document.getElementById('subtitulo');
let parrafo1 = document.getElementById('parrafo');

ciudades.forEach(function (ciudad){
    ciudad.addEventListener('click', function(){
        //vamos a limpiar la clase active que tengan los elementos a 
            ciudades.forEach(function(ciudad){
                ciudad.classList.remove("active");
            });
        //agregar la clase al elemento actual
        this.classList.add('active')
        // seleccionar los  datos para mostrar
        let datos = ObtenerDatos(this.textContent)
                //mostrar la informacion en el DOM
        titulo1.innerHTML = datos.titulo
        subtitulo1.innerHTML = datos.subtitulo
        parrafo1.innerHTML = datos.parrafo
    })
});
//funcion para elegir la informacion correcta de ciudades.js

let ObtenerDatos = function(enl){
    let a = {
        'Barcelona':barcelona,
        'Roma':roma,
        'París':paris,
        'Londres':londres,
        'Bogota':bogota
    }
    return a[enl]
}
//pintar  el  color de los p cuando se hace focus


parrafo1.addEventListener('focus', (event) => {
  }, true);
  
  parrafo1.addEventListener('blur', (event) => {
    event.target.style.backgroundColor = '';
  }, true);

