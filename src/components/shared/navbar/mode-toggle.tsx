"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme-provider";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-none text-primary-500"
        >
          <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className=" focus:bg-light-900 data-[state=open]:bg-light-900 dark:text-white dark:hover:bg-dark-300 dark:focus:bg-dark-400 dark:data-[state=open]:bg-dark-400"
      >
        <DropdownMenuItem
          onClick={() => {
            setTheme("light");
            localStorage.setItem("theme", "light");
          }}
          className={cn(
            "hover:bg-primary-500 rounded-md hover:text-white",
            theme === "light" && "text-primary-500"
          )}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme("dark");

            localStorage.setItem("theme", "dark");
          }}
          className={cn(
            "hover:bg-primary-500 rounded-md hover:text-white",
            theme === "dark" && "text-primary-500"
          )}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme("system");
            localStorage.removeItem("theme");
          }}
          className={cn(
            "hover:bg-primary-500 rounded-md hover:text-white",
            theme === "system" && "text-primary-500"
          )}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
