"use client";

import TaskForm from "@/app/components/TaskForm";
import { useRouter } from "next/navigation";

/**
 * Page for creating a new task.
 */
export default function NewTaskPage() {
  const router = useRouter();

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={() => router.push("/")}
          className="text-[var(--color-text)]"
        >
          ←
        </button>
        <h1 className="text-2xl font-bold text-[var(--color-text)]">
          Create New Task
        </h1>
      </div>
      <TaskForm />
    </div>
  );
}
