const participantes = document.getElementById("participantes")
const monto = document.getElementById("monto")
const boton_siguiente = document.getElementById("boton_siguiente")
const containerPersonas = document.getElementById("containerPersonas")

const inputMonto = document.getElementsByClassName("inputMonto")
const botonCalcular = document.getElementById("botonCalcular")

boton_siguiente.addEventListener('click', cantidadParticipantes)
botonCalcular.addEventListener('click', divisionCuentas)



// function division(e) {
//     e.preventDefault();

//     if (monto.value == "" || participantes.value == "") {
//         window.alert("Ingrese el monto y/o las personas por las que dividir")
//     }
//     else {

//     const resultado = monto.value / participantes.value
    
    


//     const tagh4 = document.createElement('h4');
//     tagh4.innerText = "Cada uno tiene que pagar $" + resultado.toFixed(2);
//     tagh4.className = "h4resultado";

//     resultadofinal.appendChild(tagh4);

//     monto.value = ""
//     participantes.value = ""
//     }

// }


const cantidadPersonas = []


function cantidadParticipantes (e) {
    e.preventDefault();

    personas = participantes.value

    for (let index = 1; index <= personas; index++) {
        cantidadPersonas.push({
            
            name: "Persona " + index});

        const tagh4 = document.createElement('h4');
        tagh4.innerText = "Persona " + index;
        tagh4.className = "participantesH4";

        containerPersonas.appendChild(tagh4)

        const inputMonto = document.createElement('input');
        inputMonto.type = "number"
        inputMonto.className = "inputMonto";
        inputMonto.min = 0
        inputMonto.value = 0
        

        containerPersonas.appendChild(inputMonto)
        
    }

   console.log(cantidadPersonas)


}




function divisionCuentas () {
    for (let index = 0; index < inputMonto.length; index++) {

        
        cantidadPersonas[index].monto = inputMonto[index].value
        
    }
    
    console.log(cantidadPersonas)


    const arrayMontos = cantidadPersonas.map(function(cantidadPersonas) {return cantidadPersonas.monto})
    const arrayMontosNum = arrayMontos.map(i=>Number(i));

    console.log(arrayMontosNum)

    total = 0

    for (let i = 0; i < arrayMontosNum.length; i++) {
             total += arrayMontosNum[i]

        }

        console.log(total)


    
        const cadaUnoPone = 0

    division()

    


}

    





function division (){

    const diferencia = 0

    let cadaUnoPone = total / cantidadPersonas.length

    console.log(cadaUnoPone)

    console.log(cantidadPersonas[1].monto)

    if (cantidadPersonas.monto > 0) {

        const diferencia = cadaUnoPone - cantidadPersonas.monto

        


    }

    console.log(diferencia)

    
}