"use client";

import { useState, useEffect } from "react";
import { fetchTasks } from "@/app/lib/api";
import TaskForm from "@/app/components/TaskForm";
import { useRouter, useParams } from "next/navigation";

export default function EditTaskPage() {
  const router = useRouter();
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    async function loadTask() {
      const tasks = await fetchTasks();
      const foundTask = tasks.find((t: any) => t.id === Number(id));
      if (foundTask) {
        setTask(foundTask);
      } else {
        router.push("/");
      }
    }
    loadTask();
  }, [id, router]);

  if (!task) {
    return <div>Loading...</div>;
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
