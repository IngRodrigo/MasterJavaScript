window.addEventListener('load', ()=>{
        //Timers
        let miliSegundos=500;
        const tiempo=setInterval(()=>{
            let miCaja=document.getElementById('micaja');
            if(miCaja.style.background=='Blue'){
                miCaja.style.background='Red';
            }else{
                miCaja.style.background='Blue';
            }
        },miliSegundos);
})