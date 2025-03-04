const buttons = document.querySelectorAll('.adicionar-carrinho');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Produto adicionado ao carrinho!');
    });
});