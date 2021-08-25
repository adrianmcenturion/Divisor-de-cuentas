const participantes = document.getElementById("participantes")
const monto = document.getElementById("monto")
const calcular = document.getElementById("calcular")
const resultadofinal = document.getElementById("resultadofinal")

calcular.addEventListener('click', division)




function division(e) {
    e.preventDefault();

    if (monto.value == "" || participantes.value == "") {
        window.alert("Ingrese el monto y/o las personas por las que dividir")
    }
    else {

    const resultado = monto.value / participantes.value
    
    


    const tagh4 = document.createElement('h4');
    tagh4.innerText = "Cada uno tiene que pagar $" + resultado.toFixed(2);
    tagh4.className = "h4resultado";

    resultadofinal.appendChild(tagh4);

    monto.value = ""
    participantes.value = ""
    }

}









