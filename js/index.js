const body = document.querySelector("body");
const creatorName = "Avion Cobb"
const today = new Date();
const thisYear = today.getFullYear();

//FOOTER CREATION
const footerElement = document.createElement("footer");
body.appendChild(footerElement);
const footer = document.querySelector("footer");

//COPYRIGHT CREATION
const copyright = document.createElement("p");
copyright.innerHTML = `${creatorName} &copy;${thisYear}`;
copyright.style.color = "white";
copyright.style.fontSize = "1.5rem";
footer.appendChild(copyright);

//SKILLS LIST CREATION
const skillSection = document.getElementById("skills");

//HARD SKILLS
const hardSkillsList = skillSection.querySelector(".hard-skills-list");
const hardSkills = [
    "JavaScript",
    "Python",
    "C++",
    "React.js",
    "Node.js",
    "SQL",
    "Git",
    "AWS",
    "HTML/CSS",
    "DevOps",
    "Agile Methodologies"
];

for (let i = 0; i < hardSkills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = hardSkills[i];
    hardSkillsList.appendChild(skill);
};

// SOFT SKILLS
const softSkillsList = skillSection.querySelector(".soft-skills-list");
const softSkill = [
    "Problem Solving",
    "Teamwork",
    "Project Management",
    "Analytical Skills",
    "Communication",
    "Time Management",
    "Adaptability",
    "Attention to Detail",
    "Conflict Management",
    "Technical Support",
    "Critical Thinking"
];

for (let i = 0; i < softSkill.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = softSkill[i];
    softSkillsList.appendChild(skill);
};