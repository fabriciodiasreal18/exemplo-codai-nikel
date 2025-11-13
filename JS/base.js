const nome = "Fabricio Dias"
let nome2 = "";
let pessoadefaut = {
    nome: 'Fabricio',
    idade: "34",
    trabalho: "Programador"

}
let nomes = ["Fabricio", "Mariana", "Bernardo"];
let pessoas = [{
    nome: 'Fabricio',
    idade: "34",
    trabalho: "Programador"
},
{
    nome: 'Mariana',
    idade: "32",
    trabalho: "Finaceiro"
}
];




function alterarnome() {
    nome2 = "Maria Silva";
    console.log("Valor foi alterado")
    console.log(nome2)
}




function recebeealteranome(novonome) {
    nome2 = novonome
    console.log("Valor alterado recebendo um nome")
    console.log(nome2)

}

function imprimirpessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);

}



//imprimirpessoa(pessoadefaut);

/*imprimirpessoa({
    nome: 'Maria',
    idade: "24",
    trabalho: "atendente"

})*/


console.log(nomes[2])

console.log(pessoas)


function adicionarpessoas(pessoa){
    pessoas.push(pessoa)
}

adicionarpessoas({
    nome:"Bernardo",
    idade: "4",
    trabalho: "Pirueta"
});


function imprimirPessoa (){
    console.log("__________Imprimir Pessoas_________")
    pessoas.forEach(item => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
    });
}

imprimirPessoa();







// alterarnome();
//recebeealteranome('Joao');
//recebeealteranome('Maria');


