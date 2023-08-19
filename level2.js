
let mycat;

function startGame(){
    mycat =  new component(280, 180, "cat.gif", 0, 90, "image");
    food = new component(190, 150, "catFood1.png", 760, 480, "image");
    ground = new component(1100, 140, "grass-sm.png", -9, 500, "image");
    block1 = new obstacle(150, 30, "#53310d", 285, 300)
    block2 = new obstacle(150, 30, "#53310d", 450, 180)
    block3 = new obstacle(150, 30, "#53310d", 600, 300)

    //mycat =  new component(w, h, color, x, y, "image");


    myGameArea.start();
}
let canvas = document.createElement("canvas");

let area = document.getElementById("area");
var myGameArea = {
    canvas : canvas,
    start : function() {
        this.canvas.width = 1000;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        area.appendChild(this.canvas);
        this.int = setInterval(updateGame , 10);
        },
        clear : function() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },
        
    
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
this.update = function() 
    {
        ctx = myGameArea.context;
        
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
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
    food.update();
    mycat.update();
    block1.update();
    block2.update();
    block3.update();


    if(k.right.pressed && mycat.x<=750){
        mycat.move_x = 5
    }else if(k.left.pressed && mycat.x >10){
        mycat.move_x = -5

    }else {
        mycat.move_x = 0;
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
        if(mycat.y + mycat.height < block3.y && 
            mycat.y + mycat.height + mycat.move_y >= 
            block3.y && mycat.x + mycat.width>=block3.x && mycat.x <=block3.x + block3.width){
            mycat.move_y = 0;
        }

    if(mycat.x==food.x){
        alert("Congratulations! You win. To move to the next level, click OK.");
        window.location.href="level3.html"
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

// 
/////////// start ///////////

/////////// end ////////////
