function calcularResultado() {
    const entradaNumero1 = document.getElementById("numero1")
    const entradaNumero2 = document.getElementById("numero2")
    const entradaOperador = document.getElementById("operador")

    const numero1 = Number(entradaNumero1.value)
    const numero2 = Number(entradaNumero2.value)
    const operador = entradaOperador.value

    const resultado = eval(`${numero1} ${operador} ${numero2}`)
    const spanResultado = document.getElementById("resultado")
    spanResultado.innerText = resultado
}