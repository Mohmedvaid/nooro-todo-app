# Nooro Todo App Frontend

A Task Tracker application built with Next.js, TypeScript, and Tailwind CSS for the Nooro Full-Stack Developer take-home test.

## Overview

This frontend provides a user-friendly interface for managing tasks in the Nooro Todo App. It allows users to create, view, edit, toggle, and delete tasks, with a UI that closely matches the provided Figma designs.

## Tech Stack

- Next.js (App Router): Framework for building the frontend with server-side rendering and routing.  
- TypeScript: For type safety and better developer experience.  
- Tailwind CSS: For responsive and utility-first styling.  
- React: For building reusable UI components.

## Project Structure

- app/: Next.js App Router pages and layouts  
  - components/: Reusable React components (e.g., TaskCard, TaskForm).  
  - lib/: API utility functions for interacting with the backend.  
  - types/: TypeScript types for task data.  
  - page.tsx: Homepage displaying the task list.  
  - layout.tsx: Root layout with global styles.  
  - new/page.tsx: Page for creating a new task.  
  - edit/[id]/page.tsx: Page for editing an existing task.  
- public/: Static assets (e.g., favicon.ico).

## Setup Instructions

### Prerequisites

- Node.js: Version 18.x or later.  
- Git: For cloning the repository.  
- Backend: The [Nooro Todo App Backend](https://github.com/Mohmedvaid/nooro-todo-app-api) must be running.

### Steps to Run

Clone the Repository  
git clone https://github.com/Mohmedvaid/nooro-todo-app.git  
cd nooro-todo-app

Install Dependencies  
npm install

Set Up the Backend  
This frontend requires the Nooro Todo App Backend to be running. Follow the setup instructions in the backend repository: [nooro-todo-app-api](https://github.com/Mohmedvaid/nooro-todo-app-api). Ensure the backend is running on http://localhost:3000.

Start the Development Server  
npm run dev  
The app will run on http://localhost:3001 (or the next available port if 3001 is in use). Open the URL in your browser to use the app.

## Features

- Task List (Home View):  
  - Displays a list of tasks with titles, completion status, and colored dots.  
  - Shows task stats ("Tasks: X", "Completed: Y of X").  
  - Includes a "Create Task" button to navigate to the task creation page.  
  - Clicking a task navigates to the edit page.  
- Create/Edit Task:  
  - Form with title and color selection (matches Figma design with colored circles).  
  - Create redirects to the home view after saving.  
  - Edit pre-fills the form with the task’s data and updates the task.  
- Additional Features:  
  - Toggle task completion directly from the home view.  
  - Delete tasks with a confirmation prompt for better UX.  
  - Responsive design tested on desktop, tablet, and mobile devices.  
  - UI closely matches the Figma designs (gradient header, circular checkboxes, etc.).

## Notes

- The app assumes the backend API is running at http://localhost:3000. If the backend is on a different port, update the API_URL in app/lib/api.ts.  
- Error handling in the frontend logs errors to the console. Additional UI feedback (e.g., toast notifications) can be added if desired.