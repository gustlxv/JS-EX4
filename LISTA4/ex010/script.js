let velocidade = Number(
    prompt("Digite a velocidade em km/h:")
);
let tempoViagem = Number(
    prompt("Digite o tempo da viagem em horas:")
);
let distanciaPercorrida =
    velocidade * tempoViagem;

alert(
    `A distância percorrida foi de ${distanciaPercorrida} km`
);