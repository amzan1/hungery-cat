
let mycat;
let hidebtn = document.getElementById("hide");
function startGame(){
    hidebtn.style.display = "none"
    mycat =  new component(280, 180, "cat.gif", 0, 90, "image");
    food = new component(140, 110, "catFood.png", 760, 500, "image");
    ground = new component(1100, 140, "grass-sm.png", -9, 500, "image");
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
    if(k.right.pressed && mycat.x<=750){
        mycat.move_x = 5
    }else if(k.left.pressed && mycat.x >10){
        mycat.move_x = -5

    }else {
        mycat.move_x = 0;
    }
    if(mycat.x==food.x && k.right.pressed ){
        alert("you win");
        window.location.href="level2.html"
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
