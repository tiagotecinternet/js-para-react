// 10-async-await.js
import fetch from 'node-fetch';

/* Trabalhando com comunicação assíncrona (ajax) */
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then( resposta => resposta.json() )
    .then( dados => console.log(dados) )
    .catch( error => console.log('Erro na operação: '+error.errno) ) ;

/* Sintaxe usando função e async/await */

// async function acessaApi(){ // função tradicional
const acessaApi = async () => { // arrow function
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const dados = await resposta.json();
        console.log(dados);
    } catch (error) {
        console.log('Deu ruim: '+error.errno);
    }
}

acessaApi();

