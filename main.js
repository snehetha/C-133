statusobject="";
objects=[];
picture="";
function preload(){
 picture=loadImage("Lisa_9.jpg");
}
function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status:detecting objects";
}
function draw(){
image(picture,0,0,640,420);
if(statusobject!=" "){
    for(var i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="status:Objects Detected";
        fill("black");
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
        noFill();
        stroke("pink");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}


}
function modelLoaded(){
    console.log("modelLoaded");
statusobject=true;
objectDetector.detect(picture,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
            }
            console.log(results);
            objects=results;

}