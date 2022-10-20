const todos = [
  { id: 1, task: "submit the report", isdone: true },
  { id: 2, task: "finsish th web dev module in OCt", isdone: false },
  { id: 3, task: "Support MAX", isdone: true },
  { id: 4, task: "go for run", isdone: false },
];

const todosJSON = JSON.stringify(todos);

console.log("JSON object:", todosJSON);
