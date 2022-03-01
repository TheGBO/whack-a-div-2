export var entities = [];

export class Entity{
    constructor(color, x, y, w, h){
        this.color = color;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        entities.push(this);
        this.alive = true;
    }

    render(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.w,this.h);
    }

    tick(){
        //logic
    }

    destroySelf(){
        this.alive = false;
    }
}

export function background(ctx){
    ctx.fillStyle = "#23232e";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

export function renderEntities(ctx){
    entities.forEach((e) => {
        if(e){
            if(!e.alive) return;
            e.tick();
            e.render(ctx);
        }
    });
}

