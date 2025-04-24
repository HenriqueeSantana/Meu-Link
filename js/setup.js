// setup.js

// Inicializar animações AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Configurar avaliação por estrelas
    setupRatingStars();
    
    // Configurar modal
    setupModal();
});

// Função para avaliação por estrelas
function setupRatingStars() {
    const stars = document.querySelectorAll('.rating-stars i');
    const ratingMessage = document.getElementById('rating-message');
    const messages = [
        "Precisa melhorar muito",
        "Poderia ser melhor",
        "Setup razoável",
        "Bom setup!",
        "Setup incrível!"
    ];

    stars.forEach(star => {
        star.addEventListener('mouseover', function() {
            const rating = this.getAttribute('data-rating');
            highlightStars(rating);
            ratingMessage.textContent = messages[rating - 1];
        });

        star.addEventListener('mouseout', function() {
            resetStars();
            const activeRating = document.querySelector('.rating-stars').getAttribute('data-active');
            if (activeRating) {
                highlightStars(activeRating);
                ratingMessage.textContent = messages[activeRating - 1];
            } else {
                ratingMessage.textContent = "Clique para avaliar";
            }
        });

        star.addEventListener('click', function() {
            const rating = this.getAttribute('data-rating');
            document.querySelector('.rating-stars').setAttribute('data-active', rating);
            highlightStars(rating);
            ratingMessage.textContent = messages[rating - 1];
            
            // Aqui você poderia enviar a avaliação para um servidor
            console.log(`Avaliação enviada: ${rating} estrelas`);
        });
    });

    function highlightStars(rating) {
        stars.forEach(star => {
            const starRating = star.getAttribute('data-rating');
            if (starRating <= rating) {
                star.classList.remove('far');
                star.classList.add('fas');
            } else {
                star.classList.remove('fas');
                star.classList.add('far');
            }
        });
    }

    function resetStars() {
        stars.forEach(star => {
            star.classList.remove('fas');
            star.classList.add('far');
        });
    }
}

// Função para configurar o modal
function setupModal() {
    const modal = document.getElementById('detailsModal');
    const closeBtn = document.querySelector('.close-modal');

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Função para mostrar detalhes no modal
function showDetails(item) {
    const modal = document.getElementById('detailsModal');
    const modalContent = document.getElementById('modalContent');
    
    // Conteúdo específico para cada item
    const details = {
        pc: {
            title: "Computador Gaming",
            content: `
                <div class="modal-item">
                    <img src="./img/setup img/20250305_192900~2.jpg" alt="PC" class="modal-image">
                    <div class="modal-specs">
                        <h3>Especificações Completas</h3>
                        <p><strong>Processador:</strong> AMD Ryzen 5600GT - 6 núcleos, 12 threads</p>
                        <p><strong>Placa-mãe:</strong> B450M Gaming</p>
                        <p><strong>Memória RAM:</strong> 16GB (2x8GB) DDR4 3600MHz</p>
                        <p><strong>Placa de vídeo:</strong> NVIDIA GeForce RTX 3060</p>
                        <p><strong>Armazenamento:</strong> SSD 120GB (Sistema) + HD 2TB (Dados)</p>
                        <p><strong>Fonte:</strong> Mancer Thunder 500W Bronze 80</p>
                        <p><strong>Gabinete:</strong> Gamer com iluminação RGB</p>
                        <p><strong>Sistema de refrigeração:</strong> Watercooler 240mm</p>
                        <h4>Desempenho</h4>
                        <p>Este setup é ideal para jogos em 1440p com taxas de quadros elevadas e para desenvolvimento de software com múltiplas tarefas simultâneas.</p>
                    </div>
                </div>
            `
        },
        monitor: {
            title: "Monitor LG Ultragear",
            content: `
                <div class="modal-item">
                    <img src="img/setup img/monitor.jpg" alt="Monitor" class="modal-image">
                    <div class="modal-specs">
                        <h3>Especificações Completas</h3>
                        <p><strong>Modelo:</strong> LG Ultragear 27'' 144Hz</p>
                        <p><strong>Resolução:</strong> 2560x1440 (QHD)</p>
                        <p><strong>Tipo de painel:</strong> IPS</p>
                        <p><strong>Tempo de resposta:</strong> 1ms</p>
                        <p><strong>Taxa de atualização:</strong> 144Hz</p>
                        <p><strong>Tecnologias:</strong> HDR10, AMD FreeSync, G-Sync Compatible</p>
                        <p><strong>Conexões:</strong> 2x HDMI, 1x DisplayPort, Saída de áudio</p>
                        <h4>Experiência de uso</h4>
                        <p>Monitor com excelente qualidade de imagem e cores vibrantes. A alta taxa de atualização proporciona uma experiência fluida em jogos competitivos.</p>
                    </div>
                </div>
            `
        },
        teclado: {
            title: "Teclado Redragon Lakshmi",
            content: `
                <div class="modal-item">
                    <img src="img/setup img/teclado.jpg" alt="Teclado" class="modal-image">
                    <div class="modal-specs">
                        <h3>Especificações Completas</h3>
                        <p><strong>Modelo:</strong> Redragon Lakshmi Rainbow Preto</p>
                        <p><strong>Layout:</strong> ABNT2 (Português Brasil)</p>
                        <p><strong>Switches:</strong> Mecânicos Azuis (Clicky)</p>
                        <p><strong>Iluminação:</strong> RGB Rainbow com efeitos personalizáveis</p>
                        <p><strong>Anti-ghosting:</strong> Sim, em teclas principais</p>
                        <p><strong>Conexão:</strong> USB com cabo trançado</p>
                        <h4>Experiência de uso</h4>
                        <p>Teclado com excelente feedback tátil e sonoro, ideal para digitação e jogos. Os switches azuis proporcionam uma experiência satisfatória de digitação.</p>
                    </div>
                </div>
            `
        },
        mouse: {
            title: "Mouse ATTACK SHARK R1",
            content: `
                <div class="modal-item">
                    <img src="img/setup img/mouse.avif" alt="Mouse" class="modal-image">
                    <div class="modal-specs">
                        <h3>Especificações Completas</h3>
                        <p><strong>Modelo:</strong> ATTACK SHARK R1</p>
                        <p><strong>DPI:</strong> Ajustável até 16.000</p>
                        <p><strong>Sensor:</strong> Óptico de alta precisão</p>
                        <p><strong>Botões programáveis:</strong> 7 botões</p>
                        <p><strong>Iluminação:</strong> RGB com múltiplos efeitos</p>
                        <p><strong>Peso:</strong> Ajustável com pesos removíveis</p>
                        <p><strong>Conexão:</strong> USB com cabo trançado</p>
                        <h4>Experiência de uso</h4>
                        <p>Mouse com excelente precisão e conforto para longas sessões de jogo. O sensor responde bem em diferentes superfícies e os botões têm boa resposta tátil.</p>
                    </div>
                </div>
            `
        },
        headset: {
            title: "Headset Gamer Mancer",
            content: `
                <div class="modal-item">
                    <img src="img/setup img/fone.jpg" alt="Headset" class="modal-image">
                    <div class="modal-specs">
                        <h3>Especificações Completas</h3>
                        <p><strong>Modelo:</strong> Headset Gamer Mancer</p>
                        <p><strong>Áudio:</strong> Surround 7.1 Virtual</p>
                        <p><strong>Drivers:</strong> 50mm com neodímio</p>
                        <p><strong>Microfone:</strong> Removível com cancelamento de ruído</p>
                        <p><strong>Conexão:</strong> USB com controle de volume integrado</p>
                        <p><strong>Conforto:</strong> Espumas memory foam e headband ajustável</p>
                        <p><strong>Iluminação:</strong> RGB nas conchas</p>
                        <h4>Experiência de uso</h4>
                        <p>Headset confortável para longas sessões de jogo, com boa qualidade de áudio para jogos e música. O microfone captura a voz com clareza e o cancelamento de ruído funciona bem.</p>
                    </div>
                </div>
            `
        }
    };
    
    // Atualizar o conteúdo do modal
    if (details[item]) {
        modalContent.innerHTML = `
            <h2 class="modal-title">${details[item].title}</h2>
            ${details[item].content}
        `;
        modal.style.display = 'block';
    }
}
