import { ref, watch, computed } from 'vue';
import type { Task } from '@/types/task';
import { Status } from '@/types/task';
import { makeId } from '@/utils/id';

const STORAGE_KEY = 'todo_tasks_v1';


const tasks = ref<Task[]>(loadTasks());

function loadTasks(): Task[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Task[]) : [];
  } catch {
    return [];
  }
}


watch(tasks, (newVal) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newVal));
}, { deep: true });


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


function removeTask(id: string): void {
  tasks.value = tasks.value.filter(t => t.id !== id);
}


function setStatus(id: string, status: Status): void {
  const t = tasks.value.find(t => t.id === id);
  if (t) t.status = status;
}


const stats = computed(() => ({
  total: tasks.value.length,
  todo: tasks.value.filter(t => t.status === Status.TODO).length,
  inProgress: tasks.value.filter(t => t.status === Status.IN_PROGRESS).length,
  done: tasks.value.filter(t => t.status === Status.DONE).length,
}));


export function useTasks() {
  return { tasks, addTask, removeTask, setStatus, stats, Status };
}