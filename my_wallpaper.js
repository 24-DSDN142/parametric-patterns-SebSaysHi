//your parameter variables go here!

//Color of Green mans Head
let r1 = 4
let g1 = 99
let b1 = 7

//Color of Eyeballs
let r2 = 194
let g2 = 197
let b2 = 204

//Color of Pupils
let r3 = 0
let g3 = 0
let b3 = 0

//Size of Pupils
let PupilSizeX = 50
let PupilSizeY = 50

//Size of Eyeballs
let EyeSizeX = 100
let EyeSizeY = 100

//Size of Head
let HeadsizeX = 200
let HeadSizeY = 250

//Mouth length
let MouthLengthL = 75
let MouthLengthR = 125



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 300;
  pWallpaper.grid_settings.cell_height = 300;
  pWallpaper.grid_settings.row_offset  = 30;
}

function wallpaper_background() {
  background(255,49,49); //white colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
 
  // The colorful Squares
noStroke()



fill(57,255,20)
rect(0,200,290,200)

fill(225,95,31)
rect(0,140,200,150)


fill(225,240,31)
rect(100,140,200,125)


fill(4,217,225)
rect(200,150,250,100)


fill(148,87,235)
rect(100,10,200,100)





 //Head of Green man
 if(HeadsizeX >= 200){
 MouthLengthL = 35
 MouthLengthR = 165
 
 }
  
stroke(0)
fill(r1,g1,b1)
  ellipse(100, 100, HeadsizeX, HeadSizeY); // draws a circle 45 pixels accross at location 100 pixels accross and 100 pixels down

 //The eyes and pupils of the Green man
 
  fill(r2,g2,b2)
ellipse(150, 100, EyeSizeY, EyeSizeX)
ellipse(50, 100, EyeSizeY, EyeSizeX)
fill(r3,g3,b3)
ellipse(170, 100, PupilSizeY, PupilSizeX)
ellipse(30, 100, PupilSizeY, PupilSizeX)


line(MouthLengthL,175,MouthLengthR,175)



}
