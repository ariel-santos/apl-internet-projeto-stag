function navegaHome() {
    window.location.href = "C:/Users/User/Desktop/Curso Alura/Projeto Safra/apl-internet-projeto-stag/Home/home.html";
}

function calcularValor() {
    var quantidade = document.getElementById("quantidade").value;
    var valorUnitario = document.getElementById("valorUnitario").value;
    var valorTotal = quantidade * valorUnitario;

    if (quantidade > 100 && quantidade <= 200) {
        valorTotal = valorTotal * 1.25;
    } else if (quantidade > 200) {
        valorTotal = valorTotal * 1.5;
    }

    document.getElementById("valor").value = valorTotal.toFixed(2);
}