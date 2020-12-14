function carregar() {

var msg = document.getElementById('msg')
var img = document.getElementById('foto')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Hora: ${hora}h:${minutos}mn.` 

if (hora >= 0 && hora <= 18) {
    //BomDia
    img.src = 'dia.png'
    document.body.style.background = ''
} else if (hora >= 12 && hora <= 18) {
    //Boa Tarde
    img.src = 'tarde.png'
    document.body.style.background = ''
} else {
    //Boa Noite
    img.src = 'noite.png'
    document.body.style.background = ''
}
}