// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        date: "12/10/2023 12:00:00"
    }
];

window.onload = function (){
    mostrarPosts();

    document.querySelector("#postForm").addEventListener("submit", addPosts)
}

//CREATE
function addPosts(infosDoEvento){
    infosDoEvento.preventDefault();
    const textPost = document.querySelector("#postText").value;
    const categoriaPost = document.querySelector("#postCategory").value;
    const imagemPost = document.querySelector("#postImage").value;

    const novoPost = {
        text: textPost,
        category: categoriaPost,
        image: imagemPost,
        date: new Date().toLocaleString()
    }
    posts.unshift(novoPost)

    mostrarPosts()
}
//READ
function mostrarPosts(){
    //pegando o elemento onde 
    const listaPosts = document.querySelector("#postList")
    listaPosts.innerHTML = ""
    //passando pelo array criando um 
    posts.forEach(pegaItem => {
        const cardPost = document.createElement("div")
        cardPost.classList.add("card")
        cardPost.innerHTML = `
        <h2>${pegaItem.text}</h2>
        <img src="${pegaItem.image}"/>
        <p>Categoria: ${pegaItem.category}</p>
        <p>Data e Hora: ${pegaItem.date}</p>
        <button>Excluir</button> 
        <button>Editar</button>`

        
        listaPosts.append(cardPost)
    })

}
//UPDATE
function editarPosts(){}
//DELETE
function deletarPosts(){}























//const pessoa = {
  //  nome: "caio",
   // idade: 32,
   // "Empresas trabalhadas": [],
   // isAdmin: true 

//}
//console.log(pessoa.nome)
//console.log(pessoa.[idade])