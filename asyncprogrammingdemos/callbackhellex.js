// user name
// ifsccode and amount 
// branchname 


// function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number
const getUsers=()=>{
   setTimeout(() => {
      console.log(`....Fetching Users ....`)
      let users = ['Vivek','Rohan','Yasir','SiriRam']
      console.log(users)

    setTimeout(() => {
         const accountinfo = {
             ifsccode : 'sbi45677',
             amount : 900000
         }
        console.log(`Amount = ${accountinfo.amount} `)
        //console.log(`IFSC Code = ${accountinfo.ifsccode}`)
        setTimeout(() => {
             accountinfo.branch='Electronic City , Bangalore'
             console.log(`User ${users[3]} Branch Name is ${accountinfo.branch} IFSC Code is ${accountinfo.ifsccode} `)
        },3000,accountinfo.ifsccode);
            
      }, 3000,users[3]);

   }, 3000);
}

getUsers()
