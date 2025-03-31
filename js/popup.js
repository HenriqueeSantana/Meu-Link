document.addEventListener("DOMContentLoaded", function () {
    const pixPopup = document.getElementById("pix-popup");
    const closePopupBtn = document.querySelector(".close-popup-x");

    // Função para abrir o popup
    function abrirPopup() {
        pixPopup.classList.add("active"); // Adiciona a classe 'active' para mostrar o popup
    }

    // Função para fechar o popup
    function fecharPopup() {
        pixPopup.classList.remove("active"); // Remove a classe 'active' para esconder o popup
    }

    // Abrir o popup automaticamente ao carregar a página
    abrirPopup();

    // Fechar o popup ao clicar no botão X
    if (closePopupBtn) {
        closePopupBtn.addEventListener("click", fecharPopup);
    }

    // Fechar ao clicar fora do popup (na área escura)
    pixPopup.addEventListener("click", function (event) {
        if (event.target === pixPopup) {
            fecharPopup();
        }
    });
});
