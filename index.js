document.getElementById('notas').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const matricula = document.getElementById('matricula').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);

    if (nota1 > 10 || nota2 > 10) {
        alert('O valor da nota deve não pode ser maior que 10');
        return;
    }

    const media = (nota1 + nota2) / 2;
    const situacao = media > 5 ? 'Aprovado' : 'Reprovado';
    
    const tabela = document.getElementById('dadosTabela').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();
    
    const celulaNome = novaLinha.insertCell(0);
    const celulaMatricula = novaLinha.insertCell(1);
    const celulaNota1 = novaLinha.insertCell(2);
    const celulaNota2 = novaLinha.insertCell(3);
    const celulaMedia = novaLinha.insertCell(4);
    const celulaSituacao = novaLinha.insertCell(5);
    
    celulaNome.textContent = nome;
    celulaMatricula.textContent = matricula;
    celulaNota1.textContent = nota1.toFixed(2);
    celulaNota2.textContent = nota2.toFixed(2);
    celulaMedia.textContent = media.toFixed(2);
    celulaSituacao.textContent = situacao;
    
    document.getElementById('notas').reset();
});