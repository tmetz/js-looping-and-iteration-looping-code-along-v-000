// Code your solutions in this file
function printBadges(empNames) {
  for (let i = 0; i < empNames.length; i++) {
    console.log(`Welcome ${empNames[i]}! You are employee #${i+1}.`);
  }
  return empNames;
}

function tailsNeverFails() {
  let tails = 0;
  let heads = 0;
  while(heads === 0) {
    if (Math.random() >= 0.5) {
      tails++;
    }
    else {
      heads++;
    }
  }
  return (`You got ${tails} tails in a row!`);
}
