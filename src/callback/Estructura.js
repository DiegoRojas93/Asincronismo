function sum(num_1, num_2) {
  return num_1 + num_2;
}

function calc(num_1, num_2, callback) {
  return callback(num_1, num_2);
}

console.log(calc(6, 2, sum));

console.log(``);

/* ------------------------------------------------------------ */

function date(callback) {
  console.log(new Date);
  setTimeout(() =>{
    let date = new Date
    callback(date)
  }, 3000)
}

function printDate(dateNow) {
  console.log(dateNow);
}


date(printDate)