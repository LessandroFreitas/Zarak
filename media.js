let nome = prompt("Digite o nome do aluno:");
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

let situacao;
if (media >= 7) {
    situacao = "Aprovado!";
} else if (media >= 5) {
    situacao = "Em Recuperação!";
} else {
    situacao = "Reprovado!";
}

console.log(`Aluno: ${nome}`);
console.log(`Média: ${media}`);
console.log(`Situação: ${situacao}`);

// para mostrar na pagina web zarak falou para pedro
document.writeln("<h3>Resultado Final</h3>");
document.writeln("Aluno: " + nome + "<br>");
document.writeln("Média: " + media + "<br>");
document.writeln("Situação: " + situacao);