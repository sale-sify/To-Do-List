// export enum pour les statuts des tâches
export enum Status {
    TODO = "To-do",
    IN_PROGRESS = "In progress",
    DONE = "Done",
}


// Interface pour une tâche
export interface Task {
    id: string;
    title: string;
    description: string;
    date: string;
    status: Status;
}


