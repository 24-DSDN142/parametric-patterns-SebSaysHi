//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
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
  

rect(300,0,300,200)

rect(140,14,200,120)

rect(200,100,200,100)

rect(140,140,200,20)

rect(5,5,200,20)




  let PupilSizeX = 100
let PupilSizeY = 60
let EyeSizeX = 150
let EyeSizeY = 100
 

fill(4,99,7)
  ellipse(100, 100, 100, 200); // draws a circle 45 pixels accross at location 100 pixels accross and 100 pixels down

  fill(194,197,204)
ellipse(150, 100, EyeSizeY, EyeSizeX)
ellipse(50, 100, EyeSizeY, EyeSizeX)
fill(0)
ellipse(170, 100, PupilSizeY, PupilSizeX)
ellipse(30, 100, PupilSizeY, PupilSizeX)


line(75,175,125,175)

}
