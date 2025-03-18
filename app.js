// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaAmigos = [];
const inputAmigos = document.getElementById("amigo");
const v2listaAmigos = document.getElementById("listaAmigos");
const winResultado = document.getElementById("resultado");

function agregarAmigo() {
    if (inputAmigos.value==""){
        alert("debes ingresar el nombre")
    }
    listaAmigos.push(inputAmigos.value);
    console.log(v2listaAmigos.innerHTML)
    v2listaAmigos.innerHTML += `<li>${inputAmigos.value}</li>`;
};


function sortearAmigo(){
    const random = Math.floor(Math.random()*listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    winResultado.innerHTML = `<li>Amigo secreto es:${amigoSecreto}</li>`;
};