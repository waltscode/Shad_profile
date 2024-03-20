import { Moon, Sun } from "lucide-react"

import { Button } from "./button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu"
import { useTheme } from "./theme-provider"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <div className="flex justify-between">
      <DropdownMenu>
        <DropdownMenuTrigger aschildren>
          <Button variant="outline" size="icon">
            <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle light theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Blue
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("light-red")}>
            Red
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("light-green")}>
            Green
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("light-orange")}>
            Orange
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger aschildren>
          <Button variant="outline" size="icon">
            <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle dark theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Blue
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("red")}>
            Red
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("green")}>
            Green
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("orange")}>
            Orange
          </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}