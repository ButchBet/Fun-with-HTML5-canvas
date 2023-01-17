const canvas = document.getElementById("board");

const body = document.body;
        
const ctx = canvas.getContext("2d"); 

canvas.width  = window.innerWidth - 100;

canvas.height = window.innerHeight - 100;

ctx.lineWidth = 100;

// ctx.globalCompositeOperation  = "lighter";

ctx.strokeStyle = "#BADA55";

ctx.lineJoin = "round";

ctx.lineCap = "round";

let isDrawing = false;

let x = 0;

let y = 0;

let direction = false;

let hue = 0;       

function drawBoard(e) {
    if(!isDrawing) return;
    
    ctx.beginPath();

    ctx.moveTo(x, y);

    ctx.lineTo(e.x, e.y);

    ctx.stroke();

    hue++;

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    canvas.style.borderColor = `hsl(${hue}, 100%, 50%)`;

    if(hue >= 360) {
        hue = 0;
    }

    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    
    if(direction) {
        ctx.lineWidth--;
    } else {
        ctx.lineWidth++;
    }

    [x, y] = [e.x, e.y];
}

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;

    [x, y] = [e.x, e.y];
});

canvas.addEventListener("mousemove", drawBoard);

canvas.addEventListener("mouseup", () => isDrawing = false);

canvas.addEventListener("mouseout", () => isDrawing = false);