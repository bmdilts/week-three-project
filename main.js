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
  })
}
document.addEventListener('keypress', function(e){
  if (e.keyCode >= 48 && e.keyCode <= 57){
    bucket += e.key;
    readout.textContent += e.key;
  }
});
for(let i = 0; i < operators.length; i++){
  operators[i].addEventListener("click", function(e){
    if(bucket.length > 0){
    operations.push(Number(bucket));
    }
    bucket = "";
    operations.push(e.target.value);
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
  readout.textContent = operations;
});
clear.addEventListener('click', function(event){
  bucket = "";
  readout.textContent = "";
  operations = []
});
