import express from "express"

const porta = 3001
const app = express()

const mensagens = []

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/enviar-mensagem", (requisicao, resposta) => {
    const { nome, email, assunto, mensagem } = requisicao.body

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