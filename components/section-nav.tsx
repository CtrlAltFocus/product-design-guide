"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

import type { Chapter } from "@/lib/chapters"
import { sectionTitles } from "@/lib/utils";

interface SectionNavProps {
  activeSection: string
  onSectionChange: (section: string) => void
  chapter: Chapter
  onNavigateChapter: (direction: "next" | "previous") => void
  prevChapter?: Chapter | null
  nextChapter?: Chapter | null
}

export function SectionNav({
  activeSection,
  onSectionChange,
  chapter,
  onNavigateChapter,
  prevChapter,
  nextChapter,
}: SectionNavProps) {
  const sections = Object.entries(sectionTitles).map(([id, label]) => ({ id, label }));

  // Function to truncate text with ellipsis
  const truncate = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t w-full py-2 px-4 z-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-2">
          {/* Section navigation */}
          <div className="flex overflow-x-auto gap-2 pb-1 -mx-1 px-1 justify-between md:justify-center">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                size="sm"
                className={cn("whitespace-nowrap", activeSection === section.id && "bg-muted font-medium")}
                onClick={() => onSectionChange(section.id)}
              >
                {section.label}
              </Button>
            ))}
          </div>

          {/* 
          // Chapter navigation
          <div className="flex justify-between items-center pt-1 border-t">
            <div>
              {prevChapter && (
                <Button variant="ghost" size="sm" className="gap-1" onClick={() => onNavigateChapter("previous")}>
                  <ChevronLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">{prevChapter.number}. </span>
                  <span className="truncate max-w-[100px] sm:max-w-[150px]">{truncate(prevChapter.title, 15)}</span>
                </Button>
              )}
            </div>

            <div className="text-xs text-muted-foreground">{chapter.number} of 12</div>

            <div>
              {nextChapter && (
                <Button variant="ghost" size="sm" className="gap-1" onClick={() => onNavigateChapter("next")}>
                  <span className="hidden sm:inline">{nextChapter.number}. </span>
                  <span className="truncate max-w-[100px] sm:max-w-[150px]">{truncate(nextChapter.title, 15)}</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

