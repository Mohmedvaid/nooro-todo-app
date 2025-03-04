import TaskForm from "@/app/components/TaskForm";

export default function NewTaskPage() {
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-[var(--color-text)]">
        Create New Task
      </h1>
      <TaskForm />
    </div>
  );
}
