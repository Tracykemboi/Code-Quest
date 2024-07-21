// Event Listener for dark/light mode toggle
 document.getElementById("toggle-mode").addEventListener('click',function toggleDarkMode() {
    document.body.classList.toggle('dark-mode')  
   })
   loadSkills()
// enable skill list to be loaded when the skills button is clicked
document.getElementById('my-skills').addEventListener('click',loadSkills) 
function loadSkills() {
    fetch('http://localhost:3000/skills')
        .then(response => response.json())
        .then(data => {
            const skillList = document.getElementById('skill-list');
            const skillSelect = document.getElementById('problem-skill');
            const journalSkillSelect=document.getElementById('journal-skill')
            const goalsSkillSelect=document.getElementById('goal-skill')
            data.forEach(skill => {
                skillList.innerHTML += `<p>${skill.name}</p>`
                skillSelect.innerHTML += `<option value="${skill.name}">${skill.name}</option>`
                journalSkillSelect.innerHTML+=`<option value="${skill.name}">${skill.name}</option>`
                goalsSkillSelect.innerHTML+=`<option value="${skill.name}">${skill.name}</option>`
            });
       
        });
} 

 // Event Listener for skill form submission
 document.getElementById('skill-form').addEventListener('submit', addSkill)
// function to update the skill list to db.json
 function addSkill(event) {
    event.preventDefault();
    const skillName = document.getElementById('skill-name').value;
    const newSkill = {
        name: skillName
    }
    fetch('http://localhost:3000/skills', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newSkill)
    })
    .then(response => response.json())
    .then(skill => {
        loadSkills(); // Reload skills to include the new one and update
        document.getElementById('skill-form').reset();
    });
} 
// // function to load learning path
loadLearningPaths()
// document.getElementById('learning-paths').addEventListener('clicks',loadLearningPaths)
function loadLearningPaths() {
    fetch('http://localhost:3000/learningPaths')
        .then(response => response.json())
        .then(paths => {
            const learningPathList = document.getElementById('learning-path-list');
            paths.forEach(path => {
                let pathHtml = `<h3>${path.name}</h3>`;
                path.skills.forEach((skill, index) => {
                    pathHtml+= 
                        `
                        <p>
                            <input type="checkbox" id="path-${path.id}-skill-${index}" ${skill.completed ? 'checked' : ''}>
                            <label for="path-${path.id}-skill-${index}">${skill.name}</label>
                        </p>
                        `;
                });
                learningPathList.innerHTML += pathHtml;

                path.skills.forEach((skill, index) => {
                    document.getElementById(`path-${path.id}-skill-${index}`).addEventListener('change', () => {
                        skill.completed = !skill.completed;
                        updateLearningPathSkill(path.id, path.skills);
                    });
                });
            });
        });
}
function updateLearningPathSkill(pathId, skills) {
    fetch(`http://localhost:3000/learningPaths/${pathId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ skills })
    })
    .then(response => response.json())
    .then(updatedPath => {
        calculateLearningPathProgress(updatedPath.skills);
    });
}

function calculateLearningPathProgress(skills) {
    const totalSkills = skills.length;
    const completedSkills = skills.filter(skill => skill.completed).length;
    const progress = (completedSkills / totalSkills) * 100;
    document.getElementById('learning-path-progress').innerText = `Learning Path Progress: ${progress.toFixed(2)}%`;
}

  // Event Listener for adding skills to learning path
  document.getElementById('add-skill-btn').addEventListener('click', addSkillInput);

function addSkillInput() {
      const skillsInputs = document.getElementById('skills-inputs');
      const newSkillInput = document.createElement('div');
      newSkillInput.innerHTML = `
          <input type="text" class="path-skill" placeholder="Skill Name" required>
          <button type="button" class="remove-skill-btn">Remove</button>
      `;
      skillsInputs.appendChild(newSkillInput);
  
      // Add event listener to remove skill button
      newSkillInput.querySelector('.remove-skill-btn').addEventListener('click', () => {
          newSkillInput.remove();
      });
  }

   // Event Listener for learning path form submission
    
document.getElementById('learning-path-form').addEventListener('submit', addLearningPath);

function addLearningPath(event) {
    event.preventDefault();
    const pathName = document.getElementById('path-name').value;
    const skillElements = document.querySelectorAll('.path-skill');
    const skills = Array.from(skillElements).map(skillElement => ({
        name: skillElement.value,
        completed: false
    }));

    const newPath = {
        name: pathName,
        skills: skills
    };

    fetch('http://localhost:3000/learningPaths', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPath)
    })
    .then(response => response.json())
    .then(path => {
        document.getElementById('learning-path-form').reset();
        document.getElementById('skills-inputs').innerHTML = '';
        loadLearningPaths(); // Reload learning paths to include the new one
    });
}

// add event listener to my notes button
document.getElementById('my-journal').addEventListener('click',loadJournal)

function loadJournal() {
    fetch('http://localhost:3000/journal')
        .then(response => response.json())
        .then(data => {
            displayJournalEntries(data);
        });
}

function displayJournalEntries(entries) {
    const journalList = document.getElementById('Journal-list');
    entries.forEach(entry => {
        journalList.innerHTML += `<p> Date ;${entry.date} <br> Skill ;${entry.skill}<br>Notes/log ;${entry.entry}</p>`
    });
}
document.getElementById('journal-form').addEventListener('submit', addJournalEntry)
function addJournalEntry(event) {
    event.preventDefault();
    const journalEntry = document.getElementById('journal-entry').value;
    const journalSkill=document.getElementById('journal-skill').value

    const newEntry = {
        entry: journalEntry,
        date: new Date().toISOString().split('T')[0],
        skill:journalSkill
    };
    fetch('http://localhost:3000/journal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEntry)
    })
    .then(response => response.json())
    .then(entry => {
        loadJournal(); // Reload journal entries to include the new one
        document.getElementById('journal-form').reset();
    });
}

// load problems and their solutions when the problem/solutions button is clicked.
document.getElementById('my-problems').addEventListener('click',loadProblems)

function loadProblems() {
    fetch('http://localhost:3000/problems')
        .then(response => response.json())
        .then(data => {
            const problemList = document.getElementById('problem-list');
            problemList.innerHTML = '';
            data.forEach(problem => {
               
                const problemHtml = `
                    <p>
                        <strong>${problem.title}</strong> (${problem.skill}): ${problem.description}<br>
                        Solution: ${problem.solution}
                    </p>`;
                problemList.innerHTML += problemHtml;
            });
        });
}

    // Event listener for problem collection form submit
    document.getElementById('problembtn').addEventListener('click',addProblem)

    function addProblem(event) {
    event.preventDefault();
    const problemTitle = document.getElementById('problem-title').value;
    const problemDescription = document.getElementById('problem-description').value;
    const problemSolution = document.getElementById('problem-solution').value;
    const problemSkill = document.getElementById('problem-skill').value;

    const newProblem = {
        title: problemTitle,
        description: problemDescription,
        solution: problemSolution,
        skill: problemSkill
    };

    fetch('http://localhost:3000/problems', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProblem)
    })
    .then(response => response.json())
    .then(problem => {
        loadProblems(); // Reload problems to include the new one
        document.getElementById('problem-form').reset();
    });
}
// eventlistener added to my goals button to load goals
document.getElementById('my-goal').addEventListener('click',loadGoals)
function loadGoals() {
    fetch('http://localhost:3000/goals')
        .then(response => response.json())
        .then(data => {
            const goalList = document.getElementById('goal-list');
            data.forEach(goal => {
                goalList.innerHTML += `<p>${goal.skill} : ${goal.name} <br> (Deadline: ${goal.deadline})</p>`
            });
        });
}  
document.getElementById('addgoalbtn').addEventListener('click',addGoal)
function addGoal(event) {
    event.preventDefault();
    const goalName = document.getElementById('goal-name').value;
    const goalDeadline = new Date(document.getElementById('goal-deadline').value).toISOString().split('T')[0];
    const goalSkill=document.getElementById('goal-skill').value

    const newGoal = {
        name: goalName,
        deadline: goalDeadline,
        skill:goalSkill
    };

    fetch('http://localhost:3000/goals', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newGoal)
    })
    .then(response => response.json())
    .then(goal => {
        loadGoals(); // Reload goals to include the new one
        document.getElementById('goal-form').reset()
    })
}