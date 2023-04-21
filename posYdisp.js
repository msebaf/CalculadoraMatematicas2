
let listaObservaciones = [];




function procesar(){
    listaObservaciones=[]
    document.getElementById("txMedia").innerHTML = "Media : "
    document.getElementById("txMediana").innerHTML = "Mediana : "
    document.getElementById("txModa").innerHTML = "Moda : "
    document.getElementById("txObservacionesOrdenadas").innerHTML = "Observaciones ordenadas : "
  
    document.getElementById("minMax").innerHTML = "Minimo : " + "  Maximo : " 
    document.getElementById("txCuartiles").innerHTML = "Cuartiles : "
    document.getElementById("txRangoIntercuartilico").innerHTML = "Rango Intercuartilico : "
    document.getElementById("txRango").innerHTML = "Rango : "
    document.getElementById("txVarianzaMuestral").innerHTML = "Varianza Muestral : "
    document.getElementById("txVarianzaPoblacional").innerHTML = "Varianza poblacional : "
    document.getElementById("txDesviacionStandartMuestral").innerHTML = "Desviacion Estandar Muestral : "
    document.getElementById("txDesviacionStandartPoblacional").innerHTML = "Desviacion Estandar Poblacional : "
    document.getElementById("txcoeficienteDeVariacionMuestral").innerHTML = "Coeficiente Variacion Muestral : "
    document.getElementById("txcoeficienteDeVariacionPoblacional").innerHTML = "Coeficiente Variacion Poblacional : "
    document.getElementById("txbarrerainferior").innerHTML = "Barrera inferior : "
    document.getElementById("txoutliersinferiores").innerHTML = "Outliers Inferiores : "
    document.getElementById("txbarrerasuperior").innerHTML = "Barrera superior : "
    document.getElementById("txoutlierssuperiores").innerHTML = "Outliers Superiores : "
    


    
    let observaciones  = document.getElementById("observaciones").value
    let arrayNumeros = []
    //observaciones.replace(" ","")
    const arrayValores = observaciones.split(",");
    arrayValores.forEach(observacion => {
        if(observacion.includes("x")){
            let arrayRepeticiones = observacion.split("x")

            for(let i = 0; i < parseInt(arrayRepeticiones[1]); i++){
                arrayNumeros.push(parseFloat(arrayRepeticiones[0]))
            }

        }
        else if(observacion.includes("X")){
            let arrayRepeticiones = observacion.split("X")

            for(let i = 0; i < parseInt(arrayRepeticiones[1]); i++){
                arrayNumeros.push(parseFloat(arrayRepeticiones[0]))
            }
            
        }
        else{
            arrayNumeros.push(parseFloat(observacion))
        }
        
        arrayNumeros.sort((a, b) => a - b)
        
    });
    console.log("media : "+ media(arrayNumeros))
    console.log("mediana : "+ mediana(arrayNumeros))
    console.log("Moda : " + moda(arrayNumeros))
    console.log("observaciones ordenadas : " +arrayNumeros)
    console.log("min/q1/q2/q3/max : " + cuartiles(arrayNumeros))
    console.log("rango intercuartilico : " + rangoIntercuartilico(arrayNumeros))
    console.log("rango : " + rango(arrayNumeros))
    console.log("variancia Muetral: " + varianciaMuestral(arrayNumeros))
    console.log("variancia Poblacional: " + varianciaPoblacional(arrayNumeros))
    console.log("desviacion standart Muestral: " + desviacionStandartMuetral(arrayNumeros))
    console.log("desviacion standart Poblacional: " + desviacionStandartPoblacional(arrayNumeros))
    console.log("coeficiente Variacion Muestral: " + coeficienteVariacionMuestral(arrayNumeros)+" %")
    console.log("coeficiente Variacion Poblacional: " + coeficienteVariacionPoblacional(arrayNumeros)+" %")
    

    document.getElementById("txMedia").innerHTML += media(arrayNumeros)
    document.getElementById("txMediana").innerHTML += mediana(arrayNumeros)
    document.getElementById("txModa").innerHTML += moda(arrayNumeros)
    document.getElementById("txObservacionesOrdenadas").innerHTML += arrayNumeros
    let cuart = cuartiles(arrayNumeros)
    document.getElementById("minMax").innerHTML = "Minimo : " + cuart[0] + "Maximo : " + cuart[4]
    document.getElementById("txCuartiles").innerHTML +=  cuart[1] + " " + cuart[2] + " " + cuart[3]
    document.getElementById("txRangoIntercuartilico").innerHTML += rangoIntercuartilico(arrayNumeros)
    document.getElementById("txRango").innerHTML += rango(arrayNumeros)
    document.getElementById("txVarianzaMuestral").innerHTML += varianciaMuestral(arrayNumeros)
    document.getElementById("txVarianzaPoblacional").innerHTML += varianciaPoblacional(arrayNumeros)
    document.getElementById("txDesviacionStandartMuestral").innerHTML += desviacionStandartMuetral(arrayNumeros)
    document.getElementById("txDesviacionStandartPoblacional").innerHTML += desviacionStandartPoblacional(arrayNumeros)
    document.getElementById("txcoeficienteDeVariacionMuestral").innerHTML += coeficienteVariacionMuestral(arrayNumeros)
   
    document.getElementById("txbarrerainferior").innerHTML += barreraInferior(arrayNumeros)
    document.getElementById("txoutliersinferiores").innerHTML += outliersInferiores(arrayNumeros)
    document.getElementById("txbarrerasuperior").innerHTML += barreraSuperior(arrayNumeros)
    document.getElementById("txoutlierssuperiores").innerHTML += outliersSuperiores(arrayNumeros)
    

}



function formatear(){
     let observacionesContainer = document.getElementById("observaciones")
     let reemplazar = document.getElementById("reemplazar").value+""
     let reemplazo = document.getElementById("reemplazo").value+""
    let observaciones = observacionesContainer.value+"";
    console.log(observaciones + "4444")
    console.log(reemplazar)
    console.log(reemplazo)
    var regex = new RegExp(reemplazar, "g");
    let formatedObs = observaciones.replace(regex,reemplazo)
    console.log(formatedObs)
    observacionesContainer.value = formatedObs


    }
    







function media(arrayNums){
    let suma = 0
    for(let i = 0; i < arrayNums.length; i++){
        suma += arrayNums[i]
    }
    return suma/arrayNums.length
}

function mediana(arrayNums){
    let mitad = parseInt(arrayNums.length/2)
    if(arrayNums.length % 2 == 0){
        return (arrayNums[mitad-1] + arrayNums[mitad])/2
    }
    else{
        return arrayNums[mitad]
    }}

function moda(arrayNums){
    let contador = 0;
    let contadorMax = 0;
    let moda = []
    
    for(let i = 0; i < arrayNums.length; i++){
        for(let k =i; k < arrayNums.length; k++){
            if(arrayNums[i] == arrayNums[k]){
                contador++
            }
        
    
        }
        if(contador > contadorMax){
            contadorMax = contador
            moda=[];
            moda.push(arrayNums[i])
        }
        else if (contador == contadorMax){
            
                moda.push(arrayNums[i])
            
        }
        contador = 0
    }
    if(moda.length == arrayNums.length){
        moda = "sin moda"
    }
    return moda

}

function cuartiles(arrayNums){
    let q2 = mediana(arrayNums);
   
    
    let arrq1 = []
    for(i=0; i <= ((arrayNums.length)/2)-1; i++){
        arrq1.push(arrayNums[i])
    }
    let q1= mediana(arrq1);
    
   let arrq3 = []
   for(i=arrayNums.length-1; i >= ((arrayNums.length)/2); i--){
       arrq3.push(arrayNums[i])
   }
   let q3 = mediana(arrq3);
   let min = arrayNums[0];
   let max = arrayNums[arrayNums.length-1];
   
return [min, q1, q2, q3, max]

}
    

function rango(arrayNums){
    return arrayNums[arrayNums.length-1] - arrayNums[0];
}

function rangoIntercuartilico(arrayNums){
    let cuart = cuartiles(arrayNums);
    return cuart[3] - cuart[1];
}

function varianciaMuestral(arrayNums){
    let mediaL = media(arrayNums)
    let difsAlCuadrado = []
    for(let i = 0; i < arrayNums.length; i++){
        difsAlCuadrado.push((arrayNums[i] - mediaL) * (arrayNums[i] - mediaL))
    }
    let total=0
    for(let i = 0; i < difsAlCuadrado.length; i++){
        total += difsAlCuadrado[i]
    }
    let final = total/(difsAlCuadrado.length-1)
    return final;
}

function varianciaPoblacional(arrayNums){
    let mediaL = media(arrayNums)
    let difsAlCuadrado = []
    for(let i = 0; i < arrayNums.length; i++){
        difsAlCuadrado.push((arrayNums[i] - mediaL) * (arrayNums[i] - mediaL))
    }
    let total=0
    for(let i = 0; i < difsAlCuadrado.length; i++){
        total += difsAlCuadrado[i]
    }
    let final = total/difsAlCuadrado.length
    return final;
}

function desviacionStandartMuetral(arrayNums){

    return Math.sqrt(varianciaMuestral(arrayNums));
}

function desviacionStandartPoblacional(arrayNums){
    
    return Math.sqrt(varianciaPoblacional(arrayNums));
}

function coeficienteVariacionMuestral(arrayNumeros){

    return desviacionStandartMuetral(arrayNumeros)/media(arrayNumeros)*100
}

function coeficienteVariacionPoblacional(arrayNumeros){
    
    return desviacionStandartPoblacional(arrayNumeros)/media(arrayNumeros)*100
}

function barreraInferior(arrayNumeros){

    return (cuartiles(arrayNumeros)[1] - ((1.5 * (rangoIntercuartilico(arrayNumeros)))))

}

function barreraSuperior(arrayNumeros){
    return (cuartiles(arrayNumeros)[3] + ((1.5 * (rangoIntercuartilico(arrayNumeros)))))
}

function outliersInferiores(arrayNumeros){
    return arrayNumeros.filter(numero => numero < barreraInferior(arrayNumeros)).sort((a, b) => a - b)
}

function outliersSuperiores(arrayNumeros){
    return arrayNumeros.filter(numero => numero > barreraSuperior(arrayNumeros)).sort((a, b) => a - b)
}


