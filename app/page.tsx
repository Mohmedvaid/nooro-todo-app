"use client";

import { useState, useEffect } from "react";
import { fetchTasks } from "@/app/lib/api";
import { Task } from "@/app/types/task";
import TaskCard from "@/app/components/TaskCard";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function loadTasks() {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    }
    loadTasks();
  }, []);

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-[var(--color-text)]">
        <span className="text-[var(--color-primary)]">🚀 Todo</span> App
      </h1>
      <button
        className="w-full py-3 bg-[var(--color-primary)] text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-opacity-80 transition"
        onClick={() => router.push("/new")}
      >
        ➕ Create Task
      </button>

      {/* Task Stats */}
      <div className="flex justify-between mt-6 text-sm text-[var(--color-secondary)]">
        <span>
          Tasks{" "}
          <span className="bg-gray-700 px-2 py-1 rounded-full text-white">
            {tasks.length}
          </span>
        </span>
        <span>
          Completed{" "}
          <span className="bg-gray-700 px-2 py-1 rounded-full text-white">
            {completedTasks} de {tasks.length}
          </span>
        </span>
      </div>

      {/* Task List */}
      <div className="space-y-4 mt-4">
        {tasks.length > 0 ? (
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        ) : (
          <p className="text-center text-[var(--color-secondary)]">
            No tasks yet.
          </p>
        )}
      </div>
    </div>
  );
}
