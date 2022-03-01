import { background } from "./engine.js";
import { renderEntities } from "./engine.js";
import { FallingQuad } from "./game.js";
import { entities } from "./engine.js";

const canvas = document.getElementById("canvas");
/**@type {CanvasRenderingContext2D} */
var ctx = canvas.getContext("2d");

var score = 0;



function summonQuad(){
    new FallingQuad(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * -900));
}

canvas.addEventListener('mousedown', (e) => {
    let x = e.clientX;
    let y = e.clientY;
    checkTargets(x,y);
});

function checkTargets(x,y){
    for (let i = 0; i < entities.length; i++) {
        const element = entities[i];
        if(x>=element.x && x <= element.x+element.w && y >= element.y && y <=element.y + element.h && element.alive){
            document.getElementById('tick').play();
            console.log(element);
            element.destroySelf();
            score++;
        }
    }
}

function gameLoop(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    background(ctx);
    if(Math.floor(Math.random() * canvas.width-100), Math.floor(Math.random() * 100) > 97){
        summonQuad();
    }
    renderEntities(ctx);
    ctx.fillStyle = '#FFF';
    ctx.font = "30px arial"
    ctx.fillText(`Score: ${score}`, 10, 40);
    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);