"use client";

import { useState } from "react";
import { createTask, updateTask } from "@/app/lib/api";
import { useRouter } from "next/navigation";

export default function TaskForm({
  task,
}: {
  task?: { title: string; color: string };
}) {
  const [title, setTitle] = useState(task?.title || "");
  const [color, setColor] = useState(task?.color || "primary");
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
        className="border p-2 rounded bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-border)]"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <select
        className="border p-2 rounded bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-border)]"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="primary">Blue</option>
        <option value="secondary">Gray</option>
        <option value="accent">Purple</option>
      </select>
      <button className="bg-[var(--color-primary)] text-white px-4 py-2 rounded hover:bg-[var(--color-accent)]">
        {task ? "Update Task" : "Create Task"}
      </button>
    </form>
  );
}
