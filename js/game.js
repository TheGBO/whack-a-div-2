import { Entity } from "./engine.js";
export class FallingQuad extends Entity{
    constructor(x, y){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        super(`#${randomColor}`, x, y, 70, 70)
        this.tick = () => {
            this.y += 5;
            if(this.y > 5000){
                this.alive = false;
            }
        }
    }

}