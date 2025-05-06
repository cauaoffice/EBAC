
function calcular() {
    //ENTRADA DE DADOS
    let valorKg = document.getElementById("valor").value;
    let metros = document.getElementById("metros").value;


    //PROCESSAMENTO
    let imc = valorKg / (metros * metros);
    let valorFormatado = imc.toFixed(2);
    //SAIDA
    document.getElementById("imc").innerHTML = `Valor IMC: ${valorFormatado}`;
    
}
