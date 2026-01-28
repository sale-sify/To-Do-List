<!-- #######################################################################################
##########              TaskList.vue - Composant de liste des tâches              ##########
#########################################################################################-->


<script setup lang="ts">

// Importation du composable useTasks pour la gestion des tâches
    import { useTasks } from '@/composables/useTasks';

// Récupération des tâches et des fonctions de gestion des tâches depuis le composable
    const { tasks, setStatus, Status, removeTask } = useTasks();

</script>



<template>

    <div class="tasks-list-box">

        <div class="column-title">
            <h4 id="title">Title</h4>
            <h4 id="description">Description</h4>
            <h4 id="date">Date</h4>
            <h4 id="status">Status</h4>
        </div>

        <h4 class="no-task-txt" v-if="tasks.length === 0">No Task Yet, Add one clicking the "+" button</h4>

        <ul v-else class="tasks-list">
            <li v-for="task in tasks" :key="task.id">

                <div class="task-box">

                    <div class="task-infos">
                        <h4 class="task-title">
                            <span class="Done-symb" v-if="task.status === Status.DONE">🟢</span>
                            <span class="in-progress-symb" v-else-if="task.status === Status.IN_PROGRESS">🟠</span>
                            <span class="to-do-symb" v-else>🔴​</span>
                            {{ task.title }}
                        </h4>
                        <p class="task-description">{{ task.description }}</p>
                        <p class="task-date">{{ task.date }}</p>
                        <p class="task-status">{{ task.status }}</p>
                    </div>

                    <div class="task-buttons">
                        <button @click="setStatus(task.id, Status.TODO)" class="to-do-status" :class="['to-do-status', { active: task.status === Status.TODO }]">To-Do</button>
                        <button @click="setStatus(task.id, Status.IN_PROGRESS)" :class="['in-progress-status', { active: task.status === Status.IN_PROGRESS }]">In progress</button>
                        <button @click="setStatus(task.id, Status.DONE)" :class="['done-status', { active: task.status === Status.DONE}]">Done</button>
                        <button @click="removeTask(task.id)" class="delete-task">Delete</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>

</template>



<style scoped>

    /* container principal de la liste des tâches */
    .tasks-list-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 2rem;
        padding: 1rem;
        border: 1px solid var(--color-border);
        border-radius: 8px;
        background-color: var(--color-background-secondary);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    /* Titres des colonnes */
    .column-title {
        width: 60%;
        display: flex;
        justify-content: space-around;
        padding-top: 0.5rem;
        margin-bottom: 1rem;
        color: var(--color-text);
    }

    /* Boutons de gestion des tâches */
    button {
        margin: 0.2rem;
        padding: 0.3rem 0.6rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        color: white;
        transition: 0.3s ease;
    }
    button.active {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
    }
    button:hover {
        transform: scale(1.1);
    }

    /* Styles des boutons de gestion des tâches */
    .to-do-status {
        background-color: rgb(202, 21, 63);
    }
    .in-progress-status {
        background-color: rgb(202, 140, 21);
    }
    .done-status {
        background-color: rgb(21, 202, 63);
    }
    .delete-task {
        background-color: rgb(100, 100, 100);
    }

    /* Styles des tâches */
    .task-box {
        border: 1px solid var(--color-border);
        border-radius: 8px;
        padding: 1rem;
        margin: 1rem 0;
        background-color: var(--color-background);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        width: 95%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    /* Informations sur les tâches */
    .task-infos {
        width: 60%;
        max-width: 100%;
        display: flex;
        align-items: center;;
    }

    /* Titres des taches */
    .task-title {
        width: 25%;
        margin-right: 1rem;
        color: whitesmoke;
        font-weight: bold;
        font-size: 1.1rem;
    }

    /* Description des taches */
    .task-description {
        width: 32%;
        margin-right: 1rem;
        color: whitesmoke;
    }

    /* Date des taches */
    .task-date {
        width: 22%;
        margin-right: 1rem;
        color: var(--color-text);
    }

    /* Statut des taches */
    .task-status {
        width: 14%;
        margin-right: 1rem;
        color: var(--color-text);
        text-align: center;
        color: whitesmoke;
        font-weight: 700;
        font-size: 1rem;
    }

    /* Styles des titres des colonnes */
    #title {
        width: 10%;
        text-align: center;
    }
    #description {
        width: 18%;
        text-align: center;
    }
    #date {
        width: 10%;
        text-align: center;
    }
    #status {
        width: 10%;
        text-align: center;
    }

    /* Titres des colonnes */
    .column-title h4 {
        font-size: 1.1rem;
        color: rgb(206, 206, 206);
        padding-bottom: 5px;
        border-bottom: 1px solid var(--color-border);
    }
    .Done-symb {
        margin-right: 0.4rem;
    }
    .in-progress-symb {
        margin-right: 0.4rem;
    }
    .to-do-symb {
        margin-right: 0.4rem;
    }

    /* Texte affiché lorsqu'il n'y a pas de tâches */
    .no-task-txt {
        width: 50%;
        color: rgb(218, 218, 218);
        text-align: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
        font-size: 1.2rem;
    }

</style>