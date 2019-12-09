export const stableSort = (array, cmp) => {
  const stableArray = array.map((el, index) => [el, index]);
  stableArray.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stableArray.map(el => el[0]);
};

export const desc = (a, b, orderBy) => {
  let val1 = a[orderBy];
  let val2 = b[orderBy];
  if (typeof val1 === 'string' || typeof val2 === 'string') {
    val1 = val1.toLowerCase();
    val2 = val2.toLowerCase();

    if (orderBy.toLowerCase().includes('date')) {
      val1 = new Date(val1);
      val2 = new Date(val2);
    }
  }
  if (val2 > val1) return -1;
  if (val1 > val2) return 1;
  return 0;
};

export const getSorting = (order, orderBy) => {
  return order[orderBy] === 'desc'
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
};

export const isEmptyObject = obj =>
  Object.entries(obj).length === 0 && obj.constructor === Object;
