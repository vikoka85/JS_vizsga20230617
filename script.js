function checkName() {
    var nameInput = document.getElementById("nameInput").value;
    var data = [1, 2, 3, 'Mark', 'Joshua', 'Allen', "Biagio",{ helper: 'Julie', age: 31 }, "NAME"];
    var helper = "";

    for (var i = 0; i < data.length; i++) {
        if (typeof data[i] === 'object' && data[i].hasOwnProperty('helper')) {
          helper = data[i].helper;
          break;
        }
      }
  
      if (data.includes(nameInput)) {
        showResult("Registered member", helper);
      } else {
        showResult("Not registered member", helper);
      }
    }
    
    function showResult(message, helper) {
      var result = document.getElementById("result");
      var helperMessage = helper ? "You can turn to " + helper + " for help." : "";
      result.innerHTML = message + "<br>" + helperMessage;
    }


// 2. feladat

const numbers = [5, 10, 15, 20, 25];

function findNumberAndIncrement(number) {
  const foundNumber = numbers.find(num => num === number);
  
  if (foundNumber) {
    return foundNumber + 1;
  }
  
  return null; 
}

const userInput = 15;
const result = findNumberAndIncrement(userInput);

console.log(result);

