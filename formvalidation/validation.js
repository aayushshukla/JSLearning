function formValidation()
  {
    const username = document.getElementById("uname").value;
    const password = document.getElementById("upassword").value;
    const usermail = document.getElementById("email").value;
    const usercity = document.getElementById("select").value;
    const agreement = document.getElementById('conditions').checked
    const address = document.getElementById('uaddress').value
    console.log(username+"\t"+password+"\t"+usermail+'\t'+agreement)
    const nameerror = document.getElementById("username-error")
    const passworderror = document.getElementById("userpassword-error")
    const  mailerror = document.getElementById("umail-error")
    const cityerror = document.getElementById("city-error")
    const agreementerror = document.getElementById("conditions-error")
    const addresserror  = document.getElementById("address-error")

   nameerror.textContent=""
   passworderror.textContent=""
   mailerror.textContent="" 
   cityerror.textContent=""
   agreementerror.textContent=""
   addresserror.textContent=""
    let formValid = true;
    if(username==="")
         {
           nameerror.textContent ="Enter valid user name it can not be empty"
            formValid=false
         }
    if (usermail==="" || !usermail.include("@"))
            {
                  mailerror.textContent="Enter valid email" 
                  formValid=false
            }

    if(password==="")
         {
             passworderror.textContent ="Password can not be empty"
             formValid=false
         }
    if (password.length < 8)
         {
              passworderror.textContent ="Password must have length more than 8"
              formValid = false
         }

    if (usercity==="")
         {
         cityerror.textContent ="Select city "
         formValid = false
         }

    if(!agreement)
    {
        agreementerror.textContent="Please agree with terms and conditions"
        formValid=false
    }

    if(address==="")
         {
            addresserror.innerHTML="Fill permanent address"
            formValid=false
         }
    
    return formValid
  }