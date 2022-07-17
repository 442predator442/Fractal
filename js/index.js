const Canvas = document.getElementById('place-content');
const ctx = Canvas.getContext('2d');
ctx.lineWidth = 1.5;
ctx.font = "15px Ubuntu";
ctx.fillStyle = 'white';
ctx.strokeStyle = 'white';

const cords = {
    a: {
        x: 250,
        y: 120
    },
    b: {
        x: 120,
        y: 330
    },
    c: {
        x: 360,
        y: 330
    }
}

var lastPos = {
    x: 250,
    y: 120
};

function setDefault() {
    ctx.strokeRect(cords.a.x, cords.a.y, 0.5, 0.5);
    ctx.fillText("A (1-2)", cords.a.x-5, cords.a.y-5);
    ctx.strokeRect(cords.b.x, cords.b.y, 0.5, 0.5);
    ctx.fillText("B (3-4)", cords.b.x-5, cords.b.y+20);
    ctx.strokeRect(cords.c.x, cords.c.y, 0.5, 0.5);
    ctx.fillText("C (5-6)", cords.c.x-5, cords.c.y+20);
    return true;
}

setTimeout(() => setDefault(), 1000)

const count = document.getElementById('count');

var paused = {
    status: false,
};
var Factorial;

async function start() {
    if(!paused.status) setDefault()
    else paused.status = false;

    Factorial = setInterval(() => {
        const randomInt = Math.floor(Math.random() * 6 + 1);
        count.value = Math.floor(count.value)+1;
        
        if([1,2].includes(randomInt)) {
            let x = (cords.a.x + lastPos.x)/2;
            let y = (cords.a.y + lastPos.y)/2;

            lastPos = { x, y };

            return ctx.strokeRect(x, y, 0.5, 0.5);
        } else if([2,3].includes(randomInt)) {
            let x = (cords.b.x + lastPos.x)/2;
            let y = (cords.b.y + lastPos.y)/2;

            lastPos = { x, y };

            return ctx.strokeRect(x, y, 0.5, 0.5);
        } else if([4,5].includes(randomInt)) {
            let x = (cords.c.x + lastPos.x)/2;
            let y = (cords.c.y + lastPos.y)/2;

            lastPos = { x, y };

            return ctx.strokeRect(x, y, 0.5, 0.5);
        }
    });
}

async function stop() {
    paused.status = true;
    clearInterval(Factorial);
}

async function reset() {
    count.value = 0;
    clearInterval(Factorial);

    ctx.clearRect(0, 0, 300, 300);
    setDefault();
}