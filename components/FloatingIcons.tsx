"use client";
import { SiInstagram, SiLinkedin } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";

const SIZE = 25;

export default function FloatingIcons() {
  return (
    <div className="flex gap-4">
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
