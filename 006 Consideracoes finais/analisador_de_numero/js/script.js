var listaNum = [];

function adicionar() {
    var num = parseInt(document.getElementById('txtnumero').value);

    if ( isNaN(num) || listaNum.includes(num) || num <= 0 || num > 100) {
        window.alert(`O número ${num} já está na lista ou está fora dos limites!`);
    } else {
        let tab = document.getElementById('selvalores');
        let item = document.createElement('option');

        listaNum.push(num);

        item.text = `Valor ${num} Adicionado!`;
        tab.appendChild(item);
    }

    document.getElementById('txtnumero').value = ''
    document.getElementById('txtnumero').focus()
}

function finalizar() {
    var res = document.getElementById('divResultados');
    res.innerHTML = ""; // Limpa o conteúdo existente

    if (listaNum.length == 0) {
        alert("Adicione um valor antes de finalizar!");
    } else {
        var total = listaNum.length;
        var maior = Math.max(...listaNum);
        var menor = Math.min(...listaNum);
        var soma = listaNum.reduce((acumulador, atual) => acumulador + atual, 0);
        var media = soma / total;
        var arrayPar = [];
        var arrayImpar = [];

        for (let i in listaNum) {
            if (listaNum[i] % 2 == 0) {
                arrayPar.push(listaNum[i]);
            }
            if (listaNum[i] % 2 != 0) {
                arrayImpar.push(listaNum[i]);
            }
        }

        res.innerHTML += `<p>Ao todo temos <strong>${total}</strong> números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi o <strong>${maior}</strong>.</p>`;
        res.innerHTML += `<p>O menor valor informado foi o <strong>${menor}.</strong></p>`;
        res.innerHTML += `<p>Somando todos os valores temos: <strong>${soma}</strong>.</p>`;
        res.innerHTML += `<p>A média dos valores é: <strong>${media}</strong>.</p>`;
        res.innerHTML += `<p>Temos <strong>${arrayPar.length}</strong> valores Pares.</p>`;
        res.innerHTML += `<p>E temos <strong>${arrayImpar.length}</strong> valores Impares.</p>`;
    }
}
