const getUserPromise = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log(`....Fetching Users ....`)
        let users = ['Vivek','Rohan','Yasir','SiriRam']
        resolve(users)
        reject('Error in fetching user data')
    } ,3000)

})

const getUserInfo = (employeeindex) =>{

      return new Promise((resolve,reject)=>{
           setTimeout((employeeindex) => {
                const accountinfo = {
                    ifsccode : 'sbi45677',
                    amount : 900000
                }
           resolve(`Amount = ${accountinfo.amount}  IFSC code = ${accountinfo.ifsccode} `)
           reject( 'No user info is found ')
           }, 1000,employeeindex);
      })
}

 const getBranch = ()=>{
     return new Promise((resolve,reject)=>{
         setTimeout(() => {
              resolve({branch : 'Kormanagala'})
              reject('No branch found ')
         }, 1000);
     })
 }

getUserPromise.then((usernames)=>{
    console.log(usernames)
    getUserInfo(usernames[1]).then((msg)=>{
           console.log(msg)
           getBranch().then((branch)=>{
              console.log( branch)
           })
    })
})
getUserPromise.catch((errormsg)=>{
    console.log(errormsg)
})