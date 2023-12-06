
function carregar(){
    var msg = document.getElementById('divMsg')
    var img = document.getElementById('imgFoto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.`
    if(hora >= 5 && hora < 12){
        img.src = "imagens/manha.jpg"
        document.body.style.background = "#615C3E"
    } else if ( hora >= 12 && hora < 17){
        //boa tarde
        img.src = "imagens/tarde.jpg"
        document.body.style.background = "#EA863A"
    } else {
        //boa noite
        img.src = "imagens/noite.jpg"
        document.body.style.background = "#2A3547"
    }
}