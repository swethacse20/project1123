var weights = [50,46,21];

function weights_average()
{
  var sum = 0; 
 
    for(var i = 0; i<weights.length; i=i+1)
      {
        sum = sum + weights[i];
      }
  var average_weights =sum/weights.length;
  console.log("Average of weights..  "+average_weights);
}

function setup() {
  createCanvas(400, 400);
  weights_average();
}

function draw() {
  background(150);
}