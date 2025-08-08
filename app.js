let listaAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    listaAmigos.push(nome);
    input.value = ""; 
    listarAmigos();
}

function listarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let i = 0; i < listaAmigos.length; i++) {
        let amigo = document.createElement("li");
        amigo.textContent = listaAmigos[i];
        lista.appendChild(amigo);
    }
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos dois nomes para sortear!");
        return;
    }

    let sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto sorteado foi: <strong>${sorteado}</strong></li>`;
}
