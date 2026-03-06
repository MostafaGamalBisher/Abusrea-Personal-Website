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
const currentYear = new Date().getFullYear();

skillsArray.forEach((skill) => {
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
});

// adding click event ((underline to listElement))

container.addEventListener("click", (e) => {
  const item = e.target.closest(".skills__item");
  if (!item) return;

  document
    .querySelectorAll(".skills__item")
    .forEach((el) => el.classList.remove("underline"));

  item.classList.add("underline");
});
