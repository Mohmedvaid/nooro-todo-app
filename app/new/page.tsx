import TaskForm from "../components/TaskForm";

export default function NewTaskPage() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Task</h1>
      <TaskForm />
    </div>
  );
}
