function loadData()
 {
  
    // Creating XMLHttpRequest object
    var xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status==200 )
             {
                document.getElementById("info").innerHTML= this.response
             }
    }
    //Sets the request method, request URL, and synchronous flag.
    xhttp.open('GET','ajaxstates.txt',true)
    //nitiates the request. The body argument provides the request body, if any, and is ignored if the request method is GET or HEAD.
    xhttp.send()
 }