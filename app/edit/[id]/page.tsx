"use client";

import { useState, useEffect } from "react";
import { fetchTasks } from "@/app/lib/api";
import TaskForm from "@/app/components/TaskForm";
import { useRouter, useParams } from "next/navigation";
import { Task } from "@/app/types/task";

/**
 * Page for editing an existing task.
 */
export default function EditTaskPage() {
  const router = useRouter();
  const { id } = useParams();
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTask = async () => {
      setLoading(true);
      try {
        const tasks = await fetchTasks();
        const taskId = Number(id);
        const foundTask = tasks.find((t: Task) => t.id === taskId);
        if (foundTask) {
          setTask(foundTask);
        } else {
          router.push("/");
        }
      } finally {
        setLoading(false);
      }
    };
    loadTask();
  }, [id, router]);

  if (loading) {
    return (
      <div className="max-w-md mx-auto p-6 text-center text-[var(--color-text)]">
        Loading task...
      </div>
    );
  }

  if (!task) {
    return null; // Redirected to home page
  }

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
          Edit Task
        </h1>
      </div>
      <TaskForm task={task} />
    </div>
  );
}
