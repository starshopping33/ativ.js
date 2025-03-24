let operador = prompt(`Digite uma opção,
    1 - soma,
    2 - subtração,
    3 - multiplicação,
    4 - divisão`);


if (operador != "1" && operador != "2" && operador != "3" && operador != "4") {
    alert("Operação inválida");
} else {
    let num1 = parseFloat(prompt("Digite o primeiro número:"))
    let num2 = parseFloat(prompt("Digite o segundo número:"))

if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, informe números válidos.")
} else{
    let resultado =0
  if (operador === 1){
  resultado = num1 + num2
  alert(`Resultado de ${num1} + ${num2} é: ${resultado}`)
  }
else if (operador === "2") {
    resultado = num1 - num2
    alert(`Resultado de ${num1} - ${num2} é: ${resultado}`)
}
else  if (operador === "3") {
    resultado = num1 *num2
    alert(`resultado de ${num1} * ${num2} é: ${resultado}`)
}
else if (operador === "4") {
    if(num1 === 0 || num2 ===0){
        alert("Não existe divisão por 0")
    }else{
        resultado = num1 / num2
        alert(`Resultado de ${num1} / ${num2} é ${resultado}`)
    }
    }
}
}
console.log(operador)




