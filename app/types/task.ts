export interface Task {
  id: number;
  title: string;
  color: string; // e.g., "red", "blue", "purple", etc.
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TaskInput {
  title: string;
  color: string;
}

export interface UpdateTaskInput extends Partial<TaskInput> {
  completed?: boolean;
}
