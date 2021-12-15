function idadeDog() {

    if (document.getElementById("inputAnos").value == "") {
        document.getElementById("inputAnos").value = 0
    }

    if (document.getElementById("inputMeses").value == "") {
        document.getElementById("inputMeses").value = 0
    }

    var anos = document.getElementById("inputAnos").value //3
    var meses = document.getElementById("inputMeses").value //6


    if ((anos == 0) && (meses == 0)){
        document.getElementById("frameQueMuda").innerText = "Você precisa inserir pelo menos 1 mês de idade para o seu dog."
        document.getElementById("botaoContainer").innerHTML = `<button id="botaoRecalcular" onclick="document.location.reload()">VOLTAR</p>`
        
    } else {
        if ((anos == 0) && (meses == 1)){
        document.getElementById("frameQueMuda").innerText = "Se seu Dog fosse humano, ele teria 8 meses."
        document.getElementById("botaoContainer").innerHTML = `<button id="botaoRecalcular" onclick="document.location.reload()">VOLTAR</p>`
        } else {

            var mesesTotal = ((anos * 12) + meses * 1) / (12 * 1)

            var idadeDogFinal = (16 * Math.log(mesesTotal)) + 30 * 1
            var idadeDogFinalFixed = idadeDogFinal.toFixed(2)

            var anoFinal = Math.floor(idadeDogFinalFixed)
            var sobraMeses = idadeDogFinalFixed % 1 //Porcentagem do total, tem que fazer essa porcentagem dos 12 meses
            var sobraMesesFixed = sobraMeses.toFixed(2)
            var mesesFinal = Math.floor(12 * sobraMesesFixed)

                if ((anoFinal !== 0) && (mesesFinal == 1)) {                

                    document.getElementById("frameQueMuda").innerHTML = `<p>Se seu Dog fosse humano, ele teria <br> <strong>${anoFinal} anos e ${mesesFinal} mês</strong>. </p>`

                    document.getElementById("botaoContainer").innerHTML = `<button id="botaoRecalcular" onclick="document.location.reload()">VOLTAR</p>`
                } else {
                    document.getElementById("frameQueMuda").innerHTML = `<p>Se seu Dog fosse humano, ele teria <br> <strong>${anoFinal} anos e ${mesesFinal} meses</strong>. </p>`

                    document.getElementById("botaoContainer").innerHTML = `<button id="botaoRecalcular" onclick="document.location.reload()">VOLTAR</p>`
                }
        }

    }

}    
