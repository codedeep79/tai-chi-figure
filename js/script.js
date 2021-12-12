window.onload = function () {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let r = 150;
    let x = canvas.width / 2;
    let y = canvas.height / 2;

    let deg = 0;
    setInterval(() => {
        deg += 5;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((deg / 180) * Math.PI);
        ctx.translate(-r, -r);
        drawTaiChi(ctx, r);
        ctx.restore();
    }, 100);

};

function drawTaiChi(ctx, r) {
    ctx.beginPath();
    ctx.arc(r, r, r, 0, Math.PI);
    ctx.arc(r / 2, r, r / 2, Math.PI, 0);
    ctx.arc((r / 2) * 3, r, r / 2, Math.PI, 0, true);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(r / 2, r, r / 6, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(r, r, r, 0, Math.PI, true);
    ctx.arc(r / 2, r, r / 2, Math.PI, 0);
    ctx.arc((r / 2) * 3, r, r / 2, Math.PI, 0, true);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc((r / 2) * 3, r, r / 6, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}