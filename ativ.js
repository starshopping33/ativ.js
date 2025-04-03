//tarefa 1

let valorsalmin = parseInt(prompt("Digite o valor do salario minimo"))
let = valorqw = parseInt(prompt("Digite o valor dos quilowatt"))


let valoruniqw = (valorsalmin / 7) / 100


let valortotal =  valorqw * valoruniqw
let valorcomdesconto = valortotal * 0.9




alert(`Valor de cada quilowatt: R$ ${valoruniqw.toFixed(2)}
     Valor a ser pago: R$ ${valortotal.toFixed(2)}
    Valor com desconto de 10%: R$ ${valorcomdesconto.toFixed(2)}`)


   //tarefa 2
    let valorproduto = parseInt(prompt("Digite o valor do produto"))
   
   // let valorcomdesconto = valorproduto * 0.91


    alert(`Valor do produto com desconto: R$${valorcomdesconto.toFixed(2)}`)


//tarefa 3

const totalfitas = parseInt(prompt("Digite o total de fitas da locadora"))
const valordoaluguel = parseInt(prompt("Digite o valor cobrado do aluguel"))

if ((isNaN(totalfitas)) || (isNaN(valordoaluguel)) || totalfitas <= 0 || valordoaluguel <= 0) {
    alert("Valores invalidos por favor inserir numeros validos")
} else {
    let fitasAlugadasPorMes = (totalfitas / 3)
    let faturamentoMensal = fitasAlugadasPorMes * valordoaluguel
    let faturamentoano = faturamentoMensal * 12

    const fitasAtrasadasPorMes = (fitasAlugadasPorMes / 10)
    const valormultamensal = fitasAtrasadasPorMes * (valordoaluguel * 0.1)

    const fitasEstragadas = (totalfitas * 0.02)
    const fitasRepostas = (totalfitas / 10)
    const totalFitasNoAno = totalfitas - fitasEstragadas + fitasRepostas

    alert(`RESULTADOS:
        1. Faturamento Anual: R$ ${faturamentoano.toFixed(2)}
        2. Valor ganho com multas por mês: R$ ${valormultamensal.toFixed(2)}
        3. Total de fitas no final do ano: ${totalFitasNoAno.toFixed(0)}`)
}


//tarefa 4
const numero = parseInt(prompt("Digite um número de 3 dígitos (formato CDU):"))

if (isNaN(numero) || numero < 100 || numero > 999) {
    alert("Por favor, digite um número válido de 3 dígitos")
} else {
    const centena = (numero / 100)
    const dezena = ((numero % 100) / 10)
    const unidade = numero % 10
    
    const numeroInvertido = (unidade * 100) + (dezena * 10) + centena
    
    alert(`Número original: ${numero}
Número invertido: ${numeroInvertido}`)
}



//tarefa 5

const numeroConta = parseInt(prompt("Digite um número de conta com 3 dígitos:"))

if (isNaN(numeroConta) || numeroConta < 100 || numeroConta > 999) {
    alert("Por favor, digite um número válido de 3 dígitos")
} else {
 
    const centena = (numeroConta / 100)
    const dezena = ((numeroConta % 100) / 10)
    const unidade = numeroConta % 10
    
  
    const numeroInvertido = (unidade * 100) + (dezena * 10) + centena
    

    const soma = numeroConta + numeroInvertido
    

    const centenaS = (soma / 100)
    const dezenaS = ((soma % 100) / 10)
    const unidadeS = soma % 10
    
    const multiplicacaoPosicional = (centenaS * 1) + (dezenaS * 2) + (unidadeS * 3)
    
    
    const digitoVerificador = multiplicacaoPosicional % 10
    
    alert(`Soma: ${soma}
Multiplicação posicional: ${multiplicacaoPosicional}
Dígito verificador: ${digitoVerificador}`)}