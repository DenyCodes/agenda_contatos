const form = document.getElementById('form-agenda');
let linhas ='';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeAgenda = document.getElementById('nome-contato');
    const inputNumeroAgenda = document.getElementById('tel-contato');
    
    let linha = '<tr>';
    linha += `<td>${inputNomeAgenda.value}</td>`;
    linha += `<td>${inputNumeroAgenda.value}</td>`;
    linha += '</tr>'

    linhas += linha;

    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;
    inputNomeAgenda.value = '';
    inputNumeroAgenda.value = '';
})