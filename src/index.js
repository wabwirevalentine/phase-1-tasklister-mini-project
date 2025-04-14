document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const taskDescription = document.getElementById(
      "new-task-description"
    ).value;
    console.log("Form submitted with taskDescription:", taskDescription);

    const li = document.createElement("li");
    li.textContent = taskDescription;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      li.remove();
    };

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function () {
      const newDescription = prompt("Edit task description:", taskDescription);
      if (newDescription) {
        li.textContent = newDescription;
        li.appendChild(deleteButton);
        li.appendChild(editButton);
      }
    };

    li.appendChild(deleteButton);
    li.appendChild(editButton);
    taskList.appendChild(li);
  });
});
