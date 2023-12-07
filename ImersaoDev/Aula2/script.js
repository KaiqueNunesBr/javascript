
var minMargin = 0, maxMargin = 1000, numChutes = 1;
var numeroSecreto = parseInt(Math.random() * (maxMargin - minMargin + 1)) + minMargin;

var chute = prompt('Digite um Número entre ' + minMargin + ' e ' + maxMargin + ': ');

while(chute != numeroSecreto){
    numChutes++;
    if(chute < numeroSecreto){
        minMargin = chute;
        chute = prompt('Você errou! \nDigite um Número entre ' + minMargin + ' e ' + maxMargin + ': ');
    } else if(chute > numeroSecreto){
        maxMargin = chute;
        chute = prompt('Você errou! \nDigite um Número entre ' + minMargin + ' e ' + maxMargin + ': ');
    } else {
        alert('Erro de Programa!');
    }
}
alert('Você acertou! com ' + numChutes + ' Chutes!');