let ocultaMarcacao = document.querySelector('#visibilidade-das-marcacoes');

ocultaMarcacao.addEventListener('click', function(e){
    let ocultado = e.target;
    ocultado.classList.toggle('selecionado') ? ocultado.classList.remove('marcacao') : ocultado.classList.add('marcacao')
    
})