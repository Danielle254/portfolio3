import React from 'react'

interface ButtonProps {
    text: string;
    style: string;
    type: string;
}

export default function Button({text, style, type}: ButtonProps) {
    const base = "px-2 py-1 rounded-sm text-lg font-bold shadow border-2"
    const primary = base + " border-accent-orange text-accent-orange";
    const secondary = base + " border-main-pink text-main-pink";

  switch (type) {
    case 'button':
      return (
        <button className={style === 'primary' ? primary : secondary}>
          {text}
        </button>
      )
    case 'link':
      return (
        <a className={style === 'primary' ? primary : secondary}>
          {text}
        </a>
      )
  }

}
