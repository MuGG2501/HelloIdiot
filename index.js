let aryw = [];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // 上限は除き、下限は含む
}

function getRandomOneOrNegativeOne() {
    return Math.random() < 0.5 ? 1 : -1;
}



class WINDOW {
    constructor(){
        this.rx = getRandomInt(100,screen.availWidth);
        this.ry = getRandomInt(100,screen.availHeight);
        this.win = window.open("imgwin.html","_blank",`width=220,height=220,top=${this.ry},left=${this.rx}`); 
        this.x = 0;
        this.y = 0;
        this.xDirection = getRandomOneOrNegativeOne();
        this.yDirection = getRandomOneOrNegativeOne();
        this.speed = 10;
        this.screenWidth = screen.availWidth;
        this.screenHeight = screen.availHeight;
    }

    move(){
        this.x = this.win.screenX + (this.xDirection * this.speed);
        this.y = this.win.screenY + (this.yDirection * this.speed);

        const windowWidth = this.win.outerWidth;
        const windowHeight = this.win.outerHeight;

        if (this.x <= 0 || this.x + windowWidth >= this.screenWidth) {
            this.xDirection *= -1;
        }
    
        if (this.y <= 0 || this.y + windowHeight >= this.screenHeight) {
            this.yDirection *= -1;
        }

        this.win.resizeTo(230,300)
        this.win.moveTo(this.x, this.y);
    }
}

function createWin(){
    for(let i = 0;i<5;i++) {
        aryw[i] = new WINDOW();
    }
}

function moveWin(){
    for(let i = 0;i<5;i++) {
        aryw[i].move();
    }
}

var laugh = new Audio('warai5.mp3');
laugh.loop = true;

function play(){
    laugh.play();
}

setInterval(moveWin,10)