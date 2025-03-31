//let valorsalmin = parseInt(prompt("Digite o valor do salario minimo"))
//let = valorqw = parseInt(prompt("Digite o valor dos quilowatt"))

//let valoruniqw = (valorsalmin / 7) / 100

//let valortotal =  valorqw * valoruniqw
//let valorcomdesconto = valortotal * 0.9


//alert(`Valor de cada quilowatt: R$ ${valoruniqw.toFixed(2)}
     //Valor a ser pago: R$ ${valortotal.toFixed(2)}
    // Valor com desconto de 10%: R$ ${valorcomdesconto.toFixed(2)}`)

   
    //let valorproduto = parseInt(prompt("Digite o valor do produto"))
   
    //let valorcomdesconto = valorproduto * 0.91

    //alert(`Valor do produto com desconto: R$${valorcomdesconto.toFixed(2)}`)


   // const totalfitas = parseInt(prompt("Digite o total de fitas da locadora"))
   // const valordoaluguel = parseInt(prompt("Digite o valor cobrado do aluguel"))
    
   // if (isNaN(totalfitas) || isNaN(valordoaluguel) || totalfitas <= 0 || valordoaluguel <= 0) {
   //     alert("Valores inválidos. Por favor, inserir números válidos.")
  //  } else {
      //  let fitasAlugadasPorMes = totalfitas / 3
      //  let faturamentoMensal = fitasAlugadasPorMes * valordoaluguel
      //  let faturamentoano = faturamentoMensal * 12
        
      //  const fitasAtrasadasPorMes = fitasAlugadasPorMes / 10
      //  const valorMultaMensal = fitasAtrasadasPorMes * (valordoaluguel * 0.1)
        
      //  const fitasEstragadas = totalfitas * 0.02
      //  const fitasRepostas = totalfitas / 10
      //  const totalFitasNoAno = totalfitas - fitasEstragadas + fitasRepostas
        
       // alert(`
         //   1. Faturamento Anual: R$ ${faturamentoano.toFixed(2)}
        //    2. Valor ganho com multas por mês: R$ ${valorMultaMensal.toFixed(2)}
     //       3. Total de fitas no final do ano: ${totalFitasNoAno.toFixed(0)}`)
    //}


   // let numero = prompt("Digite um número de 3 dígitos")
   // let numeroinvertido = ""
//if (numero.length !== 3 || isNaN(numero)) {
   // alert("Número inválido. Por favor, insira um número de 3 dígitos.")
//} else {
   
 //   for (let i = numero.length - 1; i >= 0; i--) {
   //     numeroinvertido += numero[i]
   // }
  //  numeroinvertido = parseInt(numeroinvertido)
    
   // alert(`Número invertido: ${numeroinvertido}`)
//}

let numero = prompt("Digite um número de 3 dígitos")
let numero2 = prompt("Digite o segundo número de 3 dígitos")
let numeroinvertido = ""
if (numero.length !== 3 || isNaN(numero)) {
    alert("Número inválido. Por favor, insira um número de 3 dígitos.")
} else {
    for (let i = numero.length - 1; i >= 0; i--) {
        numeroinvertido += numero[i]
    }
}
let soma = parseInt(numero) + parseInt(numero2)
let somaString = soma.toString()

let multiplicacaoSoma = 0
for (let i = 0; i < somaString.length; i++) {
    multiplicacaoSoma += parseInt(somaString[i])
}
let digitoVerificador = multiplicacaoSoma % 10

alert(`Soma: ${soma}
Multiplicação e soma: ${multiplicacaoSoma}
Dígito verificador: ${digitoVerificador}`)

