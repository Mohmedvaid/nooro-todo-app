"use client";

import { useState, useEffect } from "react";
import { fetchTasks } from "./lib/api";
import { Task } from "./types/task";
import TaskCard from "./components/TaskCard";
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

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <button
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => router.push("/new")}
      >
        Create Task
      </button>
      <div className="space-y-4">
        {tasks.length > 0 ? (
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        ) : (
          <p>No tasks available.</p>
        )}
      </div>
    </div>
  );
}
