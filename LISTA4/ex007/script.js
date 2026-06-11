let id = Number(prompt("Digite sua idade:"));
if (id < 12) {
    alert("Infantil");
} else if (id <= 17) {
    alert("Adolescente");
} else if (id <= 64) {
    alert("Adulto");
} else {
    alert("Sênior");
}