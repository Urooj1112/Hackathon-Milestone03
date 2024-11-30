var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
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
// Color Theme
// Function to change the color theme based on the user's selection
(_h = document.getElementById('colorThemeSelect')) === null || _h === void 0 ? void 0 : _h.addEventListener('change', function () {
    var selectedTheme = this.value;
    // Remove any existing theme class from the body
    document.body.classList.remove('blue-theme', 'green-theme', 'black-theme','default-selectedTheme');
    // Apply the selected theme
    if (selectedTheme !== 'default') {
        document.body.classList.add(selectedTheme);
    }
});
// Generate Button code
//get value from input fields (personal information)
var fname = document.querySelector('input[placeholder="Full Name"]').value;
var designation = document.querySelector('input[placeholder="Designation"]').value;
var career_objective = document.querySelector('textarea[placeholder="Career Objective"]').value;
//get value from input fields (contact information)
var Contact = document.querySelector('input[placeholder="Phone Number"]').value;
var email = document.querySelector('input[placeholder="Email"]').value;
var address = document.querySelector('input[placeholder="eg: Karachi "]').value;
var social_link = document.querySelector('input[placeholder="eg: LinkedIn"]').value;
//get value from input fields (education information)
//Query All input fields through specific class name
var educationInputs = document.querySelectorAll('.education .degree, #education.institute');
//Declare an array
var educationData = [];
//number of inputs as I have 3 inputs per field (Degree, Institution, Year)
var numberOfEduInputs = educationInputs.length / 2;
//Store Inputs using loop 
for (var i = 0; i < numberOfEduInputs; i++) {
    //get the inputed value
    var degree = educationInputs[i * 2].value;
    var institute = educationInputs[i * 2 + 1].value;
    //push the inputed value to store in array
    educationData.push({ degree: degree, institute: institute });
}
//get value from input fields (skills information)
//Query All input fields through specific class name
var skillInputs = document.querySelectorAll('.skills ');
//Declare an array
var skillsData = [];
//number of inputs as I have 2 inputs per field (skills and percentage)
var numberOfSkillsInput = skillInputs.length / 1;
//Store inputs using Loop
for (var i = 0; i < numberOfSkillsInput; i++) {
    //Get the inputed value
    var skill = skillInputs[i].value;
    //Push the inputted value to store in array
    skillsData.push();
}
//get value from input fields (experience information)
//Query All input fields through specific class name
var experienceInputs = document.querySelectorAll('.experience .Job-title, experience .company-Name');
//Declare an array
var experienceData = [];
//number of inputs as I have 3 inputs per field (company, jobTitle and experienceYear)
var numberOfExperienceInput = experienceInputs.length / 2;
//Store inputs using Loop
for (var i = 0; i < numberOfExperienceInput; i++) {
    //Get the inputed value
    var company = experienceInputs[i * 2].value;
    var jobTitle = experienceInputs[i * 2 + 1].value;
    //Push the inputted value to store in array
    experienceData.push({ company: company, jobTitle: jobTitle });
}
//get value from input fields (project information)
//Query All input fields through specific class name
var projectInputs = document.querySelectorAll('.project .lang');
//Declare an array
var projectData = [];
//number of inputs as I have 2 inputs per field (project and percentage)
var numberOfprojectInput = experienceInputs.length / 1;
//Store inputs using Loop
for (var i = 0; i < numberOfprojectInput; i++) {
    //Get the inputed value
    var project = (_j = projectInputs[i]) === null || _j === void 0 ? void 0 : _j.value;
    //Push the inputted value to store in array
    projectData.push({ project: project });
}
//get value from input fields (language information)
//Query All input fields through specific class name
var languageInputs = document.querySelectorAll('.language .lang');
//Declare an array
var LanguageData = [];
//number of inputs as I have 2 inputs per field (language and percentage)
var numberOfLanguageInput = experienceInputs.length / 1;
//Store inputs using Loop
for (var i = 0; i < numberOfLanguageInput; i++) {
    //Get the inputed value
    var language = (_k = languageInputs[i]) === null || _k === void 0 ? void 0 : _k.value;
    //Push the inputted value to store in array
    LanguageData.push({ language: language });
}
//generate resume on blank page
var newWindow = window.open();
newWindow === null || newWindow === void 0 ? void 0 : newWindow.document.write("\n        <html>\n            <head>\n                <link rel=\"stylesheet\" href=\"style.css\">\n                <title>Generated Resume</title>\n                <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css\" integrity=\"sha512-9xKTRVabjVeZmc+GUW8GgSmcREDunMM+Dt/GrzchfN8tkwHizc5RP4Ok/MXFFy5rIjJjzhndFScTceq5e6GvVQ==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\n            </head>\n            <body>\n                <div id=\"resume\">\n                    <div class=\"left-side\">\n                        <div class=\"container\">\n                            <div id=\"image-box\"></div>\n                        </div>\n                        <div>\n                            <h2 id=\"heading\">Contact</h2>\n                            <p><span><i class=\"fa-solid fa-phone\"></i></span>".concat(Contact, "</p>\n                            <p><span><i class=\"fa-solid fa-envelope\"></i></span>").concat(email, "</p>\n                            <p><span><i class=\"fa-solid fa-location-dot\"></i></span>").concat(address, "</p>\n                        </div>\n                        <div>\n                            <h2 id=\"heading\">Skills</h2>\n                            ").concat(skillsData.map(function (skill) {
    return ("<p>".concat(skill.skill, "</p>\n                                    <div class=\"progress-container\">\n                                        <div id=\"progress\" style=\"width: ").concat(skill.skillPer, "%\"></div>\n                                    </div>\n                                    "));
}).join(''), "\n                        </div>\n                        <div>\n                            <h2 id=\"heading\">Language</h2>\n                            ").concat(LanguageData.map(function (lang) {
    return ("<p>".concat(lang.language, "</p>\n                    \n                                    "));
}).join(''), "\n                        </div>\n                    </div>\n                    <div class=\"right-side\">\n                        <div id=\"name-container\">\n                            <h1>").concat(fname, "</h1>\n                            <p>").concat(designation, "</p>\n                        </div>\n                        <div>\n                            <h2 id=\"heading\">Profile</h2>\n                            <p>").concat(career_objective, "</p>\n                        </div>\n                        <div>\n                            <h2 id=\"heading\">Education</h2>\n                            ").concat(educationData.map(function (edu) {
    return ("<div id=\"education-section\">\n                                        <div id=\"bullet\"></div>\n                                        <p>".concat(edu.degree, "</p>\n                                        \n                                    </div>\n                                    <p>").concat(edu.institute, "</p> \n                                    "));
}).join(''), "\n                        </div>\n                        <div>\n                            <h2 id=\"heading\">Experience</h2>\n                            ").concat(experienceData.map(function (experience) {
    return ("<p> ".concat(experience.jobTitle, " at ").concat(experience.company, "</p>"));
}), "\n                        </div>\n                    </div>\n                </div>\n            </body>\n        </html>\n    "));
newWindow === null || newWindow === void 0 ? void 0 : newWindow.document.close();
