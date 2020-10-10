score_leftWrist=0;

song="";

leftWristX=0;
leftWristY=0;

rightWristX=0;
rightWristY=0;

function preload(){
song=loadSound("music.mp3");
}

function setup(){
canvas=createCanvas(600, 500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modeLoaded);
poseNet.on('pose',gotPoses)
}

function modeLoaded(){
    console.log("poseNet is initialized")
}

function draw(){
image(video, 0, 0, 600, 500)

fill("#3cff00");

strokeWeight(2);
stroke("#ff0000");
if(score_leftWrist>0.2){
    circle(leftWristX ,leftWristY ,20);
    inNumberleft=Number(leftWristY);
    remove_decimals=floor(inNumberleft);
    volume=remove_decimals/500;
    document.getElementById("volume").innerHTML="Volume: "+volume;
    song.setVolume(volume);
}
}

function play(){
    song.play();
    song.setVolume(0.1);
    song.rate(1);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        score_leftWrist=results[0].pose.keypoints[9].score;
        console.log("Score Of Left Wrist= "+score_leftWrist);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;

        console.log("left wrist X = "+leftWristX+"left wrist Y = "+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;

        console.log("right wrist X = "+rightWristX+"right wrist Y = "+rightWristY);

    }
}