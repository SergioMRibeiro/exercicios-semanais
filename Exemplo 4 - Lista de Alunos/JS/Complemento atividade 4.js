
var dados = [
{nome: 'Estefany Cristina', idade: 25, curso: 'lógica de progrmação', turma:' 01', sexo: 'feminino'},
{nome: 'Elvia Masiero', idade: 23, curso: 'lógica de progrmação', turma:' 01', sexo: 'feminino'},
{nome: 'Daniel Araújo', idade: 36, curso: 'lógica de progrmação', turma:' 01', sexo: 'masculino'},
{nome: 'Jean Luc Ernest', idade: 20, curso: 'lógica de progrmação', turma:' 01', sexo: 'masculino'},
{nome: 'Guilherme Henrique', idade: 19, curso: 'lógica de progrmação', turma:' 01', sexo: 'masculino'},
{nome: 'Evódio Aquino', idade: 58, curso: 'lógica de progrmação', turma:' 01', sexo: 'masculino'},
{nome: 'Sérgio Moreira Ribeiro', idade: 21, curso: 'lógica de progrmação', turma:' 01', sexo: 'masculino'},
{nome: 'Lucca Martinelli', idade: 19, curso: 'lógica de progrmação', turma:' 01', sexo: 'masculino'},
{nome: 'Luciele Soares', idade: 33, curso: 'lógica de progrmação', turma:' 01', sexo: 'feminino'},
{nome: 'Laís Moreira', idade: 31, curso: 'lógica de progrmação', turma:' 01', sexo: 'feminino'},
{nome: 'Jonathan Nogueira', idade: 28, curso: 'lógica de progrmação', turma:' 01', sexo: 'masculino'},
{nome: 'Carlos Elian', idade: 18, curso: 'lógica de progrmação', turma:' 01', sexo: 'masculino'},
{nome: 'Luana Santos', idade: 23, curso: 'lógica de progrmação', turma:' 01', sexo: 'feminino'},
{nome: 'Tony de Moraes Esteves', idade: 34, curso: 'lógica de progrmação', turma: '01', sexo: 'masculino'},
{nome: 'Gabriela Oliveira', idade: 28, curso: 'lógica de progrmação', turma:' 01', sexo: 'feminino'},
{nome: 'Bruno de Barros', idade: 35, curso: 'lógica de progrmação', turma:' 01', sexo: 'masculino'},
{nome: 'Victor Freitas', idade: 26, curso: 'lógica de progrmação', turma:' 01', sexo: 'masculino'},
{nome: 'Tiago Zozimo', idade: 25, curso: 'lógica de progrmação', turma:' 01', sexo: 'masculino'},
{nome: 'Bianca Moraes', idade: 38, curso: 'lógica de progrmação', turma:' 01', sexo: 'feminino'},
{nome: 'Breno Bragança', idade: 20, curso: 'lógica de progrmação', turma:' 01', sexo: 'masculino'},
{nome: 'Victor Grillo', idade: 28, curso: 'lógica de progrmação', turma:' 01', sexo: 'masculino'},
{nome: 'Nathália Carvalho', idade: 18, curso: 'lógica de progrmação', turma:' 01', sexo: 'feminino'},
{nome: 'Gabriel Carreiro', idade: 23, curso: 'lógica de progrmação', turma:' 01', sexo: 'masculino'},
{nome: 'Paulo Eduardo', idade: 19, curso: 'lógica de progrmação', turma:' 01', sexo: 'masculino'},
{nome: 'Rodrigo Lifsitch', idade: 33, curso: 'lógica de progrmação', turma:' 01', sexo: 'masculino'},
{nome: 'VaiDione Vianna', idade: 34, curso: 'lógica de progrmação', turma:' 01', sexo: 'feminino'},
{nome: 'Priscila Barcala', idade: 27, curso: 'lógica de progrmação', turma:' 01', sexo: 'feminino'},
{nome: 'Erick Dahl', idade: 21, curso: 'lógica de progrmação', turma:' 01', sexo: 'masculino'},
{nome: 'Cicero Romão', idade: 23, curso: 'lógica de progrmação', turma:' 01', sexo: 'masculino'},
{nome: 'Lucas Secchin', idade: 23, curso: 'lógica de progrmação', turma:' 01', sexo: 'masculino'},
{nome: 'Nei Damazio', idade: 46, curso: 'lógica de progrmação', turma:' 01', sexo: 'feminino'},
{nome: 'Adriana Bueno', idade: 42, curso: 'lógica de progrmação', turma:' 01', sexo: 'feminino'}
];

var sexoF = 0;
var sexoM = 0;
var totalDeAlunos = dados.length;
var maiorIdade = 0;
var menorIdade = 300;
var somaIdade = 0

for(objeto of dados){
    if (objeto.sexo == 'feminino') {
        document.getElementById('bloco-feminino').innerHTML += `${objeto.nome} - ${objeto.idade} anos - turma:${objeto.turma}<br>`;
        sexoF++;
    } else {
        sexoM++;
        document.getElementById('bloco-masculino').innerHTML += `${objeto.nome} - ${objeto.idade} - turma:${objeto.turma}<br>`;
    }

    if (objeto.idade > maiorIdade){maiorIdade = objeto.idade;}
    else if (objeto.idade < menorIdade){menorIdade = objeto.idade}

    somaIdade += objeto.idade

}
document.getElementById('titulo-cntl').innerText = `<=== Serratec ===>`;
document.getElementById('texto-central1').innerText = `Total de alunos listados: ${totalDeAlunos}`;
document.getElementById('texto-central2').innerText = `Total de mulheres: ${sexoF}`;
document.getElementById('texto-central3').innerText = `Total de homens: ${sexoM}`;
document.getElementById('texto-central4').innerText = `Menor idade encontrada: ${menorIdade}`;
document.getElementById('texto-central5').innerText = `Maior idade encontrada: ${maiorIdade}`;
document.getElementById('texto-central6').innerText = `Média de idade: ${somaIdade / totalDeAlunos}`;


