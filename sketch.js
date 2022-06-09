function preload () {
  sketch = loadImage ("ABIR.PNG")
  }

function setup() {
  createCanvas (550,400);
  }

function draw () {
  background (2220);
  imageMode(CENTER)
  image(sketch, width/2, height/2,400,300)
  
  // Point Finder
  textAlign (LEFT)
  fill (0)
  textSize (13);
  text ("(" + mouseX +"," + mouseY +")",5,20);
  
  
  //Hidden shapes
  /*
  noStroke ()
  fill (0)
  rect (372,62,81,25)
  fill (0)
  rect (144,285,48,57) //Average High GPA 
  fill (0)
  rect (364,284,48,58) //Average Low GPA 
  fill (0)
  rect (130,128,82,120) // Average High Attendance
  fill (0)
  rect (344,128,80,120) //Average low Attendance
  */
  
  
  
  //Variables 
  
  
  //School name
  FIHS= dist (221,58,mouseX,mouseY) // FIHS
   if ((mouseX>372) && (mouseX < 453) && (mouseY > 62 ) &&    
     (mouseY < 88)) {
     data0= color (255, 0, 255)
     } 
   else {
     data0= color(0,0,0,0)
     }
  
  
  //High Attendance
 AverageHattandence= dist (150,120,mouseX,mouseY) 
  if ((mouseX>131) && (mouseX < 212) && (mouseY > 130 ) && 
     (mouseY < 249)) {
     data1= color (0,230,0)
     }
  else { 
     data1= color (0,0,0,0)
     }  
  
  
  //Low Attendance
 AverageLattendance= dist (355,110, mouseX, mouseY) 
  if ((mouseX>343) && (mouseX < 424) && (mouseY > 128 ) && 
     (mouseY < 249)) {  
     data2= color (255,0,0)
    }
  else { 
     data2= color (0,0,0,0)
    }  
  
  
  rec1= dist (144,270, mouseX, mouseY) 
  if ((mouseX>129) && (mouseX < 212) && (mouseY > 128 ) && 
     (mouseY < 249)) {
     datarec1= color (0,0,0,0)
     }
  else { 
     datarec1= color (255)
     }  

  
  rec2= dist (144,270, mouseX, mouseY) 
  if ((mouseX>344) && (mouseX < 424) && (mouseY > 128 ) &&    
     (mouseY < 249)) {
     datarec2= color (0,0,0,0)
     }
  else { 
     datarec2= color (255)
     }  

  
  
  //Strings
  
  // rectangle to hide first transcript
  fill(datarec1) 
  rect (142,282,52,62)
  noStroke()
  describe('white rect in left of canvas');
  
  // rectangle to hide second transcript 
  fill(datarec2)
  rect (362,282,52,62) 
  noStroke()
  describe('white rect in right of canvas');

  fill (data0)
  textAlign (CENTER)
  textSize (15)
  textFont ('Georgia')
  text ('Flushing International High School', width/2,380)
  
  fill (data1)
  textAlign (CENTER)
  textSize (15)
  textFont ('Georgia')
  text ('Average Attendance\n 93.46', width/2,365)

  fill (data2)
  textAlign (CENTER)
  textSize (15)
  textFont ('Georgia')
  text ('Average Attendance\n 71.35', width/2,365)
  
}