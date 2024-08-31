const nbutton = document.querySelector("button")
// addEventListener(eventname , listneraction)
nbutton.addEventListener("click",()=>{
    // getting notification permission
    Notification.requestPermission().then(perm=>{
         if(perm==="granted")
             {
                // creating notification object 
              const notify =   new Notification("New Notification",{
                    body:"New product arrived in our website",
                    icon:'notificationicon.jpg',
                    data : {mymsg : 'product 1'}
                 })

               notify.addEventListener("error",e=>{
                 alert('There is something wrong ')
               })
             }
        else 
          { 
               alert("Permission denied")
          }
    })
})
let notification
let interval
document.addEventListener("visibilitychange",()=>{
    if(document.visibilityState ==="hidden")
           {
      const enddate = new Date()
     interval =  setInterval(() => { 
        notification =    new Notification("Dont Miss",{
        body:`Offer Ends In Last ${Math.round(new Date()-enddate)/1000} seconds`,
        tag : "End offer"
     })
           
        
      }, 100);
       
           }
    else
      {
      if(interval)   clearInterval(interval)
      if(notification)   notification.close()
      }
})