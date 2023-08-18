// const canvas = document.querySelector('canvas')
// const ctx = canvas.getContext("2d");


let mycat;
let hidebtn = document.getElementById("hide");
function startGame(){
    hidebtn.style.display = "none"
    myGameArea.start();
}
let area = document.getElementById("area");
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1300;
        this.canvas.height = 570;
        this.context = this.canvas.getContext("2d");
        area.insertBefore(this.canvas, area.childNodes[0]);
    }
}
