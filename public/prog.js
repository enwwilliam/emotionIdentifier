let video;

let modelUrl = "tm-my-image-model";
let label1 = "";

function setup(){

  classifier = ml5.imageClassifier(modelUrl + '/model.json');
  createCanvas(640, 520);

  //create the video
  video = createCapture(VIDEO);
  video.hide();

  classifyVideo();
}

function classifyVideo(){
  classifier.classify(video, gotResults);
}

function draw(){
  background(0);
  image(video, 0,0, width/1.3, height/1.3);

  fill(225);
  textSize(40);
  text(label1, 10, height - 10);
}

function gotResults(error, results){
  if(error){
    console.error(error);
    return

  }else{
    label1 = results[0].label;
    console.log(label1)
    classifyVideo();
  }
}
