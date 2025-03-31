let numeros = [ 0,1,2,3,4,5,6,7,10,15,22,25,27,43,50 ]
let divisiveis3 =[]
for(let i = 0; i< numeros.length;i++){
    if(numeros[i] %3 ==0 && numeros[i] %5 ==0){
        divisiveis3.push("boom")
    }
    else if(numeros[i] % 3 == 0){
        divisiveis3.push("plic")
    }else if (numeros[i] % 5 == 0){
        divisiveis3.push("plac")
   }
   else{
    divisiveis3.push(numeros[i])
   } 

}
console.log(divisiveis3)

