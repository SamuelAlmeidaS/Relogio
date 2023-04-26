let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function relogio(){
    let data = new Date();
    let minutos = data.getMinutes();
    let hora = data.getHours();
    let segundos = data.getSeconds();
    
    digitalElement.innerHTML = `${zeros(hora)}:${zeros(minutos)}:${zeros(segundos)}`;

    let sDeg = ((360 / 60) * segundos) - 90;
    let mDeg = ((360 / 60) * minutos) - 90;
    let hDeg = ((360 / 12) * hora) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function zeros(hora){
    return hora < 10?'0'+hora:hora;
}

setInterval(relogio,1000)
relogio();
