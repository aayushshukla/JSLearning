const promise1  = new Promise((resolve,reject)=>{
    // write async code
    // db calls , network etc 
    setTimeout(() => {
        console.log(`Async task is done `)
    }, 3000);
})

promise1.then(()=>{
    console.log("Promise is consumed")
})

new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log(`Async task 2 is done `)
    }, 3000);

}).then(()=>{
    console.log("Promise 2 is resolved")
})

const promise3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({
            employeename : "John",
            empid  : 101,
            empDept : 'Testing'
        })
        console.log(`Async task 3 is done `)
    }, 3000);
}).then((emp)=>{
   console.log(`Employee details`)
   console.log(emp)
})

const promise4 = new Promise((resolve,reject)=>{
    setTimeout(() => {
      let  permission = false
      if(permission) {
            resolve({
                employeename : "John",
                empid  : 101,
                empDept : 'Testing'
            })
            console.log(`Async task 3 is done `)
        }
      else 
         {
            reject("Pemrission Denied : You Dont Have Authorization  ")
         }
    }, 3000);
}).then((emp)=>{
   console.log(`Employee details`)
   console.log(emp)
}).catch((errormsg)=>{
   console.log(errormsg)
}).finally()
  {
    console.log('Clearing objects ')
  }

