var listaJogadores = [
    {
        nome: "Paulo",
        vitoria: 0,
        empate: 0,
        derrota: 0,
        pontos: 0
    },
    {
        nome: "Rafa",
        vitoria: 0,
        empate: 0,
        derrota: 0,
        pontos: 0
    },
    {
        nome: "Gui",
        vitoria: 0,
        empate: 0,
        derrota: 0,
        pontos: 0
    },
];

var elementoTabela = document.getElementById('tabelaJogadores');

function adicionarJogadoresNaTabela(listaJogadores) {
    elementoTabela.innerHTML = '';

    listaJogadores.forEach(function (jogador) {
        exibirNaTela(jogador);
    });
}

function exibirNaTela(jogador) {
    var novaLinha = document.createElement('tr');

    novaLinha.innerHTML = `
        <td>${jogador.nome}</td>
        <td>${jogador.vitoria}</td>
        <td>${jogador.empate}</td>
        <td>${jogador.derrota}</td>
        <td>${jogador.pontos}</td>
        <td><button onClick="adicionarVitoria(${listaJogadores.indexOf(jogador)})">Vitória</button></td>
        <td><button onClick="adicionarEmpate(${listaJogadores.indexOf(jogador)})">Empate</button></td>
        <td><button onClick="adicionarDerrota(${listaJogadores.indexOf(jogador)})">Derrota</button></td>
    `;

    elementoTabela.appendChild(novaLinha);
}

function adicionarVitoria(index){
    listaJogadores[index].vitoria++;
    listaJogadores[index].pontos += 3;
    adicionarJogadoresNaTabela(listaJogadores);
}

function adicionarEmpate(index){
    listaJogadores[index].empate++;
    listaJogadores[index].pontos++;
    adicionarJogadoresNaTabela(listaJogadores);
}

function adicionarDerrota(index){
    listaJogadores[index].derrota++;
    listaJogadores[index].pontos--;
    adicionarJogadoresNaTabela(listaJogadores);
}

adicionarJogadoresNaTabela(listaJogadores);
