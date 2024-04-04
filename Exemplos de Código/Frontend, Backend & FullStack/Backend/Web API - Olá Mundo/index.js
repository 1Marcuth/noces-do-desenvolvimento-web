import express from "express"

const app = express()
const porta = 3000

app.get("/", (requisicao, resposta) => {
    resposta.send("Olá Mundo!")
})

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}/`)
})