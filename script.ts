const toggleSkillsButton = document.getElementById('toggle-skills')!;
const skillsSection = document.querySelector('.skills ul') as HTMLElement;

toggleSkillsButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleSkillsButton.textContent = 'Hide Skills';
    } else {
        skillsSection.style.display = 'none';
        toggleSkillsButton.textContent = 'Show Skills';
    }
});
const toggleWorkExperienceButton = document.getElementById('toggle-work-experience')!;
const workExperienceSection = document.querySelector('.work-experience ul') as HTMLElement;

toggleWorkExperienceButton.addEventListener('click', () => {
    if (workExperienceSection.style.display === 'none') {
        workExperienceSection.style.display = 'block';
        toggleWorkExperienceButton.textContent = 'Hide Work Experience';
    } else {
        workExperienceSection.style.display = 'none';
        toggleWorkExperienceButton.textContent = 'Show Work Experience';
    }
});

