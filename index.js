const participantes = document.getElementById("participantes")
const monto = document.getElementById("monto")
const boton_siguiente = document.getElementById("boton_siguiente")
const boton_reset = document.getElementById("boton_reset")
const containerPersonas = document.getElementById("containerPersonas")
const inputNombres = document.getElementsByClassName("inputNombres")
const inputMonto = document.getElementsByClassName("inputMonto")
const botonCalcular = document.getElementById("botonCalcular")

const resultados = document.getElementById("resultados")
const containerTieneQueRecibir = document.getElementById("container-tiene-que-recibir")
const containerTieneQuePoner = document.getElementById("container-tiene-que-poner")

const containerResultados = document.getElementById("container-resultados")
const cardDivisor = document.getElementById('card-divisor')
const containerGrande = document.getElementById('container-grande')

const botonMas = document.getElementById('botonMas')
const botonMenos = document.getElementById('botonMenos')
const botonResetMobile = document.getElementById('boton_reset_mobile')

boton_siguiente.addEventListener('click', cantidadParticipantes)
botonCalcular.addEventListener('click', divisionCuentas)
boton_reset.addEventListener('click', resetearTodo )
botonResetMobile.addEventListener('click', resetearTodo )

botonMas.addEventListener('click', botonSumar)
botonMenos.addEventListener('click', botonRestar)





const cantidadPersonas = []

function botonRestar () {

    if( botonMenos.clicked = true && participantes.value > 1) {
        participantes.value --
    } 
    
    

}
function botonSumar () {

    if(botonMas.clicked = true && participantes.value < 10) {
        participantes.value ++
    }
    

}

function cantidadParticipantes (e) {
    e.preventDefault();
    
    personas = participantes.value
    
    
    
        

    if (personas < 0 || personas > 10) {

        alert("Por favor ingrese un número entre 1 y 10")
    }else {

    for (let index = 1; index <= personas; index++) {
        cantidadPersonas.push({
            
            name: "Persona " + index});

        const inputNombres = document.createElement('input');
        inputNombres.placeholder = "Persona " + index;
        inputNombres.className = "inputNombres";
        

        // containerPersonas.appendChild(tagh4)

        const inputMonto = document.createElement('input');
        inputMonto.type = "number"
        inputMonto.className = "inputMonto";
        inputMonto.min = 0
        inputMonto.placeholder = "$0"
        
        // containerPersonas.appendChild(inputMonto)
        
        const containerPersonaGasto = document.createElement('div')
        containerPersonaGasto.className = "containerPersonaGasto"

        containerPersonaGasto.appendChild(inputNombres)
        containerPersonaGasto.appendChild(inputMonto)

        containerPersonas.appendChild(containerPersonaGasto)
        
    }


   console.log(cantidadPersonas)



   boton_siguiente.disabled = true
   botonMas.disabled = true
   botonMenos.disabled = true

   console.log(cantidadPersonas)

   
    }

    

}


function divisionCuentas () {

    botonCalcular.classList.toggle("activado");
    containerResultados.classList.toggle('activado')
    cardDivisor.classList.toggle('activado')
    containerGrande.classList.toggle('activado')

    for (let index = 0; index < cantidadPersonas.length; index++) {

        if(inputNombres[index].value == "") {
            cantidadPersonas[index.name = "Persona " + index]
        }else {

        cantidadPersonas[index].name = inputNombres[index].value
        }
        
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

        const div = document.createElement('div')
        const total = document.createElement('h4');
        const precio = document.createElement('b')
                precio.innerText = "$" + totalMontos
                total.innerText = "El gasto total fue de "
                total.className = "total";
                div.className = "mini-containers-div-resultados"


                div.appendChild(total)
                div.appendChild(precio)

                resultados.appendChild(div)

    
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

    
                const div = document.createElement('div')
                const spanNombre = document.createElement('span')
                const tagTieneQueRecibir = document.createElement('h4');
                const precio = document.createElement('b')
                spanNombre.innerText = cantidadPersonas[index].name
                tagTieneQueRecibir.innerText = " tiene que recibir "
                tagTieneQueRecibir.className = "tieneQueRecibir";
                precio.innerText =  "$" + diferencia[index].toFixed(2) * -1
                div.className = "mini-containers-div-resultados"
                spanNombre.className = "span-recibir"


                div.appendChild(spanNombre)
                div.appendChild(tagTieneQueRecibir)
                div.appendChild(precio)
                containerTieneQueRecibir.appendChild(div)



            } else {

                // const tieneQuePoner = cantidadPersonas[index].name + " tiene que poner " + diferencia[index]
                const div = document.createElement('div')
                const spanNombre = document.createElement('span')
                const precio = document.createElement('b')
                const tagTieneQuePoner = document.createElement('h4');
                tagTieneQuePoner.innerText = " tiene que abonar "
                tagTieneQuePoner.className = "tieneQuePoner";
                spanNombre.innerText = cantidadPersonas[index].name
                precio.innerText =  "$" + diferencia[index].toFixed(2)
                div.className = "mini-containers-div-resultados"
                spanNombre.className = "span-poner"

                div.appendChild(spanNombre)
                div.appendChild(tagTieneQuePoner)
                div.appendChild(precio)
                containerTieneQuePoner.appendChild(div)

            }
            
        
        }
    
        
        
    }

    
    botonCalcular.disabled = true
    
    


}

    

function resetearTodo (){

    window.location.reload();
    


}


