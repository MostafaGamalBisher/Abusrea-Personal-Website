const skillsArray = [
  {
    name: "HTML",
    experience: "2013",
    type: "frontend",
  },
  {
    name: "CSS",
    experience: "2013",
    type: "frontend",
  },
  {
    name: "Javascript",
    experience: "2013",
    type: "frontend",
  },
  {
    name: "React",
    experience: "2016",
    type: "frontend",
  },
  {
    name: "Redux",
    experience: "2017",
    type: "frontend",
  },
  {
    name: "React Testing Library",
    experience: "2020",
    type: "frontend",
  },
  {
    name: "Node.js",
    experience: "2020",
    type: "backend",
  },
  {
    name: "Express.js",
    experience: "2020",
    type: "backend",
  },
  {
    name: "Mongodb",
    experience: "2020",
    type: "backend",
  },
];

const container = document.querySelector(".skills__list");

const wantedSkills = (skills) => {
  container.innerHTML = "";

  const currentYear = new Date().getFullYear();

  skills.forEach((skill, index) => {
    const newSkill = document.createElement("li");

    const skillTitle = document.createElement("h2");
    skillTitle.textContent = skill.name;

    const years = document.createElement("span");
    const startYear = Number(skill.experience);
    years.textContent = `${currentYear - startYear} years`;

    newSkill.append(skillTitle, years);

    container.appendChild(newSkill);

    newSkill.classList.add("skills__item");
    skillTitle.classList.add("skills__title");
    years.classList.add("skills__years");

    requestAnimationFrame(() => {
      setTimeout(() => {
        newSkill.classList.add("show");
      }, index * 70);
    });
  });
};

wantedSkills(skillsArray);

// adding click event ((underline to listElement))

container.addEventListener("click", (event) => {
  const item = event.target.closest(".skills__item");
  if (!item) return;

  document
    .querySelectorAll(".skills__item")
    .forEach((element) => element.classList.remove("underline"));

  item.classList.add("underline");
});

// filter

// const allSkillsButton = document.querySelector(`[data-type="all"]`);
// const frontendSkillsButton = document.querySelector(`[data-type="FrontEnd"]`);
// const backendSkillsButton = document.querySelector(`[data-type="BackEnd"]`);

// const allSkills = skillsArray.filter((skill) => skill.type);
// const frontendSkills = skillsArray.filter((skill) => skill.type === "frontend");
// const backendSkills = skillsArray.filter((skill) => skill.type === "backend");

const skillsButtons = document.querySelectorAll("[data-type]");

skillsButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const skillsType = e.target.dataset.type;

    if (skillsType === "all") {
      wantedSkills(skillsArray);
      return;
    }

    const filteredSkills = skillsArray.filter(
      (skill) => skill.type === skillsType,
    );
    wantedSkills(filteredSkills);
  });
});
