// JavaScript
let total = 0;

function calcular() {
    const hora = parseFloat(document.getElementById('hora').value);
    const precio = parseFloat(document.getElementById('precio').value);

    if (isNaN(hora) || hora <= 0) {
        alert('Por favor, ingrese un valor válido para las horas.');
        document.getElementById('hora').focus();
        return;
    }

    if (isNaN(precio) || precio <= 0) {
        alert('Por favor, ingrese un valor válido para el precio por hora.');
        document.getElementById('precio').focus();
        return;
    }

    total = hora * precio;
    document.getElementById('resultado').innerText = `Vas a cobrar: $${total.toFixed(2)} pesos`;
    alert(`Felicitaciones, el precio ganado por hora es: $${precio.toFixed(2)}`);
}

function agregarBonus() {
    const bonus = parseFloat(prompt('Ingrese el bonus que desea agregar:'));
    if (!isNaN(bonus) && bonus >= 0) {
        total += bonus;
        document.getElementById('resultado').innerText = `Vas a cobrar: $${total.toFixed(2)} pesos (incluyendo bonus)`;
    } else {
        alert('Por favor, ingrese un valor de bonus válido.');
    }
}

function mostrarFrase() {
    const frases = [
        "Sos la mejor compañera de vida!!!",
        "No te rindas!",
        "Nunca dejes de soñar!",
        "Todo es un paso más",
        "Rulitos te ama mucho",
        "Sos la mejor"
    ];
    const frase = frases[Math.floor(Math.random() * frases.length)];
    alert(`❤️ ${frase}`);

    const amo = ["Te amo", null];
    const am = amo[Math.floor(Math.random() * amo.length)];

    if (am) {
        alert(`❤️ ${am}`);
    }
}


function restablecer() {
    document.getElementById('calculoForm').reset();
    total = 0;
    document.getElementById('resultado').innerText = '';
}



