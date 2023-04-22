//hago los analisis combinatorios

function arreglosSimples() {
    const n = document.getElementById("n").value;
    const p = document.getElementById("p").value;
    let resultado = 1;
    for (let i = 0; i < p; i++) {
      resultado *= n - i;
    }
    const resultadoArreglo = document.getElementById("resultadoArreglo");
    resultadoArreglo.innerHTML = resultado;
    return resultado;
  }
  
  function permutacionesSimples() {
    const n = document.getElementById("n").value;
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    const resultadoPermutacion = document.getElementById("resultadoPermutacion");
    resultadoPermutacion.innerHTML = resultado;
    return resultado;
  }
  
  function factorial(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
  
  function combinacionesSimples() {
    const n = document.getElementById("n").value;
    const p = document.getElementById("p").value;
    const numerador = factorial(n);
    const denominador = factorial(p) * factorial(n - p);
    const resultado = numerador / denominador;
    const resultadoCombinacionSimple = document.getElementById(
      "resultadoCombinacionSimple"
    );
    resultadoCombinacionSimple.innerHTML = resultado;
    return resultado;
  }
  
  // hago las combinaciones con repeticion
  
  function arreglosConRepeticion() {
    const n = document.getElementById("n").value;
    const p = document.getElementById("p").value;
    let resultado = Math.pow(n, p);
    const resultadoArregloConRepeticion = document.getElementById(
      "resultadoArregloConRepeticion"
    );
    resultadoArregloConRepeticion.innerHTML = resultado;
    return resultado;
  }
  
  function permutacionesConRepeticion() {
    const n = document.getElementById("n").value;
    const p = document.getElementById("pPerRep").value;
    let numerosPString = p.split(",");
    
    let numerosP =[];
    numerosPString.forEach(numero => {
      numerosP.push(parseInt(numero));
    });
    
    let sumaP=0;
    for(let i = 0 ; i < numerosP.length; i++){
        sumaP += numerosP[i];
    }
    if(sumaP > n){
      document.getElementById("resultadoPermutacionConRepeticion").innerHTML = "La suma de p no puede ser myor a n";
    }
    else{

      let divisor = 1
      for(let i = 0; i < numerosP.length; i++){
        divisor *= factorial(numerosP[i]);
     
      }
      document.getElementById("resultadoPermutacionConRepeticion").innerHTML = factorial(n)/divisor;
    }

  }
  
  function combinacionesConRepeticion() {
    const n = document.getElementById("n").value;
    const p = document.getElementById("p").value;
    const numerito = parseInt(n) + parseInt(p);
    const numerador = factorial(numerito - 1);
    const denominador = factorial(p) * factorial(n - 1);
    const resultado = numerador / denominador;
    const resultadoCombinacionConRepeticion = document.getElementById(
      "resultadoCombinacionConRepeticion"
    );
    resultadoCombinacionConRepeticion.innerHTML = resultado;
    return resultado;
  }



  //----------------------arbol de decision



let tipos = ["Arreglos Simples", "Permutaciones Simples", "Combinaciones Simples", 
"Arreglos Con Repeticion", "Permutaciones Con Repeticion", "Combinaciones Con Repeticion"];

 function crearEnc(){
  tipos = ["Arreglos Simples", "Permutaciones Simples", "Combinaciones Simples", 
"Arreglos Con Repeticion", "Permutaciones Con Repeticion", "Combinaciones Con Repeticion"];
if(document.getElementById("pp")){
document.getElementById("pp").remove()
}
  if(document.getElementById("divN2")){
  document.getElementById("divN2").remove();
  }
  if(document.getElementById("divN")){
  document.getElementById("divN").remove();
  }
  let encru = document.getElementById("encrucijada");
  
  let divN= document.createElement('div');
  divN.id = 'divN';
  const radio1 = document.createElement('input');
    radio1.type = 'radio';
    radio1.name = 'enc';
    radio1.id = 'ordenSi';
    radio1.addEventListener('click', function() {
      crearPregFinal(null, tipos = ["Arreglos Simples", 
      "Arreglos Con Repeticion"])});
    const label1 = document.createElement('label');
    label1.htmlFor = 'ordenSi';
    label1.textContent = 'Interesa el orden';
    const radio2 = document.createElement('input');
    radio2.type = 'radio';
    radio2.name = 'enc';
    radio2.id = 'ordenNo';
    radio2.addEventListener('click', function() {
      crearPregFinal( null,tipos = ["Arreglos Simples", 
      "Arreglos Con Repeticion"])});
    const label2 = document.createElement('label');
    label2.htmlFor = 'ordenNo';
    label2.textContent = 'NO interesa el orden';
    encru.appendChild(divN);
    divN.appendChild(radio1);
    divN.appendChild(label1);
    divN.appendChild(document.createElement('br'));
    divN.appendChild(radio2);
    divN.appendChild(label2);

 }
  
 function crearPregFinal(boton, tipos){
  
  if(document.getElementById("pp")){
    document.getElementById("pp").remove()
    }
  if(boton!=null){
 if(boton.id == "todos"){
  tipos = ["Permutaciones Simples" 
, "Permutaciones Con Repeticion"];
  if(document.getElementById("divN")){
  document.getElementById("divN").remove();
 }
}}
if(document.getElementById("divN2")){
  document.getElementById("divN2").remove();
}
let pregFinal = document.getElementById("PregFinal")
let divN= document.createElement('div');
divN.id = 'divN2';
pregFinal.appendChild(divN);
const radio1 = document.createElement('input');
    radio1.type = 'radio';
    radio1.name = 'pf';
    radio1.id = 'Si';
    radio1.addEventListener('click',  function() {
      resultadoSimple( tipos.filter(function(item) {
        return !item.includes("Repeticion");
      }))});
    const label1 = document.createElement('label');
    label1.htmlFor = 'Si';
    label1.textContent = 'SI se pueden repetir elementos';
    const radio2 = document.createElement('input');
    radio2.type = 'radio';
    radio2.name = 'pf';
    radio2.id = 'No';
    radio1.addEventListener('click', function() {
      resultadoSimple(tipos.filter(function(item) {
        return !item.includes("Simples");
      }))});
    const label2 = document.createElement('label');
    label2.htmlFor = 'No';
    label2.textContent = 'NO se pueden repetir elementos';
    divN.appendChild(radio1);
    divN.appendChild(label1);
    divN.appendChild(document.createElement('br'));
    divN.appendChild(radio2);
    divN.appendChild(label2);

}

 

 function resultadoSimple(tipo){
  let res = document.getElementById("resultadoEncuesta");
  
  p =document.createElement("p");
  p.id = "pp";
  p.innerHTML = "Necesitas una " + tipo
  res.appendChild(p);

 }