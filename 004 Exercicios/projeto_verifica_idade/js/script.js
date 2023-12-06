function verificaIdade(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.querySelector('div#resultado')
    

    if(fano.value.length == 0) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }else {
        var idade = (ano - Number(fano.value))
        var genero = ''
        var img = document.createElement('img')
        var imas = document.getElementById('imas');
        img.setAttribute('id', 'foto')
    
        if (idade >= 0 && idade < 6) {
            genero = imas.checked ? 'Homem' : 'Mulher';
            img.setAttribute('src', imas.checked ? "./imagens/homem-bebe.png" : "./imagens/mulher-bebe.png");
        } else if (idade < 14) {
            genero = imas.checked ? 'Homem' : 'Mulher';
            img.setAttribute('src', imas.checked ? "./imagens/homem-crianca.png" : "./imagens/mulher-crianca.png");
        } else if (idade < 22) {
            genero = imas.checked ? 'Homem' : 'Mulher';
            img.setAttribute('src', imas.checked ? "./imagens/homem-jovem.png" : "./imagens/mulher-jovem.png");
        } else if (idade < 55) {
            genero = imas.checked ? 'Homem' : 'Mulher';
            img.setAttribute('src', imas.checked ? "./imagens/homem-adulto.png" : "./imagens/mulher-adulto.png");
        } else {
            genero = imas.checked ? 'Homem' : 'Mulher';
            img.setAttribute('src', imas.checked ? "./imagens/homem-idoso.png" : "./imagens/mulher-idoso.png");
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}
