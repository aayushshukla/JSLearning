console.log('External Javascript file is running ....');

//Variables temporary storage of values 
// syntax :  var variablename = value 
// data type will decided dynamically on basis of value assigned

//Identifiers it is a collection of character,numbers that are used to give name to a variable,
// class , function , method etc

// user defined name 
// 1) all variables are indentifiers- true  2) all identifiers are variables -false 
//rules for identifiers in java script

// name can have A-Z,a-z,0-9, _ , $        example : user , user1 ,userName, user_name , user$name 
// i) aayush  ,ii) aayush shukla iii) aayush@gmail.com iv)aayush.1234 v) aayush$1234 vi) aayush_shukla

// camelCase is followed for giving name   example :   userName , aayushShukla , getUserName , setUserData 

//variable names are case sensitive
// string datatype if we write anything between '' or "" it will be considered as string 
// string is basically collection of characters 
// it can alphabetic ex :  'aayush' , alphanumeric  password : "rohan1234"   and numeric : '10' or "2024"
// variable names can be as long as you need 

// keywords can not be used as identifiers 
// keywords are predifined words or reserved word or system defined words that have a specific meaning to a programming language 
var companyName= "Infosys"
var CompanyName ='Edgeverve'
console.log("Company name ",companyName)
console.log("Company Department is :",CompanyName)
// indentifier will never with  a digit 
// it can start with $ and with _

// constant : it can be reassigned . its  values is fixed can not be modified or changed.
// syntax : const refname = value

const pi =3.14  // constant variable
var r= 2
area=pi *r *r 
console.log('value of pi = ',pi)
console.log('Area of circle is',area)

var userName
userName='Siriram'
console.log('Welcome user ',userName)

const companyNewName ='Infosys' // JS const must be assigned the value when it is declared 


/*
     JS have 8 data types
     
     String
     Number : it can be integer as well as float
     Boolean
     Undefined
     Null
     Symbol
     Object  : it contains both user defined object and pre defined objects 
     Bigint


*/

var n1=10
var n2 =20.45
console.log("Sum of given numbers",(n1+n2))
console.log("Datatype of n1 ",typeof(n1)) // typeof() will return the datatype of given variable
console.log("Datatype of company name",typeof(companyName))
// string datatype
var username='Sudesh'
var password ='sudesh@1234'
var exp ="3"
console.log('User name is ',username)
console.log('User password is ',password)
console.log('User experience is ',exp,'yrs')
console.log("Datatype of exp ",typeof(exp))

// Boolean datatype
var ishungry=false
console.log('User is hungry  ',ishungry)

var idProof  // data will undefined as we didnt assigned any value to the variable 
console.log('data type of idProof',typeof(idProof))

var newId =undefined
console.log('data type of NEW ID ',typeof(newId))
 
// null datatype
var email = null
console.log('value of email',email)

var myemail ='' // empty string 
console.log('type of myemail is',typeof(myemail))