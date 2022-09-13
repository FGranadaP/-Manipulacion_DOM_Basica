const h1 = document.querySelector('h1'); //Metodos
const p = document.querySelector('p'); // Selecciona el primer p que encuentra
//const ps = document.querySelectorAll('p'); // Selecciona todas las p que encuentra
const parrafito= document.getElementsByClassName('.parrafito');
const pid= document.getElementById('pid');
const input= document.querySelector('input');

console.log(h1); //Muestra el contenido del elemento, pero al 
//darle h1.NombreAtributo ponemos ingresar a su valor
console.log({h1}); // Muestra los atributos del elemento en modo
//objeto

console.log({
    h1, p, parrafito, pid, input
})

console.log(input.value); //Se recupera el valor que tenemos dentro del input

h1.innerHTML = 'Este h1 se modifico desde JS'; // Podemos introducir codigoHTML
h1.innerText = 'Modificacion posterior JS con innerText';// Solo podemos introducir texto
console.log(h1.getAttribute('class')); // Leer atributo de un elemento
h1.setAttribute('class', 'rojo'); //Enviar atributo a un elemtnto
h1.classList.add('verde'); //Agregar una clase al elemento
h1.classList.remove('verde');// Eliminar una clase al elemento
input.value = "valor modificado desde JS"; //Modificar el valor por defecto de un input
const img = document.createElement('img'); // creamos un nuevo elemento que guardamos en img
img.setAttribute('src', "https://images.pexels.com/photos/9528629/pexels-photo-9528629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");// Semodifica el atributo 'src' de img y se envia link de imagen
console.log(img); 
pid.append(img); // se agrega nuevo elemento hijo img a pid 
