console.log("Boas Vindas!");

let nome = "Diego";

console.log(`Olá, ${nome}`);

alert(`Olá, ${nome}`);

let option = prompt("Qual a linguagem de programação que você mais gosta?");

console.log(option);

let valor1 = 2;
let valor2 = 5;

let resultadoSoma = valor1 + valor2;
let resultadoSub = valor1 - valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultadoSoma}`);
console.log(`A diferença de ${valor1} e ${valor2} é igual a ${resultadoSub}`);

let idade = prompt("Insira sua idade");

if (idade >= 18) {
  console.log("Maior de Idade");
} else {
  console.log("Menor de Idade");
}

let numero = prompt("Insira um número");

if (numero == 0) {
    alert("Valor igual a 0");
} else if (numero < 0) {
    alert("Negativo");
} else {
    alert("Positivo");
}

let i = 0

while (i <11){
    console.log(i++);
}

let nota = 6;

if (nota >= 7){
    console.log("Aprovado");
}else {
    console.log("Reprovado");
}

console.log(parseInt(Math.random * 10));
console.log(parseInt(Math.random * 1000));
