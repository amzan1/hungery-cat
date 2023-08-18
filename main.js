
let mycat;
let hidebtn = document.getElementById("hide");
function startGame(){
    hidebtn.style.display = "none"
    mycat =  new component(140, 90, "cat.gif", 0, 190, "image");

    myGameArea.start();
}
let area = document.getElementById("area");
var myGameArea = {
    canvas : document.createElement("canvas"),
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
    const gravity = 1.5;
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
        this.move_y += gravity
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
