const mobileMenuOpen = document.querySelector('.mobile-hamburger-btn');
const mobileMenuClose = document.querySelector('.mobile-close-btn');
const projects = [
  {
    name: 'E-commerce-web application',
    technologies: ['React', 'Redux-Saga', 'JavaScript', 'SASS'],
    featuredImage: 'ecommerce.png',
    description:
      'eCommerce web application using React, Redux, Redux-Saga, Firebase and SASS.',
    liveLink: 'https://salinaka-ecommerce.web.app/',
    linkSource: 'https://github.com/Bushido-brown/E-commerce-website',
  },
  {
    name: 'School management system',
    technologies: ['Reactjs', 'nodejs', 'JavaScript', 'jest-test'],
    featuredImage: 'Book-Store.png',
    description:
      'MERN stack app. Streamline school management, class organization, and add students and faculty. Seamlessly track attendance, assess performance, and provide feedback. Access records, view marks, and communicate effortlessly.',
    liveLink: 'https://realschoolmanagementsystem.netlify.app/',
    linkSource: 'https://github.com/Bushido-brown/School-management-system',
  },
  {
    name: 'To-do List',
    technologies: ['HTML5', 'Github', 'JavaScript', 'CSS3', 'Webpack'],
    featuredImage: 'ToDo-List.png',
    description:
      'To-do list is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. A simple website that allows user to create a To-do list.',
    liveLink: 'https://bushido-brown.github.io/To-do-list-list-structure/dist/index.html',
    linkSource: 'https://github.com/Bushido-brown/To-do-list-list-structure',
  },
  {
    name: 'Anambra State Town Hall Meeting',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    featuredImage: 'Town-hall.png',
    description:
      'An online website for a world football global summit conference. Designed by the guidelines provided by the Microverse (Cindy Shin Design).',
    liveLink: 'https://bushido-brown.github.io/Town-hall-meeting/',
    linkSource: 'https://github.com/Bushido-brown/Town-hall-meeting',
  },
  {
    name: 'Financial Metrics',
    technologies: [
      'API',
      'Webpack',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Jest-Test',
      'ES6-JavaScript',
    ],
    featuredImage: 'financial.png',
    description:
      'This is a React project building a mobile web application to check a list of metrics (numeric values) created using React and Redux.',
    liveLink: 'https://rainbow-chimera-f57cdd.netlify.app/',
    linkSource: 'https://github.com/Bushido-brown/financial-metrics',
  },
  {
    name: 'Weather App',
    technologies: ['bootstrap', 'css3', 'JavaScript', 'React', 'API'],
    featuredImage: 'weather.png',
    description:
      'A weather app that pulls from the OpenWeatherMap API to allow users to search for and view the forecast in cities worldwide🌎. Built with JavaScript, HTML, CSS.',
    liveLink: 'https://samirpaulb.github.io/WeatherApp/',
    linkSource: 'https://github.com/Bushido-brown/Weather',
  },
];

mobileMenuOpen.addEventListener('click', () => {
  document.querySelector('.logo').style.display = 'none';
  document.querySelector('.mobile-menu-btn').style.display = 'none';
  document.querySelector('.desktop-nav').style.display = 'flex';
});

mobileMenuClose.addEventListener('click', () => {
  document.querySelector('.logo').style.display = 'block';
  document.querySelector('.mobile-menu-btn').style.display = 'block';
  document.querySelector('.desktop-nav').style.display = 'none';
});

const menuListItems = document.querySelector('.animate');

menuListItems.addEventListener('click', () => {
  document.querySelector('.logo').style.display = 'block';
  document.querySelector('.mobile-menu-btn').style.display = 'block';
  document.querySelector('.desktop-nav').style.display = 'none';
  window.location.reload();
});

// popup modal
// create work cards

function generateWorkCard() {
  projects.forEach((project, index) => {
    let technology = '';
    project.technologies.forEach((tech) => {
      technology += `<li>${tech}</li>`;
    });
    document.querySelector('.work-cards').innerHTML += `
    <div class="card">
      <div class="project-img">
        <img src="./icons/Projects/${project.featuredImage}" alt="project card" />
      </div>
      <div class="card-text">
        <h3>${project.name}</h3>
        <ul class="work-catagories">
                ${technology}
        </ul>
        <button type="button" data-index="${index}" class="btn popup-window">See Project</button>
      </div>
    </div>
    `;
  });
}

generateWorkCard();

// Popup modals.
const popupModals = document.querySelectorAll('.popup-window');
const closeModal = document.querySelector('.close-modal-btn');
function openModal(element) {
  const projectIndex = element.dataset.index;
  document.querySelector('.modal-header').textContent = projects[projectIndex].name;
  document
    .querySelector('.modal-project-image')
    .setAttribute(
      'src',
      `./icons/Projects/${projects[projectIndex].featuredImage}`,
    );
  document
    .querySelector('.modal-project-image')
    .setAttribute('alt', `${projects[projectIndex].name}`);
  document
    .querySelector('.moblie-see-live-btn')
    .setAttribute('href', `${projects[projectIndex].liveLink}`);
  document
    .querySelector('.moblie-see-source-btn')
    .setAttribute('href', `${projects[projectIndex].linkSource}`);
  document
    .querySelector('.desktop-see-live-btn')
    .setAttribute('href', `${projects[projectIndex].liveLink}`);
  document
    .querySelector('.desktop-see-source-btn')
    .setAttribute('href', `${projects[projectIndex].linkSource}`);
  let technology = '';
  projects[projectIndex].technologies.forEach((tech) => {
    technology += `<div class="tag">${tech}</div>`;
  });
  document.querySelector('.project-codekit .tags').innerHTML = technology;
  document.querySelector('.modal-project-description').textContent = projects[projectIndex].description;
  document.querySelector('.modal').style.display = 'flex';
}

popupModals.forEach((modal) => [
  modal.addEventListener('click', () => {
    openModal(modal);
  }),
]);
closeModal.addEventListener('click', () => {
  document.querySelector('.modal').style.display = 'none';
});

// email validate
const form = document.querySelector('#contact-form');
const errorEmail = document.querySelector('#email_error');
function validateEmail(input) {
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  // const emailRegex = /^[a-z_\-0-9.*#$!~%^&-+?|]+@+[a-z\-0-9]+(.com)$/gm;
  return emailRegex.test(input);
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValid = validateEmail(form.elements.email.value);
  // if valid email
  if (!emailValid) {
    // send error
    errorEmail.style.display = 'block';
  } else {
    errorEmail.style.display = 'none';
    form.submit();
    localStorage.removeItem('data');
  }
});

// localStorage
form.addEventListener('keyup', () => {
  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };
  localStorage.setItem('data', JSON.stringify(data));
});

function getData() {
  const data = JSON.parse(localStorage.getItem('data'));

  if (data) {
    document.getElementById('name').value = data.name;
    document.getElementById('email').value = data.email;
    document.getElementById('message').value = data.message;
  }
}
getData();
