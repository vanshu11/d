status =""; 
img="";
objects=[];


function preload(){
    img = loadImage('saian.jpeg');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}
function modelLoaded(){
    console.log("model Loaded");
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
  if(error){
      console.log(error);
  }
  console.log(results);
  objects=results;
}



function draw(){
    image(img,0,0,640,420);

    if(status!=""){
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="Status : object detected";
            fill("white");
            percent=floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("white");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

    
    
        }
    }

    


}