<script setup lang="ts">

import { ref } from 'vue';
import { useTasks } from '@/composables/useTasks';

const { addTask } = useTasks();
const title = ref('');
const description = ref('');
const date = ref('');

function handleSubmit(): void {

    if(!title.value.trim()) {
        alert('Task title cannot be empty');
        return;
    }

    if (date.value){
        addTask(title.value, description.value, new Date(date.value));
    } else {
        addTask(title.value, description.value);
    }

    title.value = '';
    description.value = '';
    date.value = '';
}

</script>




<template>

    <div class="new-task-form-box">

        <h4 class="title-new-task">New Task <span class="logo-new-task">📥​</span></h4>

        <form class="form-new-task" @submit.prevent="handleSubmit">
            <input v-model="title" class="input-title" type="text" placeholder="Enter your new task here..." />
            <input v-model="description" class="input-description" type="text" placeholder="What about that ?" />
            <input v-model="date" class="input-date" type="date" placeholder="For when ?" />
            <button class="button-add-task" type="submit">Save that Task</button>
        </form>

    </div>

</template>




<style scoped>

.new-task-form-box {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    padding: 1rem;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    background-color: rgba(36, 36, 36, 0.9);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.8);
}

.title-new-task {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--color-text);
}

button {
    cursor: pointer;
    border-radius: 25px;
    border: none;
    padding: 10px 20px;
    margin: 15px;
    background-color: rgb(21, 63, 202);
    color: white;
}

input {
    margin: 10px;
    padding: 10px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    width: 80%;
    background-color: rgb(212, 212, 212);
}

.form-new-task {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

</style>