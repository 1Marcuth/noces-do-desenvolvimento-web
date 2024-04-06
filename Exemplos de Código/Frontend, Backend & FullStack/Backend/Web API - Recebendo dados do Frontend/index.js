import express from "express"

const porta = 3000
const app = express()

const mensagens = []

app.post("/enviar-mensagem", (requisicao, resposta) => {
    const { nome, email, assunto, mensagem } = requisicao.query

    mensagens.push({
        autor: nome,
        email: email,
        assunto: assunto,
        mensagem: mensagem
    })

    return resposta.send({ mensagem: "Sua mensagem foi enviada com sucesso ao servidor!" })
})

app.get("/mensagens", (requisicao, resposta) => {
    return resposta.send(mensagens)
})

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}/`)
})