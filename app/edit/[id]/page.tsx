"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import TaskForm from "@/app/components/TaskForm";
import { fetchTasks } from "@/app/lib/api";
import { Task } from "@/app/types/task";

export default function EditTaskPage() {
  const { id } = useParams(); // Use Next.js hook for params
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTask() {
      if (!id) return; // Avoid running if no ID is available
      const tasks = await fetchTasks();
      const foundTask = tasks.find((t) => t.id === Number(id));
      setTask(foundTask || null);
      setLoading(false);
    }
    loadTask();
  }, [id]);

  if (loading) {
    return <div className="text-center text-gray-500">Loading task...</div>;
  }

  if (!task) {
    return <div className="text-center text-red-500">Task not found.</div>;
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
      <TaskForm task={task} />
    </div>
  );
}
