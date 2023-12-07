function adicionarFilme(){
    var filmeFavorito = document.getElementById('filme').value;
    var elementoListaFilmes = document.getElementById('listaFilmes');

    if(filmeFavorito.includes('jpg') || filmeFavorito.includes('jpeg')){
        elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<img src=' + filmeFavorito + '>';
    }else {
        alert('link incorreto')
    }
    
    document.getElementById('filme').value = '';
} 