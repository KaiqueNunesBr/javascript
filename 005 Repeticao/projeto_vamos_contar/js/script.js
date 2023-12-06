function contar() {
    var inicio = document.getElementById('txtInicio').value;
    var fim = document.getElementById('txtFim').value;
    var passo = document.getElementById('txtPasso').value;
    var resultado = document.getElementById('resultado');

    // Validar se os campos foram preenchidos
    if (inicio === "" || fim === "" || passo === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Converter os valores para números inteiros
    inicio = parseInt(inicio);
    fim = parseInt(fim);
    passo = parseInt(passo);

    // Validar se o passo é maior que zero
    if (passo <= 0) {
        alert("O passo deve ser maior que zero!");
        passo = 1;
        document.getElementById('txtPasso').value = passo;
    }

    // Limpar o conteúdo anterior
    resultado.innerHTML = "";

    // Adicionar emoji de início
    resultado.innerHTML += "\u{1F6A6} ";

    // Flag para alternar entre emojis durante a contagem
    var alternarEmoji = false;

    // Contar e exibir os números no resultado com emojis diferentes
    for (var i = inicio; (inicio <= fim ? i <= fim : i >= fim); i += (inicio <= fim ? passo : -passo)) {
        resultado.innerHTML += i + " ";

        // Alternar entre emojis durante a contagem
        resultado.innerHTML += alternarEmoji ? "\u{231B} " : "\u{23F3} ";

        // Inverter a flag para a próxima iteração
        alternarEmoji = !alternarEmoji;
    }

    // Adicionar emoji de fim
    resultado.innerHTML += "\u{1F3C1}";
}
