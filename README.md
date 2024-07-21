# Code-Quest
CodeQuest Web App README

web app hosting https://code-quest-xi.vercel.app/


Introduction
Welcome to CodeQuest! This web application is designed to help you manage your learning paths, tasks, journals, goals, and problems/solutions related to coding skills. This README will guide you through setting up and using the CodeQuest web app.

Table of Contents
Project Structure
Installation
Usage
Navigating the App
Managing Skills and Tasks
Creating Learning Paths and Projects
Logging Journals and Notes
Tracking Problems and Solutions
Setting Goals and Deadlines
Examples
Additional Information
Project Structure
The project consists of the following files:

index.html: The main HTML file for the web app.
css/styles.css: The CSS file for styling the web app.
index.js: The JavaScript file containing the app's functionality.
db.json: The JSON file used by json-server to store data.
Installation
To get started with CodeQuest, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/codequest.git
cd codequest
Install json-server:

bash
Copy code
npm install -g json-server
Start json-server:

bash
Copy code
json-server --watch db.json --port 3000
Open index.html in your browser:
Open the index.html file in your preferred web browser to start using the app.

Usage
Navigating the App
The app consists of several sections accessible through the navigation menu at the top:

Home: Overview of the app features.
Skills/Tasks: Manage your skills and tasks.
Journal/Notes: Log your journal entries and notes.
Goals/Deadlines: Set and track your goals.
Problems/Solutions: Record and solve problems.
Learning Paths/Projects: Create and manage your learning paths and projects.
Managing Skills and Tasks
Add a Skill/Task:

Navigate to the "Skills/Tasks" section.
Enter the skill/task name in the input field.
Click "Add Skill/Task" to save it.
View Skills/Tasks:

Click the "Skills/Tasks" button to see a list of your skills and tasks.
Creating Learning Paths and Projects
View Learning Paths/Projects:

Navigate to the "Learning Paths/Projects" section.
Click the "My learning-paths/Projects" button to see your learning paths and projects.
Add a New Learning Path/Project:

Enter the learning path name in the input field.
Click "Add Skill/Task" to add skills/tasks to the learning path.
Click "Create Learning Path/Project" to save it.
Track Progress:

The progress of each learning path is displayed under the learning path list.
Logging Journals and Notes
Add a Journal Entry:

Navigate to the "Journal/Notes" section.
Select a skill/task from the dropdown.
Enter your journal entry in the textarea.
Click "Add Your Entry Log/Notes" to save it.
View Journal Entries:

Click the "My Logs/Notes" button to see a list of your journal entries.
Tracking Problems and Solutions
Add a Problem/Solution:

Navigate to the "Problems/Solutions" section.
Enter the problem title, description, and solution.
Select a skill/task from the dropdown.
Click "Add Problem and Solutions" to save it.
View Problems/Solutions:

Click the "Problems/Solutions" button to see a list of your problems and their solutions.
Setting Goals and Deadlines
Add a Goal:

Navigate to the "Goals/Deadlines" section.
Enter the goal name and deadline.
Select a skill/task from the dropdown.
Click "Add Goal" to save it.
View Goals:

Click the "My Goals/Deadlines" button to see a list of your goals.
Examples
Adding a New Skill
Go to the "Skills/Tasks" section.
Enter "JavaScript Basics" in the input field.
Click "Add Skill/Task".
The skill will be added to your skills list.
Creating a Learning Path
Go to the "Learning Paths/Projects" section.
Enter "Web Development" in the learning path name field.
Click "Add Skill/Task" and enter "HTML".
Click "Add Skill/Task" and enter "CSS".
Click "Create Learning Path/Project".
The learning path will be added to your learning paths list.
Logging a Journal Entry
Go to the "Journal/Notes" section.
Select "JavaScript Basics" from the dropdown.
Enter "Learned about variables and data types" in the textarea.
Click "Add Your Entry Log/Notes".
The journal entry will be added to your logs.
Additional Information
Dark/Light Mode: Toggle between dark and light mode by clicking the "Dark/Light" button in the header.
Data Storage: The data is stored locally using json-server. Make sure json-server is running to save and retrieve data.
For any questions or issues, feel free to contact us at support@codequest.com.

Happy coding with CodeQues
