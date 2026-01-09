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
  console.log("First Task:", projectData.tasks[0].assets);

  renderProjectHeader(projectData.title);
  renderTaskHeader(projectData.tasks[0]);
  //   renderAssetGrid(projectData.tasks[0].assets);
  createAssetContainter(projectData.tasks[0].assets);
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

function createAssetContainter(assets) {
  const assetContainer = document.getElementById("assetGrid");
  assetContainer.innerHTML = "";

  assets.forEach((asset) => {
    const assetDiv = document.createElement("div");
    assetDiv.id = asset.asset_id;
    assetDiv.className = "asset-card";
    assetDiv.innerHTML = `
      <div class="asset-header">
        <h1>${asset.asset_title || "Asset Title"}</h1>
        <img src="assets/asset-info.svg" alt="Asset Info" />
      </div>
        <p class="asset-description">
        <span>Description:</span>
        
        ${asset.asset_description || "Asset Description"}</p>
      ${(() => {
        const type = (asset.asset_content_type || "").trim().toLowerCase();
        const content = asset.asset_content ? asset.asset_content.trim() : "";

        switch (type) {
          case "video":
            return (
              '<div class="asset-media"><iframe src="' +
              content +
              '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
            );

          case "threadbuilder":
            return `
              <div class="asset-threadbuilder">
                <div class="threadbuilder-header">
                <img src="assets/collapse-icon.svg" alt="Collapse Icon" />
                  <h1>Thread A </h1>
                </div>
                <div class="threadbuilder-grid">
                <div class="sub-thread">
                  <div class="thread-title">Sub thread 1</div>
                   <textarea placeholder="Enter Text here"></textarea>
                </div>
                <div class="sub-thread">
                  <h1 class="thread-title">Sub Interpretation 1</h1>
                   <textarea placeholder="Enter Text here"></textarea>
                </div>
                <div class="thread-icons">
                <img src="assets/thread-icons.svg" alt="Icon" />
                </div>
                <div class="thread-selector">
                <select>
                  <option value="Select Categ">Select Categ</option>
                </select>
                <select>
                  <option value="Select Proces">Select Proces</option>
                </select>
                </div>
                </div>
                <div class="thread-footer">
                <button class="subBtn">+ Sub-Thread</button>
                <div class="sub-thread">
                  <h1 class="thread-title">Summary for Thread A</h1>
                   <textarea placeholder="Enter Text here"></textarea>
                </div>
                </div>
              </div>
            `;

          case "article":
            return content
              ? `
              <div class="explore-section">
          <div class="explore-section-header">
            <img src="assets/collapse-icon.svg" alt="Collapse Icon" />
            <span class="section-title">Introduction</span>
          </div>

          <p class="section-content">
            The 4SA Method , How to bring a idea into progress ?
          </p>

          <div class="see-more">See More</div>
        </div>

        <div class="explore-section">
          <div class="explore-section-header">
            <img src="assets/collapse-icon.svg" alt="Collapse Icon" />
            <span class="section-title">Thread A</span>
          </div>

          <p class="section-content">
            How are you going to develop your stratergy ?
            Which method are you going to use to develop a stratergy ?
            What if the project is lengthy?
          </p>

          <div class="see-more">See More</div>
        </div>

        <div class="explore-subsection">
          <div class="subsection-title">Example 1</div>
          <p class="section-content" id="example1">
            You have a concept , How will you put into progress?
          </p>
        </div>
              `
              : `<div class="asset-article">
                    <div class="article-divider"></div>

                    <div class="article-body">
                      <label class="article-label">Title</label>
                      <input type="text" class="article-input" placeholder="" />

                      <label class="article-label">Content</label>

                      <div class="editor-toolbar">
                        <span>File</span>
                        <span>Edit</span>
                        <span>View</span>
                        <span>Insert</span>
                        <span>Format</span>
                        <span>Tools</span>
                        <span>Table</span>
                        <span>Help</span>
                      </div>
                    </div>
                  </div>`;

          default:
            return "";
        }
      })()}
    `;
    assetContainer.appendChild(assetDiv);
  });
}
