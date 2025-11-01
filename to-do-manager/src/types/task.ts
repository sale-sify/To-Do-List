export enum Status {
    TODO = "To-do",
    IN_PROGRESS = "In progress",
    DONE = "Done",
}

export interface Task {
    id: string;
    title: string;
    description: string;
    date: string;
    status: Status;
}


