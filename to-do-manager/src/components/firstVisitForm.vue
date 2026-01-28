<!-- #######################################################################################
##########    firstVisitForm.vue - Composant de formulaire de première visite     ##########
#########################################################################################-->


<script setup lang="ts">

// Importations et initialisations
    import { ref } from 'vue';

// Variable réactive pour le nom d'utilisateur
    const name = ref('');

// Emit de l'evenement de soumission du formulaire avec le nom d'utilisateur
    const emit = defineEmits<{
        (e: 'submit', username: string): void;
    }>();

// Gestion de la soumission du formulaire
    function submitForm(): void {
        // Validation simple : le nom ne peut pas être vide
        if (!name.value.trim()) {
            alert('Please enter your name to proceed.');
            return;
        }
        // Émission de l'événement de soumission avec le nom d'utilisateur
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

    /* Container principal du formulaire de première visite */
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

    /* Formulaire de première visite */
    .ask-name-form form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    /* Titre du formulaire de première visite */
    .title-ask-name {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: var(--color-text);
        text-align: center;
    }

    /* Bouton de démarrage */
    button {
        cursor: pointer;
        border-radius: 25px;
        border: none;
        padding: 10px 20px;
        margin: 15px;
        background-color: rgb(21, 63, 202);
        color: white;
    }

    /* Champs du formulaire */
    input {
        margin: 10px;
        padding: 10px;
        border: 1px solid var(--color-border);
        border-radius: 8px;
        width: 100%;
    }

</style>