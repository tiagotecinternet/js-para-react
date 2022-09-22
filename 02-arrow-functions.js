/* Formas de trabalhar com funções */

// Sintaxe tradicional
function nomeDaFuncao() {
    console.log('Função de sintaxe tradicional...');
}

// Sintaxe de função anônima
var outraFuncao = function(){
    console.log('Outra forma de declarar função...');
};

// Chamadas de função
nomeDaFuncao();
outraFuncao();


console.log("====================");

/* EXERCÍCIOS
1) Crie uma função que receba dois valores numéricos,
calcule a diferença entre eles e retorne o resultado para
uma variável externa.

2) Mostre no console o resultado. */


function exercicio( valor1, valor2 ){
    // Opção 1
    /* let resultado = valor1 - valor2;
    return resultado; */

    // Opção 1 [refatorada]
    return valor1 - valor2;

    // Opção 2
    // resultado = valor1 - valor2;
}

let resultado = exercicio(70, 50);
console.log(resultado);