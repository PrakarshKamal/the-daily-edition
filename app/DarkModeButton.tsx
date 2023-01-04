"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currTheme === "dark" ? (
        <SunIcon
          className="w-8 h-8 text-yellow-500 cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MoonIcon
          className="w-8 h-8 text-gray-900 cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}

export default DarkModeButton;
