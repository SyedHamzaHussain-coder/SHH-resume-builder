// Get the toggle button and skills section
var toggleSkillsButton = document.getElementById('toggle-skills');
var skillsSection = document.querySelector('.skills ul');
// Add event listener to toggle the visibility of skills
toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleSkillsButton.textContent = 'Hide Skills';
    }
    else {
        skillsSection.style.display = 'none';
        toggleSkillsButton.textContent = 'Show Skills';
    }
});
// Get the toggle button and work experience section
var toggleWorkExperienceButton = document.getElementById('toggle-work-experience');
var workExperienceSection = document.querySelector('.work-experience ul');
// Add event listener to toggle the visibility of work experience
toggleWorkExperienceButton.addEventListener('click', function () {
    if (workExperienceSection.style.display === 'none') {
        workExperienceSection.style.display = 'block';
        toggleWorkExperienceButton.textContent = 'Hide Work Experience';
    }
    else {
        workExperienceSection.style.display = 'none';
        toggleWorkExperienceButton.textContent = 'Show Work Experience';
    }
});
