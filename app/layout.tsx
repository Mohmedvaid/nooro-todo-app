import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

/**
 * Metadata for the application.
 */
export const metadata: Metadata = {
  title: "Nooro Todo App",
  description: "Manage your tasks efficiently with Nooro Todo App",
};

/**
 * Root layout component for the application.
 * @param props - The props for the RootLayout component.
 * @param props.children - The child components to render.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1e1e1e" />
      </head>
      <body className="bg-[var(--color-bg)] text-[var(--color-text)]">
        {children}
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      </body>
    </html>
  );
}
