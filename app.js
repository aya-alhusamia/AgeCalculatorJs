// Create three functions. checkParamsFn, checkOverEighteenFn & calculateAgeFn.
// The first function checks your parameters and returns
// true if all of them are integers, whereas returns false if not.
// The second function is self explanatory.
// The third function, uses the first and second functions to check its inputs
// and returns an error message that starts with "error:"
// This function should return a rounded age.
// READING MATERIALS:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// https://www.w3schools.com/js/js_dates.asp
// https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript
// HINT: recycling code is never bad practice.

// This functions should check the integrity of the parameters and pass true/false


function checkParamsFn(year, month, day) {

  // Write your code here
  if (Number.isInteger(year) && Number.isInteger(month) && Number.isInteger(day)) { 
    return true
    }
    return false
}

// This functions checks if the person is or above 18 years of age, return true/false
function checkOverEighteenFn(year, month, day) {
  // Write your code here
  let d = new Date();
  year = d.getFullYear() - year
  if(year >= 18){
    return true
  }
  
    return false
}
 
function calculateAgeFn(year, month, day) {
  // Write your code here
     year = Number(year);
   month = Number(month) - 1;
   day = Number(day);
   let date= `${month}/${day}/${year}`
   let fullDate = new Date(date)
   let today = new Date(); 
   let bdate=today- fullDate;
   let age = Math.round(( today- fullDate)/(365*24*60*60*1000));
  if (checkParamsFn(year, month, day) && checkOverEighteenFn(year, month, day)  && bdate >0 ){

   return age}
  // let dob = 1000*60*60*24*365;
  //   year=year.slice(0,4)
  //   month = month.slice(4,6)
  //   day = day.slice(6,8)
  // let age =((new Date() - new Date(`${month}/${day}/${year}`))/dob)
  // if (checkParamsFn(year, month, day) && checkOverEighteenFn(year, month, day)  && bdate >0 ){
  // return (Math.floor(age))
  // }
  return "error: repet your birthday "
}

 
 
// Look at the naming of the functions. it looks like salwaBaqer, where
// the first letter of the first word is small, while the first letter of the
// second word is Capital. This is called "Camel Casing."
// Also the Fn at the end of the function name is short for function.
// str = String, int = Integer, arr = Array, obj = Object, fn = Function
// It's best practice to name your function as to what it does, or your variable
// to what it holds.

module.exports = calculateAgeFn;
