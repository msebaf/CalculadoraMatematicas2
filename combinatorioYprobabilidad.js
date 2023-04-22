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



var tipos = ["Arreglos Simples", "Permutaciones Simples", "Combinaciones Simples", 
"Arreglos Con Repeticion", "Permutaciones Con Repeticion", "Combinaciones Con Repeticion"];
let bkup = document.getElementById("repeticion")

 function crearPregFinal(permutacion) {

  if(permutacion && tipos.length==6){

      tipos = tipos.filter(tipo => {
      return tipo.includes("Permutaciones")
    })
    
    console.log(tipos)
    document.getElementById("lbA").innerHTML= "Se pueden repetir"
    let opA = document.getElementById("opA");
    opA.removeAttribute("onClick")
    opA.setAttribute("onClick", "pregFinal(true)");
    opA.checked = false;
    document.getElementById("lbB").innerHTML= "No se pueden repetir"
    let opB = document.getElementById("opB")
    opB.removeAttribute("onClick")
    opB.setAttribute("onClick", "pregFinal(false)");
    opB.checked = false;

  }
  else{
    if(permutacion){
      tipos = tipos.filter(tipo => {
        return tipo.includes("Arreglos")
      })
      document.getElementById("lbA").innerHTML= "Se puede repetir"
      let opA = document.getElementById("opA");
      opA.removeAttribute("onClick")
      opA.setAttribute("onClick", "pregFinal(true)");
      opA.checked = false;
      document.getElementById("lbB").innerHTML= "No se puede repetir"
      let opB = document.getElementById("opB")
      opB.removeAttribute("onClick")
      opB.setAttribute("onClick", "pregFinal(false)");
      opB.checked = false;
    }else{
      tipos = tipos.filter(tipo => {
        return tipo.includes("Combinaciones")
      })
      document.getElementById("lbA").innerHTML= "Se puede repetir"
      let opA = document.getElementById("opA");
      opA.removeAttribute("onClick")
      opA.setAttribute("onClick", "pregFinal(true)");
      opA.checked = false;
      document.getElementById("lbB").innerHTML= "No se puede repetir"
      let opB = document.getElementById("opB")
      opB.removeAttribute("onClick")
      opB.setAttribute("onClick", "pregFinal(false)");
      opB.checked = false;
    



 }
}
}

 function pregFinal(repetir) {
  
  if(repetir){
    tipos = tipos.filter(tipo => {
      return tipo.includes("Repeticion")
    })
    document.getElementById("res").innerHTML= tipos[0]
  }
  else{
    tipos = tipos.filter(tipo => {
      return tipo.includes("Simples")
    })

    document.getElementById("res").innerHTML= tipos[0]
  }
  let dvv = document.getElementById("cantidad")
  dvv.setAttribute("hidden", "true")



 }

 function crearEnc(){
 tipos= ["Arreglos Simples",  "Combinaciones Simples", 
 "Arreglos Con Repeticion", "Combinaciones Con Repeticion"];
   document.getElementById("lbA").innerHTML= "Interesa el orden"
   let opA = document.getElementById("opA");
   opA.removeAttribute("onClick")
   opA.setAttribute("onClick", "crearPregFinal(true)");
   opA.checked = false;
   document.getElementById("lbB").innerHTML= "No Interesa el orden"
   let opB = document.getElementById("opB")
   opB.removeAttribute("onClick")
   opB.setAttribute("onClick", "crearPregFinal(false)");
   opB.checked = false;
 }

 function reiniciar(){
  document.getElementById("cantidad").removeAttribute("hidden")
  document.getElementById("res").innerHTML= ""
  document.getElementById("lbA").innerHTML= "Me interesan todos los elementos"
  let opA = document.getElementById("opA");
  opA.removeAttribute("onClick")
  opA.setAttribute("onClick", "crearPregFinal(true)");
  opA.checked = false;
  document.getElementById("lbB").innerHTML= "Me interesan algunos elementos"
  let opB = document.getElementById("opB")
  opB.removeAttribute("onClick")
  opB.setAttribute("onClick", "crearEnc()");
  opB.checked = false;
  
 }