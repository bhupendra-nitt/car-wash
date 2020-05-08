export const getXAxis = (bills) => {
  return bills.map((element) =>{ return element.date})
};

export const getYAxis = (bills) => {
  return bills.map((ele) =>{ return  ele.amount});
}

export const fetchBillsToBePaid = (list, budget) => {
  const sortedList =  list.sort(compare);
  let newList = [];
  let sum = 0;
  for(let i = 0; i < sortedList.length; i++) {
    if((sum + parseInt(sortedList[i].amount)) <= budget) {
      newList.push(sortedList[i]);
      sum = sum + parseInt(sortedList[i].amount)
    }
  }
  return newList;
}

const compare = (a, b) => {
  let comparison = 0;
  if (a.amount < b.amount) {
    comparison = 1;
  } else if (a.amount > b.amount) {
    comparison = -1;
  }
  return comparison;
}