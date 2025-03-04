const API_URL = "http://localhost:3000/tasks"; // Update this when deploying

export async function fetchTasks() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function createTask(title: string, color: string) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, color }),
  });
  return res.json();
}

export async function updateTask(id: number, updates: any) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  return res.json();
}

export async function deleteTask(id: number) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
