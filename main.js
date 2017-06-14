// When the buttons are clicked we need to save the value to a variable
// Then we need to return those variables to another function that performs the equation
// when equals is pushed we need to display that result and save it as a third variable
// clear places an empty string into all the variables
// bonus: Math.sqrt(x); for square root button
// bonus: x % x will return the modulo of two numbers

// var one = document.querySelector('#one');
// var two = document.querySelector('#two');
// var three = document.querySelector('#three');
// var four = document.querySelector('#four');
// var five = document.querySelector('#five');
// var six = document.querySelector('#six');
// var seven = document.querySelector('#seven');
// var eight = document.querySelector('#eight');
// var nine = document.querySelector('#nine');
// var ten = document.querySelector('#ten');
var clear = document.querySelector('#clear');
// var add = document.querySelector('#plus');
// var subtract = document.querySelector('#subtract');
// var multiply = document.querySelector('#times');
// var divide = document.querySelector('#divide');
var point = document.querySelector('#decimal');
var equals = document.querySelector('#equals');
var readout = document.querySelector('#readout');

var numbers = document.querySelectorAll('.number')
var operators = document.querySelectorAll('.light')

var bucket = ""
var operations = []

for(let i = 0; i < numbers.length; i++){
  numbers[i].addEventListener("click", function(e){
    // console.log(e.target.value);
    bucket += e.target.value;
    readout.textContent += e.target.value;
    console.log(bucket);
  })
}

for(let i = 0; i < operators.length; i++){
  operators[i].addEventListener("click", function(e){
    // console.log(e.target.value);
    // bucket.slice(0, bucket.length);
    operations.push(Number(bucket));
    bucket = "";
    console.log(bucket);
    operations.push(e.target.value);

    readout.textContent += e.target.value;
    console.log(bucket);
    console.log(operations);
  })
}
equals.addEventListener('click', function(event){
  operations.push(Number(bucket));
  bucket = "";
  console.log(operations);
  for (x = 0; x < operations.length; x++){
    if(operations[x] = "x"){
      let answer = operations[x - 1] * operations[x + 1];
      operations.splice(operations[x - 1], 3, answer);
    }
  };
  for (x = 0; x < operations.length; x++){
    if(operations[x] = "/"){
      let answer = operations[x - 1] / operations[x + 1];
      operations.splice(operations[x - 1], 3, answer);
    }
  };
  for (x = 0; x < operations.length; x++){
    if(operations[x] = "+"){
      console.log(operations);
      let answer = (operations[x - 1] + operations[x + 1]);
      console.log(answer);
      console.log(operations);
      operations.splice(operations[x - 1], 3, answer);
      console.log(operations);
    }
  };
  for (x = 0; x < operations.length; x++){
    if(operations[x] = "-"){
      let answer = operations[x - 1] - operations[x + 1];
      operations.splice(operations[x - 1], 3, answer);
    }
  };
  console.log(operations);
  readout.textContent = operations;
});
clear.addEventListener('click', function(event){
  // let y = event.target.value;
  // console.log(y);
  // operations = [];
  bucket = "";
  readout.textContent = "";
  operations = []
  console.log(bucket);
  console.log(operations);
});

// slice(0, array.length)

// for equation, place entered values in an array, create 'for' loop to check values in that array and look for (bonus: parantheses, exponents) divide, multiply, add and subtract. Then create 'if, else' loops for each operation in order. When writing the 'if, else' functions use index of operator +1 and -1 to splice the numbers on each side. When returning the result of each operator, place them back in the index of the removed values)

// one.addEventListener('click', function(event){
//   // console.log('click')
//   // console.log(y);
//   op_bucket.push(event.target.value);
//   readout.textContent = op_bucket.join(' ');
//   // console.log(x);
//   // console.log(op_bucket);
//   return( 'op_bucket' );
// });
// two.addEventListener('click', function(event){
//   let y = event.target.value;
//   console.log(y);
//   op_bucket.push(y);
//   let x = op_bucket.join(' ');
//   console.log(x);
//   readout.textContent = x;
//   console.log(op_bucket);
//   return( 'op_bucket' );
// });
// three.addEventListener('click', function(event){
//   let y = event.target.value;
//   console.log(y);
//   op_bucket.push(y);
//   let x = op_bucket.join(' ');
//   console.log(x);
//   readout.textContent = x;
//   console.log(op_bucket);
//   return( 'op_bucket' );
// });
// four.addEventListener('click', function(event){
//   let y = event.target.value;
//   console.log(y);
//   op_bucket.push(y);
//   let x = op_bucket.join(' ');
//   console.log(x);
//   readout.textContent = x;
//   console.log(op_bucket);
//   return( 'op_bucket' );
// });
// five.addEventListener('click', function(event){
//   let y = event.target.value;
//   console.log(y);
//   op_bucket.push(y);
//   let x = op_bucket.join(' ');
//   console.log(x);
//   readout.textContent = x;
//   console.log(op_bucket);
//   return( 'op_bucket' );
// });
// six.addEventListener('click', function(event){
//   let y = event.target.value;
//   console.log(y);
//   op_bucket.push(y);
//   let x = op_bucket.join(' ');
//   console.log(x);
//   readout.textContent = x;
//   console.log(op_bucket);
//   return( 'op_bucket' );
// });
// seven.addEventListener('click', function(event){
//   let y = event.target.value;
//   console.log(y);
//   op_bucket.push(y);
//   let x = op_bucket.join(' ');
//   console.log(x);
//   readout.textContent = x;
//   console.log(op_bucket);
//   return( 'op_bucket' );
// });
// eight.addEventListener('click', function(event){
//   let y = event.target.value;
//   console.log(y);
//   op_bucket.push(y);
//   let x = op_bucket.join(' ');
//   console.log(x);
//   readout.textContent = x;
//   console.log(op_bucket);
//   return( 'op_bucket' );
// });
// nine.addEventListener('click', function(event){
//   let y = event.target.value;
//   console.log(y);
//   op_bucket.push(y);
//   let x = op_bucket.join(' ');
//   console.log(x);
//   readout.textContent = x;
//   console.log(op_bucket);
//   return( 'op_bucket' );
// });
// add.addEventListener('click', function(event){
//   if(op_bucket.length>0){
//     operations.push(op_bucket)
//   }
//   let y = event.target.value;
//   // console.log(y);
//   op_bucket.push(y);
//   let x = op_bucket.join(' ');
//   // console.log(x);
//   readout.textContent = x;
//   // console.log(op_bucket);
//   return( 'op_bucket' );
// });
// subtract.addEventListener('click', function(event){
//   let y = event.target.value;
//   // console.log(y);
//   op_bucket.push(y);
//   let x = op_bucket.join(' ');
//   // console.log(x);
//   readout.textContent = x;
//   // console.log(op_bucket);
//   return( 'op_bucket' );
// });
// multiply.addEventListener('click', function(event){
//   let y = event.target.value;
//   // console.log(y);
//   op_bucket.push(y);
//   let x = op_bucket.join(' ');
//   // console.log(x);
//   readout.textContent = x;
//   // console.log(op_bucket);
//   return( 'op_bucket' );
// });
// divide.addEventListener('click', function(event){
//   let y = event.target.value;
//   // console.log(y);
//   op_bucket.push(y);
//   let x = op_bucket.join(' ');
//   // console.log(x);
//   readout.textContent = x;
//   // console.log(op_bucket);
//   return( 'op_bucket' );
// });

//
//
//
// // number.addEventListener("click", function poo(event){
// //   let first_number = event.target.value;
// //   return first_number;
// // })
//
// // I need the value of each button push to be stored in an array. When the operator is clicked, then the op_bucket needs to be joined with no spaces and pushed to the operations array. Then the op_bucket value needs to be added to the end of the readout value.
// add.addEventListener('click', function(event){
//   if(op_bucket.length > 0){
//     op_bucket.join("");
//     operations.push(op_bucket)
//     readout.textContent.push(op_bucket)
//     op_bucket = []
//   }
//   let y = event.target.value;
//   // console.log(y);
//   op_bucket.push(y);
//   let x = op_bucket.join(' ');
//   // console.log(x);
//   readout.textContent = x;
//   // console.log(op_bucket);
//   return( 'op_bucket' );
// });
