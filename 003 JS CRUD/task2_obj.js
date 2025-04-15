/* My task 2 - implement crud in js
add task-> store in the object -> store that obj in localstorage
*/
const form = document.querySelector("form");
const inputTask = document.querySelector("#task");
const listTask = document.querySelector(".list-task");

const tableHeading = document.querySelector("#taskTable");

//object which stores tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskText = inputTask.value.trim();
  if (taskText === "") return;

  const task = {
    id: Date.now(),
    text: taskText,
  };
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  console.log("task saved: ", tasks);
  inputTask.value = "";
  displayTasks();
});

function displayTasks() {
  if (tasks.length == 0) {
    tableHeading.style.display = "none";
  } else {
    tableHeading.style.display = "block";
  }
  listTask.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("tr");
    li.innerHTML = `
        <tr>
            <td>${index + 1}</td>
            <td class="td-text">${task.text}</td>
            <td>${new Date(task.id).toLocaleString()}</td>
            <td><button class="btn-edit">Edit</button></td>
            <td><button class="btn-delete">Delete</button></td>
        </tr>`;
    listTask.appendChild(li);

    //Delete operations
    const deleteBtn = li.querySelector(".btn-delete");
    deleteBtn.addEventListener("click", (e) => {
      tasks = tasks.filter((item) => item.id !== task.id);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      li.remove();
      console.log("element removed", task);

      displayTasks();
    });
    //Edit operations

    const editBtn = li.querySelector(".btn-edit");
    const editText = li.querySelector(".td-text");
    editBtn.addEventListener("click", () => {
      console.log("Inside Edit event listener");
      if (editBtn.innerText === "Edit") {
        const input = document.createElement("input");
        input.type = "text";
        input.value = editText.innerText;

        editText.replaceWith(input);
        editBtn.innerText = "Save";
      } else {
        const updateText = li.querySelector("input").value.trim();
        if (updateText === "") return;

        editText.innerText = updateText;
        li.querySelector("input").replaceWith(editText);

        const taskToUpdate = tasks.find((item) => item.id === task.id);
        if (taskToUpdate) {
          taskToUpdate.text = updateText;
        }
        localStorage.setItem("tasks", JSON.stringify(tasks));
        editBtn.innerText = "Edit";
      }
    });
  });
}

displayTasks();
