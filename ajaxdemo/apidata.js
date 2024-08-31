function apiData(method,url)
  {
    return new Promise((resolve,reject)=>{
        
        const xhttp = new XMLHttpRequest()
        xhttp.responseType= 'json'
        xhttp.onload=()=>{
            console.log('Loading Data....')
            // parsing data to JSON 
        //  console.log(JSON.parse(xhttp.response))
        if(xhttp.status==200)
            {
            resolve(xhttp.response)
           // console.log(xhttp.response)
            }
        else 
            {
                reject('Failed')
               // console.log('Failed To Load')
            }
        }
        xhttp.onerror =()=>{
            reject('Some Error While Loading Data..')
           // console.log('Some Error While Loading Data..')
        }
        xhttp.open(method,url)
        xhttp.send()

        })
  }

  function addApiData(method,url,body)
  {
    return new Promise((resolve,reject)=>{
        
        const xhttp = new XMLHttpRequest()
        xhttp.open(method,url)
       xhttp.responseType= 'json'
        xhttp.setRequestHeader('Content-Type','applications/json')
       
        xhttp.onload=()=>{    
         
        if(xhttp.status<400)
            {
              resolve(xhttp.response)
          
            }
        else 
            {
                reject('Failed')
             
            }
        }
        xhttp.onerror =()=>{
            reject('Some Error While Loading Data..')
          
        }
        
        xhttp.send(body)

        })
  }
const url ='https://jsonplaceholder.typicode.com/todos'
//   apiData('GET',url).then((res)=>{
//     console.log('Loaded Data',res)
//   })
//   .catch((err)=>{
//      console.log(err)
//   })
newTodo ={
     title:'Take Java Session On Monday',
     completed: false
}
addApiData('POST',url,newTodo)
.then((res)=>{
    console.log('Added user',res)
})
.catch((err)=>{
    console.log(err)
})