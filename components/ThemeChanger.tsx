'use client'
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()
  console.log(theme)
  return (
    <div className="rounded-full w-fit flex p-1 text-background bg-foreground">
      {
        theme == 'light'
          ? (
            <button
              className="cursor-pointer flex items-center justify-center"
              onClick={() => setTheme('dark')}
            >
              <Moon size="18" />
            </button>

          )
          : (
            <button
              className="cursor-pointer flex items-center justify-center"
              onClick={() => setTheme('light')}
            >
              <Sun size="18" />
            </button>
          )
      }
    </div>
  )
};
export default ThemeChanger;
