import React from 'react'

interface ButtonProps {
    text: string;
    style: string
}

export default function Button({text, style}: ButtonProps) {
    const base = "px-2 py-1 border border-2 rounded-sm text-sm rounded-sm text-sm"
    const primary = base + " border-accent-yellow text-accent-yellow";
    const secondary = base + " border-main-pink text-main-pink";

  return (
    <button className={style === 'primary' ? primary : secondary}>
      {text}
    </button>
  )
}
