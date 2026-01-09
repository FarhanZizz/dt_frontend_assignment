document.addEventListener("DOMContentLoaded", () => {
  if (typeof projectData === "undefined") {
    console.error("projectData is undefined");
    return;
  }

  initializePage(projectData);
});

// Api call
function initializePage(projectData) {
  if (!projectData || !projectData.tasks || !projectData.tasks.length) {
    console.error("Invalid project data");
    return;
  }
  console.log("First Task:", projectData);

  renderProjectHeader(projectData.title);
  renderTaskHeader(projectData.tasks[0]);
}

function renderProjectHeader(title) {
  const projectTitleElem = document.getElementById("projectTitle");
  projectTitleElem.textContent = title || "Project Title";
}

function renderTaskHeader(task) {
  const taskTitle = document.getElementById("taskTitle");
  const taskDescription = document.getElementById("taskDescription");

  taskTitle.textContent = task.task_title || "Task Title";
  taskDescription.textContent = task.task_description || "Task Description";
}
