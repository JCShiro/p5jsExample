function setup() {
  createCanvas(500, 500);
}

let red = [
  
]
for(i=0; i<100; i++){
  red[i] = Math.random()*255;
  console.log(red);
}
let green = [

]
for(i=0; i<100; i++){
  green[i] = Math.random()*255;
  console.log(green);
}
let blue = [

]
for(i=0; i<100; i++){
  blue[i] = Math.random()*255;
  console.log(blue);
}

function draw() {
  background(250);
  for(let y=0; y<10; y++){
    for(let x=0; x<10; x++){
  fill(red[x+y*10], green[x+y*10], blue[x+y*10]);
    square(0+(50*x), 0+(50*y), 50);
    }
  }
}
