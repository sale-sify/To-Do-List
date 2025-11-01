<script setup lang="ts">
    defineProps<{ username: string }>();
    const emit = defineEmits<{
        (e: 'reset'): void;
    }>();

    let src = './public/logo-todo-manager.png';
</script>


<template>
    <header class="header">
        <img :src alt="Logo To-Do Manager" class="logo-header" />
        <div class="username-title-box">
            <h2 class="username-title">Welcome {{ username }} to Your To-Do Manager</h2>
        </div>
        <button class="reset-app-button" @click="$emit('reset')">Reset App</button>     
    </header>
</template>

<style scoped>
.header {
    width: 100%;
    padding-top: 60px;
}
.username-title-box {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 3rem;
}
.reset-app-button {
    position: absolute;
    top: 20px;
    right: 40px;
    cursor: pointer;
    border-radius: 25px;
    border: none;
    padding: 10px 20px;
    margin: 15px;
    background-color: rgb(202, 21, 63);
    color: white;
    font-weight: bolder;
    transition: 0.2s ease;
}
.reset-app-button:hover {
    box-shadow: inset 2px 2px 5px rgba(54, 54, 54, 0.753);
}

.logo-header {
    width: 150px;
    height: auto;
    position: absolute;
    top: -23px;
    left: 40px;
}
</style>
