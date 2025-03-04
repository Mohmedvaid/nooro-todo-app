"use client";

import { Task } from "@/app/types/task";
import { updateTask, deleteTask } from "@/app/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

type TaskCardProps = {
  task: Task;
  onDelete: (taskId: number) => void;
};

export default function TaskCard({ task, onDelete }: TaskCardProps) {
  const router = useRouter();
  const [completed, setCompleted] = useState(task.completed);

  async function toggleComplete() {
    await updateTask(task.id, { completed: !completed });
    setCompleted(!completed);
  }

  async function handleDelete() {
    if (confirm("Are you sure you want to delete this task?")) {
      await deleteTask(task.id);
      onDelete(task.id);
    }
  }

  const handleEdit = () => {
    router.push(`/edit/${task.id}`);
  };

  // Map the task color to a CSS color value
  const colorMap: { [key: string]: string } = {
    red: "#FF0000",
    orange: "#FFA500",
    yellow: "#FFFF00",
    green: "#008000",
    blue: "#0000FF",
    purple: "#800080",
    pink: "#FFC0CB",
    brown: "#A52A2A",
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    accent: "var(--color-accent)",
  };

  const taskColor = colorMap[task.color] || "var(--color-primary)";

  return (
    <div
      className={`p-4 rounded-lg shadow-sm bg-[var(--color-task-bg)] border border-[var(--color-border)] flex justify-between items-center ${
        completed ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={completed}
            onChange={toggleComplete}
            className="appearance-none w-5 h-5 border-2 border-[var(--color-secondary)] rounded-full checked:bg-[var(--color-accent)] checked:border-none"
          />
          <span
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: taskColor }}
          />
          <span
            onClick={handleEdit}
            className={`text-[var(--color-text)] cursor-pointer ${
              completed ? "line-through text-[var(--color-secondary)]" : ""
            }`}
          >
            {task.title}
          </span>
        </label>
      </div>
      <button
        onClick={handleDelete}
        className="text-gray-400 hover:text-red-500 transition"
      >
        🗑️
      </button>
    </div>
  );
}
