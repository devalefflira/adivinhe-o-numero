// Variáveis

var secret = Math.round(Math.random() * 10);
var input = document.querySelector("input");
var button = document.querySelector("button");
var refresh = document.querySelector("#refresh");

// Funções

function show(parameter) {
    document.querySelector("#result").innerHTML = (parameter);
}

function check() {
    if (input.value == secret) {
        show("Você acertou! O número pensado foi " + secret + ".");
    } else {
        show("Você errou! O número pensado foi " + secret + ". Tente novamente.");
    }
}

// Comandos

show("Aguardando receber dados.");

// Eventos

button.onclick = check;

refresh.addEventListener("click", function () {
    location.reload();
})


