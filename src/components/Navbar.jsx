import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <div className="flex items-center gap-3">

  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold">

    OE

  </div>

  <div>

    <h1 className="font-bold text-white">
      Oghenemaga
    </h1>

  </div>

</div>

        <div className="hidden md:flex gap-8 text-gray-300">
            <button
  className="md:hidden"
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? <X size={24} /> : <Menu size={24} />}
</button>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
      {
  isOpen && (
    <div className="md:hidden bg-black border-t border-white/10">

      <div className="flex flex-col p-6 gap-4">

        <a href="#about">About</a>

        <a href="#skills">Skills</a>

        <a href="#projects">Projects</a>

        <a href="#contact">Contact</a>

      </div>

    </div>
  )
}
    </nav>
  );
}



export default Navbar;