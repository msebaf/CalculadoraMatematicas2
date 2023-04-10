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
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    const resultadoPermutacion = document.getElementById("resultadoPermutacion");
    resultadoPermutacion.innerHTML = resultado;
    return resultado;
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
  