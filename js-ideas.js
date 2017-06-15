document.addEventListener('keypress', function(e){
  if (e.keyCode >= 48 && e.keyCode <= 57){
    bucket += e.target.value;
    readout.textContent += e.target.value;
    console.log(bucket);
  }
}


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


// for (x = 0; x < operations.length; x++){
//   if(operations[x] = "x"){
//   var answer = operations[x-1] * operations[x+1];
//   operations.splice(op_bucket[x - 1], 3, answer);
//   }
// };
// for (x = 0; x < operations.length; x++){
//   if(operations[x] = "/"){
//   var answer = operations[x-1] / operations[x+1];
//   op_bucket.splice(operations[x-1], 3, answer);
//   }
// };
// for (x = 0; x < operations.length; x++){
//   if(operations[x] = "+"){
//   var answer = operations[x-1] + operations[x+1];
//   op_bucket.splice(operations[x-1], 3, answer);
//   }
// };
// for (x = 0; x < operations.length; x++){
//   if(operations[x] = "-"){
//   var answer = operations[x-1] - operations[x+1];
//   op_bucket.splice(operations[x-1], 3, answer);
//   }
// };
//
//
//
// //Maybe not! ->
// if(op_bucket[x-1] = "."){
//   var answer = (op_bucket[x-3] + . + op_bucket[x-1]) + op_bucket[x+1];
//   op_bucket.splice(op_bucket[x-1], 3, answer);
// }

//on operator keypress store value in op_bucket

//idea to remove all commas in a string: stringName.replace(/,/g, "");
