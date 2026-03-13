
const listaDeClientes = []
const listaDeAlunos = ["José", "Maria", "Luiz", "Antonio", "Carlos"]
const exibirDados = function(){
    //exibe o objet do Array com o conteudo
    console.log(listaDeAlunos)
    //exibe o objeto do Array em formato de tabela
    console.table(listaDeAlunos)

    console.log(`o nome do aluno é: ${listaDeAlunos[0]}`)
    console.log(`o nome do aluno é: ${listaDeAlunos[1]}`)
    console.log(`o nome do aluno é: ${listaDeAlunos[2]}`)
    console.log(`o nome do aluno é: ${listaDeAlunos[3]}`)
    console.log(`o nome do aluno é: ${listaDeAlunos[4]}`)

    console.log("*********exemplo com while*********")
    // usando o while
    let cont = 0
    while(cont < 5){
        console.log(`o nome do aluno é: ${listaDeAlunos[cont]}`)
        cont++
    }

    // usando o for 
    console.log("*********exemplo com For*********")
    for (contador = 0; contador < 5; contador++) {
        console.log(`o nome do aluno é: ${listaDeAlunos[contador]}`)
    }

    //usando FOR EACH
    console.log("*********exemplo com FOR EACH*********")
    listaDeAlunos.forEach(function(item){
        console.log(`o nome do aluno é: ${item}`)
    })

    //usando o for of
    console.log("*********exemplo com For of*********")
    for(aluno of listaDeAlunos){
        console.log(`o nome do aluno é: ${aluno}`)
    }

     //usando o for in
     console.log("*********exemplo com For in*********")
    for(aluno in listaDeAlunos){
        console.log(`o nome do aluno é: ${listaDeAlunos[aluno]}`)
    }



}
const manipularDados = function(){
    //adicionando objetos de forma manual
    listaDeClientes[0] = "José"
    listaDeClientes[1] = "maria"
    listaDeClientes[2] = "luis"
    listaDeClientes[3] = "ana"
    listaDeClientes[4] = "beatriz"
    listaDeClientes.push("hugo", "andre")

    listaDeClientes.unshift("luciano")
    console.table(listaDeClientes)
    
    //permite adicionar um novo elemento em uma determinada posição do Array
          // splace(indece, qtde elementos, novo comteudo )
    listaDeClientes.splice(3,0,"bernado")

    // remove um elemento o elemento do indece indicado 
    listaDeClientes.splice(6,1)

    //remove o ultimo elemento do Array 
    listaDeClientes.pop()

    //remove o promeiro ele mento do Array
    //após isso reorganiza o Array
    listaDeClientes.shift()

    console.table(listaDeClientes)
   
}
function removerItem (aluno){
    listaDeAlunos.splice(listaDeAlunos.indexOf(aluno),1)
}
const verificarItem = function(nomeAluno){
    //verifica se o conteudo exitente dentro do ARRAY e retorna(true or false)
    return listaDeAlunos.includes(nomeAluno)
}
const manipularJSON = function(){
    let aluno = {"id":1, "nome":"josé da silva", "RA": 123456, "email":"jose@gmail.com"}

    console.log(aluno)
    
}

manipularJSON()