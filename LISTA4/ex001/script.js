let quantMacas = Number(prompt("Quantas maçãs foram compradas?"));
let precoUnitario = quantMacas >= 12 ? 1.00 : 1.30;
let valorTotal = quantMacas * precoUnitario;
alert(`O total de maçãs compradas foi: R$ ${valorTotal.toFixed(2)}`);