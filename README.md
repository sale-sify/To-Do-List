# To-Do Manager

## Project Overview

To-Do Manager is a simple task management web application built with **Vue 3** and **TypeScript**.  
It allows users to create, update, and delete tasks, assign statuses, and store all data locally in the browser.

The project was developed as a prototype for **Code2Work**, aiming to help students in work-study programs manage their daily tasks efficiently.

---

## Features

- Create new tasks with title, description, and due date  
- Change task status (To-Do / In Progress / Done)  
- Delete tasks  
- Persistent storage with `localStorage`  
- Username form displayed on first visit  
- Application reset option  
- Simple and modular interface (Header, Footer, Forms, TaskList)

---

## Technologies

- Vue 3 + TypeScript  
- Vite  
- ESLint & Prettier  
- LocalStorage API  
- HTML5 / CSS3 / Flexbox

---

## Setup

### Installation

- Make sure to be inside the directory 'to-do-manager'

```bash
npm install
```

### Run the project 

```bash
npm run dev
```

Follow the localhost link in the terminal to open the app
        --> http://localhost:5173/

---

## Project structure 

 - src/
 - ├── components/      # Header, Footer, TaskList, Forms
 - ├── composables/     # useTasks.ts (task logic)
 - ├── types/           # task.ts (interfaces and enums)
 - ├── utils/           # id generator
 - ├── App.vue
 - └── main.ts





## Author 

 - From: Romain Sales
 - For: ETNA School - C2WK - Vue.js / TypeScript
