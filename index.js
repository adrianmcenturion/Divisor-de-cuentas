const participantes = document.getElementById("participantes")
const monto = document.getElementById("monto")
const boton_siguiente = document.getElementById("boton_siguiente")
const boton_reset = document.getElementById("boton_reset")
const containerPersonas = document.getElementById("containerPersonas")
const tagh4 = document.getElementsByClassName("participantesH4")
const inputMonto = document.getElementsByClassName("inputMonto")
const botonCalcular = document.getElementById("botonCalcular")

const resultados = document.getElementById("resultados")
const containerTieneQueRecibir = document.getElementById("container-tiene-que-recibir")
const containerTieneQuePoner = document.getElementById("container-tiene-que-poner")

boton_siguiente.addEventListener('click', cantidadParticipantes)
botonCalcular.addEventListener('click', divisionCuentas)
boton_reset.addEventListener('click', resetearTodo )


const cantidadPersonas = []


function cantidadParticipantes (e) {
    e.preventDefault();

    personas = participantes.value

    if (personas < 0 || personas > 10) {

        alert("Por favor ingrese un número entre 1 y 10")
    }else {

    for (let index = 1; index <= personas; index++) {
        cantidadPersonas.push({
            
            name: "Persona " + index});

        const tagh4 = document.createElement('input');
        tagh4.placeholder = "Persona " + index;
        tagh4.className = "participantesH4";
        

        // containerPersonas.appendChild(tagh4)

        const inputMonto = document.createElement('input');
        inputMonto.type = "number"
        inputMonto.className = "inputMonto";
        inputMonto.min = 0
        inputMonto.placeholder = "Monto pagado"
        
        // containerPersonas.appendChild(inputMonto)
        
        const containerPersonaGasto = document.createElement('div')
        containerPersonaGasto.className = "containerPersonaGasto"

        containerPersonaGasto.appendChild(tagh4)
        containerPersonaGasto.appendChild(inputMonto)

        containerPersonas.appendChild(containerPersonaGasto)
        
    }


   console.log(cantidadPersonas)



   boton_siguiente.disabled = true

   console.log(cantidadPersonas)

   
    }

    

}


function divisionCuentas () {

    for (let index = 0; index < cantidadPersonas.length; index++) {
        cantidadPersonas[index].name = tagh4[index].value
        
    }

    console.log(cantidadPersonas)




    for (let index = 0; index < inputMonto.length; index++) {

        
        cantidadPersonas[index].monto = inputMonto[index].value
        
    }
    
    

    const arrayMontos = cantidadPersonas.map(function(cantidadPersonas) {return cantidadPersonas.monto})
    const arrayMontosNum = arrayMontos.map(i=>Number(i));

    console.log(arrayMontosNum)

    totalMontos = 0

    for (let i = 0; i < arrayMontosNum.length; i++) {
             totalMontos += arrayMontosNum[i]

        }

        console.log(totalMontos)


        const total = document.createElement('h4');
                total.innerText = "El gasto fue de $" + totalMontos
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

                // const tieneQueRecibir = cantidadPersonas[index].name + " tiene que recibir " + diferencia[index].toFixed(2) * -1

    

                const tagTieneQueRecibir = document.createElement('h4');
                tagTieneQueRecibir.innerText = cantidadPersonas[index].name + " tiene que recibir $" + diferencia[index].toFixed(2) * -1;
                tagTieneQueRecibir.className = "tieneQueRecibir";

                containerTieneQueRecibir.appendChild(tagTieneQueRecibir)




            } else {

                // const tieneQuePoner = cantidadPersonas[index].name + " tiene que poner " + diferencia[index]

                const tagTieneQuePoner = document.createElement('h4');
                tagTieneQuePoner.innerText = cantidadPersonas[index].name + " tiene que abonar $" + diferencia[index].toFixed(2)
                tagTieneQuePoner.className = "tieneQuePoner";

                containerTieneQuePoner.appendChild(tagTieneQuePoner)

            }
            
        
        }
    
        
        
    }

    
    botonCalcular.disabled = true

}

    

function resetearTodo (){

    window.location.reload();

}


