function setup(){
    canvas= createCanvas(550,450)
}
x= 0;
y= 0;
draw_circle= ""
draw_rectangle= ""
//speech to text
var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition()
function start(){
    document.getElementById("status").innerHTML= "Speak Now"
    recognition.start()
}
recognition.onresult= function(event){
    console.log(event)
    var content= event.results[0][0].transcript
    document.getElementById("status").innerHTML= "I heard you say: "+ content
    if(content=="circle"){
        x= Math.floor(Math.random() * (450)) + 50
        y= Math.floor(Math.random() * (350)) + 50
        document.getElementById("status").innerHTML= "Drawing circle stat"
        draw_circle= "set"
    }
    if(content=="rectangle"){
        x= Math.floor(Math.random() * (450)) + 50
        y= Math.floor(Math.random() * (350)) + 50
        document.getElementById("status").innerHTML= "Drawing rectangle stat"
        draw_rectangle= "set"
    }
}
function draw(){
    fill("navy")
    stroke("yellow")
    strokeWeight(4)
    if(draw_circle== "set"){
        radius= Math.floor(Math.random()*100)
        circle(x,y,radius)
        document.getElementById("status").innerHTML= "Circle has been drawn!"
        draw_circle= ""
    }
    if(draw_rectangle== "set"){
        rect(x,y,70,50)
        document.getElementById("status").innerHTML= "Rectangle has been drawn!"
        draw_rectangle= ""
    }
}