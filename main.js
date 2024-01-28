img = ""
status1 = ""
objects = [];
function preload(){
    img = loadImage("dog_cat.jpg")
}
function setup(){
    canvas = createCanvas(480, 480)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(480, 480)
    video.hide()
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
}
function modelLoaded(){
    console.log("Model has been loaded")
    status1 = true;
    objectDetector.detect(video, gotResult)
}
function draw(){
    image(video, 0, 0, 480, 480)
    if(status1 != ""){
        r = random(255)
        g = random(255)
        b = random(255)
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Object Detected";
            document.getElementById("numofobjects").innerHTML = "Objects Detected Are: "+objects.length;
            fill(r, g, b)
            percent = floor(objects[i].confidence * 100)
            text(objects[i].label+" "+percent + "%", objects[i].x, objects[i].y)
            noFill()
            stroke(r, g, b)
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
            if(objects == person){
                document.getElementById("person").innerHTML = "Person is detected";
            }
            else{
                document.getElementById("person").innerHTML = "Person is not detected";
                song.play("schoolalarm.mp3")
                song.setVolume(1)
                song.rate(1)
            }
            if(status1 == person){
                document.getElementById("person").innerHTML = "Person is detected";
            }
            else{
                document.getElementById("person").innerHTML = "Person is not detected";
                song.play("schoolalarm.mp3")
                song.setVolume(1)
                song.rate(1)
            }
        }
    }
    if(status1 == ""){
        r = random(255)
        g = random(255)
        b = random(255)
        document.getElementById("status").innerHTML = "Status: Object Detected";
        document.getElementById("numofobjects").innerHTML = "Objects Detected Are: "+objects.length;
        fill(r, g, b)
        percent = floor(objects[i].confidence * 100)
        text(objects[i].label+" "+percent + "%", objects[i].x, objects[i].y)
        noFill()
        stroke(r, g, b)
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
    }
    if(objects == ""){
        r = random(255)
        g = random(255)
        b = random(255)
        document.getElementById("status").innerHTML = "Status: Object Detected";
        document.getElementById("numofobjects").innerHTML = "Objects Detected Are: "+objects.length;
        fill(r, g, b)
        percent = floor(objects[i].confidence * 100)
        text(objects[i].label+" "+percent + "%", objects[i].x, objects[i].y)
        noFill()
        stroke(r, g, b)
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
    }
}
function gotResult(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        objects = results;
    }
}