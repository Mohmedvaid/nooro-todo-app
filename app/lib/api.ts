const API_URL = "http://localhost:3000/tasks"; // Ensure backend URL is correct

export async function fetchTasks() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`Error ${res.status}: Failed to fetch tasks`);
    return await res.json();
  } catch (error) {
    console.error("Fetch Tasks Error:", error);
    return [];
  }
}

export async function createTask(title: string, color: string) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, color }),
    });
    if (!res.ok) throw new Error(`Error ${res.status}: Failed to create task`);
    return await res.json();
  } catch (error) {
    console.error("Create Task Error:", error);
    throw error;
  }
}

export async function updateTask(id: number, updates: any) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });

    if (!res.ok) throw new Error(`Error ${res.status}: Failed to update task`);
    return await res.json();
  } catch (error) {
    console.error("Update Task Error:", error);
    throw error;
  }
}

export async function deleteTask(id: number) {
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

    if (!res.ok) throw new Error(`Error ${res.status}: Failed to delete task`);
    return await res.json();
  } catch (error) {
    console.error("Delete Task Error:", error);
    throw error;
  }
}
