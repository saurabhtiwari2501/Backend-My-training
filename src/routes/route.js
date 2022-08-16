const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
var app = express();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})


 // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing


 //Logic start from here


app.get("/Array-01", function (req, res) {

    let arr= [1,2,3,5,6,7]
 
   let total = 0;
   for (var i in arr) {
       total += arr[i];
   }
 
   let lastDigit= arr.pop()
   let consecutiveSum= lastDigit * (lastDigit+1) /2
   let missingNumber= consecutiveSum - total
 
   res.send(  { data: missingNumber  }  );
 });




// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
app.get("/sol2", function (req, res) {

    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    
    let arr= [33, 34, 35, 37, 38]
    let len= arr.length
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let firstDigit= arr[0]
    let lastDigit= arr.pop()
    let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
    let missingNumber= consecutiveSum - total
   
    res.send(  { data: missingNumber  }  );
  });
 

module.exports = router;