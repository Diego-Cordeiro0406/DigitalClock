setInterval(function carregar(){
    var hrs = window.document.getElementById("hora")
    var msg = window.document.getElementById("msg")
    var data = window.document.getElementById("data")
    var dat = new Date()
    var hora = dat.getHours()
    var minuto = dat.getMinutes()
    var segundo = dat.getSeconds()
    var dia = dat.getDate()
    var mes = dat.getMonth() + 1
    var ano = dat.getFullYear()

        hrs.innerHTML=`${hora}:${minuto}:${segundo}`
        data.innerHTML=`${dia}/${mes}/${ano}`
if(minuto < 10)
    {
        hrs.innerHTML=`${hora}:0${minuto}:${segundo}`
    }

else if(segundo < 10)
    {
        hrs.innerHTML=`${hora}:${minuto}:0${segundo}`
    }

else if(hora < 10)
    {
        hrs.innerHTML=`0${hora}:${minuto}:${segundo}`
    }

if(hora >= 0 && hora <= 6)
    {
        msg.innerHTML = "BOA MADRUGADA"
        document.body.style.background ="black"
        document.body.style.color = "white"
    }

else if(hora >= 6 && hora <= 12)
    {
        msg.innerHTML = "BOM DIA"
    }

else if(hora > 12 && hora < 18)
    {
        msg.innerHTML = "BOA TARDE"
        document.body.style.background = "yellow"
    }

else if(hora >= 18 && hora <= 23){
        msg.innerHTML = "BOA NOITE"
        document.body.style.background = "gray"
    }

}, 1000)
