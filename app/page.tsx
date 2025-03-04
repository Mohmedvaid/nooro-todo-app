"use client";

import { useState, useEffect } from "react";
import { fetchTasks } from "@/app/lib/api";
import { Task } from "@/app/types/task";
import TaskCard from "@/app/components/TaskCard";
import { useRouter } from "next/navigation";

/**
 * Homepage displaying the list of tasks.
 */
export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true);
      try {
        const fetchedTasks = await fetchTasks();
        setTasks(fetchedTasks);
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, []);

  /**
   * Handles task deletion by updating the local state.
   * @param taskId - The ID of the task to delete.
   */
  const handleDeleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        <span className="text-[var(--color-primary)]">🚀 </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
          Todo App
        </span>
      </h1>
      <button
        className="w-full py-3 bg-[var(--color-primary)] text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-opacity-80 transition"
        onClick={() => router.push("/new")}
      >
        ➕ Create Task
      </button>

      <div className="flex justify-between mt-6 text-sm text-[var(--color-secondary)]">
        <span>
          Tasks{" "}
          <span className="bg-[#4A4A4A] px-2 py-1 rounded-full text-white">
            {tasks.length}
          </span>
        </span>
        <span>
          Completed{" "}
          <span className="bg-[#4A4A4A] px-2 py-1 rounded-full text-white">
            {completedTasks} de {tasks.length}
          </span>
        </span>
      </div>

      <div className="space-y-4 mt-4">
        {loading ? (
          <p className="text-center text-[var(--color-secondary)]">
            Loading...
          </p>
        ) : tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} onDelete={handleDeleteTask} />
          ))
        ) : (
          <div className="text-center text-[var(--color-secondary)]">
            <div className="text-4xl mb-2">📋</div>
            <p>You don’t have any tasks registered yet.</p>
            <p>Create tasks and organize your to-do items.</p>
          </div>
        )}
      </div>
    </div>
  );
}
