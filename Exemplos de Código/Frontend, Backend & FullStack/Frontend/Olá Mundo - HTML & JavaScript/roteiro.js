function exibirAlerta() {
    alert("Você clicou no botão!")
}

function editarTexto() {
    const paragrafo = document.getElementById("paragrafo-a-ser-editado")
    const novoTexto = prompt("Digite um novo texto:")
    paragrafo.innerText = novoTexto
}

async function buscarDadosDeUsuarioGitHub() {
    const entradaDeNomeDeUsuario = document.getElementById("nome-de-usuario-github")
    const nomeDeUsuario = entradaDeNomeDeUsuario.value
    const url = `https://api.github.com/users/${nomeDeUsuario}`

    const resposta = await fetch(url)
    const dados = await resposta.json()

    const resultado = document.getElementById("resultado")

    resultado.innerHTML = `<hr>` +
        `<h3>Dados do usuário <b>"${nomeDeUsuario.toUpperCase()}"</b></h3>` +
        `<p><b>Nome:</b> ${dados.name}</p>` + 
        `<p><b>Bio:</b> ${dados.bio}</p>` +
        `<p><b>Seguidores:</b> ${dados.followers}</p>` + 
        `<p><b>Sequindo:</b> ${dados.following}</p>` + 
        `<div><img src="${dados.avatar_url}"></div>`
}