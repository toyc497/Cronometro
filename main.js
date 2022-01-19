let timerHora = document.querySelector("#timerHora");
let timerMinuto = document.querySelector("#timerMinuto");
let timerSegundo = document.querySelector("#timerSegundo");

let repetidorHora = 0;
let repetidorMinuto = 0;
let repetidorSegundo = 0;
let intervalo;

function contador(){
    repetidorSegundo += 1;

    if(repetidorSegundo == 60){

        repetidorMinuto += 1;
        timerMinuto.textContent = `${repetidorMinuto}`;
        timerSegundo.textContent = `${repetidorSegundo}`;
        repetidorSegundo = 0;

    }else if(repetidorMinuto == 60){
        
        repetidorHora += 1;
        timerHora.textContent = `${repetidorHora}`;

        repetidorMinuto = 0;
        timerMinuto.textContent = `${repetidorMinuto}`;
        
        timerSegundo.textContent = `${repetidorSegundo}`;

    }else{

        timerSegundo.textContent = `${repetidorSegundo}`;
    
    }

}

function iniciarTimer(){
    intervalo = setInterval(contador,1000);
}

function pararTimer(){
    clearInterval(intervalo);
}