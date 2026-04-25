const tarjetas = document.querySelectorAll(".card");
const botonReiniciar = document.getElementById("reiniciar");

tarjetas.forEach((tarjeta)=>{

let contador = 0;

const numero = tarjeta.querySelector(".contador");
const botonSumar = tarjeta.querySelector(".sumar");
const botonRestar = tarjeta.querySelector(".restar");


function actualizarTarjeta(){

numero.textContent = contador;

if(contador===0){
tarjeta.classList.add("cero");
botonRestar.disabled=true;
}
else{
tarjeta.classList.remove("cero");
botonRestar.disabled=false;
}

}


botonSumar.addEventListener("click",function(){
contador++;
actualizarTarjeta();
});



botonRestar.addEventListener("click",function(){

if(contador>0){
contador--;
actualizarTarjeta();
}

});


tarjeta.resetear=function(){
contador=0;
actualizarTarjeta();
};


actualizarTarjeta();

});



botonReiniciar.addEventListener("click",function(){

tarjetas.forEach(function(tarjeta){
tarjeta.resetear();
});

});