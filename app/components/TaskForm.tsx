"use client";

import { useState } from "react";
import { createTask, updateTask } from "@/app/lib/api";
import { useRouter } from "next/navigation";

type TaskFormProps = {
  task?: { id: number; title: string; color: string };
};

export default function TaskForm({ task }: TaskFormProps) {
  const [title, setTitle] = useState(task?.title || "");
  const [color, setColor] = useState(task?.color || "red");
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

  const colors = [
    { name: "red", value: "#FF0000" },
    { name: "orange", value: "#FFA500" },
    { name: "yellow", value: "#FFFF00" },
    { name: "green", value: "#008000" },
    { name: "blue", value: "#0000FF" },
    { name: "purple", value: "#800080" },
    { name: "pink", value: "#FFC0CB" },
    { name: "brown", value: "#A52A2A" },
  ];

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
          {colors.map((c) => (
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
