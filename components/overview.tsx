"use client"

import { useState } from "react"
import { chapters } from "@/lib/chapters"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CheckCircle, Info } from "lucide-react"

interface OverviewProps {
  completedChapters: string[]
  onSelectChapter: (chapterId: string) => void
}

export function Overview({ completedChapters, onSelectChapter }: OverviewProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (chapterId: string) => {
    onSelectChapter(chapterId)
    setIsOpen(false)
  }

  const completionPercentage = Math.round((completedChapters.length / chapters.length) * 100)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Info className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Overview</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Product Design Process Overview</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium">Your Progress</h3>
            <div className="text-lg font-bold">{completionPercentage}%</div>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              This guide walks you through a 12-step product design process tailored for new founders. Each step
              includes what to do, how to do it, and why it matters.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
              {chapters.map((chapter) => {
                const isCompleted = completedChapters.includes(chapter.id)
                return (
                  <div
                    key={chapter.id}
                    className={`p-3 rounded-md border cursor-pointer transition-colors ${
                      isCompleted ? "border-primary bg-primary/5" : "border-border hover:bg-muted"
                    }`}
                    onClick={() => handleSelect(chapter.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-medium">
                        {chapter.number}. {chapter.title}
                      </div>
                      {isCompleted && <CheckCircle className="h-4 w-4 text-primary" />}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

