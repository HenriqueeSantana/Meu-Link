function atualizarRelogio() {
    const relogio = document.getElementById('relogio');
    const agora = new Date();

    // Obtendo as horas, minutos e segundos
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    // Atualizando o conteúdo do relógio
    relogio.textContent = `${horas}:${minutos}:${segundos}`;
}

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// Chama a função uma vez para iniciar o relógio imediatamente
atualizarRelogio();
