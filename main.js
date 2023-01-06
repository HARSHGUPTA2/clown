function perload(){
clown_nose = loadImage('https://i.postimg.cc/fbzfZCQy/clown-nose.jpg');
}
nosex = 0;
nosey = 0;
function setup(){
    canvas = createCanvas(300, 300); 
    canvas.center();
video = createCapture(VIDEO);
video.size(300 ,300);
video.hide();
posnet = ml5.poseNet(video,modalloaded);
posnet.on('pose',gotPoses);

}

function draw(){
image(video , 0 , 0 , 300 , 300);
//fill(255 , 0 ,0);
//stroke(255,0,0);
//circle(nosex , nosey , 20);
imgae(clown_nose , nosex , nosey , 30 , 30);
}

function take_snapshot(){
    save('myfilter.png');
}

function modalloaded(){
console.log("modal is insilized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y ;
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
    }


}