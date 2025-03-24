let nome =  "Lydia" 
let vogais = []
let consuantes = []
for(let i = 0; i< nome.length;i++){
    let letra = nome[i].toUpperCase()
    
    if (["A", "E", "I","O", "U"].includes(letra)){
        vogais.push(nome[i])
    } else {
        consuantes.push(nome[i])
    }
} 
console.log("Nome: " + nome);
console.log("Vogais: " + vogais);
console.log("Consoantes: " + consuantes)