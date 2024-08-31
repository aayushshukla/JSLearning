var screen = document.documentElement;
console.log(screen)

function fullScreenMode()
  {
     if(screen.requestFullscreen)
         {
            screen.requestFullscreen()
         }
  // this is for firefox 
     else if(screen.mozRequestFullScreen)
          {
             screen.mozRequestFullScreen()
          }
    // safari and opera
    else if(screen.webkitRequestFullscreen)
         {
            screen.webkitRequestFullscreen()
         }
  }

function endFullScreen()
  {
    console.log('exit screen')
     if(document.exitFullscreen)
          {
            console.log("first",  document.exitFullscreen())
            document.exitFullscreen()
          }
    else if (document.webkitExitFullscreen)
         {
            console.log(document.webkitExitFullscreen())
            screen.webkitExitFullscreen()
         }
  }