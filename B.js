var battles = 0;
function calculateSecondPart(comandsCount)
{
  let numerator = 0;
  for(let i = 0; i < comandsCount; i++)
  {
    for(let j = i + 1; j < comandsCount; j++)
    {
      numerator += 1;
    }
  }
  battles += numerator;
  return numerator;
}

function calculateFirstPart(comandsCount)
{
  battles += comandsCount / 2;
  return comandsCount / 2;
}

function mainLogicToRecursion(comands)
{
  if(comands % 2 == 0)
  {
    //первый этап
    let count = calculateFirstPart(comands);
    mainLogicToRecursion(count);
  }
  else
  {
    //второй этап
    calculateSecondPart(comands);
  }
  return battles;
}

function solve(N)
{
  let comands = [];
  let numerator = 0;
  for(let i = 2; i < 1500; i++)
  {
    battles = 0;
    if(mainLogicToRecursion(i) == N)
    {
      comands[numerator] = i;
      numerator += 1;
    }
    //mainLogicToRecursion(i)
    //console.log("i - количество команд: " + i + " количество боев: " + battles);

  }
  if(comands.length == 0)
  {
    console.log(-1);
  }
  else
  {
    let result = "";
    for(let i = 0; i < comands.length; i++)
    {
      result += comands[i];
      if(i != comands.length - 1)
      {
        result +=  "\n";
      }
    }
    console.log(result);
  }
  
}
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
rl.on('line', (line) => {
  //const start= new Date().getTime();
  solve(line);
  //const end = new Date().getTime();
  //console.log('SecondWay: ' + (end - start) + ' ms');
  //console.log(process.memoryUsage().heapUsed / 1024 / 1024);
  rl.close();
  return;
}).on('close', () => process.exit(0));