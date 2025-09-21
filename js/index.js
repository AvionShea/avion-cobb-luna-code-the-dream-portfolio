const body = document.body;
// Create copyright name
const creatorName = "Avion Cobb"
// Create a new Date object
const today = new Date();
// Create current year
const thisYear = today.getFullYear();

//---------------FOOTER CREATION---------------
// Create new footer element
const footerElement = document.createElement("footer");

// Append footer to the body
body.appendChild(footerElement);
const footer = document.querySelector("footer");

//-------------COPYRIGHT CREATION---------------
//Create new copyright paragraph element
const copyright = document.createElement("p");

//Added Creator Name, Copyright symbol, and Current Year to HTML
copyright.innerHTML = `${"Copyright"} &copy;${thisYear} ${creatorName}`;
// Changed copyright text to white
copyright.style.color = "white";
// Changed copyright text size
copyright.style.fontSize = "1.5rem";
// Added copyright info to footer element
footer.appendChild(copyright);

//--------------SKILLS LIST CREATION-------------
// Grabbed skills section from HTML
const skillSection = document.getElementById("skills");

//--------HARD SKILLS----------
// Grabbed hard skills UL from HTML
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

//For loop to create li for each element in hardSkills array and place in HTML
for (let i = 0; i < hardSkills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = hardSkills[i];
    hardSkillsList.appendChild(skill);
};

// ---------SOFT SKILLS------------
// Grabbed soft skills UL from HTML
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

//For loop to create li for each element in softSkills array and place in HTML
for (let i = 0; i < softSkill.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = softSkill[i];
    softSkillsList.appendChild(skill);
};