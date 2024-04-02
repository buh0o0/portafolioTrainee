let n=document.getElementById("numeroRecibido");
let m=document.getElementById("mensaje")

let N = Math.random()*100 +1
N = Math.round(N)
m.textContent=N

function Buscar(){
    let Ni = parseInt(n.value)

        if(Ni<1||Ni>100|| isNaN(Ni)){
            m.textContent='porfavor introduce un numero valido entre 1 y 100'
        return
        }

    if(Ni === N){
        m.textContent='FELICIDADES!, ADIVINASTE ';
        m.style.color = 'green';
        m.style.fontSize='50px';
        m.style.backgroundColor="white";
        n.disabled=true;

    }else if(Ni>N){
        m.textContent ='ELEGISTE UN NUMERO MAYOR, INTENTA DE NUEVO';
        m.style.color = 'red';
    }else{
        m.textContent='ELEGISTE UN NUMERO MENOR, INTENTA DE NUEVO'
    }
}

