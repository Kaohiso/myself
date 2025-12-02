"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="my-4">
      <ul className="flex justify-center items-center space-x-6">
        <li>
          <Link
            href="/"
            className={`
                relative no-underline transition-all duration-300
                px-3 py-1
                ${pathname === "/" ? "text-gray-600" : "text-gray-300"}

                before:content-[''] before:absolute before:block 
                before:border-b-2 before:border-r-2 before:border-transparent
                before:w-0 before:h-0 
                before:transition-all before:duration-300 before:ease-in-out 
                before:bottom-0 before:right-0

                after:content-[''] after:absolute after:block 
                after:border-t-2 after:border-l-2 after:border-transparent
                after:w-0 after:h-0 
                after:transition-all after:duration-300 after:ease-in-out 
                after:top-0 after:left-0

                hover:before:w-2.5 hover:before:h-2.5 hover:before:border-black
                hover:after:w-2.5 hover:after:h-2.5 hover:after:border-black
            `}
          >
            My artworks
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className={`
                relative no-underline transition-all duration-300
                px-3 py-1
                ${pathname === "/about" ? "text-black" : "text-gray-400"}

                before:content-[''] before:absolute before:block 
                before:border-b-2 before:border-r-2 before:border-transparent
                before:w-0 before:h-0 
                before:transition-all before:duration-300 before:ease-in-out 
                before:bottom-0 before:right-0

                after:content-[''] after:absolute after:block 
                after:border-t-2 after:border-l-2 after:border-transparent
                after:w-0 after:h-0 
                after:transition-all after:duration-300 after:ease-in-out 
                after:top-0 after:left-0

                hover:before:w-2.5 hover:before:h-2.5 hover:before:border-black
                hover:after:w-2.5 hover:after:h-2.5 hover:after:border-black
            `}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
