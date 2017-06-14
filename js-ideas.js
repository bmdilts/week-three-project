for (x = 0; x < operations.length; x++){
  if(operations[x] = "x"){
  var answer = operations[x-1] * operations[x+1];
  operations.splice(op_bucket[x - 1], 3, answer);
  }
};
for (x = 0; x < operations.length; x++){
  if(operations[x] = "/"){
  var answer = operations[x-1] / operations[x+1];
  op_bucket.splice(operations[x-1], 3, answer);
  }
};
for (x = 0; x < operations.length; x++){
  if(operations[x] = "+"){
  var answer = operations[x-1] + operations[x+1];
  op_bucket.splice(operations[x-1], 3, answer);
  }
};
for (x = 0; x < operations.length; x++){
  if(operations[x] = "-"){
  var answer = operations[x-1] - operations[x+1];
  op_bucket.splice(operations[x-1], 3, answer);
  }
};



//Maybe not! ->
if(op_bucket[x-1] = "."){
  var answer = (op_bucket[x-3] + . + op_bucket[x-1]) + op_bucket[x+1];
  op_bucket.splice(op_bucket[x-1], 3, answer);
}

//on operator keypress store value in op_bucket

//idea to remove all commas in a string: stringName.replace(/,/g, "");
