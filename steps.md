# Project
npm create vite@latest
cd vite-project
npm i
npm run dev

npm i -D eslint-plugin-react eslint-plugin-react-hooks
npm i vite-plugin-svgr


# React
npm i react-router-dom@6
npm i @tanstack/react-query

npm i redux react-redux redux-logger
npm i reselect
npm i redux-persist
npm i redux-thunk


# extra
npm i sass
npm i styled-components
npm i firebase
npm i vite-plugin-svgr


# Github
## per-device
git config --global push.autoSetupRemote true
git config --global user.name "FadyAmir223"
git config --global user.email "fadyamir223@gmail.com"
passowrd: christover23

ssh-keygen -t rsa -b 4096 -C "fadyamir223@gmail.com"
cat ~/.ssh/id_rsa.pub | clip

curl -u "<github-username>" --data "{\"title\":\"My SSH Key\",\"key\":\"<ssh-key>\"}" https://api.github.com/user/keys

|| [https://github.com/settings/keys]
new SSH key => title & key => add SSH key


## per project
git init
git remote add origin <repo_url>
touch .gitignore
git pull origin master --rebase

git add .
git commit -m "msg"

git branch -M main
git checkout main
|| git checkout -b main

git push origin main
|| git push


[clone]
git clone <repo-ssh-url>

[clone-branch]
git clone -b <branch-name> <repo-ssh-url>

