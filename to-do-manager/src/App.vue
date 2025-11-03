<script setup lang="ts">

import { ref } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import NewTaskForm from './components/NewTaskForm.vue';
import FirstVisitForm from './components/firstVisitForm.vue';
import TaskList from './components/TaskList.vue';



// first visit form management depending on username presence and save new username
const username = ref<string | null>(null);
const isFirstVisit = ref(true);
const storedUsername = localStorage.getItem('username');

if (storedUsername) {
  username.value = storedUsername;
  isFirstVisit.value = false;
}

function handleFirstVisitSubmit(name: string): void {
  username.value = name;
  isFirstVisit.value = false;
  localStorage.setItem('username', name);
}



// Open and Close Task Form
const showTaskForm = ref(false);

function openTaskForm(): void {
  showTaskForm.value = true;
}

function closeTask(): void {
  showTaskForm.value = false;
}


// Back to first visit
function resetApp(): void {
  const confirmed = window.confirm(
    'The app will reset to first visit state. You will lose your current data.'
  );
  if (confirmed) {
    localStorage.clear();
    window.location.reload();
  }
}

</script>






<template>
  <div class="container">

    <div v-if="isFirstVisit" class="name-form">
      <FirstVisitForm  @submit="handleFirstVisitSubmit"></FirstVisitForm>
    </div>
      
    <div v-else class="main">
      
      <header>
        <Header :username="username!" @reset="resetApp"></Header>
      </header>

      <button class="new-task-button" v-if="!showTaskForm" @click="openTaskForm">+</button>

      <div class="overlay" v-if="showTaskForm" @click.self="closeTask">
        <NewTaskForm class="task-form" @close="closeTask"></NewTaskForm>
      </div>

      <div class="content">
        <TaskList></TaskList>
      </div>

      

      <footer>
        <Footer></Footer>
      </footer>

    </div>

  </div>
</template>






<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  width: 100vw;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; 
  width: 60%;
  background-color: var(--color-background);
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  width: 100vw;
}

header,
footer {
  width: 100%;
  border-color: var(--color-border);
}

header {
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  border-bottom: 1px solid var(--color-border);
}

footer {
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 10vh;
  border-top: 1px solid var(--color-border);
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  text-align: center;
  z-index: 1000;
}

.name-form {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 200%;
  min-height: 100vh;
  margin-left: 14rem;
}

.content {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 1rem;
  margin-left: 80px;
}

.new-task-button {
  position: fixed;
  bottom: 100px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgb(21, 63, 202);
  color: white;
  font-size: 36px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  transition: transform 0.2s ease, background 0.2s ease;
}

.new-task-button:hover {
  transform: scale(1.1);
  background-color: rgb(15, 50, 160);
}


</style>
