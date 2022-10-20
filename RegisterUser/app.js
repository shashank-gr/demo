//DOM manupilation:

//selecting elements:

//single element selection:
console.log(document.getElementById("new-form"));
console.log(document.querySelector(".container")); // id '#id_name'  class '.class_name' element 'element_name'

//multiple element selection:
console.log(document.querySelectorAll(".list"));

const ul = document.querySelector(".unordered-list");

console.log(ul);
ul.firstElementChild.innerHTML = "Hello";
ul.firstElementChild.style.color = "green";
ul.children[1].style.backgroundColor = "yellow";
// ul.firstElementChild.textContent = "hello";
// ul.firstElementChild.style.color = "green";
// console.log(ul.children[1].textContent);
// ul.lastElementChild.innerHTML = "<p>I am last child</p>";
// ul.children[1].style.backgroundColor = "red";

const btn = document.querySelector(".btn");
// console.log(btn);
btn.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.style.backgroundColor = "green";
});

//Form Validation

const name = document.querySelector("#userName");
const email = document.querySelector("#email");
const ul = document.querySelector(".unordered-list");
const f = document.querySelector("#new-form");

f.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (name.value == "" || email.value == "") {
    const msg = document.querySelector(".msg");
    msg.classList.add("msg-text");
    msg.innerHTML = "Enter all fields";
    setTimeout(() => {
      msg.remove();
    }, 2000);
  } else {
    const li = document.createElement("li");
    const textNode = document.createTextNode(`${name.value} ${email.value}`);
    li.appendChild(textNode);
    li.classList.add("list");
    ul.appendChild(li);
    name.value = "";
    email.value = "";
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (name.value == "" || email.value == "") {
    const msg = document.querySelector(".msg");
    msg.classList.add("msg-text");
    msg.appendChild(document.createTextNode("Enter the vaulue"));
    setTimeout(() => {
      msg.remove();
    }, 2000);
  } else {
    const li = document.createElement("li");
    li.classList.add("list");
    li.innerHTML = `${name.value} ${email.value}`;
    ul.appendChild(li);
    name.value = "";
    email.value = "";
  }
});

btn.addEventListener("mouseover", (e) => {
  e.preventDefault();
  f.style.backgroundColor = "#888";
});
btn.addEventListener("mouseout", (e) => {
  e.preventDefault();
  f.removeAttribute("style");
});

console.log("hello");
