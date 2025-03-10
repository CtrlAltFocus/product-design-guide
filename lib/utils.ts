import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * The titles used for each section in the chapter content.
 * Also used in the bottom in-chapter navigation menu.
 */
export const sectionTitles = {
  what: "What",
  how: "How",
  why: "Why",
  sequence: "Step context",
  format: "Output format",
}
