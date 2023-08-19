
let mycat;
function startGame(){
    mycat =  new component(280, 180, "cat.gif", 0, 90, "image");
    food = new component(140, 110, "catFood.png", 1200, 500, "image");
    ground = new obstacle(800, 140, "grass-sm.png", 0, 500, "image");
    ground1 = new obstacle(900, 140, "grass-sm.png", 700, 500, "image");

    block1 = new obstacle(250, 30, "#53310d", 285, 300)
    block2 = new obstacle(250, 30, "#53310d", 750, 180)
    block3 = new obstacle(250, 30, "#53310d", 1185, 300)
    block4 = new obstacle(250, 30, "#53310d", 1550, 180)
    //mycat =  new component(w, h, color, x, y, "image");


    myGameArea.start();
}
let canvas = document.createElement("canvas");

let area = document.getElementById("area");
var myGameArea = {
    canvas : canvas,
    start : function() {
        this.canvas.width = 1200;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        area.appendChild(this.canvas);
        this.int = setInterval(updateGame , 10);
        },
        clear : function() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },
        stop : function() {
            stop(this.int);
        }
    
    }
function component(w, h, color, x, y, type){
    const gravity = 0.5;
    this.width = w;
    this.height = h;
    this.x = x;
    this.y = y;
    this.move_x = 0;
    this.move_y = 1;
    this.type = type;
    // if for type is img or not
    if(type == "image"){
        this.image = new Image();
        this.image.src = color;
    }
this.update = function() {
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, 
                this.height,
                
                );
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        if(this.y + this.height + this.move_y <= canvas.height){
            this.move_y += gravity
        }else{
            this.move_y = 0;
        }

    }
    this.position = function(){
        this.x += this.move_x;
        this.y += this.move_y; 
    }

}

function obstacle(w, h, color, x, y, type){
    this.width = w;
    this.height = h;
    this.x = x;
    this.y = y;
    this.type = type;
    if(type == "image"){
        this.image = new Image();
        this.image.src = color;
    }
this.update = function() {
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, 
                this.height,
                
                );
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}
const k = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}
function updateGame(){
    myGameArea.clear();
    mycat.position();
    ground.update();
    ground1.update();
    food.update();
    mycat.update();
    block1.update();
    block2.update();
    block3.update();
    block4.update();
    if(k.right.pressed && mycat.x<=600){
        mycat.move_x = 5
    }else if(k.left.pressed && mycat.x >10){
        mycat.move_x = -5

    }else {
        mycat.move_x = 0;
        if (k.right.pressed){
            block1.x-=5
            block2.x-=5
            block3.x-=5
            block4.x-=5
            food.x-=3
        }else if(k.left.pressed){
            block1.x+=5
            block2.x+=5
            block3.x+=5
            block4.x+=5

        }
    }
    
    if(mycat.y + mycat.height <= block1.y && 
        mycat.y + mycat.height + mycat.move_y >= 
        block1.y && mycat.x + mycat.width>=block1.x && mycat.x <=block1.x + block1.width){
        mycat.move_y = 0;
        

    }
    if(mycat.y + mycat.height <= block2.y && 
        mycat.y + mycat.height + mycat.move_y >= 
        block2.y && mycat.x + mycat.width>=block2.x && mycat.x <=block2.x + block2.width){
        mycat.move_y = 0;
    }
    if(mycat.x==food.x && k.right.pressed ){
        alert("Congratulations! You win. To move to the next level, click OK.");
    }
    
}

// moving the cat
/////////// start ///////////

addEventListener("keydown", function(event){
    if(event.key == "ArrowRight"){
        mycat.move_x = 1; 
        k.right.pressed=true
        // console.log("right")
    }
    if(event.key == "ArrowLeft"){
        mycat.move_x = -1; 
        k.left.pressed=true
        // console.log("left")
    }
    if(event.key == " "){
        mycat.move_y-= 10;
    }
    // console.log(k.right.pressed);
    // console.log(event)
})
addEventListener("keyup", function(event){
    if(event.key=="ArrowRight"){
        mycat.move_x = 0; 
        k.right.pressed=false
        // console.log("right")
    }
    if(event.key=="ArrowLeft"){
        mycat.move_x = 0; 
        k.left.pressed=false
        // console.log("left")
    }
    if(event.key == " "){
        mycat.move_y-= 0;
    }
    // console.log(k.right.pressed);

})
/////////// end ////////////

// stop function
/////////// start ///////////
function stop() {
    mycat.move_x = 0; 
    mycat.move_y = 0; 
    
}
/////////// end ////////////
