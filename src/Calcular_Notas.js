function calcular() {
    try {
        var numero1 = parseFloat(document.getElementById('nota').value) || 0;
        var numero2 = parseFloat(document.getElementById('porcentajeLits').value) || 0;


        document.getElementById('resultado').value = numero1 * numero2 / 100;

    } catch (error) {

    }
}