function toggleOnMobile(elem) {
  if (window.innerWidth <= 992) {
    const elemVisible = (elem.style.display.length > 0 && elem.style.display !== 'none');
    if (elemVisible) {
      elem.style.display = 'none';
    } else {
      elem.style.display = 'flex';
    }
  }
}

function initPopupCloser() {
  const popupCloser = document.querySelector('.close-popup');
  if (popupCloser) {
    popupCloser.addEventListener('click', (e) => {
      document.querySelector('body').classList.remove('hidden-scrollbar');
      if (window.innerWidth <= 992) {
        e.target.parentElement.remove();
      } else {
        document.querySelector('.desktop-project-popup-wrapper').remove();
      }
      document.querySelector('body').style.overflow = 'auto';
    });
  }
}
function showPopup(recentWorksPopupData) {
  const popupWrapper = document.querySelector('#popup-wrapper');
  if (window.innerWidth <= 992) {
    let popup = `<section class="mobile-project-popup project-popup d-flex flex-cols">
        <img src="images/close-menu.png" class="close-popup" alt="close project preview"title="Close project preview" >
        <img src="${recentWorksPopupData.coverImgMobile}" class="popup-img" alt="Project placeholder">
        <h3 class="section-title-heading">
          ${recentWorksPopupData.title}
        </h3>
        <ul class="project-languages d-flex flex-center">
        `;
    recentWorksPopupData.languagesMobile.forEach((language) => {
      popup += `<li>${language}</li>`;
    });
    popup += `</ul>
        <p class="description">
          ${recentWorksPopupData.description}
        </p>
        <div class="action-btns d-flex">
          <a href="${recentWorksPopupData.liveUrl}" class="action-btn">
            
            See Live
            <img src="images/see-source.png" alt="view live platform">
          </a>
          <a href="${recentWorksPopupData.sourceUrl}" class="action-btn">
            See Source
            <img src="images/Icon-GitHub.png" alt="See source on github">
          </a>
        </div>
      </section>
    `;
    popupWrapper.innerHTML = popup;
  } else {
    let popup = `
      <div class="desktop-project-popup-wrapper">
          <section class="d-flex flex-cols popup-content">
            <span class="close-popup-wrapper close-popup">
              <img src="images/close-desktop-popup.png" alt="close project preview"title="Close project preview">
            </span>
              <img src="${recentWorksPopupData.coverImgDesktop}" class="project-img-desktop" alt="Project placeholder">
              <div class="d-flex title-section">
                <h3 class="section-title-heading">
                  ${recentWorksPopupData.title}
                </h3>
                <div class="action-btns">
                  <a href="${recentWorksPopupData.liveUrl}" class="action-btn">
                    See Live &nbsp;&nbsp;
                    <img src="images/see-source.png" alt="view live platform">
                  </a>
                  ${
                    recentWorksPopupData.sourceUrl == '#' ? 
                    '' : `<a href="${recentWorksPopupData.sourceUrl}" class="action-btn">
                    See Source&nbsp;&nbsp;
                    <img src="images/Icon-GitHub.png" alt="See source on github">
                  </a>`
                  }
                </div>
              </div>

              <ul class="project-languages d-flex">
              `;
    recentWorksPopupData.languagesDesktop.forEach((language) => {
      popup += `<li>${language}</li>`;
    });
    popup += `</ul>
              <p class="description">
              </ul>
              <p class="description">
                ${recentWorksPopupData.description}
              </p>
          </section>
        </div>
    `;
    popupWrapper.innerHTML = popup;
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const navTrigger = document.querySelector('.mobile-nav-trigger');
  const nav = document.querySelector('.desktop-nav-menu');
  const closeNavBtn = document.querySelector('.close-nav');
  const contactMeForm = document.querySelector('#contact-me-form');
  const recentWorksData = [
    {
      coverImg: "images/artapp.png",
      title: "Oga-Dela Arts",
      languages: ["JavaScript", "HTML", "CSS", "Api"],
      coverImgMobile: "images/artapp.png",
      coverImgDesktop: "images/artapp.png",
      languagesMobile: ["JavaScript", "HTML", "CSS", "Api"],
      languagesDesktop: ["JavaScript", "HTML", "CSS", "Api"],
      description:
        "This Oga-Dela Arts Gallery website which displays different Arts and users can like and comment on any art All data is preserved thanks to the external Art Institute of Chicago.",
      liveUrl: "oga-dela-art.netlify.app/",
      sourceUrl: "https://github.com/mandelatuks/ART-JavaScript-Capstone",
    },
    {
      coverImg: "images/budgetapp.png",
      title: "Budget App",
      languages: ["Ruby on rails", "Boostrap", "Postgresql"],
      coverImgMobile: "images/budgetapp.png",
      coverImgDesktop: "images/budgetapp.png",
      languagesMobile: ["Ruby on rails", "Boostrap", "Postgresql"],
      languagesDesktop: ["Ruby on rails", "Boostrap", "Postgresql"],
      description:
        "Money Wallet is a mobile web application that allows you to manage your budget.",
      liveUrl: "https://mighty-plains-68460.herokuapp.com/",
      sourceUrl: "https://github.com/mandelatuks/Budget-app",
    },
    {
      coverImg: "images/doctorsappointments.png",
      title: "Doctor Appoinments App",
      languages: ["Ruby on rails", "css", "React", "Redux"],
      coverImgMobile: "images/doctorsappointments.png",
      coverImgDesktop: "images/doctorsappointments.png",
      languagesMobile: ["Ruby on rails", "css", "React", "Redux"],
      languagesDesktop: ["Ruby on rails", "css", "React", "Redux"],
      description:
        "An application that allows one to book an appointment with a doctor. and it provide the admin user to all the activity of the app",
      liveUrl: "https://doctor-appointment-frontend.netlify.app",
      sourceUrl: "https://github.com/jmoseka/doctor_appointment_frontend",
    },
    {
      coverImg: "images/spacex.png",
      title: "Space Travelers' Booking Hub ",
      languages: ["React", "Redux", "css", "Javasript"],
      coverImgMobile: "images/spacex.png",
      coverImgDesktop: "images/spacex.png",
      languagesMobile: ["React", "Redux", "css", "Javasript"],
      languagesDesktop: ["React", "Redux", "css", "Javasript"],
      description:
        " This application keeps track of the mission and rockets. It also gives users the best user experience.",
      liveUrl: "https://delightful-stardust-098730.netlify.app/",
      sourceUrl: "https://github.com/mandelatuks/space-travelers-hub",
    },
    {
      coverImg: "images/todolist.png",
      title: "To Do List",
      languages: ["css", "JavaScript", "html"],
      coverImgMobile: "images/todolist.png",
      coverImgDesktop: "images/todolist.png",
      languagesMobile: ["css", "JavaScript", "html"],
      languagesDesktop: ["css", "JavaScript", "html"],
      description:
        "This is the do list which can help an individual in their daily life so with this an individual can delete and add a task",
      liveUrl: "https://mandelatuks.github.io/To-do-list-webApps/",
      sourceUrl: "https://github.com/mandelatuks/To-do-list-webApps",
    },
    {
      coverImg: "images/recipeapp.png",
      title: "Recipe App",
      languages: ["Ruby on rails", "Postgresql", "Boostrap"],
      coverImgMobile: "images/recipeapp.png",
      coverImgDesktop: "images/recipeapp.png",
      languagesMobile: ["Ruby on rails", "Postgresql", "Boostrap"],
      languagesDesktop: ["Ruby on rails", "Postgresql", "Boostrap"],
      description:
        "The Recipe app keeps track of all your recipes, ingredients, and inventory.",
      liveUrl: "https://lit-crag-70167.herokuapp.com",
      sourceUrl: "https://github.com/mandelatuks/Recipe-ap",
    },
  ];

  recentWorksData.forEach((project) => {
    let workCard = `
    <section class="card d-flex flex-cols project">
      <img src="${project.coverImg}" class="project-img"  alt="${project.title.replace('<br>', '')}">
      <div class="d-flex description-info">
        <h3 class="project-details center-text self-center">
        ${project.title}
        </h3>
        <ul class="project-languages d-flex flex-center">
          `;
    project.languages.forEach((language) => {
      workCard += `<li>${language}</li>`;
    });
    workCard += `
        </ul>
        <a href="#" class="action-btn self-center view-project">See project</a>
      </div>
    </section>
  `;
    document.querySelector('.projects').innerHTML += workCard;
  });
  const seeProjectTriggers = document.querySelectorAll('.view-project');
  navTrigger.addEventListener('click', () => {
    toggleOnMobile(nav);
  });

  closeNavBtn.addEventListener('click', () => {
    toggleOnMobile(nav);
  });

  nav.querySelectorAll('a').forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
      toggleOnMobile(nav);
    });
  });

  seeProjectTriggers.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('body').classList.add('hidden-scrollbar');
      showPopup(recentWorksData[index]);
      initPopupCloser();
    });
  });
  const form = contactMeForm.elements;
  const formData = {
    name: form.full_name.value,
    email: form.email.value,
    body: form.message.value,
  };
  let savedFormData = localStorage.getItem('formData');
  if (savedFormData) {
    savedFormData = JSON.parse(savedFormData);
    form.full_name.value = savedFormData.name;
    form.email.value = savedFormData.email;
    form.message.value = savedFormData.body;
  }
  Array.from(form).forEach((element) => {
    element.addEventListener('change', () => {
      formData.name = form.full_name.value;
      formData.email = form.email.value;
      formData.body = form.message.value;
      localStorage.setItem('formData', JSON.stringify(formData));
    });
  });

  contactMeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const visitorEmail = contactMeForm.elements.email.value;
    const errorMsgArea = document.querySelector('.error-msg');
    if (visitorEmail === visitorEmail.toLowerCase()) {
      errorMsgArea.style.display = 'block';
      errorMsgArea.style.color = 'green';
      errorMsgArea.innerHTML = 'Form is valid and data has been saved.';
    } else {
      errorMsgArea.style.display = 'block';
      errorMsgArea.innerHTML = 'Invalid email. Your email must be in lowercase.';
      errorMsgArea.style.color = 'rgb(255, 69, 0)';
    }
  });
});