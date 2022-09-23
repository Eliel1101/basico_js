//Seleccionar un elemento del HTML

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#numero1');
const input2 = document.querySelector('#numero2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#resultado');

//Funcion de calculo

function btnOnClick() {
    const SumaInputs = Number(input1.value) + Number(input2.value);
    result.innerHTML = "Resultado " + SumaInputs;
}