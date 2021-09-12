//Need to delete repeated elements
function createUniqueArray(sortedArr) {
  let result = [];

  for (let str of sortedArr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

//Need to create format: 3-6
function unionNearElemens(uniqueArr)
{
  let formatedArr = [];
  let numerator = 0;
  let endNum = -1;
  let startNum = uniqueArr[0];
  for(let i = 0; i < uniqueArr.length; i++)
  {
    if(uniqueArr[i] == (uniqueArr[i+1]-1))
    {
      endNum = uniqueArr[i+1];
    }
    else
    {
      if(endNum != -1)
      {
        formatedArr[numerator] = startNum + '-' + endNum;
        numerator += 1;
        endNum = -1;
      }
      else
      {
        formatedArr[numerator] = uniqueArr[i];
        numerator+=1;
      }
      startNum = uniqueArr[i+1];
    }
  }
  return formatedArr;
}

//Need to convert array to string
function formatArrayToString(arr)
{
  let str = "";
  for(let i = 0; i < arr.length; i++)
  {
    str += arr[i];
      if(i != arr.length-1)
    {
      str += ',';
    }
  }
  return str;
}

//main logic
function solve(inputString)
{
  var arr = inputString.split(',');
  arr.sort(function(a, b){return a-b});
  var uniqueArray = createUniqueArray(arr);
  var finishArray = unionNearElemens(uniqueArray);
  var formatedString = formatArrayToString(finishArray);
  console.log(formatedString);
  return formatedString;
}

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
rl.on('line', (line) => {
  solve(line);
  rl.close();
  return;
}).on('close', () => process.exit(0));
