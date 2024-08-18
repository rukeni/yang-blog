"use client";

import { useEffect, useState } from "react";
import { Languages } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeLanguage() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="group hidden h-6 w-6 items-center justify-center rounded-md border text-muted-foreground hover:bg-accent hover:text-accent-foreground sm:flex"
    >
      <span className="sr-only">Toggle dark/light mode</span>
      <span className="h-4 w-4 text-xs duration-300 group-hover:rotate-[360deg]">
        {theme === "light" ? "EN" : "한"}
      </span>
    </button>
  );
}
