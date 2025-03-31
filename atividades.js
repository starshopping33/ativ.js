let valor = prompt("Digite o valor do empréstimo");
let escolhaParcelas = prompt(`Escolha o número de parcelas e o juros (digitando 1, 2 ou 3):
1- 2x  5% de juros
2- 4x  7% de juros
3- 8x  13% de juros`);

valor = parseFloat(valor);
escolhaParcelas = parseFloat(escolhaParcelas);

if (isNaN(valor) || isNaN(escolhaParcelas) || valor <= 0 || escolhaParcelas < 1 || escolhaParcelas > 3) {
    alert("Por favor, insira valores válidos.");
} else {
    let juros = 0;
    let numeroParcelas = 0;

    switch (escolhaParcelas) {
        case 1:
            juros = 0.05;
            numeroParcelas = 2;
            break;
        case 2:
            juros = 0.07;
            numeroParcelas = 4;
            break;
        case 3:
            juros = 0.13;
            numeroParcelas = 8;
            break;
        default:
            alert("Opção de parcelas inválida.");
            break;
    }

    if (numeroParcelas > 0) {
        let valorComJuros = valor * (1 + juros);
        let valorParcela = valorComJuros / numeroParcelas;
        alert(`Empréstimo de R$${valor.toFixed(2)} com ${numeroParcelas} parcelas de R$${valorParcela.toFixed(2)} cada, incluindo juros de ${juros * 100}%.\nValor total a ser pago: R$${valorComJuros.toFixed(2)}`);
    }
}


