import { getTargetTriple } from 'next/dist/build/swc/generated-native';
import React from 'react'

interface ButtonProps {
    text: string;
    style: string;
    type: string;
    destination: string;
    newWindow: boolean;
}

export default function Button({text, style, type, destination, newWindow}: ButtonProps) {
    const base = "px-2 py-1 rounded-sm text-lg shadow border-2 cursor-pointer"
    const primary = base + " border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-main-purple hover:bg-opacity-60";
    const secondary = base + " border-main-pink text-main-pink";
    let target = "_self";

  switch (type) {
    case 'button':
      return (
        <button className={style === 'primary' ? primary : secondary}>
          {text}
        </button>
      )
    case 'link':
      if (newWindow) {
        target = "_blank";
      }
      return (
        <a className={style === 'primary' ? primary : secondary} href={destination} target={target}>
          {text}
        </a>
      )
  }

}
