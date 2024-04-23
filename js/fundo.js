'use strict'

const imagePath = '../img/fundo.png';

        // Selecionar o elemento de fundo
        const backgroundElement = document.getElementById('background');

            // Calcular a altura desejada (por exemplo, metade da largura da tela)
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;
    

        // Definir estilos CSS para o elemento de fundo
        backgroundElement.style.backgroundImage = `url('${imagePath}')`;
        backgroundElement.style.backgroundRepeat = 'no-repeat';
        backgroundElement.style.backgroundSize = 'cover';
        backgroundElement.style.backgroundPosition = 'center';
        backgroundElement.style.opacity = 1.7;
     

const areaElement = document.getElementById('area');

// Definir o estilo de gradiente linear
areaElement.style.backgroundImage = 'linear-gradient(to bottom, #D9F9FE, #214D87)'; 