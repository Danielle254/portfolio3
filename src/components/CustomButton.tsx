import React from 'react'

interface CustomButtonProps {
    text: string;
    style: "primary" | "secondary" | "dark";
}

export default function CustomButton({text, style}: CustomButtonProps) {
    const base = "px-2 py-1 rounded-sm text-lg shadow border-2 cursor-pointer"
    const primary = base + " border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-main-purple hover:bg-opacity-60";
    const secondary = base + " border-light-purple text-light-purple hover:bg-light-purple hover:text-main-purple hover:bg-opacity-60";
    const dark = base + " border-main-purple text-main-purple hover:bg-dark-purple hover:text-light-purple hover:bg-opacity-60"


  switch (style) {
    case 'primary':
      return (
        <button className={primary}>
          {text}
        </button>
      )
    case 'secondary':
      return (
        <button className={secondary}>
          {text}
        </button>
      )  
    case 'dark':
      return (
        <button className={dark}>
          {text}
        </button>
      )
    }
}
