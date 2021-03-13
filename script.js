const projectSection = document.querySelector('.projects');

function addProject(projectName) {
  const projectDiv = document.createElement('div');
  const projectImage = document.createElement('img');
  const pageLink = document.createElement('a');

  projectDiv.classList.add('project-div');
  
  projectImage.src = `images/${projectName}.png`;
  projectImage.classList.add('project-image');

  pageLink.innerText = projectName;
  pageLink.href = `https://guidugaich.github.io/${projectName}`;
  pageLink.target = '_blank';

  projectDiv.appendChild(pageLink);
  projectDiv.appendChild(projectImage);

  projectSection.appendChild(projectDiv);
}

addProject('pixel-art');
addProject('todo-list');