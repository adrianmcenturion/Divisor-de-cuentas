const participantes = document.getElementById("participantes")
const monto = document.getElementById("monto")
const boton_siguiente = document.getElementById("boton_siguiente")
const containerPersonas = document.getElementById("containerPersonas")

const inputMonto = document.getElementsByClassName("inputMonto")
const botonCalcular = document.getElementById("botonCalcular")

const resultados = document.getElementById("resultados")

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
    
    console.log(cantidadPersonas.monto)


    const arrayMontos = cantidadPersonas.map(function(cantidadPersonas) {return cantidadPersonas.monto})
    const arrayMontosNum = arrayMontos.map(i=>Number(i));

    console.log(arrayMontosNum)

    totalMontos = 0

    for (let i = 0; i < arrayMontosNum.length; i++) {
             totalMontos += arrayMontosNum[i]

        }

        console.log(totalMontos)


        const total = document.createElement('h4');
                total.innerText = "El gasto es " + totalMontos
                total.className = "total";

                resultados.appendChild(total)

    
        const cadaUnoPone = 0

    division()

    
    function division (){
    
        let diferencia = []
    
        const cadaUnoPone = totalMontos / cantidadPersonas.length
    
        console.log(cadaUnoPone)
    
        console.log(arrayMontosNum)
    
        for (let index = 0; index < cantidadPersonas.length; index++) {
            diferencia.push (cadaUnoPone - arrayMontosNum[index])

            if (diferencia[index] < 0 ) {

                const tieneQueRecibir = cantidadPersonas[index].name + " tiene que recibir " + diferencia[index] * -1

    

                const tagTieneQueRecibir = document.createElement('h4');
                tagTieneQueRecibir.innerText = cantidadPersonas[index].name + " tiene que recibir " + diferencia[index] * -1;
                tagTieneQueRecibir.className = "tieneQueRecibir";

                resultados.appendChild(tagTieneQueRecibir)




            } else {

                const tieneQuePoner = cantidadPersonas[index].name + " tiene que poner " + diferencia[index]

                const tagTieneQuePoner = document.createElement('h4');
                tagTieneQuePoner.innerText = cantidadPersonas[index].name + " tiene que poner " + diferencia[index]
                tagTieneQuePoner.className = "tieneQuePoner";

                resultados.appendChild(tagTieneQuePoner)

            }
            
        
        }
    
        
        
    }


}

    




