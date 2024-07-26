/*
   {   }  this is a block
   let have block scope
   let must be declared before use
   let can not be redeclared in a same scope
*/

// let can not redeclared in a same scope
// let username = 'Vivek ' 

// let username ='Siriram'

var  uname = 'Siriram'  // global variable

{
    var uname = 'Vivek'  //  re assigning value to the global variable
}

console.log('User name is',uname)

let seriesname = 'one piece' // global scope
// this is block and variable declare with let keyword have scope only inside the block 
{
    let seriesname  = 'Hikiyu'
    console.log('.........Block scope ...')
    console.log('Watching ...',seriesname)
}

console.log('...Global scope.....')
console.log(' We are watching ....',seriesname)

/*
     var it have no  block scope  , it can redeclare and reassigned with a same scope

     let it have block scope , it can not be redeclare in same scope
     it can be redeclared in different scope and value can be reassigned 


*/

var x =10 // allowed
let x=20  // not allowed   SyntaxError: Identifier 'x' has already been declared

{
    let x =30 // allowed
   // let x =40  // not allowed 
}

console.log('value of x',x)