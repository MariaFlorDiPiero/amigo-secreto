let amigos = [];

function adicionarAmigo() {
    // Obtém o valor do campo de texto
    let nomeAmigo = document.getElementById('amigo').value;

    // Valida se o campo não está vazio
    if (nomeAmigo.trim() === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nomeAmigo);

    // Limpa o campo de texto
    document.getElementById('amigo').value = '';

    // Atualiza a lista de nomes na página
    atualizarLista();
}

function atualizarLista() {
    // Obtém o elemento onde a lista será exibida
    let listaAmigos = document.getElementById('listaAmigos');

    // Limpa a lista atual
    listaAmigos.innerHTML = '';

    // Adiciona cada nome do array à lista
    amigos.forEach(function(nome) {
        let itemLista = document.createElement('li');
        itemLista.textContent = nome;
        listaAmigos.appendChild(itemLista);
    });
}

function sortearAmigo() {
    // Verifica se há nomes na lista
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return;
    }

    // Sorteia um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    let amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado na página
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto é: ${amigoSorteado}</li>`;
}