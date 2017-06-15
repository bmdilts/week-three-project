var clear = document.querySelector('#clear');
var equals = document.querySelector('#equals');
var readout = document.querySelector('#readout');
var numbers = document.querySelectorAll('.number')
var operators = document.querySelectorAll('.light')
var bucket = ""
var operations = []

for(let i = 0; i < numbers.length; i++){
  numbers[i].addEventListener("click", function(e){
    bucket += e.target.value;
    readout.textContent += e.target.value;
    console.log(bucket);
  })
}
for(let i = 0; i < operators.length; i++){
  operators[i].addEventListener("click", function(e){
    if(bucket.length > 0){
    operations.push(Number(bucket));
    }
    bucket = "";
    operations.push(e.target.value);
    console.log(e.target.value);
    readout.textContent += e.target.value;
  })
}
equals.addEventListener('click', function(event){
  operations.push((Number(bucket)));
  bucket = "";
  for (let x = 0; x < operations.length; x++){
    if(operations[x] == "√" && operations[x + 1] > 0){
      let answer = Math.sqrt(operations[x + 1]);
      operations.splice([x], 2, answer);
    }
  };
  for (let x = 0; x < operations.length; x++){
    if(operations[x] === " x "){
      let answer = operations[x - 1] * operations[x + 1];
      operations.splice([x - 1], 3, answer);
    }
  };
  for (let x = 0; x < operations.length; x++){
    if(operations[x] === " / "){
      let answer = operations[x - 1] / operations[x + 1];
      operations.splice([x - 1], 3, answer);
    }
  };
  for (let x = 0; x < operations.length; x++){
    if(operations[x] === " % "){
      let answer = operations[x - 1] % operations[x + 1];
      operations.splice([x - 1], 3, answer);
    }
  };
  for (let x = 0; x < operations.length; x++){
    if(operations[x] === " + "){
      let answer = (operations[x - 1] + operations[x + 1]);
      operations.splice([x - 1], 3, answer);
    }
  };
  for (x = 0; x < operations.length; x++){
    if(operations[x] === " - "){
      let answer = operations[x - 1] - operations[x + 1];
      operations.splice([x - 1], 3, answer);
    }
  };
  console.log(operations);
  readout.textContent = operations;
});
clear.addEventListener('click', function(event){
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
