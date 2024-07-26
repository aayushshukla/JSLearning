var year ="2024"
console.log(typeof(year))
// parseInt(string,radix) ,parseFloat it will return a number if not a number than NaN will be returned
// A string to convert into a number.
var newyear = parseInt(year) // string should be numeric
console.log('Datatype of newyear variable',typeof(newyear))

var newyear = parseInt(year,10)
console.log('Datatype of newyear variable',typeof(newyear))
// white space have no effects while conversion 
var phoneNo= "    1234567891  "
phoneNo = parseInt(phoneNo)
console.log('Datatype of phonNo variable',typeof(phoneNo))

var gst = "8.95"
intgst= parseInt(gst)  // data loss  it will give only the integer value
floatgst =parseFloat(gst)
console.log("Int gst is ",intgst)
console.log("Float gst is",floatgst)

var x = "011"
var x1="0x11"
x = parseInt(x)
var oct = parseInt(x,8)  // 8 octal 0-7 010 011 
var hex = parseInt(x1,16) // hexadecimal representation of number  0-9 ,10- A ,11-B ,12-C,13-D,14-E,15-F
console.log("value of x is",x)
console.log("octal value  is",oct)
console.log("hexadecimal value is",hex)

var str = "123@4567"
x2 = parseInt(str) // 123 convertinto int before finding string or a character 
console.log("Value of x2 after parse ",x2)

var str = "x12345677"
x2=parseInt(str)  // NaN string is started with a character 
console.log("Value of x2 after parse ",x2)

var str = " 12 years of experiece "
var str2 = " since 2012 "
x3= parseInt(str)
x4=parseInt(str2)
console.log("Value of x3 after parse ",x3)
console.log("Value of x4 after parse ",x4)

var str = "-123.45"
console.log(parseInt(str))


/*
   number() method converts boolean and dates to a number and value to a number 
*/
var tax = '10.5'
tax = Number(tax)
console.log("Tax is =",tax)
console.log("Datatype of tax is =",typeof(tax))

console.log("Converting boolean to number ",Number(true))
console.log("Converting boolean to number ",Number(false))
// parseInt() only converts string in to int 
// number() : date, boolean and string 
console.log("Converting boolean to number ",parseInt(true))

var doj = new Date()
console.log("doj is =",doj)
console.log('type of doj',typeof(doj))
// convert doj in to number
var covertdoj = Number(doj)
console.log("Doj after convertion",covertdoj)

/*
      convertinto string  : String() S is capital 
*/

console.log('today date in string format',String(new Date()))
console.log('convert no to string ',String(2024))
console.log('convert boolean to string ',String(Boolean(0)))
console.log('convert array to string ',String([10,20,40,50,60]))

