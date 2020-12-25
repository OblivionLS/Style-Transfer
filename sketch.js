// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Style Transfer Image Example using p5.js
This uses a pre-trained model of The Great Wave off Kanagawa and Udnie (Young American Girl, The Dance)
=== */

//code has been changed quite a bit but the basics are from the coding train example.

let style;
let style1;
let style2;
let style3;
let video;
let resultImg;
let isTransferring = false;
let gotImage = false;

function setup() {

  createCanvas(1000,600).parent('canvasContainer');

  video = createCapture(VIDEO);
  //video.size(100, 100);
  video.hide();

  // The results image from the style transfer
  resultImg = createImg('').parent('frame');
  resultImg.hide();

  //creating all style transfer objects
  //video is given as the second argument
  style2 = ml5.styleTransfer('./models/udnie', video, modelLoaded);
 style3 = ml5.styleTransfer('./models/mathura', video, modelLoaded);
 //above are models already included in ml5 examples (we did not train them ourselves)
 //our own trained models are the following below
 style1 = ml5.styleTransfer('./models/fauvism', video, modelLoaded);
  style4 = ml5.styleTransfer('./models/vangogh', video, modelLoaded);
  select('#startStop').mousePressed(start);

  select('#style1').mousePressed(styleOne);
  select('#style2').mousePressed(styleTwo);
  select('#style3').mousePressed(styleThree);
  select('#style4').mousePressed(styleFour);

}

function draw(){
  if(gotImage){
    image(resultImg, 0, 0, 1000, 600);
  }else{
    image(video, 0, 0, 1000, 600);
  }

}

//style switching methods
function styleOne(){
  style = style1;
  select('#status').html('Changed Style to nr 1');
}
function styleTwo(){
  style = style2;
  select('#status').html('Changed Style to nr 2');
}
function styleThree(){
  style = style3;
  select('#status').html('Changed Style to nr 3');
}
function styleFour(){
  style = style4;
  select('#status').html('Changed Style to nr 4');
}

//starting the style transfer
function start(){
  //if no style is choosen at the start a message is displayed
  if(style == null){
    select('#startStop').html('You must choose a Style first');
  } else{
    //only starts style transfer if a style is chosen
    if(!isTransferring){
      document.getElementById("loading").style.opacity = 1;
      select('#startStop').html('Paint me again!');

      //delay so that the overlay screen is loaded before the browser freezes.
      setTimeout(startStop, 80);
    }else {
      document.getElementById("loading").style.opacity = 0;

      setTimeout(startStop, 80);
    }

  }


}
//switch between transfering state and none transfering state.
function startStop() {
isTransferring = !isTransferring;
  if (!isTransferring) {
    select('#startStop').html('Start painting me!');
    gotImage = false;
  } else {
    select('#startStop').html('Paint me again!');
    // Make a transfer using the video
    style.transfer(gotResult);
    console.log("got an image");
  }
}

// A function to call when the model has been loaded.
function modelLoaded() {
  select('#status').html('Choose Your Style!');
}

// When we get the results, update the result image src
function gotResult(err, img) {
  resultImg.attribute('src', img.src);

  document.getElementById("loading").style.opacity = 0;

  gotImage = true;
//  if (isTransferring) {
  //  style.transfer(gotResult);
  //}
}
