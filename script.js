import utils from './utils.js'
import rna from './rna.js'
import controls from './controls.js'

const SAMPLES = 1; 
const game = Runner.instance_;
let dinoList = [];
let dinoIndex = 0;

let bestScore = 0;
let bestrna = null;

function fillDinoList () {
    for (let i=0; i < SAMPLES; i++) {
        dinoList[i] = new rna(3,[10, 10, 2])
        dinoList[i].load(bestrna);
        if(i > 0) dinoList[i].mutate(0.2)
    }
    console.log('Lista de dinossauros criada!')
}

setTimeout(() => {
    fillDinoList()
    controls.dispatch('jump')
},1000)

setInterval(() => {
    if(!game.activeted) return;

    const dino = dinoList[dinoIndex]

    if (game.crashed) {
        if(dinoIndex.score > bestScore) {
            bestScore = dino.score
            bestrna = dino.save()
            console.log('melhor pontuação', bestScore);
        }
        dinoIndex++;
    
    if(dinoIndex === SAMPLES) {
        fillDinoList();
        dinoIndex = 0;
        dinoList = 0;
    }
    game.restart()
}
    
    const {tRex, horizon, currentSpeed, distanceRan, dimensions} = game
    dino.score = distanceRan - 2000

    const player = {
        x: tRex.xPos,
        y: tRex.yPos,
        speed: currentSpeed
    };

    const [obstacle] = horizon.obstacles
    .map((obstacle) => {
        return {
            x: obstacle.xPos,
            y: obstacle.yPos
        }
    })
    .filter((obstacle) => obstacle.x > player.x)

    if (obstacle) {
        const distance = 1 - (utils.getDistance(player, obstacle) / dimensions.WIDTH);
        const speed = player.speed / 6
        const height = Math.tanh(105 - obstacle.y)

        const [jump, crouch] = dino.compute([
            distance,
            speed,
            height,
        ]);

        if (jump === crouch) return;
        if (jump) controls.dispatch('jump')
        if (crouch) controls.dispatch('crouch')
    };
}, 100);

/* const s = document.createElement('script');
s.type = 'module';
s.src = 'http://localhost:5500/script.js'
document.body.appendChild(s); */
