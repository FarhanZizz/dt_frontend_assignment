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
}

function renderProjectHeader(title) {
  const projectTitleElem = document.getElementById("projectTitle");
  projectTitleElem.textContent = title || "Project Title";
}
