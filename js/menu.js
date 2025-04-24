document.addEventListener("DOMContentLoaded", function () {
  // Pegando o valor do localStorage e garantindo que é um número
  let viewCount = parseInt(localStorage.getItem("viewCount")) || 0;
  
  // Incrementando o valor
  viewCount++;

  // Atualizando o texto do contador na página
  const viewCountElement = document.getElementById("view-count");
  if (viewCountElement) {
      viewCountElement.textContent = viewCount;
  }

  // Salvando o novo valor no localStorage
  localStorage.setItem("viewCount", viewCount);
});
