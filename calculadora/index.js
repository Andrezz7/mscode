function calcular(operador) {
    const num1 = (document.getElementById('num1').value);
    const num2 = (document.getElementById('num2').value);
    const resultadoInput = document.getElementById('resultado');

    // Verifica se os valores são válidos
    if (isNaN(num1) || isNaN(num2)) {
    resultadoInput.value = "Preencha os dois números!";
    return;
    }

    // Fazer o cálculo
    let resultado;
    if (operador === '+') {
    resultado = num1 + num2;
    } else if (operador === '-') {
    resultado = num1 - num2;
    }

    // Exibe o resultado no input final
    resultadoInput.value = resultado;
    }
    