document.addEventListener('DOMContentLoaded', (event) => {
    const fullcover = document.querySelector('.body-fullcover');
    const rotcover = document.querySelector('.rot-scale-logo');
    const masked = document.querySelectorAll('.backmask');

    if (document.body.classList.contains("bodystyles")) {
        if (!sessionStorage.getItem("homeAnimationExecuted")) {
            enmascararElementos();
            setTimeout(() => {
                mostrarElementos(fullcover, masked);
            }, 5000);

            sessionStorage.setItem("homeAnimationExecuted", "true");
        } else {
            mostrarElementos(fullcover, masked);
        }
    }
});

const enmascararElementos = () => {
    const fullcover = document.querySelector('.body-fullcover');
    const rotcover = document.querySelector('.rot-scale-logo');
    const masked = document.querySelectorAll('.backmask');

    masked.forEach(element => {
        element.style.opacity = 0;
    });

    fullcover.classList.add('animateonload');
    rotcover.classList.add('animateonloadtext');
}

const mostrarElementos = (fullcover, masked) => {
    fullcover.style.opacity = 0;
    setTimeout(() => {
        fullcover.remove();
    }, 1000); // Da tiempo para que la transición de opacidad se complete

    masked.forEach(element => {
        element.style.opacity = 1;
    });
}