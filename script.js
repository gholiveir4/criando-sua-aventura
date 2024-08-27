document.querySelectorAll('.btn-proximo').forEach(button => {
    button.addEventListener('click', () => {
        const atual = document.querySelector('.passo.ativo');
        const proximoPassoId = `passo-${button.dataset.proximo}`;
        const proximoPasso = document.getElementById(proximoPassoId);

        if (atual && proximoPasso) {
            atual.classList.remove('ativo');
            proximoPasso.classList.add('ativo');
        }
    });
});