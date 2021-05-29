const projectSection = document.querySelector('.projects');

function addProject(projectName) {
  const projectContainer = document.createElement('a');
  const projectTitle = document.createElement('p');
  const projectImage = document.createElement('img');

  projectContainer.classList.add('project-container');

  projectContainer.href = `https://guidugaich.github.io/${projectName}`;
  projectContainer.target = '_blank';

  projectTitle.innerText = projectName;

  projectImage.src = `images/${projectName}.png`;
  projectImage.classList.add('project-image');

  projectContainer.appendChild(projectTitle);
  projectContainer.appendChild(projectImage);

  projectSection.appendChild(projectContainer);
}

addProject('pixel-art');
addProject('todo-list');
addProject('countdown');