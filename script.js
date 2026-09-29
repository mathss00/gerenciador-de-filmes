const Itens = []

function criarItem(){
    const nomeItem = prompt("Qual é o nome ?")
    const tipoItem = prompt("É uma Série ou filme ?")
    const generoItem = prompt("Qual é o gênero ?")
    
    const novoItem = {
        id: Itens.length + 1,
        nome: nomeItem,
        tipo: tipoItem,
        gênero: generoItem
    }

    Itens.push(novoItem) 
}


function removerItem(){
    const idDoItem = prompt("Digite o id do filme ou série que você quer deletar ?")

    const index = Itens.findIndex(a => a.id == idDoItem)

    if(index === -1){
        alert("Item não encontrado")
    } else {
        Itens.splice(index, 1) 
        alert("Item deletado com sucesso")
    }
 }


 function listarItens(){
    let lista = ""

    for(let i = 0; i < Itens.length; i++){
        lista += `id: ${Itens[i].id}, Nome: ${Itens[i].nome}, Tipo: ${Itens[i].tipo},
         Gênero: ${Itens[i].gênero} \n`
    }

    alert("Lista de filmes e séries: \n\n" + lista)
 }


 function buscarItem(){
    const nomeBusca = prompt("Digite o nome do filme ou série")

    const itemEncontrado = Itens.find(a => a.nome.toLowerCase() == nomeBusca.toLowerCase())

    if(itemEncontrado){
        alert("Item encontrado \n id: " + itemEncontrado.id + 
            " nome: " + itemEncontrado.nome + " tipo: " + itemEncontrado.tipo + " gênero: " + itemEncontrado.gênero)

    } else {
        alert("Nenhum Item encontrado!")
    }

 } 
 
 
 function removerUltimo(){
    const confirmar = prompt("Tem certeza que deseja remover o ultimo item?");

    if (confirmar){
   Itens.pop()
    alert("Ultimo item removido")}
 }


 function limparTodos() {
    let confirmar = confirm("Tem certeza que deseja remover todos os itens?");

    if (!confirmar) {
        
        alert("Não foi possivel remover");
    } else{
        Itens.length = 0;
        alert("Todos os itens foram removidos")
    }
}


 function ExibirTotal(){
   alert(Itens.length)
 }