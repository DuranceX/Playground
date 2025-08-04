export class Danmu {
    text: string; // The text of the danmu
    x: number; // The x-coordinate of the danmu
    y: number; // The y-coordinate of the danmu
    color: string; // The color of the danmu, optional
    speed: number; // 


    constructor(text: string, x:number, y:number, color='white', speed:number){
        this.text = text; // The text of the danmu
        this.x = x; // The x-coordinate of the danmu
        this.y = y; // The y-coordinate of the danmu
        this.color = color; // The color of the danmu
        this.speed = speed || 1; // The speed of the danmu, default is 1
    }

    update(){
        this.x -= this.speed; // Update the x-coordinate based on speed
    }

    draw(ctx: CanvasRenderingContext2D){
        ctx.save();

        ctx.fillStyle = this.color; // Set the color for the danmu
        ctx.font = '24px Arial'; // Set the font for the danmu text
        ctx.fillText(this.text, this.x, this.y); // Draw the danmu text

        ctx.restore();
    }
}