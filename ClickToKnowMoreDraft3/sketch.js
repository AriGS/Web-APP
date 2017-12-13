/*
Title: Screen Time and The Brain
Imagined, Designed, and Programmed by: Ari Gonzalez Silas
Date: 12/13/17
Description: An interactive web app that teaches the repercussions and long-term consequences that result from excessive exposure to screens in the first 3 years of life.
Sources of ideas and inspiration (title, author, URL):
Works Cited
* Brain Diagram. hypermove.us, hypermove.us/blank-brain-diagram.py#. Accessed 13 Dec. 2017.
* Clipart Library. clipart-library.com/watching-tv-cliparts.html. Accessed 13 Dec. 2017.
* Clipart Library. clipart-library.com/cartoon-child-reading.html. Accessed 13 Dec. 2017.
* Dunckley, Victoria L. L., M.D. “Gray Matters: Too Much Screen Time Damages the Brain.” Psychology Today, 27 Feb. 2014, www.psychologytoday.com/blog/mental-wealth/201402/gray-matters-too-much-screen-time-damages-the-brain. Accessed 27 Oct. 2017.
* Margalit, Liraz, Ph.D. “What Screen Time Can Really do to Kids’ brains.” Psychology Today, 17 Apr. 2016, www.psychologytoday.com/blog/behind-online-behavior/201604/what-screen-time-can-really-do-kids-brains. Accessed 27 Oct. 2017.

Includes code from (title, author, URL):

 * Creative Coding, Allison Parish https://creative-coding.decontextualize.com/text-and-type/
 * Other Events and Inputs, Dan Shiffman https://www.youtube.com/watch?v=HsDVz2_Qgow
 * Mouse Interactions with Objects, Dan Shiffman https://www.youtube.com/watch?v=TaN5At5RWH8&t=576s
 * Ruby Landau-Pincus
*/

var img;
var img2;
var img3;
var img4;
var img5;
var mydiv;
var mydivhead;
var mydiv2;
var mydivhead2;

// object for the amygdala
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


function preload() {
    img = loadImage("pink.png");
    img2 = loadImage("pink2.png");
    img3 = loadImage("brainbit.png");
  }

function setup(){
  var canvas = createCanvas(1500,900);

  imageMode(CENTER);

// creating the permanent elements of the webpage such as images headers, directions, slider  and background information
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

  img4 = createImg("tvpic.png");
  img4.position(315,550);
  img4.size (150,250);
  img4.mousePressed(show1);
  img4.mouseReleased(hide1);

  img5 = createImg("bookpic.png")
  img5.position(920, 630);
  img5.size (170,170);
  img5.mousePressed(show2);
  img5.mouseReleased(hide2);

  img4 = createImg("brainpic.png");
  img4.position(290,35);
  img4.size (img4.width*1.1,img4.height*1.1);
  img4.style('z-index','-1');

  slider = createSlider(3, 30,30,1);
  slider.position (555,720);
  slider.style('width', '300px');
  slider.style('background',"#99e0fc");
  slider.style('slider-handle','background',"red");


// creates and then hides the divs that appear when the amygdala and insula are clicked in order to insure they appear properly later
  mydiv = createDiv('The amygdala is the emotion center of the brain. It is what allows you to feel empathy and is vital to ability to interact with other people. The skills needed to be able to function socially, such as empathy and the ability to read body language, are associated with the successful development of the amygdala. The amygdala develops during the critical period and the success of its growth is entirely depedent upon authentic human interactions. If a child spends the too much time during the critical period interacting with screens, they are much more likely to experience social challenges as they get older. There is evidence that suggests that the amygdala of such children is physically smaller than that of a healthy child. ');
  mydiv.position (350,325);
  mydiv.style("background-color","#99e0fc");
  mydiv.style('width', '420px');
  mydiv.style('height', '230px');
  mydiv.hide();

  mydivhead = createDiv("The Amygdala");
  mydivhead.style("background-color","#99e0fc");
  mydivhead.style('width','420px');
  mydivhead.style('height','20px');
  mydivhead.style("font-size","20px");
  mydivhead.style('text-align','center');
  mydivhead.position(350,305);
  mydivhead.hide();

  mydiv2 = createDiv("The insula allows us to develop the capacity for empathy and compassion, it allows us to integrate physical signals with emotion. Without proper development of the insula, children may be prone to violent behavior as a result of a lack of empathy. The skills dependent on the development of the insula dictate the depth and quality of personal relationships.");
  mydiv2.position (990,300);
  mydiv2.style("background-color","#99e0fc");
  mydiv2.style('width', '230px');
  mydiv2.style('height', '230px');
  mydiv2.hide();

  mydiv2head = createDiv("The Insula");
  mydiv2head.style("background-color","#99e0fc");
  mydiv2head.style('width','230px');
  mydiv2head.style('height','20px');
  mydiv2head.style("font-size","20px");
  mydiv2head.style('text-align','center');
  mydiv2head.position(990,280);
  mydiv2head.hide();

}

//reads new slider values and resizes the amygdala and insula based on those values
function draw(){

  val = slider.value();
  noStroke();
  fill(255);
  rect(769,372,60,35);

  amygdala.show();

// determines when the insula changes shape
  if (val <= 12) {
    var x = 0.9
} if (val >= 13) {
    x = 1
  } if (val >= 21) {
    x = 1.1
  }

  image(img3, 817, 335, img3.width*1.1, img3.height*1.1);

  image(img, 807, 290,img.width*x, img.height*x);

}

//function show1-2 and hide 1-2 call for the divs that appear when the reading image and watching tv images are clicked
function show1(){
  mydiv = createDiv("The damage to young brains caused by excessive screen time comes from the kind of stimuli provided by screens. Screens offer multiple kinds of stimuli at the same time, spoonfeeding children an abundance of information and failing to challenge them to generate their own information. Additionally all actions have immediate effect when using computers. Children become accustomed to the constant rewards they receive when working on computers. This is an unrealistic expectation to take out into the real world.");
  mydiv.style("background-color","#99e0fc");
  mydiv.style('width', '280px');
  mydiv.style('height', '260px');
  mydiv.position(55,530);

  mydivhead = createDiv("Effects of Screen Time");
  mydivhead.position(55,510);
  mydivhead.style('background-color','#99e0fc');
  mydivhead.style('width','280px');
  mydivhead.style('height','20px');
  mydivhead.style('font-size','20px');
  mydivhead.style('text-align','center');
}

function hide1(){
  mydiv.remove();
  mydivhead.remove();
}

function show2(){
  mydiv = createDiv("Reading provides only one type of information to the young brain, challenging the child to conjure their own images. When someone reads a book to a child they having a human interaction and their brain is much more involved in the activity. A child must process the voice, understand the words, and seek to create their own images. Interactions with real physical things and people are necessary for the development of a healthy brain.");
  mydiv.style("background-color","#99e0fc");
  mydiv.style('width', '260px');
  mydiv.style('height', '230px');
  mydiv.position(1100,550);

  mydivhead = createDiv("Benefits of Reading");
  mydivhead.position(1100,530);
  mydivhead.style('background-color','#99e0fc');
  mydivhead.style('width','260px');
  mydivhead.style('height','20px');
  mydivhead.style('font-size','20px');
  mydivhead.style('text-align','center');

}

function hide2(){
  mydiv.remove();
  mydivhead.remove();

}

// function show3 and hide3 define the areas that are activated when the mouse is pressed, specifically the areas around the insula and amygdala. Hide3 then hides them when anywhere else is clicked
function show3(){
  if ((mouseX<1000)&&(mouseX>600)&&(mouseY<375)&&(mouseY>270)){
  mydiv2.show();
  mydiv2head.show();
  }

  let d = dist (mouseX, mouseY, amygdala.x, amygdala.y)
  if (d < (amygdala.w/2)) {
    mydiv.show();
    mydivhead.show();
  }
}
function hide3(){
  mydiv.hide();
  mydivhead.hide();
  mydiv2.hide();
  mydiv2head.hide();
}

function mousePressed (){
  show3();
}

function mouseReleased(){
  hide3();
}
