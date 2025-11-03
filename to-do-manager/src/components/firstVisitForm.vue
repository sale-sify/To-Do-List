<script setup lang="ts">
    import { ref } from 'vue';

    const name = ref('');

    const emit = defineEmits<{
        (e: 'submit', username: string): void;
    }>();


    function submitForm(): void {
        if (!name.value.trim()) {
            alert('Please enter your name to proceed.');
            return;
        }
        emit('submit', name.value.trim());
    }

</script>




<template>
    <div class="ask-name-form">
        <h4 class="title-ask-name">Welcome to To-Do Manager !<span class="logo-ask-name">📝​</span></h4>
        <form class="form-ask-name" @submit.prevent="submitForm">
            <input id="username" v-model="name" type="text" placeholder="Enter your name..." />
            <button class="button-start" type="submit">Start Managing Tasks</button>
        </form>
    </div>


</template>




<style scoped>
.ask-name-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    padding: 1rem;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    background-color: var(--color-background-secondary);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.title-ask-name {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--color-text);
    text-align: center;
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
    width: 100%;
}

.ask-name-form form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>