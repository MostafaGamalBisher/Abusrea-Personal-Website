const removeButton = document.querySelector(`.find-out-link`);
removeButton.remove();

const modifyPicWidth = document.querySelector(`.bio__pic`);
modifyPicWidth.style.width = "36rem";

const modifySkills = (parent, selector1, newText1, selector2, newText2) => {
  const element1 = parent.querySelector(selector1);
  const element2 = parent.querySelector(selector2);
  if (element1) element1.textContent = newText1;
  if (element2) element2.textContent = newText2;
};

const skillsItem = document.querySelectorAll(`.skills__item`);
modifySkills(skillsItem[4], "h2", "Node.js");
modifySkills(skillsItem[5], "h2", "MongoDB", "span", "10 Years");

const listElement = `
          <li class="skills__item">
            <h2 class="skills__title">Typescript</h2>
            <span class="skills__years">2 years</span>
          </li>
`;
document.createRange().createContextualFragment(listElement);

const skillsList = document.querySelectorAll(".skills__item");
skillsList[3].insertAdjacentHTML("beforebegin", listElement);
