import React from "react";
import Link from "next/link";

export default function Nav({
  toggleDrawerOpen,
}: {
  toggleDrawerOpen: () => void;
}) {
  return (
    <nav>
      <ul className="flex flex-col gap-10 pt-16 text-lg font-bold text-center">
        <li className="hover:shadow-[0_0_10px_5px_#ffbd59] hover:rounded transition duration-300 ease-in-out">
          <Link href="/" onClick={toggleDrawerOpen}>
            Home
          </Link>
        </li>
        <li className="hover:shadow-[0_0_10px_5px_#ffbd59] hover:rounded transition duration-300 ease-in-out">
          <Link href="/#projects-section" onClick={toggleDrawerOpen}>
            Portfolio
          </Link>
        </li>
        <li className="hover:shadow-[0_0_10px_5px_#ffbd59] hover:rounded transition duration-300 ease-in-out">
          <Link href="/bio" onClick={toggleDrawerOpen}>
            Bio
          </Link>
        </li>
        <li className="hover:shadow-[0_0_10px_5px_#ffbd59] hover:rounded hover:px-1 transition duration-300 ease-in-out">
          <Link
            href="/resume.pdf"
            target="_blank"
            locale={false}
            className="flex flex-row items-center gap-1"
          >
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
              role="img"
              aria-label="download PDF"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
