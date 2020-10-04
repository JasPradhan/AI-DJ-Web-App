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
}

function play(){
    song.play();
    song.setVolume(0.1);
    song.rate(1);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;

        console.log("left wrist X = "+leftWristX+"left wrist Y = "+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;

        console.log("right wrist X = "+rightWristX+"right wrist Y = "+rightWristY);

    }
}