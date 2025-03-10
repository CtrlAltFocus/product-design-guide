"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { sectionTitles } from "@/lib/utils";

interface SectionNavProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function SectionNav({
  activeSection,
  onSectionChange
}: SectionNavProps) {
  const sections = Object.entries(sectionTitles).map(([id, label]) => ({ id, label }));

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
        </div>
      </div>
    </div>
  )
}

