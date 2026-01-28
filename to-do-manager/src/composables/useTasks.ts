
// Import des fonctions et types nécessaires depuis Vue et d'autres modules
import { ref, watch, computed } from 'vue';
import type { Task } from '@/types/task';
import { Status } from '@/types/task';
import { makeId } from '@/utils/id';


// Clé de stockage pour localStorage
const STORAGE_KEY = 'todo_tasks_v1';


// Référence réactive pour la liste des tâches, initialisée avec les tâches chargées depuis le stockage local
const tasks = ref<Task[]>(loadTasks());


// Fonction pour charger les tâches depuis le stockage local
function loadTasks(): Task[] {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? (JSON.parse(raw) as Task[]) : [];
    } catch {
        return [];
    }
}


// Surveillance des modifications de la liste des tâches pour les sauvegarder dans le stockage local
watch(tasks, (newVal) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newVal));
}, { deep: true });

// Fonction pour ajouter une nouvelle tâche
function addTask(title: string, description = "", date?: Date): void {
    const trimmed = title.trim();
    if (!trimmed) throw new Error('Title is required');


    const taskDate = date ? date : new Date();

    tasks.value.push({
        id: makeId(),
        title: trimmed,
        description: description.trim(),
        status: Status.TODO,
        date: taskDate.toDateString()
    });
}


// Fonction pour supprimer une tâche par son identifiant
function removeTask(id: string): void {
   tasks.value = tasks.value.filter(t => t.id !== id);
}


// Fonction pour mettre à jour le statut d'une tâche
function setStatus(id: string, status: Status): void {
    const t = tasks.value.find(t => t.id === id);
    if (t) t.status = status;
}


// Statistiques des tâches
const stats = computed(() => ({
    total: tasks.value.length,
    todo: tasks.value.filter(t => t.status === Status.TODO).length,
    inProgress: tasks.value.filter(t => t.status === Status.IN_PROGRESS).length,
    done: tasks.value.filter(t => t.status === Status.DONE).length,
}));


// Exportation du service useTasks pour être utilisée dans d'autres parties de l'application
export function useTasks() {
    return { tasks, addTask, removeTask, setStatus, stats, Status };
}