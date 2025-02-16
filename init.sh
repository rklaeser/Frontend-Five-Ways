#Create the repo directory 

# Create folders for each approach      
mkdir mpa-vanilla ajax-vanilla react mobx-react lit-mobx backend

# Initialize README for repo
echo "# Update Number Demo" > README.md
echo "This repository demonstrates updating a number using different front-end approaches." >> README.md

echo "## Implementations" >> README.md
echo "- **mpa-vanilla/** - Multi-Page Application (MPA) approach with full page reloads" >> README.md
echo "- **ajax-vanilla/** - Fetch/XHR-based update without reloading" >> README.md
echo "- **react/** - React app using useState for updates" >> README.md
echo "- **mobx-react/** - React with MobX state management" >> README.md
echo "- **lit-mobx/** - Lit with MobX for reactivity" >> README.md
echo "- **backend/** - Simple Node.js Express API for handling number updates" >> README.md

# Create README for each implementation
echo "# MPA Implementation
Simple HTML page with form submission to update number." > mpa-vanilla/README.md
echo "# AJAX Implementation
Vanilla JavaScript using Fetch API for updating number dynamically." > ajax-vanilla/README.md
echo "# React Implementation
Basic React component with useState." > react/README.md
echo "# MobX + React Implementation
Uses MobX store for number updates in React." > mobx-react/README.md
echo "# Lit + MobX Implementation
Web component using Lit and MobX." > lit-mobx/README.md
echo "# Backend API Implementation
Simple Express server handling number storage and updates." > backend/README.md

# Add placeholder files for each implementation
echo "<!DOCTYPE html>
<html>
<head><title>MPA Example</title></head>
<body>
    <p>Current Number: 0</p>
    <form action=\"#\" method=\"POST\">
        <button type=\"submit\">Increase</button>
    </form>
</body>
</html>" > mpa-vanilla/index.html

echo "console.log('AJAX placeholder');" > ajax-vanilla/index.js
echo "console.log('React placeholder');" > react/index.jsx
echo "console.log('MobX React placeholder');" > mobx-react/index.jsx
echo "console.log('Lit MobX placeholder');" > lit-mobx/index.js

# Set up React project
cd react
npm create vite@latest . --template react
npm install
cd ..

# Set up MobX + React project
cd mobx-react
npm create vite@latest . --template react
npm install mobx mobx-react-lite
cd ..

# Set up Lit + MobX project
cd lit-mobx
npm init -y
npm install lit mobx mobx-lit-element
cd ..

# Set up backend API
cd backend
npm init -y
npm install express cors

echo "const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let number = 0;

app.get('/number', (req, res) => {
    res.json({ number });
});

app.post('/update', (req, res) => {
    number += 1;
    res.json({ number });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(\"Backend running at http://localhost:\" + PORT);
});" > backend/index.js

cd ..

# Initialize Git repository
git init
git add .
git commit -m "Initial commit for Update Number Repo"

echo "Enter your GitHub repository URL (e.g., https://github.com/username/update-number-demo.git):"
read GITHUB_REPO

git branch -M main
git remote add origin "$GITHUB_REPO"
git push -u origin main


echo "Project structure created."

