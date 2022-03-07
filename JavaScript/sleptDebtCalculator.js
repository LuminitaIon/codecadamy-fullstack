const getSleepHours = day => {
  if(day === 'luni') {
    return 8;
  }
  if(day === 'marti') {
    return 9;
  }
  if(day === 'miercuri') {
    return 8;
  }
  if(day === 'joi') {
    return 9;
  }
  if(day === 'vineri') {
    return 8;
  }
  if(day === 'sambata') {
    return 10;
  }
  if(day === 'duminica') {
    return 7;
  }
}
// console.log(getSleepHours('joi'));
const getActualSleepHours = () => {
  return getSleepHours('luni') + getSleepHours('marti') + getSleepHours('miercuri') + getSleepHours('joi') + getSleepHours('vineri') + getSleepHours('sambata') + getSleepHours('duminica');
}
// console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}
// console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('perfect sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`too much sleep with ${actualSleepHours - idealSleepHours} hours`);
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`too little sleep with ${idealSleepHours - actualSleepHours}`);
  }
}

calculateSleepDebt();