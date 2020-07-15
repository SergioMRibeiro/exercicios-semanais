var meuModulo = (function(){
    document.write('fui importado')
    var nome = 'Sérgio'
    
    function alerta(){
        alert('fui chamado');
    }

    return {
        nome,
        alerta
    }
})()