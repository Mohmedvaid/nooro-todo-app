"use client";

import { useState } from "react";
import { createTask, updateTask } from "../lib/api";
import { useRouter } from "next/navigation";

export default function TaskForm({
  task,
}: {
  task?: { title: string; color: string };
}) {
  const [title, setTitle] = useState(task?.title || "");
  const [color, setColor] = useState(task?.color || "blue");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (task) {
      await updateTask(task.id, { title, color });
    } else {
      await createTask(title, color);
    }
    router.push("/");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        className="border p-2 rounded"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <select
        className="border p-2 rounded"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="red">Red</option>
      </select>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        type="submit"
      >
        {task ? "Update Task" : "Create Task"}
      </button>
    </form>
  );
}
