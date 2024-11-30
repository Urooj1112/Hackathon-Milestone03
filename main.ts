document.getElementById('themeToggle')?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    document.querySelectorAll('.Dynamic_Resume').forEach(element => {
        element.classList.toggle('dark-mode');
        element.classList.toggle('light-mode');
    });
});

// Add event listener to the "Add Experience" button
document.getElementById('addExperienceButton')?.addEventListener('click', function () {
    // Get the container where new job title and company name inputs will be added
    const experienceContainer = document.getElementById('inputExperienceContainer');

    // Create a new div to hold the job title and company name inputs along with the remove button
    const newExperienceEntry = document.createElement('div');
    newExperienceEntry.classList.add('experience-entry');

    // Create the job title input field
    const newJobTitleHeading = document.createElement('h2');
    newJobTitleHeading.textContent = 'Job Title:';
    const newJobTitle = document.createElement('input');
    newJobTitle.type = 'text';
    newJobTitle.placeholder = 'Job title';
    newJobTitle.classList.add('job-title');

    // Create the company name input field
    const newCompanyNameHeading = document.createElement('h2');
    newCompanyNameHeading.textContent = 'Company Name:';
    const newCompanyName = document.createElement('input');
    newCompanyName.type = 'text';
    newCompanyName.placeholder = 'Company Name';
    newCompanyName.classList.add('company-name');

    // Create the remove button
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = '-';
    removeButton.classList.add('removeButton');

    // Add the remove button functionality
    removeButton.addEventListener('click', function () {
        experienceContainer?.removeChild(newExperienceEntry);
    });

    // Append new inputs and the remove button to the newExperienceEntry
    newExperienceEntry.appendChild(newJobTitleHeading);
    newExperienceEntry.appendChild(newJobTitle);
    newExperienceEntry.appendChild(newCompanyNameHeading);
    newExperienceEntry.appendChild(newCompanyName);
    newExperienceEntry.appendChild(removeButton);

    // Append the new entry to the experience container
    experienceContainer?.appendChild(newExperienceEntry);
});

// Remove functionality for the first set of inputs
document.querySelector('.removeButton')?.addEventListener('click', function () {
    const firstExperienceEntry = document.querySelector('.experience-entry');
    firstExperienceEntry?.remove();
});


// Eduaction

// Function to add a new institution and degree input section
function addInstitutionInput() {
    // Get the container where new institution and degree inputs will be added
    const institutionsContainer = document.getElementById('inputInstitutionsContainer');

    // Create a new div to hold the institution name, degree inputs, and the remove button
    const newInstitutionEntry = document.createElement('div');
    newInstitutionEntry.classList.add('education-entry');

    // Create the institution name input field
    const newInstitutionHeading = document.createElement('h2');
    newInstitutionHeading.textContent = 'Institution Name:';
    const newInstitutionInput = document.createElement('input');
    newInstitutionInput.type = 'text';
    newInstitutionInput.placeholder = 'Institution Name';
    newInstitutionInput.classList.add('institution-name');

    // Create the degree input field
    const newDegreeHeading = document.createElement('h2');
    newDegreeHeading.textContent = 'Degree:';
    const newDegreeInput = document.createElement('input');
    newDegreeInput.type = 'text';
    newDegreeInput.placeholder = 'Degree';
    newDegreeInput.classList.add('degree');

    // Create the remove button for the newly added section
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = '-';
    removeButton.classList.add('removeButton');

    // Add the remove button functionality
    removeButton.addEventListener('click', function () {
        institutionsContainer?.removeChild(newInstitutionEntry);
    });

    // Append the new input fields and remove button to the newInstitutionEntry div
    newInstitutionEntry.appendChild(newInstitutionHeading);
    newInstitutionEntry.appendChild(newInstitutionInput);
    newInstitutionEntry.appendChild(newDegreeHeading);
    newInstitutionEntry.appendChild(newDegreeInput);
    newInstitutionEntry.appendChild(removeButton);

    // Append the new institution entry to the institutions container
    institutionsContainer?.appendChild(newInstitutionEntry);
}

// Add functionality for the first institution and degree (removal)
document.querySelector('.removeButton')?.addEventListener('click', function () {
    const firstInstitutionEntry = document.querySelector('.education-entry');
    firstInstitutionEntry?.remove();
});

// Skills
// Function to add a new skill input field
function addSkillsInput(){
    // Get the container where new skill inputs will be added
    const skillsContainer = document.getElementById('inputSkillsContainer');

    // Create a new div to hold the skill input and the remove button
    const newSkillEntry = document.createElement('div');
    newSkillEntry.classList.add('skill-entry');

    // Create the skill input field
    const newSkillInput = document.createElement('input');
    newSkillInput.type = 'text';
    newSkillInput.placeholder = 'Skill';

    // Create the remove button for the newly added skill input
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = '-';
    removeButton.classList.add('removeButton');

    // Add the remove button functionality
    removeButton.addEventListener('click', function () {
        skillsContainer?.removeChild(newSkillEntry);
    });

    // Append the new skill input and the remove button to the newSkillEntry div
    newSkillEntry.appendChild(newSkillInput);
    newSkillEntry.appendChild(removeButton);

    // Append the new skill entry to the skills container
    skillsContainer?.appendChild(newSkillEntry);
}

// Optional: Add functionality for the first skill input field to remove it
document.querySelector('.removeButton')?.addEventListener('click', function () {
    const firstSkillEntry = document.querySelector('.skill-entry');
    firstSkillEntry?.remove();
});
// Projects
// Function to add a new project input field
function addProjectsInput() {
    // Get the container where new project inputs will be added
    const projectsContainer = document.getElementById('inputProjectsContainer');

    // Create a new div to hold the project input and the remove button
    const newProjectEntry = document.createElement('div');
    newProjectEntry.classList.add('project-entry');

    // Create the project input field
    const newProjectInput = document.createElement('input');
    newProjectInput.type = 'text';
    newProjectInput.placeholder = 'Project Name';

    // Create the remove button for the newly added project input
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = '-';
    removeButton.classList.add('removeButton');

    // Add the remove button functionality
    removeButton.addEventListener('click', function () {
        projectsContainer?.removeChild(newProjectEntry);
    });

    // Append the new project input and the remove button to the newProjectEntry div
    newProjectEntry.appendChild(newProjectInput);
    newProjectEntry.appendChild(removeButton);

    // Append the new project entry to the project container
    projectsContainer?.appendChild(newProjectEntry);
}

// Optional: Add functionality for the first project input field to remove it
document.querySelector('.removeButton')?.addEventListener('click', function () {
    const firstProjectEntry = document.querySelector('.project-entry');
    firstProjectEntry?.remove();
});


// Language
// Function to add a new language input field
function addLangInput() {
    // Get the container where new language inputs will be added
    const langContainer = document.getElementById('inputLangContainer');

    // Create a new div to hold the language input and the remove button
    const newLangEntry = document.createElement('div');
    newLangEntry.classList.add('lang-entry');

    // Create the language input field
    const newLangInput = document.createElement('input');
    newLangInput.type = 'text';
    newLangInput.placeholder = 'Language';

    // Create the remove button for the newly added language input
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = '-';
    removeButton.classList.add('removeButton');

    // Add the remove button functionality
    removeButton.addEventListener('click', function () {
        langContainer?.removeChild(newLangEntry);
    });

    // Append the new language input and the remove button to the newLangEntry div
    newLangEntry.appendChild(newLangInput);
    newLangEntry.appendChild(removeButton);

    // Append the new language entry to the language container
    langContainer?.appendChild(newLangEntry);
}

// Optional: Add functionality for the first language input field to remove it
document.querySelector('.removeButton')?.addEventListener('click', function () {
    const firstLangEntry = document.querySelector('.lang-entry');
    firstLangEntry?.remove();
});

// Color Theme
// Function to change the color theme based on the user's selection
document.getElementById('colorThemeSelect')?.addEventListener('change', function () {
    const selectedTheme = (this as HTMLSelectElement).value;
    // Remove any existing theme class from the body
    document.body.classList.remove('blue-theme', 'green-theme', 'red-theme');

    // Apply the selected theme
    if (selectedTheme !== 'default') {
        document.body.classList.add(selectedTheme);
    }
});

// Generate Button code

//get value from input fields (personal information)
const fname = (document.querySelector('input[placeholder="Full Name"]') as HTMLInputElement).value;
const designation = (document.querySelector('input[placeholder="Designation"]') as HTMLInputElement).value;
const career_objective = (document.querySelector('textarea[placeholder="Career Objective"]') as HTMLTextAreaElement).value;

//get value from input fields (contact information)
const Contact = (document.querySelector('input[placeholder="Phone Number"]') as HTMLInputElement).value;
const email = (document.querySelector('input[placeholder="Email"]') as HTMLInputElement).value;
const address = (document.querySelector('input[placeholder="eg: Karachi "]') as HTMLInputElement).value;
const social_link = (document.querySelector('input[placeholder="eg: LinkedIn"]') as HTMLInputElement).value;
//get value from input fields (education information)
//Query All input fields through specific class name
const educationInputs = document.querySelectorAll('.education .degree, #education.institute');
//Type interface
interface Education {
    degree: string;
    institute: string;
}
//Declare an array
const educationData: Education[] = [];
//number of inputs as I have 3 inputs per field (Degree, Institution, Year)
const numberOfEduInputs = educationInputs.length / 2;

//Store Inputs using loop 
for (let i = 0; i < numberOfEduInputs; i++) {
    //get the inputed value
    const degree = (educationInputs[i * 2] as HTMLInputElement).value;
    const institute = (educationInputs[i * 2 + 1] as HTMLInputElement).value;

    //push the inputed value to store in array
    educationData.push({ degree, institute });
}

//get value from input fields (skills information)
//Query All input fields through specific class name
const skillInputs = document.querySelectorAll('.skills ');
//Type Interface
interface Skill {
    skill: string;
    skillPer: number
}

//Declare an array
const skillsData: Skill[] = [];
//number of inputs as I have 2 inputs per field (skills and percentage)
const numberOfSkillsInput = skillInputs.length / 1;

//Store inputs using Loop
for (let i = 0; i < numberOfSkillsInput; i++) {
    //Get the inputed value
    const skill = (skillInputs[i] as HTMLInputElement).value;

    //Push the inputted value to store in array
    skillsData.push()
}

//get value from input fields (experience information)
//Query All input fields through specific class name
const experienceInputs = document.querySelectorAll('.experience .Job-title, experience .company-Name');
//Type Interface
interface Experience {
    company: string;
    jobTitle: string;
}

//Declare an array
const experienceData: Experience[] = [];
//number of inputs as I have 3 inputs per field (company, jobTitle and experienceYear)
const numberOfExperienceInput = experienceInputs.length / 2;

//Store inputs using Loop
for (let i = 0; i < numberOfExperienceInput; i++) {
    //Get the inputed value
    const company = (experienceInputs[i * 2] as HTMLInputElement).value;
    const jobTitle = (experienceInputs[i * 2 + 1] as HTMLInputElement).value;


    //Push the inputted value to store in array
    experienceData.push({ company, jobTitle });
}

//get value from input fields (project information)
//Query All input fields through specific class name
const projectInputs = document.querySelectorAll('.project .lang');
//Type Interface
interface project {
    project: string;
}

//Declare an array
const projectData: project[] = [];
//number of inputs as I have 2 inputs per field (project and percentage)
const numberOfprojectInput = experienceInputs.length / 1;

//Store inputs using Loop
for (let i = 0; i < numberOfprojectInput; i++) {
    //Get the inputed value
    const project = (projectInputs[i] as HTMLInputElement)?.value;


    //Push the inputted value to store in array
    projectData.push({ project });
}





//get value from input fields (language information)
//Query All input fields through specific class name
const languageInputs = document.querySelectorAll('.language .lang');
//Type Interface
interface Language {
    language: string;
}

//Declare an array
const LanguageData: Language[] = [];
//number of inputs as I have 2 inputs per field (language and percentage)
const numberOfLanguageInput = experienceInputs.length / 1;

//Store inputs using Loop
for (let i = 0; i < numberOfLanguageInput; i++) {
    //Get the inputed value
    const language = (languageInputs[i] as HTMLInputElement)?.value;


    //Push the inputted value to store in array
    LanguageData.push({ language });
}

//generate resume on blank page
const newWindow = window.open();
newWindow?.document.write(`
        <html>
            <head>
                <link rel="stylesheet" href="style.css">
                <title>Generated Resume</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css" integrity="sha512-9xKTRVabjVeZmc+GUW8GgSmcREDunMM+Dt/GrzchfN8tkwHizc5RP4Ok/MXFFy5rIjJjzhndFScTceq5e6GvVQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </head>
            <body>
                <div id="resume">
                    <div class="left-side">
                        <div class="container">
                            <div id="image-box"></div>
                        </div>
                        <div>
                            <h2 id="heading">Contact</h2>
                            <p><span><i class="fa-solid fa-phone"></i></span>${Contact}</p>
                            <p><span><i class="fa-solid fa-envelope"></i></span>${email}</p>
                            <p><span><i class="fa-solid fa-location-dot"></i></span>${address}</p>
                        </div>
                        <div>
                            <h2 id="heading">Skills</h2>
                            ${skillsData.map(skill => {
    return (
        `<p>${skill.skill}</p>
                                    <div class="progress-container">
                                        <div id="progress" style="width: ${skill.skillPer}%"></div>
                                    </div>
                                    `
    );
}).join('')}
                        </div>
                        <div>
                            <h2 id="heading">Language</h2>
                            ${LanguageData.map(lang => {
    return (
        `<p>${lang.language}</p>
                    
                                    `
    );
}).join('')}
                        </div>
                    </div>
                    <div class="right-side">
                        <div id="name-container">
                            <h1>${fname}</h1>
                            <p>${designation}</p>
                        </div>
                        <div>
                            <h2 id="heading">Profile</h2>
                            <p>${career_objective}</p>
                        </div>
                        <div>
                            <h2 id="heading">Education</h2>
                            ${educationData.map(edu => {
    return (
        `<div id="education-section">
                                        <div id="bullet"></div>
                                        <p>${edu.degree}</p>
                                        
                                    </div>
                                    <p>${edu.institute}</p> 
                                    `
    );
}).join('')}
                        </div>
                        <div>
                            <h2 id="heading">Experience</h2>
                            ${experienceData.map(experience => {
    return (
        `<p> ${experience.jobTitle} at ${experience.company}</p>`
    );
})}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `);

newWindow?.document.close()