let id = Number(prompt("Digite sua idade:"));
let mensagem =
    id >= 18 && id <= 70
        ? "Seu voto obrigatório"
        : "Seu voto não é obrigatório";

alert(mensagem);