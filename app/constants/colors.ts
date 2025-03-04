/**
 * Mapping of task colors to CSS color values.
 */
export const COLOR_MAP: { [key: string]: string } = {
  red: "#FF0000",
  orange: "#FFA500",
  yellow: "#FFFF00",
  green: "#008000",
  blue: "#0000FF",
  purple: "#800080",
  pink: "#FFC0CB",
  brown: "#A52A2A",
  primary: "var(--color-primary)",
  secondary: "var(--color-secondary)",
  accent: "var(--color-accent)",
};

/**
 * Default fallback color if a task's color is not found in the color map.
 */
export const DEFAULT_COLOR = "var(--color-primary)";

/**
 * Array of selectable colors for tasks.
 */
export const TASK_COLORS = [
  { name: "red", value: "#FF0000" },
  { name: "orange", value: "#FFA500" },
  { name: "yellow", value: "#FFFF00" },
  { name: "green", value: "#008000" },
  { name: "blue", value: "#0000FF" },
  { name: "purple", value: "#800080" },
  { name: "pink", value: "#FFC0CB" },
  { name: "brown", value: "#A52A2A" },
];
