const form = document.getElementById('form-atividade');
const nome = document.getElementById('nome-contato');
const contato = document.getElementById('numero-contato');
const nomeContato = [];
const numeroContato = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaNome();
    adicionaContato();
    resultadoFinal();
});

    function adicionaNome() {
    const inputNomeContato = document.getElementById ('nome-contato');
    const inputNumeroContato = document.getElementById ('numero-contato');

    if (nomeContato.includes(inputNomeContato.value)) {
        alert(`O Nome: ${inputNomeContato.value} já foi inserido`);
    } else {
    nomeContato.push(inputNomeContato.value);
    numeroContato.push(inputNumeroContato.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += '</tr>';
    
    linhas += linha;
}

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function adicionaContato() {
    const corpoLista = document.querySelector ('tbody');
    corpoLista.innerHTML = linhas;
}

function resultadoFinal() {
    const listaFinal = calculaMediaFinal();

    document.getElementById('nome').innerHTML = listaFinal.toFixed(2);
    document.getElementById('contato').innerHTML = listaFinal >= notaMinima ? nomeContato : numeroContato;
    console.log(media);
}

function contatoFinal () {
    return nomeContato, numeroContato;
}