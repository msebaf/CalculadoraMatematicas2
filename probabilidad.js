

function probClasica() {
   let fav = parseInt(document.getElementById("favorablesC").value)
   let total = parseInt(document.getElementById("totalC").value)
   document.getElementById("resultadoC").innerHTML = (fav/total)
}

function probCond() {
    let susN = parseFloat(document.getElementById("sucesoN").value)
    let sucSus = parseFloat(document.getElementById("sucesoS").value)
    document.getElementById("resultadoCon").innerHTML = (susN/sucSus)
 }

 function probIndependientes(){
    let ind1 = parseFloat(document.getElementById("sucesoAind").value)
    let ind2 = parseFloat(document.getElementById("sucesoBind").value)
    document.getElementById("resultadoInd").innerHTML = (ind1 *ind2)
 }


 function probAdiNoD(){
    let adi1 = parseFloat(document.getElementById("sucesoAadiNoD").value)
    let adi2 = parseFloat(document.getElementById("sucesoBadiNoD").value)
    let union = parseFloat(document.getElementById("unionAyB").value)
    document.getElementById("resultadoAdiNoD").innerHTML = (adi1 + adi2 - (union))
     
 }
 function probAdiD(){
    let adi1 = parseFloat(document.getElementById("sucesoAadiD").value)
    let adi2 = parseFloat(document.getElementById("sucesoBadiD").value)
    document.getElementById("resultadoAdiD").innerHTML = (adi1 + adi2)
     
 }

 function probTot(){
    const totsA = document.getElementById("totsA").value;
    const  b = document.getElementById("totB").value;
    let numerosTotString = totsA.split(",");
    let numerosTot =[];
    numerosTotString.forEach(numero => {
      numerosTot.push(parseFloat(numero));
    })
    let total = 0;
    numerosTot.forEach(numero => {
      total +=b/numero
    })
    document.getElementById("resultadoTot").innerHTML = total
 }