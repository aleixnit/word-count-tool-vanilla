// tenemos que capturar el evento click en el boton

document.querySelector('#btn').addEventListener('click', function() {
    console.log();
// 2. recuperar el valor que el usuario ha introducido en el input.
// 3. Poner el número de carácteres en el div o en el id output.
inputText = document.querySelector('input').value;
console.log(inputText);


const numChars = inputText.length;
document.querySelector('output').textContent = `Número de caracteres: ${numChars}`;

});