"use client"

import { cn } from "@/lib/utils"
import { CheckCircle } from "lucide-react"
import type { Chapter } from "@/lib/chapters"

interface ChapterCardProps {
  chapter: Chapter
  isSelected: boolean
  isCompleted: boolean
  onClick: () => void
}

export function ChapterCard({ chapter, isSelected, isCompleted, onClick }: ChapterCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors",
        isSelected ? "bg-primary text-primary-foreground" : "hover:bg-muted",
        isCompleted && !isSelected && "border-l-4 border-primary",
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium",
            isSelected ? "bg-primary-foreground text-primary" : "bg-muted-foreground/20 text-foreground",
          )}
        >
          {chapter.number}
        </div>
        <span className="font-medium">{chapter.title}</span>
      </div>
      {isCompleted && (
        <CheckCircle className={cn("h-5 w-5", isSelected ? "text-primary-foreground" : "text-primary")} />
      )}
    </div>
  )
}

