"use client";

import { Task } from "@/app/types/task";
import { updateTask, deleteTask } from "@/app/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TaskCard({ task }: { task: Task }) {
  const router = useRouter();
  const [completed, setCompleted] = useState(task.completed);

  async function toggleComplete() {
    await updateTask(task.id, { completed: !completed });
    setCompleted(!completed);
  }

  async function handleDelete() {
    if (confirm("Are you sure you want to delete this task?")) {
      await deleteTask(task.id);
      router.refresh();
    }
  }

  return (
    <div
      className={`p-4 rounded-lg shadow-sm bg-[var(--color-task-bg)] border border-[var(--color-border)] flex justify-between items-center ${
        completed ? "opacity-50" : ""
      }`}
    >
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={completed}
          onChange={toggleComplete}
          className="appearance-none w-5 h-5 border border-[var(--color-secondary)] rounded-full checked:bg-[var(--color-accent)] checked:border-none"
        />
        <span
          className={`text-[var(--color-text)] ${
            completed ? "line-through text-[var(--color-secondary)]" : ""
          }`}
        >
          {task.title}
        </span>
      </label>
      <button
        onClick={handleDelete}
        className="text-gray-400 hover:text-red-500 transition"
      >
        🗑️
      </button>
    </div>
  );
}
