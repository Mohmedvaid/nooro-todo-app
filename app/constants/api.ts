/**
 * Base URL for the backend API.
 * Can be overridden by environment variables in production.
 */
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

/**
 * API endpoint for tasks.
 */
export const TASKS_ENDPOINT = `${API_URL}/tasks`;
