var img;
var mydiv;
var title;
var info;
var infohead;
var dir;

var amygdala = {
  x: 797,
  y: 392,
  w: 40,
  h: 40,
  show: function (){
    this.w = slider.value();
    this.h = slider.value();
    fill(255, 114, 134);
    noStroke();
    ellipse(this.x,this.y, this.w, this.h);
  }
}

function setup(){
  var canvas = createCanvas(4000,4000);

  info = createDiv("Birth age to the age of three is called the “critical stage” of brain development in children. Spending time in front of screens during that 3 year period can be extremely detrimental for brain development. During the critical stage children need specific types of stimuli in order for the their brains to develop correctly. These specific forms of stimuli cannot be found on screens, spending to much time looking at screens can stunt a brain’s development. ");
  info.position(60,140);
  info.style('width', '280px');
  info.style ("font-size","21px")

  infohead = createElement ("h1","Why is monitoring screen time important?")
  infohead.position (50, 70);
  infohead.style("color","#0fa4db");
  infohead.style("font-size", "25px");

  dir = createElement ("h1","Try Clicking on Things!");
  dir.position (1045, 110);
  dir.style("color", "#0fa4db");
  dir.style("font-size", "50px");
  dir.style("rotate", "30");

  title = createElement("h1","Screen Time and the Brain");
  title.position (570,0);

  img = createImg("tvpic.png");
  img.position(350,590);
  img.size (150,250);
  img.mousePressed(show1);
  img.mouseReleased(hide1);

  img2 = createImg("bookpic.png")
  img2.position(930, 650);
  img2.size (170,170);
  img2.mousePressed(show2);
  img2.mouseReleased(hide2);

  img3 = createImg("brainpic.png");
  img3.position(290,35);
  img3.size (img3.width*1.1,img3.height*1.1);
  img3.style('z-index','-1');

  slider = createSlider(3, 30,30,0.2);
  slider.position (600,720);
  slider.style('width', '300px');

}

function draw(){

  val = slider.value();
  noStroke();
  fill(255);
  rect(769,372,60,35);

  amygdala.show();

}

function show1(){
  mydiv = createDiv("The damage to young brains caused by excessive screen time comes from the kind of stimuli provided by screens. Screens offer multiple kinds of stimuli at the same time, spoonfeeding children an abundance of information and failing to challenge them to generate their own information. Additionally all actions have immediate effect when using computers. Children become accustomed to the constant rewards they receive when working on computers. This is an unrealistic expectation to take out into the real world.");
  mydiv.style("background-color","#99e0fc");
  mydiv.style('width', '280px');
  mydiv.style('height', '260px');
  mydiv.position(65,530);
}

function hide1(){
  mydiv.remove();
  print ("I am out");
}

function show2(){
  mydiv = createDiv("Reading provides only one type of information to the young brain, challenging the child to conjure their own images.");
  mydiv.style("background-color","#99e0fc");
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
    mydiv = createDiv('The amygdala is the emotion center of the brain. It is what allows you to feel empathy and is vital to ability to interact with other people. The skills needed to be able to function socially, such as empathy and the ability to read body language, are associated with the successful development of the amygdala. The amygdala develops during the critical period and the success of its growth is entirely depedent upon authentic human interactions. If a child spends the too much time during the critical period interacting with screens, they are much more likely to experience social challenges as they get older. There is evidence that suggests that the amygdala of such children is physically smaller than that of a healthy child. ');
    mydiv.position (350,325);
    mydiv.style("background-color","#99e0fc");
    mydiv.style('width', '420px');
    mydiv.style('height', '230px');

    mydivhead = createDiv("The Amygdala");
    mydivhead.style("background-color","#99e0fc");
    mydivhead.style('width','420px');
    mydivhead.style('height','20px');
    mydivhead.style("font-size","20px");
    mydivhead.style('text-align','center');
    mydivhead.position(350,305);
  }
}

function mouseReleased(){
  let d = dist (mouseX, mouseY, amygdala.x, amygdala.y)
  if (d < (amygdala.w/2)) {
    mydiv.remove();
    mydivhead.remove();
  }
}

function funfact(){
  fill(0);
  ellipse(30,30,30,30);
}
