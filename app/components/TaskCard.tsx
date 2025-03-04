"use client";

import { Task } from "../types/task";
import { updateTask, deleteTask } from "../lib/api";
import { useRouter } from "next/navigation";

export default function TaskCard({ task }: { task: Task }) {
  const router = useRouter();

  async function toggleComplete() {
    await updateTask(task.id, { completed: !task.completed });
    router.refresh(); // Refresh UI after update
  }

  async function handleDelete() {
    if (confirm("Are you sure you want to delete this task?")) {
      await deleteTask(task.id);
      router.refresh();
    }
  }

  return (
    <div
      className={`p-4 border-l-4 rounded-lg bg-white shadow-sm border-${task.color}-500`}
    >
      <div className="flex justify-between">
        <h3 className="text-lg">{task.title}</h3>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={toggleComplete}
        />
      </div>
      <div className="flex justify-end gap-2 mt-2">
        <button
          className="text-blue-500"
          onClick={() => router.push(`/edit/${task.id}`)}
        >
          Edit
        </button>
        <button className="text-red-500" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
