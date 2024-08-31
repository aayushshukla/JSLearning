// add item to local storage add key value pair and both should be string 
// keys are unique 
localStorage.setItem("user","vscode-agent")
localStorage.setItem ("content-type","text")
// update value in localstorage
localStorage.setItem("content-type","text/html")
// store object in local storage 
let headerobj = {
    length:8,
    request:'http://127.0.0.1:5500//webstorageapiexample//index.html',
    method :'get'}
localStorage.setItem("header",headerobj)
//String(headerobj)
// JSON.stringify : Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
localStorage.setItem('header-copy',JSON.stringify(headerobj))

console.log('content type is' ,localStorage.getItem("content-type"))
console.log(`User name is  ${localStorage.getItem('user')}`)
console.log('Header Details',localStorage.getItem("header-copy"))

// remove from local storage
localStorage.removeItem("header")
console.log(localStorage.getItem("header"))

console.log(localStorage.length)
// Returns the name of the nth key, or null if n is greater than or equal to the number of key/value pairs.
console.log(localStorage.key(2))

//localStorage.clear()
let count = 0
count+=1
//sessionStorage.setItem('sessionid',count )
sessionStorage.setItem("session-created",'28-aug-2024')

console.log(`session id is ${sessionStorage.getItem('sessionid')}`)
console.log('session start date',sessionStorage.getItem('session-created'))

// creating cookie  persistent cookie , non persistent cookie 
document.cookie ="username = Rohan ; password =124; expires = 30 Aug 2024 12:00:00 UTC"
document.cookie ="newuser = Rohan ; password =124; expires = 30 Aug 2024 12:00:00 UTC"
console.log(document.cookie)
var count1 =0
function incr()
  {
     count1++
     sessionStorage.setItem("counting...",count1)
     localStorage.setItem("counting...",count1)
  }


