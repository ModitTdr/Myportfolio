import { Facebook, Github, Linkedin } from "lucide-react"
import ThemeChanger from "./ThemeChanger"

const Navbar = () => {
  return (
    <nav className="container mx-auto px-4 sm:px-12 flex justify-between h-16 items-center py-12 text-foreground">
      <h1 className="text-xl sm:text-2xl font-bold">Modit Tuladhar</h1>
      <ul className="hidden sm:flex gap-4">
        <li className="group">
          <Github
            className="group-hover:text-indigo-400 group-hover:scale-110 duration-75 ease-in-out"
          />
        </li>
        <li className="group">
          <Linkedin
            className="group-hover:text-blue-300 group-hover:scale-110 duration-75 ease-in-out"
          />
        </li>
        <li className="group">
          <Facebook
            className="group-hover:text-blue-400 group-hover:scale-110 duration-75 ease-in-out"
          />
        </li>
        <li>
          <ThemeChanger />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
