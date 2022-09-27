class Pessoa {
    // Propriedades
    nome = 'sem nome';
    genero = 'não informado';

    // Métodos
    mostraGenero() {
        console.log( this.genero );
    }

    mostraNome(){
        console.log( this.nome );
    }
}

/* Criando objetos/instâncias */
let umaPessoa = new Pessoa;
umaPessoa.nome = 'Tiago';
umaPessoa.genero = 'masculino';

console.log(umaPessoa);







