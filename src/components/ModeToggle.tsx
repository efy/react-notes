"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button onClick={() => { setTheme(theme === "dark" ? "light" : "dark")}}>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
