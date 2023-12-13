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

function retangulo(h, b) {
  let area = h * b;
  let perimetro = 2 * (b + h);

  console.log(`Área: ${area}, Perimetro: ${perimetro}`);
}

retangulo(2, 3);

function circulo(r) {
  let c = 2 * 3.14 * r;
  let a = 3.14 * (r * r);

  console.log(`Área: ${a}, Perimetro: ${c}`);
}

circulo(15);

function tabuada(x) {
  for (let i = 1; i <= 10; i++) {
    y = x * i;

    console.log(y);
  }
}

tabuada(2);
