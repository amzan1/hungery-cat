
let mycat;
let hidebtn = document.getElementById("hide");
function startGame(){
    hidebtn.style.display = "none"
    mycat =  new component(140, 90, "cat.gif", 0, 190, "image");

    myGameArea.start();
}
let canvas = document.createElement("canvas");
let area = document.getElementById("area");
var myGameArea = {
    canvas : canvas,
    start : function() {
        this.canvas.width = innerWidth;
        this.canvas.height = innerHeight;
        this.context = this.canvas.getContext("2d");
        area.appendChild(this.canvas);
        this.int = setInterval(updateGame , 10);
        },
        clear : function() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },
        
    
    }
function component(w, h, color, x, y, type){
    const gravity = 2.5;
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
function updateGame(){
    myGameArea.clear();
    mycat.position();
    mycat.update();
}
// moving the cat
/////////// start ///////////

addEventListener("keydown", function(event){
    if(event.key=="ArrowRight"){
        mycat.move_x = 1; 
    }
    if(event.key=="ArrowLeft"){
        mycat.move_x = -1; 
    }
    console.log(event);
})
addEventListener("keyup", function(event){
    if(event.key=="ArrowRight"){
        mycat.move_x = 0; 
    }
    if(event.key=="ArrowLeft"){
        mycat.move_x = 0; 
    }
})
/////////// end ////////////

