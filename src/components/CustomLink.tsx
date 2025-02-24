import React from 'react'
import Link from 'next/link';

interface CustomLinkProps {
    text: string;
    style: "primary" | "secondary" | "primaryDark" | "secondaryDark";
    destination: string;
    newWindow: boolean;
}

export default function CustomLink({text, style, destination, newWindow}: CustomLinkProps) {
    const base = "px-2 py-1 rounded-sm text-lg shadow border-2 cursor-pointer"
    const primary = base + " border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-main-purple hover:bg-opacity-60";
    const secondary = base + " border-light-purple text-light-purple hover:bg-light-purple hover:text-main-purple hover:bg-opacity-60";
    const primaryDark = base + " border-main-purple bg-main-purple text-light-purple hover:bg-transparent hover:text-main-purple";
    const secondaryDark = base + " border-main-purple text-main-purple hover:bg-main-purple hover:text-light-purple hover:bg-opacity-60"

  switch (style) {
    case 'primary':
      return (
        <Link
        href={destination}
        className={primary}
        target={newWindow ? '_blank' : '_self'}
        >{text}</Link>
      )
    case 'secondary':
        return (
            <Link
            href={destination}
            className={secondary}
            target={newWindow ? '_blank' : '_self'}
            >{text}</Link>
        )
    case 'primaryDark':
        return (
        <Link
        href={destination}
        className={primaryDark}
        target={newWindow ? '_blank' : '_self'}
        >{text}</Link>
        )
    case 'secondaryDark':
      return (
      <Link
      href={destination}
      className={secondaryDark}
      target={newWindow ? '_blank' : '_self'}
      >{text}</Link>
      )
  }

}
