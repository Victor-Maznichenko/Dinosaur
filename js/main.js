"use strict";

document.addEventListener('DOMContentLoaded', () => {

    const area = document.querySelector('.game'),
        dinosaur = document.getElementById('dino'),
        cactus = document.getElementById('cactus'),
        replay = document.querySelector('.replay'),
        offsetLeftDinosaur = dinosaur.offsetLeft;

    let areaHeight = area.clientHeight;
    // Dinosaur jump!
    document.addEventListener('keydown', function(event) {
        if (event.code == 'Space') {
            dinosaur.style.animation = 'dinoJump 0.8s forwards'

            function drop() {
                dinosaur.style.animation = 'none'
            };
            setTimeout(drop, 800);
        }
    });

    // Stop Game
    function gameOver() {
        const offsetLeftCactus = cactus.offsetLeft,
            offsetBottomDinosaur = areaHeight - (dinosaur.offsetTop + dinosaur.clientHeight);
        if ((offsetLeftDinosaur >= offsetLeftCactus) && (offsetBottomDinosaur < 10)) {
            cactus.style.animation = 'none';
            document.querySelector('.game_over').classList.add('vissible');
        }
        console.log(offsetBottomDinosaur);
    }

    setInterval(gameOver, 100);

    replay.addEventListener('click', () => {
        cactus.style.animation = 'cactusMove 1.5s infinite linear';
        document.querySelector('.game_over').classList.remove('vissible');
    });


});