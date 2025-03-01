document.addEventListener("DOMContentLoaded", () => {
    const pixPopup = document.getElementById("pix-popup");
    const closePopupX = document.querySelector(".close-popup-x");

    // Exibe o popup automaticamente ao carregar a página
    setTimeout(() => {
        pixPopup.style.display = "flex";
    }, 1000); // 1 segundo de atraso para suavizar a entrada

    // Fecha o popup ao clicar no "X"
    if (closePopupX) {
        closePopupX.addEventListener("click", () => {
            pixPopup.style.display = "none";
        });
    }

    // Fecha o popup ao clicar fora do conteúdo
    pixPopup.addEventListener("click", (event) => {
        if (event.target === pixPopup) {
            pixPopup.style.display = "none";
        }
    });
});
