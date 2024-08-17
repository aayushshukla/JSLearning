function show()
  {
    
     console.log('function show is running ')
  }

  //setTimeout(show,3000)
  function display()
     {
        console.log('fuction display is running ')
     }


//display()

/*
   any function that is passed as an argument is called callback function 

   a callback function that is to be executed after another function has finished executing --that y it is called callback

   callbacks are way to make sure specific code  doesnt execute  until other code execution  is finished

*/

const friend1 =(friendName,callbackfunction) =>{
    console.log(`I will call you back ${friendName} after some time `)
    callbackfunction()
}

const frined2 =() => {
      console.log(`How are you ? any plan for weekends `)
}

friend1('Vivek',frined2)



function f1()
  {
    setTimeout(()=>{
        console.log('funtion 1 is called')
        f2()
    },3000)
     
  }
  //setTimeout(show,3000)
  function f2()
     {
        console.log('fuction 2 is running ')
     }

f1()