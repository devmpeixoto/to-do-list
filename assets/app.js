// Seleciona o elemento de entrada de texto pelo ID
const inputBox = document.getElementById('input-box');

// Seleciona o contêiner da lista pelo ID
const listContainer = document.getElementById('list-container');

// Seleciona o botão pelo seletor de classe
const btnEl = document.querySelector('.btn');

// Função para adicionar itens à lista
function displayItems() {
    // Verifica se o campo de entrada está vazio
    if (inputBox.value === '') {
        alert('You must write something!');
    } else {
        // Cria um elemento <li> e insere o valor do campo de entrada nele
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;

        // Adiciona o elemento <li> à lista
        listContainer.appendChild(li);

        // Cria um elemento <span> com o símbolo 'x' para exclusão
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";

        // Adiciona o elemento <span> ao <li>
        li.appendChild(span);
    }
    
    // Limpa o campo de entrada após adicionar um item à lista
    inputBox.value = '';

    // Chama a função para salvar os dados
    saveData();
}

// Função para salvar os dados na memória local (localStorage)
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

// Função para exibir a lista salva anteriormente
function showList() {
    // Carrega os dados da memória local e exibe na lista
    listContainer.innerHTML = localStorage.getItem('data');
}

// Chama a função para exibir a lista quando o script é carregado
showList();

// Adiciona um ouvinte de evento para cliques no contêiner da lista
listContainer.addEventListener('click', function (e) {
    // Verifica se o elemento clicado é um <li>
    if (e.target.tagName === 'LI') {
        // Alterna a classe 'checked' para destacar ou remover destaque do item
        e.target.classList.toggle('checked');
        // Chama a função para salvar os dados após a alteração
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        // Remove o elemento <li> pai do <span> (item da lista)
        e.target.parentElement.remove();
        // Chama a função para salvar os dados após a remoção
        saveData();
    }
});

// Adiciona um ouvinte de evento para cliques no botão
btnEl.addEventListener('click', (e) => {
    e.preventDefault();
    // Chama a função para adicionar o item à lista
    displayItems();
});

// Adiciona um ouvinte de evento para a tecla 'Enter' pressionada no campo de entrada
inputBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        // Chama a função para adicionar o item à lista
        displayItems();
    }
});
