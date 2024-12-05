var _a, _b, _c, _d, _e, _f, _g;
(_a = document.getElementById('themeToggle')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    document.querySelectorAll('.Dynamic_Resume').forEach(function (element) {
        element.classList.toggle('dark-mode');
        element.classList.toggle('light-mode');
    });
});
// Add event listener to the "Add Experience" button
(_b = document.getElementById('addExperienceButton')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    // Get the container where new job title and company name inputs will be added
    var experienceContainer = document.getElementById('inputExperienceContainer');
    // Create a new div to hold the job title and company name inputs along with the remove button
    var newExperienceEntry = document.createElement('div');
    newExperienceEntry.classList.add('experience-entry');
    // Create the job title input field
    var newJobTitleHeading = document.createElement('h2');
    newJobTitleHeading.textContent = 'Job Title:';
    var newJobTitle = document.createElement('input');
    newJobTitle.type = 'text';
    newJobTitle.placeholder = 'Job title';
    newJobTitle.classList.add('job-title');
    // Create the company name input field
    var newCompanyNameHeading = document.createElement('h2');
    newCompanyNameHeading.textContent = 'Company Name:';
    var newCompanyName = document.createElement('input');
    newCompanyName.type = 'text';
    newCompanyName.placeholder = 'Company Name';
    newCompanyName.classList.add('company-name');
    // Create the remove button
    var removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = '-';
    removeButton.classList.add('removeButton');
    // Add the remove button functionality
    removeButton.addEventListener('click', function () {
        experienceContainer === null || experienceContainer === void 0 ? void 0 : experienceContainer.removeChild(newExperienceEntry);
    });
    // Append new inputs and the remove button to the newExperienceEntry
    newExperienceEntry.appendChild(newJobTitleHeading);
    newExperienceEntry.appendChild(newJobTitle);
    newExperienceEntry.appendChild(newCompanyNameHeading);
    newExperienceEntry.appendChild(newCompanyName);
    newExperienceEntry.appendChild(removeButton);
    // Append the new entry to the experience container
    experienceContainer === null || experienceContainer === void 0 ? void 0 : experienceContainer.appendChild(newExperienceEntry);
});
// Remove functionality for the first set of inputs
(_c = document.querySelector('.removeButton')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var firstExperienceEntry = document.querySelector('.experience-entry');
    firstExperienceEntry === null || firstExperienceEntry === void 0 ? void 0 : firstExperienceEntry.remove();
});
// Eduaction
// Function to add a new institution and degree input section
function addInstitutionInput() {
    // Get the container where new institution and degree inputs will be added
    var institutionsContainer = document.getElementById('inputInstitutionsContainer');
    // Create a new div to hold the institution name, degree inputs, and the remove button
    var newInstitutionEntry = document.createElement('div');
    newInstitutionEntry.classList.add('education-entry');
    // Create the institution name input field
    var newInstitutionHeading = document.createElement('h2');
    newInstitutionHeading.textContent = 'Institution Name:';
    var newInstitutionInput = document.createElement('input');
    newInstitutionInput.type = 'text';
    newInstitutionInput.placeholder = 'Institution Name';
    newInstitutionInput.classList.add('institution-name');
    // Create the degree input field
    var newDegreeHeading = document.createElement('h2');
    newDegreeHeading.textContent = 'Degree:';
    var newDegreeInput = document.createElement('input');
    newDegreeInput.type = 'text';
    newDegreeInput.placeholder = 'Degree';
    newDegreeInput.classList.add('degree');
    // Create the remove button for the newly added section
    var removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = '-';
    removeButton.classList.add('removeButton');
    // Add the remove button functionality
    removeButton.addEventListener('click', function () {
        institutionsContainer === null || institutionsContainer === void 0 ? void 0 : institutionsContainer.removeChild(newInstitutionEntry);
    });
    // Append the new input fields and remove button to the newInstitutionEntry div
    newInstitutionEntry.appendChild(newInstitutionHeading);
    newInstitutionEntry.appendChild(newInstitutionInput);
    newInstitutionEntry.appendChild(newDegreeHeading);
    newInstitutionEntry.appendChild(newDegreeInput);
    newInstitutionEntry.appendChild(removeButton);
    // Append the new institution entry to the institutions container
    institutionsContainer === null || institutionsContainer === void 0 ? void 0 : institutionsContainer.appendChild(newInstitutionEntry);
}
// Add functionality for the first institution and degree (removal)
(_d = document.querySelector('.removeButton')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
    var firstInstitutionEntry = document.querySelector('.education-entry');
    firstInstitutionEntry === null || firstInstitutionEntry === void 0 ? void 0 : firstInstitutionEntry.remove();
});
// Skills
// Function to add a new skill input field
function addSkillsInput() {
    // Get the container where new skill inputs will be added
    var skillsContainer = document.getElementById('inputSkillsContainer');
    // Create a new div to hold the skill input and the remove button
    var newSkillEntry = document.createElement('div');
    newSkillEntry.classList.add('skill-entry');
    // Create the skill input field
    var newSkillInput = document.createElement('input');
    newSkillInput.type = 'text';
    newSkillInput.placeholder = 'Skill';
    // Create the remove button for the newly added skill input
    var removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = '-';
    removeButton.classList.add('removeButton');
    // Add the remove button functionality
    removeButton.addEventListener('click', function () {
        skillsContainer === null || skillsContainer === void 0 ? void 0 : skillsContainer.removeChild(newSkillEntry);
    });
    // Append the new skill input and the remove button to the newSkillEntry div
    newSkillEntry.appendChild(newSkillInput);
    newSkillEntry.appendChild(removeButton);
    // Append the new skill entry to the skills container
    skillsContainer === null || skillsContainer === void 0 ? void 0 : skillsContainer.appendChild(newSkillEntry);
}
// Optional: Add functionality for the first skill input field to remove it
(_e = document.querySelector('.removeButton')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function () {
    var firstSkillEntry = document.querySelector('.skill-entry');
    firstSkillEntry === null || firstSkillEntry === void 0 ? void 0 : firstSkillEntry.remove();
});
// Projects
// Function to add a new project input field
function addProjectsInput() {
    // Get the container where new project inputs will be added
    var projectsContainer = document.getElementById('inputProjectsContainer');
    // Create a new div to hold the project input and the remove button
    var newProjectEntry = document.createElement('div');
    newProjectEntry.classList.add('project-entry');
    // Create the project input field
    var newProjectInput = document.createElement('input');
    newProjectInput.type = 'text';
    newProjectInput.placeholder = 'Project Name';
    // Create the remove button for the newly added project input
    var removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = '-';
    removeButton.classList.add('removeButton');
    // Add the remove button functionality
    removeButton.addEventListener('click', function () {
        projectsContainer === null || projectsContainer === void 0 ? void 0 : projectsContainer.removeChild(newProjectEntry);
    });
    // Append the new project input and the remove button to the newProjectEntry div
    newProjectEntry.appendChild(newProjectInput);
    newProjectEntry.appendChild(removeButton);
    // Append the new project entry to the project container
    projectsContainer === null || projectsContainer === void 0 ? void 0 : projectsContainer.appendChild(newProjectEntry);
}
// Optional: Add functionality for the first project input field to remove it
(_f = document.querySelector('.removeButton')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function () {
    var firstProjectEntry = document.querySelector('.project-entry');
    firstProjectEntry === null || firstProjectEntry === void 0 ? void 0 : firstProjectEntry.remove();
});
// Language
// Function to add a new language input field
function addLangInput() {
    // Get the container where new language inputs will be added
    var langContainer = document.getElementById('inputLangContainer');
    // Create a new div to hold the language input and the remove button
    var newLangEntry = document.createElement('div');
    newLangEntry.classList.add('lang-entry');
    // Create the language input field
    var newLangInput = document.createElement('input');
    newLangInput.type = 'text';
    newLangInput.placeholder = 'Language';
    // Create the remove button for the newly added language input
    var removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = '-';
    removeButton.classList.add('removeButton');
    // Add the remove button functionality
    removeButton.addEventListener('click', function () {
        langContainer === null || langContainer === void 0 ? void 0 : langContainer.removeChild(newLangEntry);
    });
    // Append the new language input and the remove button to the newLangEntry div
    newLangEntry.appendChild(newLangInput);
    newLangEntry.appendChild(removeButton);
    // Append the new language entry to the language container
    langContainer === null || langContainer === void 0 ? void 0 : langContainer.appendChild(newLangEntry);
}
// Optional: Add functionality for the first language input field to remove it
(_g = document.querySelector('.removeButton')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', function () {
    var firstLangEntry = document.querySelector('.lang-entry');
    firstLangEntry === null || firstLangEntry === void 0 ? void 0 : firstLangEntry.remove();
});
// Generate Button code
function myFunction() {
    //get value from input fields (personal information)
    // Get value from input fields (personal information)
    var fname = document.getElementById("fname").value;
    var designation = document.getElementById('designation').value;
    var contact = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("location").value;
    var socialLink = document.getElementById("socialLink").value;
    var career_objective = document.getElementById('caree_objective').value;
    // Get value from input fields (experience information)
    var experienceInputs = document.querySelectorAll('.experience input');
    var experienceData = [];
    experienceInputs.forEach(function (input, index) {
        if (index % 2 === 0) { // Job Title
            var jobTitle = input.value;
            var company = experienceInputs[index + 1].value; // Company Name
            experienceData.push({ jobTitle: jobTitle, company: company });
        }
    });
    // Get value from input fields (education information)
    var educationInputs = document.querySelectorAll('.education input');
    var educationData = [];
    educationInputs.forEach(function (input, index) {
        if (index % 2 === 0) { // Institution Name
            var institution = input.value;
            var degree = educationInputs[index + 1].value; // Degree
            educationData.push({ degree: degree, institution: institution });
        }
    });
    // Get value from input fields (skills information)
    var skillInputs = document.querySelectorAll('.skills input');
    var skillsData = [];
    skillInputs.forEach(function (input) {
        var skill = input.value;
        skillsData.push({ skill: skill, skillPer: 0 }); // Assuming skill percentage is not provided
    });
    // Get value from input fields (project information)
    var projectInputs = document.querySelectorAll('.project input');
    var projectData = [];
    projectInputs.forEach(function (input) {
        var project = input.value;
        projectData.push({ project: project });
    });
    // Get value from input fields (language information)
    var languageInputs = document.querySelectorAll('.language input');
    var languageData = [];
    languageInputs.forEach(function (input) {
        var language = input.value;
        languageData.push({ language: language });
    });
    //generate resume on blank page
    var newWindow = window.open();
    newWindow === null || newWindow === void 0 ? void 0 : newWindow.document.write("\n        <html>\n            <head>\n                <link rel=\"stylesheet\" href=\"style.css\">\n                <title>Generated Resume</title>\n                <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css\" integrity=\"sha512-9xKTRVabjVeZmc+GUW8GgSmcREDunMM+Dt/GrzchfN8tkwHizc5RP4Ok/MXFFy5rIjJjzhndFScTceq5e6GvVQ==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\n            <style>\n.page {\n    background-color: #e6d4c8;\n    width: 90%; /* Adjusted width for smaller devices */\n    max-width: 1200px; /* Ensures it doesn't exceed this on larger screens */\n    margin: auto;\n    padding-left: 50px;\n    padding-right: 10px;\n    padding-bottom: 20px; \n    box-sizing: border-box; /* Includes padding and border in width */\n    overflow-x: hidden; /* Prevent horizontal scrolling */\n}\n \n/* Flexbox container for layout */\n.container {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    gap: 20px;\n    width: 100%; /* Prevent overflow */\n    box-sizing: border-box;\n    \n}\n\n.left {\n    background-color: #f3eeeb;\n  \n}\n\n.line {\n    height: 2px;\n    width: 200px;\n    background-color: #88653d;\n    margin:5px;\n}\n\n#contact {\n    margin-top: 20px;\n    padding:10px;\n  \n}\n\n#contact h4 {\n    color: #88653d;\n    text-align:left;\n    margin:10px;\n    \n}\n\n.fa-solid {\n    color: #88653d;\n    font-size: 1.25em;\n    margin-right: 0.25em;\n}\n\n.fa-brands,\n.fab {\n    color: #88653d;\n    font-size: 1.25em;\n    margin-right: 0.25em;\n}\n\n#contact p {\n    font-size: 1em;\n    color: #000000;\n}\n\n#skills {\n      margin-top:20px;\n    padding:10px;\n}\n\n#skills h4 {\n    color: #88653d;\n    text-align:left;\n    margin:10px;\n}\nul {\n    padding-left: 30px;\n    padding-right: 10px;\n    margin: 10px;\n    font-size: 1.1em;\n}\n\nli {\n    padding: 0;\n    color: #030303;\n}\n#language {\n    margin-top:20px;\n    padding:10px;\n}\n\n#language h4{\n  color: #88653d;\n    text-align:left;\n    margin:10px;\n}\n.lang{\n    color: black;\n}\n\n.right {\n    background-color:#e6d4c8;\n     \n}\n\n.profile h1 {\n    padding-top: 30px;\n    font-size: 50px;\n    color: #88653d;\n    text-align: center;\n    font-family: Comic;\n}\n.profile h3 {\n    color: #88653d;\n    font-size: 23px;\n    text-align: center;\n    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;\n    padding-top: 10px;\n}\n.heading {\n    padding: 10px;\n}\n.heading p {\n    margin-left: 40px;\n    font-weight: 15px;\n    margin-right: 20px;\n    font-size: 15px;\n    overflow-wrap: break-word; /* Ensures that words break to fit the container */\n    white-space: normal; /* Allows text to wrap to the next line */\n    word-wrap: break-word; /* Ensures long words or URLs are wrapped */\n    word-break: break-word; /* Helps long unbreakable strings to be wrapped */\n}\n.box {\n    height: 35px;\n    width: 90%;\n    background-color: #88653d;\n    margin-left: 20px;\n    margin-right: 20px;\n    padding:10px;\n }\n.box ul{\n    padding-left: 30px;\n    padding-right: 10px;\n    margin: 10px;\n    font-size: 1.1em;\n}\n.box li {\n    padding: 0;\n    }\n.box h4 {\n    color: white;\n     margin:auto;\n    padding:10px;\n}\np {\n   margin:10px;\n}\n/* Responsive Design */\n\n/* For screens smaller than 768px */\n@media (max-width: 768px) {\n    .container {\n        grid-template-columns: 1fr; /* Single-column layout */\n        gap: 10px;\n    }\n\n    .left, .right {\n        padding: 10px;\n    }\n\n    .profile h1 {\n        font-size: 30px;\n    }\n\n    .profile h3 {\n        font-size: 20px;\n    }\n\n    #contact p, ul, li {\n        font-size: 15px;\n    }\n\n    .line {\n        width: 90%;\n    }\n\n    #contact, #skills, #language {\n        margin-top: 15px;\n    }\n}\n\n/* For screens smaller than 480px */\n@media (max-width: 480px) {\n    .container {\n        padding: 5px;\n    }\n\n    .profile h1 {\n        font-size: 25px;\n    }\n\n    .profile h3 {\n        font-size: 20px;\n    }\n\n    #contact p, ul, li {\n        font-size: 12px;\n        margin-left:15px;\n    }\n\n    .line {\n        width: 80px;\n    }\n\n    #contact, #skills, #language {\n        margin-top: 10px;\n    }\n\n    .heading .box h4 {\n        font-size: 15px;\n        padding: 8px;\n    }\n}\n        </style>\n                </head>\n            <body>\n            <div class=\"page\">\n            <div class=\"container\">\n                    <div class=\"left\">\n                    <br>\n                    <br>\n               <section id=\"contact\">\n                <h4>CONTACT</h4>\n                   <div class=\"line\"></div>\n                        <div>\n                            <p ><span><i class=\"fa-solid fa-phone\"></i></span >".concat(contact, "</p>\n                            <p ><span><i class=\"fa-solid fa-envelope\"></i></span >").concat(email, "</p>\n                            <p ><span><i class=\"fa-solid fa-location-dot\"></i></span >").concat(address, "</p>\n                               <p ><span><i class=\"fa-brands fa-linkedin\"></i></span > ").concat(address, "</p>\n                        </div>\n                     </section>                        \n                        <section id=\"skills\">\n                    <h4>SKILLS</h4>\n                    <div class=\"line\"></div>\n                        <div >\n                            ").concat(skillsData.map(function (skill) {
        return ("<ul><li >".concat(skill.skill, "</li></ul>\n                                    <div class=\"progress-container\">\n                                        <div id=\"progress\" style=\"width: ").concat(skill.skillPer, "%\"></div>\n                                    </div>\n                                    "));
    }).join(''), "\n                        </div>\n                        <div>\n  </section>                       \n<section id=\"language\">\n                    <h4>LANGUAGE</h4>\n                    <div class=\"line\"></div>\n                    <div class=\"lang\" >\n                            ").concat(languageData.map(function (lang) {
        return ("<ul><li >".concat(lang.language, "</li></ul>                                "));
    }).join(''), "\n                        </div>             \n                     </section>\n                     </div>  \n                    <div class=\"right-side\">\n                       <div class=\"profile\">\n                    <h1 >").concat(fname, "</h1>\n                    <h3 >").concat(designation, "</h3>\n                </div>\n                 <section class=\"heading\">\n                    <div class=\"box\">\n                        <h4>CAREER OBJECTIVE</h4>\n                    </div>\n                    <p >").concat(career_objective, "</p>\n                </section>\n                      <section class=\"heading\">\n                    <div class=\"box\">\n                        <h4>EXPERIENCE</h4>\n                    </div>\n                    ").concat(experienceData.map(function (experience) {
        return ("<ul ><li > ".concat(experience.company, " at ").concat(experience.jobTitle, "</li></ul>"));
    }).join(''), "\n     </section>\n                <section class=\"heading\">\n                    <div class=\"box\">\n                        <h4>EDUCATION</h4>\n                    </div>\n                     ").concat(educationData.map(function (edu) {
        return ("<div id=\"education-section\" >\n                                        <div id=\"bullet\" ></div>\n                                        <ul><li >".concat(edu.institution, "</li> </ul> \n                                        <p >").concat(edu.degree, "</p>\n                                        \n                                    </div>\n                                  \n                                    "));
    }).join(''), "\n\n\n     <section class=\"heading\">\n                    <div class=\"box\">\n                        <h4>PROJECT</h4>\n                    </div>\n                    <div >\n  ").concat(projectData.map(function (project) {
        return ("<ul><li >".concat(project.project, "</li></ul>\n                    \n                                    "));
    }).join(''), "\n</div>\n </section>\n              </div>\n                </div>\n                </div>\n                \n            </body>\n        </html>\n    "));
    newWindow === null || newWindow === void 0 ? void 0 : newWindow.document.close();
}
