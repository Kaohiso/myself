"use client";
import { SiInstagram, SiLinkedin } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";

const SIZE = "w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5";

export default function FloatingIcons() {
  return (
    <div className="flex gap-4">
      {/* <Link
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiInstagram className={SIZE} />
      </Link> */}
      <Link
        href="https://www.linkedin.com/in/antoine-bentini-17b7a3197/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLinkedin className={SIZE} />
      </Link>
      <Link
        href="mailto:bentini.pro@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdOutlineMail className={SIZE} />
      </Link>
    </div>
  );
}
