var img;
var mydiv;

var amygdala = {
  x: 702,
  y: 377,
  w: 40,
  h: 40,
  show: function (){
    this.w = slider.value();
    this.h = slider.value();
    fill(0,0,255);
    noStroke();
    ellipse(this.x,this.y, this.w, this.h);
  }
}

function setup(){
  var canvas = createCanvas(4000,4000);

  img = createImg("TV.png");
  img.position(270,590);
  img.size (200,200);
  img.mousePressed(show1);
  img.mouseReleased(hide1);

  img2 = createImg("book.png")
  img2.position(930,590);
  img2.size (200,200);
  img2.mousePressed(show2);
  img2.mouseReleased(hide2);

  img3 = createImg("BrainScreenShot.png");
  img3.position(300,0);
  img3.size (700,700);
  img3.style('z-index','-1');

  slider = createSlider(0, 30,30,0.2);
  slider.position (600,700);
  slider.style('width', '300px');

}

function draw(){

  val = slider.value();
  noStroke();
  fill(255);
  rect(682,357,38,38);

  amygdala.show();

}

function show1(){
  mydiv = createDiv("WOO HOO");
  mydiv.style("background-color","green");
  mydiv.style('width', '100px');
  mydiv.style('height', '100px');
  mydiv.position(120,630);
  print("I am over");
}

function hide1(){
  mydiv.remove();
  print ("I am out");
}

function show2(){
  mydiv = createDiv("WOO HOO");
  mydiv.style("background-color","blue");
  mydiv.style('width', '100px');
  mydiv.style('height', '100px');
  mydiv.position(1150,620);
  print("clicked");
}

function hide2(){
  mydiv.remove();
  print ("released");
}

function mousePressed (){
  let d = dist (mouseX, mouseY, amygdala.x, amygdala.y)
  if (d < (amygdala.w/2)) {
    mydiv = createDiv('this is some text');
    mydiv.position (390,345);
    mydiv.style("background-color","red");
    mydiv.style('width', '100px');
    mydiv.style('height', '100px');
    print("heyyyy");
  }
}

function mouseReleased(){
  let d = dist (mouseX, mouseY, amygdala.x, amygdala.y)
  if (d < (amygdala.w/2)) {
    mydiv.remove();
    print("remove");
  }
}
