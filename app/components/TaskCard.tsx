"use client";

import { Task } from "@/app/types/task";
import { updateTask, deleteTask } from "@/app/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { COLOR_MAP, DEFAULT_COLOR } from "../constants/colors";

type TaskCardProps = {
  task: Task;
  onDelete: (taskId: number) => void;
};

/**
 * A card component representing a single task with toggle, edit, and delete functionality.
 * @param props - The props for the TaskCard component.
 * @param props.task - The task object to display.
 * @param props.onDelete - Callback function to handle task deletion in the parent component.
 */
export default function TaskCard({ task, onDelete }: TaskCardProps) {
  const router = useRouter();
  const [completed, setCompleted] = useState(task.completed);

  const taskColor = COLOR_MAP[task.color] || DEFAULT_COLOR;

  /**
   * Toggles the completion status of the task.
   */
  const toggleComplete = async () => {
    await updateTask(task.id, { completed: !completed });
    setCompleted(!completed);
  };

  /**
   * Handles the deletion of the task with a confirmation prompt.
   */
  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this task?")) {
      await deleteTask(task.id);
      onDelete(task.id);
    }
  };

  /**
   * Navigates to the edit page for the task.
   */
  const handleEdit = () => {
    router.push(`/edit/${task.id}`);
  };

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
