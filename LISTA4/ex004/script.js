let temp = Number(prompt("Digite a temperatura em °C:"));
if (temp < 0) {
    alert("Muito Frio");
} else if (temp <= 20) {
    alert("Frio");
} else if (temp <= 30) {
    alert("Agradável");
} else {
    alert("Calor");
}