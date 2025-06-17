const buttons = document.getElementsByClassName('button');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

const button1 = document.getElementById('mirar');
const button2 = document.getElementById('mirar2'); 
const button3 = document.getElementById('mirar3');

// Añade los listeners de estilos a los botones
function eventButton(){
    for (const button of buttons) {
        button.addEventListener('mousedown', function() {
            button.style.backgroundColor = 'white';
            button.style.color = '#ff004c';
        });

        button.addEventListener('mouseup', function() {
            button.style.backgroundColor = '';
            button.style.color = '';
        });

        button.addEventListener('mouseover', function() {
            button.style.backgroundColor = 'gray';
            button.style.color = 'white';
        });

        button.addEventListener('mouseout', function() {
            button.style.backgroundColor = '';
            button.style.color = '';
        });
    }
}
eventButton(); // Llama a la función una vez al cargar

// Función para alternar imagen y texto del botón
function toggleImage(img, button) {
    if (img.style.display === 'block') {
        img.style.display = 'none';
        button.innerHTML = 'Mirar Imagen';
    } else {
        img.style.display = 'block';
        img.style.width = '1000px'; 
        img.style.height = 'auto';
        button.innerHTML = 'Quitar imagen';
    }
}

button1.onclick = () => toggleImage(img1, button1);
button2.onclick = () => toggleImage(img2, button2);
button3.onclick = () => toggleImage(img3, button3);
