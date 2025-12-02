"use client";

import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { SiInstagram, SiLinkedin } from "react-icons/si";

export default function Footer() {
  const SIZE = 25;

  return (
    <div className="h-24 bg-gray-100 flex justify-center items-center gap-4">
      <Link
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiInstagram size={SIZE} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/antoine-bentini-17b7a3197/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLinkedin size={SIZE} />
      </Link>
      <Link
        href="mailto:bentini.pro@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdOutlineMail size={SIZE} />
      </Link>
    </div>
  );
}
