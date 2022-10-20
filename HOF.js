const todos = [
  { id: 1, task: "submit the report", isdone: true },
  { id: 2, task: "finsish th web dev module in OCt", isdone: false },
  { id: 3, task: "Support MAX", isdone: true },
  { id: 4, task: "go for run", isdone: false },
];

//Higher order functions: forEach, map. filter, reduce
todos.forEach((ele) => {
  // modify the orignal array
  ele.isdone = true;
});

console.log(todos);

const taskList = todos.map((ele) => {
  // to modify each element based on condition
  return ele.task;
});

console.log(taskList);

const completedTask = todos.filter((ele) => {
  // return only the elements which statisify the condition
  return ele.isdone;
});
console.log(completedTask);

//combining 2 or more HOF:

const taskDone = todos
  .filter((ele) => {
    return ele.isdone;
  })
  .map((ele) => {
    return ele.task;
  });

console.log(taskDone);
