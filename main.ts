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
function addSkillsInput() {
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
// Generate Button code

function myFunction() {

    //get value from input fields (personal information)
    // Get value from input fields (personal information)
    const fname = (document.getElementById("fname") as HTMLInputElement).value;
    const designation = (document.getElementById('designation') as HTMLInputElement).value;
    const contact = (document.getElementById("phoneNumber") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const address = (document.getElementById("location") as HTMLInputElement).value;
    const socialLink = (document.getElementById("socialLink") as HTMLInputElement).value;
    const career_objective = (document.getElementById('caree_objective') as HTMLTextAreaElement).value;


    // Get value from input fields (experience information)
    const experienceInputs = document.querySelectorAll('.experience input');
    const experienceData: any = [];
    experienceInputs.forEach((input, index) => {
        if (index % 2 === 0) { // Job Title
            const jobTitle = (input as HTMLInputElement).value;
            const company = (experienceInputs[index + 1] as HTMLInputElement).value; // Company Name
            experienceData.push({ jobTitle, company });
        }
    });

    // Get value from input fields (education information)
    const educationInputs = document.querySelectorAll('.education input');
    const educationData: any = [];
    educationInputs.forEach((input, index) => {
        if (index % 2 === 0) { // Institution Name
            const institution = (input as HTMLInputElement).value;
            const degree = (educationInputs[index + 1] as HTMLInputElement).value; // Degree
            educationData.push({ degree, institution });
        }
    });

    // Get value from input fields (skills information)
    const skillInputs = document.querySelectorAll('.skills input');
    const skillsData: any = [];
    skillInputs.forEach((input) => {
        const skill = (input as HTMLInputElement).value;
        skillsData.push({ skill, skillPer: 0 }); // Assuming skill percentage is not provided
    });

    // Get value from input fields (project information)
    const projectInputs = document.querySelectorAll('.project input');
    const projectData: any = [];
    projectInputs.forEach((input) => {
        const project = (input as HTMLInputElement).value;
        projectData.push({ project });
    });

    // Get value from input fields (language information)
    const languageInputs = document.querySelectorAll('.language input');
    const languageData: any = [];
    languageInputs.forEach((input) => {
        const language = (input as HTMLInputElement).value;
        languageData.push({ language });
    });

    //generate resume on blank page
    const newWindow = window.open();
    newWindow?.document.write(`
        <html>
            <head>
                <link rel="stylesheet" href="style.css">
                <title>Generated Resume</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css" integrity="sha512-9xKTRVabjVeZmc+GUW8GgSmcREDunMM+Dt/GrzchfN8tkwHizc5RP4Ok/MXFFy5rIjJjzhndFScTceq5e6GvVQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <style>
.page {
    background-color: #e6d4c8;
    width: 90%; /* Adjusted width for smaller devices */
    max-width: 1200px; /* Ensures it doesn't exceed this on larger screens */
    margin: auto;
    padding-left: 50px;
    padding-right: 10px;
    padding-bottom: 20px; 
    box-sizing: border-box; /* Includes padding and border in width */
    overflow-x: hidden; /* Prevent horizontal scrolling */
}
 
/* Flexbox container for layout */
.container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
    width: 100%; /* Prevent overflow */
    box-sizing: border-box;
    
}

.left {
    background-color: #f3eeeb;
  
}

.line {
    height: 2px;
    width: 200px;
    background-color: #88653d;
    margin:5px;
}

#contact {
    margin-top: 20px;
    padding:10px;
  
}

#contact h4 {
    color: #88653d;
    text-align:left;
    margin:10px;
    
}

.fa-solid {
    color: #88653d;
    font-size: 1.25em;
    margin-right: 0.25em;
}

.fa-brands,
.fab {
    color: #88653d;
    font-size: 1.25em;
    margin-right: 0.25em;
}

#contact p {
    font-size: 1em;
    color: #000000;
}

#skills {
      margin-top:20px;
    padding:10px;
}

#skills h4 {
    color: #88653d;
    text-align:left;
    margin:10px;
}
ul {
    padding-left: 30px;
    padding-right: 10px;
    margin: 10px;
    font-size: 1.1em;
}

li {
    padding: 0;
    color: #030303;
}
#language {
    margin-top:20px;
    padding:10px;
}

#language h4{
  color: #88653d;
    text-align:left;
    margin:10px;
}
.lang{
    color: black;
}

.right {
    background-color:#e6d4c8;
     
}

.profile h1 {
    padding-top: 30px;
    font-size: 50px;
    color: #88653d;
    text-align: center;
    font-family: Comic;
}
.profile h3 {
    color: #88653d;
    font-size: 23px;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
    padding-top: 10px;
}
.heading {
    padding: 10px;
}
.heading p {
    margin-left: 40px;
    font-weight: 15px;
    margin-right: 20px;
    font-size: 15px;
    overflow-wrap: break-word; /* Ensures that words break to fit the container */
    white-space: normal; /* Allows text to wrap to the next line */
    word-wrap: break-word; /* Ensures long words or URLs are wrapped */
    word-break: break-word; /* Helps long unbreakable strings to be wrapped */
}
.box {
    height: 35px;
    width: 90%;
    background-color: #88653d;
    margin-left: 20px;
    margin-right: 20px;
    padding:10px;
 }
.box ul{
    padding-left: 30px;
    padding-right: 10px;
    margin: 10px;
    font-size: 1.1em;
}
.box li {
    padding: 0;
    }
.box h4 {
    color: white;
     margin:auto;
    padding:10px;
}
p {
   margin:10px;
}
/* Responsive Design */

/* For screens smaller than 768px */
@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr; /* Single-column layout */
        gap: 10px;
    }

    .left, .right {
        padding: 10px;
    }

    .profile h1 {
        font-size: 30px;
    }

    .profile h3 {
        font-size: 20px;
    }

    #contact p, ul, li {
        font-size: 15px;
    }

    .line {
        width: 90%;
    }

    #contact, #skills, #language {
        margin-top: 15px;
    }
}

/* For screens smaller than 480px */
@media (max-width: 480px) {
    .container {
        padding: 5px;
    }

    .profile h1 {
        font-size: 25px;
    }

    .profile h3 {
        font-size: 20px;
    }

    #contact p, ul, li {
        font-size: 12px;
        margin-left:15px;
    }

    .line {
        width: 80px;
    }

    #contact, #skills, #language {
        margin-top: 10px;
    }

    .heading .box h4 {
        font-size: 15px;
        padding: 8px;
    }
}
        </style>
                </head>
            <body>
            <div class="page">
            <div class="container">
                    <div class="left">
                    <br>
                    <br>
               <section id="contact">
                <h4>CONTACT</h4>
                   <div class="line"></div>
                        <div>
                            <p ><span><i class="fa-solid fa-phone"></i></span >${contact}</p>
                            <p ><span><i class="fa-solid fa-envelope"></i></span >${email}</p>
                            <p ><span><i class="fa-solid fa-location-dot"></i></span >${address}</p>
                               <p ><span><i class="fa-brands fa-linkedin"></i></span > ${address}</p>
                        </div>
                     </section>                        
                        <section id="skills">
                    <h4>SKILLS</h4>
                    <div class="line"></div>
                        <div >
                            ${skillsData.map(skill => {
        return (
            `<ul><li >${skill.skill}</li></ul>
                                    <div class="progress-container">
                                        <div id="progress" style="width: ${skill.skillPer}%"></div>
                                    </div>
                                    `
        );
    }).join('')}
                        </div>
                        <div>
  </section>                       
<section id="language">
                    <h4>LANGUAGE</h4>
                    <div class="line"></div>
                    <div class="lang" >
                            ${languageData.map(lang => {
        return (
            `<ul><li >${lang.language}</li></ul>                                `
        );
    }).join('')}
                        </div>             
                     </section>
                     </div>  
                    <div class="right-side">
                       <div class="profile">
                    <h1 >${fname}</h1>
                    <h3 >${designation}</h3>
                </div>
                 <section class="heading">
                    <div class="box">
                        <h4>CAREER OBJECTIVE</h4>
                    </div>
                    <p >${career_objective}</p>
                </section>
                      <section class="heading">
                    <div class="box">
                        <h4>EXPERIENCE</h4>
                    </div>
                    ${experienceData.map(experience => {
        return (
            `<ul ><li > ${experience.company} at ${experience.jobTitle}</li></ul>`
        );
    }).join('')}
     </section>
                <section class="heading">
                    <div class="box">
                        <h4>EDUCATION</h4>
                    </div>
                     ${educationData.map(edu => {
        return (
            `<div id="education-section" >
                                        <div id="bullet" ></div>
                                        <ul><li >${edu.institution}</li> </ul> 
                                        <p >${edu.degree}</p>
                                        
                                    </div>
                                  
                                    `
        );
    }).join('')}


     <section class="heading">
                    <div class="box">
                        <h4>PROJECT</h4>
                    </div>
                    <div >
  ${projectData.map(project => {
        return (
            `<ul><li >${project.project}</li></ul>
                    
                                    `
        );
    }).join('')}
</div>
 </section>
              </div>
                </div>
                </div>
                
            </body>
        </html>
    `);

    newWindow?.document.close()

}