let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let arr2 = Array.from(arr);
arr2[0][1] = 12;

let arr3 = JSON.parse(JSON.stringify(arr));
arr3[0][1] = 15;

let test = {
  operators: [
    {
      id: 'equals',
      name: 'Equals',
    },
    {
      id: 'notEquals',
      name: 'Not Equals',
    },
    {
      id: 'notEquals',
      name: 'Not Equals',
    },
    {
      id: 'hello',
      name: 'HELLO',
    },
  ],
};

/* test = {
  ...test,
  operators: test.operators.map((ele) => {
    ele['ID'] = ele['id'];
    return ele;
  }),
}; */

test = {
  ...test,
  operators: test.operators.reduce((accumulator, currentValue) => {
    if (currentValue.id in accumulator) {
      accumulator[currentValue.id] += 1;
    } else {
      accumulator[currentValue.id] = 1;
    }
    return accumulator;
  }, {}),
};

console.log(test.operators);
