"use client";

import { useState } from "react";
import { createTask, updateTask } from "@/app/lib/api";
import { useRouter } from "next/navigation";
import { TASK_COLORS } from "../constants/colors";

type TaskFormProps = {
  task?: { id: number; title: string; color: string };
};

/**
 * A form component for creating or editing a task.
 * @param props - The props for the TaskForm component.
 * @param props.task - The task object to edit (optional; if not provided, the form is in create mode).
 */
export default function TaskForm({ task }: TaskFormProps) {
  const [title, setTitle] = useState(task?.title || "");
  const [color, setColor] = useState(task?.color || "red");
  const router = useRouter();

  /**
   * Handles form submission to create or update a task.
   * @param e - The form submit event.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      await updateTask(task.id, { title, color });
    } else {
      await createTask(title, color);
    }
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="text-[var(--color-text)]">Title</label>
        <input
          className="border p-2 rounded bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-border)]"
          placeholder="Ex. Brush you teeth"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[var(--color-text)]">Color</label>
        <div className="flex gap-2">
          {TASK_COLORS.map((c) => (
            <button
              key={c.name}
              type="button"
              onClick={() => setColor(c.name)}
              className="relative w-8 h-8 rounded-full"
              style={{ backgroundColor: c.value }}
            >
              {color === c.name && (
                <span className="absolute inset-0 flex items-center justify-center text-white">
                  ✔
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      <button className="bg-[var(--color-primary)] text-white px-4 py-2 rounded hover:bg-[var(--color-accent)] flex items-center justify-center gap-2">
        {task ? "Save" : "Add Task"} {task ? "✔" : "➕"}
      </button>
    </form>
  );
}
