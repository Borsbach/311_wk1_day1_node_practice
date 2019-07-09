const isEven = (num) => {
  if(num % 2 === 0) {
    return true
  }
}

function sum(arr){
  return (arr.length === 0) ? 0 : arr[0] + sum(arr.slice(1));
}

const comboSum = (arr, sum) => {
  
}

module.exports = {
  isEven,
  sum,
  comboSum
}