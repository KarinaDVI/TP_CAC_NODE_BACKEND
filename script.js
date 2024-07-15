const URL = "https://ayacodoacodo.pythonanywhere.com/";
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;



/* themeToggle.addEventListener('click', () => {
    body.classList.toggle('bodystyles');
    body.classList.toggle('dark-mode');
}); */

/* Agregado Karina */

const fullcover= document.querySelector('.body-fullcover');
/* const fullcover= document.getElementsByClassName('body-fullcover'); */
const rotcover=  document.querySelector('.rot-scale-logo')
const masked = document.querySelectorAll('.backmask');
const cardscontainer = document.getElementById('cardindex') //Contenedor de las cards

document.addEventListener('DOMContentLoaded', (event) => {
  if(document.body.classList.contains("bodystyles")){

    if (!sessionStorage.getItem("homeAnimationExecuted")) {

      enmascararElementos();
      setTimeout(() => {
        mostrarElementos();
      }, 3000);

     /* Guarda el estado de ejecución de la animación en la sesión del explorador
       asi no se ejecuta cada vez que redirige a la página, solo cuando se carga la pestaña.
      Se muestra la animación de nuevo solo si se cierra el explorador y se abre de nuevo la página 
      o se cierra y se abre la página. */
      sessionStorage.setItem("homeAnimationExecuted", "true");
    }
    else{
      mostrarElementos();
    }
    
  }
  
  });

  const enmascararElementos=()=>{
    masked.forEach(element => {
      element.style.opacity=0
    });
    //Al tener el documento cargado ejecuta las animaciones:
      fullcover.classList.add('animateonload');
      rotcover.classList.add('animateonloadtext');
//Luego de transcurrido el tiempo de animación vuelve la opacidad a todo
      
  }

  const mostrarElementos=()=>{
    fullcover.style.opacity=0;
    while (fullcover.lastElementChild) {
      fullcover.removeChild(fullcover.lastElementChild);
    }
    //Borra el banner despues de ejecutar la animación
    fullcover.remove();
    masked.forEach(element => {
      element.style.opacity=1
    });
  }

  //Para rellenar las tarjetas con los datos de los grupos:

  let grupos=[{
                nombre:"Los Pericos",
                img:"./assets/img/pericos.jpg",
                fecha:"26 de Mayo 2024"        
                },
                {
                nombre:"Kapanga",
                img:"./assets/img/kapanga.jpg",
                fecha:"26 de Mayo 2024"
              },
              {
                nombre:"Los autenticos decadentes",
                img:"./assets/img/decadentes.jpg",
                fecha:"1 de Junio 2024"
              },
              {
                nombre:"Lali",
                img:"./assets/img/lali.jpg",
                fecha:"4 de Junio 2024"
              }
            ]
            

for (var i = 0; i < grupos.length; i++) {
        let cardshow= document.createElement("div");
      cardshow.classList.add('col','d-flex','justify-content-center','my-2');
        cardshow.innerHTML=`
          <div class="card bg-dark cardwidth">
            <img src="${grupos[i].img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title fontMalisemibold600 ml-5 text-light">${grupos[i].nombre}</h5>
            <p class="card-text text-light">${grupos[i].fecha}</p>
          </div>
          <div class="card-body  text-light text-center">
            <a class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" href="registro.html" class="card-link ">+Info</a>
          </div>
        </div>
        `
  cardscontainer.appendChild(cardshow);
}

 


