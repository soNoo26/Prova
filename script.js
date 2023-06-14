var i = 0;
function salvar() {
    i = i + 1;
    var novo = document.querySelector('#aluno');
    var ul = document.querySelector('ul');
    var li = document.createElement('li');
    var aluno = [];
    if (novo && ul && li) {
        aluno[i] = novo.value;
        var nometela = document.createTextNode(aluno[i]);
        li.appendChild(nometela);
        ul.appendChild(li);
    }
}
