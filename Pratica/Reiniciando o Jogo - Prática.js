function imc(altura, peso) {
  let imc = peso / (altura * altura);
  return imc;
}

console.log(imc(1.7, 78));

function fatorial(x) {
  if (x > 1) {
    return x * fatorial(x - 1);
  }

  return x;
}

console.log(fatorial(5));

function dolar(x) {
  return (x *= 4.8);
}

console.log(dolar(2));

function retangulo(h,b){

  let area = h*b;
  let perimetro = 2*(b+h);

  console.log(`Área: ${area}, Perimetro: ${perimetro}`);
}

retangulo(2,3);






