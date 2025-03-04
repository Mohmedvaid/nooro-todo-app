import toast from "react-hot-toast";
import { API_URL, TASKS_ENDPOINT } from "../constants/api";

// Define types for API payloads to improve type safety
type TaskInput = {
  title: string;
  color: string;
};

type UpdateTaskInput = Partial<TaskInput> & { completed?: boolean };

/**
 * Fetches all tasks from the backend API.
 * @returns {Promise<any[]>} A promise that resolves to an array of tasks.
 */
export async function fetchTasks(): Promise<any[]> {
  try {
    const res = await fetch(TASKS_ENDPOINT);
    if (!res.ok) {
      throw new Error(`Error ${res.status}: Failed to fetch tasks`);
    }
    return await res.json();
  } catch (error) {
    console.error("Fetch Tasks Error:", error);
    toast.error("Failed to fetch tasks. Please try again.");
    return [];
  }
}

/**
 * Creates a new task via the backend API.
 * @param title - The title of the task.
 * @param color - The color of the task.
 * @returns {Promise<any>} A promise that resolves to the created task.
 * @throws {Error} If the API request fails.
 */
export async function createTask(title: string, color: string): Promise<any> {
  try {
    const res = await fetch(TASKS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, color } as TaskInput),
    });
    if (!res.ok) {
      throw new Error(`Error ${res.status}: Failed to create task`);
    }
    return await res.json();
  } catch (error) {
    console.error("Create Task Error:", error);
    toast.error("Failed to create task. Please try again.");
    throw error;
  }
}

/**
 * Updates an existing task via the backend API.
 * @param id - The ID of the task to update.
 * @param updates - The fields to update (title, color, completed).
 * @returns {Promise<any>} A promise that resolves to the updated task.
 * @throws {Error} If the API request fails.
 */
export async function updateTask(
  id: number,
  updates: UpdateTaskInput
): Promise<any> {
  try {
    const res = await fetch(`${TASKS_ENDPOINT}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    if (!res.ok) {
      throw new Error(`Error ${res.status}: Failed to update task`);
    }
    return await res.json();
  } catch (error) {
    console.error("Update Task Error:", error);
    toast.error("Failed to update task. Please try again.");
    throw error;
  }
}

/**
 * Deletes a task via the backend API.
 * @param id - The ID of the task to delete.
 * @returns {Promise<any>} A promise that resolves to the API response.
 * @throws {Error} If the API request fails.
 */
export async function deleteTask(id: number): Promise<any> {
  try {
    const res = await fetch(`${TASKS_ENDPOINT}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error(`Error ${res.status}: Failed to delete task`);
    }
    return await res.json();
  } catch (error) {
    console.error("Delete Task Error:", error);
    toast.error("Failed to delete task. Please try again.");
    throw error;
  }
}
