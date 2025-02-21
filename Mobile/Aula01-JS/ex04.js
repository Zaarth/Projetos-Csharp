function exibirDetalhesProduto(produto){
    return `Produto: ${produto.nome}, Preço: R${produto.preco.toFixed(2)}, Estoque: ${produto.estoque} unidades.`;
}

const produto = {
    nome: "Notebook",
    preco: 6000.00,
    estoque: 30
}

console.log(exibirDetalhesProduto(produto))


const numeros = [1,2,3,4,5];
numeros.forEach(num=>{
    console.log(`Numero: ${num}`);
});

