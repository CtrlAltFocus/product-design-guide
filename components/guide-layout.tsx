"use client"

import { useState, useEffect } from "react"
import { ChapterContent } from "@/components/chapter-content"
import { Progress } from "@/components/ui/progress"
import { chapters } from "@/lib/chapters"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Search } from "@/components/search"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export function GuideLayout() {
  const searchParams = useSearchParams()
  const chapterId = searchParams.get("chapter")

  const [selectedChapter, setSelectedChapter] = useState(
    chapterId ? chapters.find((c) => c.id === chapterId) || chapters[0] : chapters[0],
  )
  const [progress, setProgress] = useState(0)
  const [completedChapters, setCompletedChapters] = useState<string[]>([])

  // Get previous and next chapters
  const currentIndex = chapters.findIndex((c) => c.id === selectedChapter.id)
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null

  useEffect(() => {
    // Load progress from localStorage if available
    const savedProgress = localStorage.getItem("pdp-guide-progress")
    if (savedProgress) {
      const parsed = JSON.parse(savedProgress)
      setCompletedChapters(parsed)
      setProgress((parsed.length / chapters.length) * 100)
    }
  }, [])

  useEffect(() => {
    if (chapterId) {
      const chapter = chapters.find((c) => c.id === chapterId)
      if (chapter) {
        setSelectedChapter(chapter)
      }
    }
  }, [chapterId])

  const toggleChapterCompletion = (chapterId: string) => {
    let newCompletedChapters

    if (completedChapters.includes(chapterId)) {
      newCompletedChapters = completedChapters.filter((id) => id !== chapterId)
    } else {
      newCompletedChapters = [...completedChapters, chapterId]
    }

    setCompletedChapters(newCompletedChapters)
    setProgress((newCompletedChapters.length / chapters.length) * 100)

    // Save to localStorage
    localStorage.setItem("pdp-guide-progress", JSON.stringify(newCompletedChapters))
  }

  const selectChapter = (chapterId: string) => {
    const chapter = chapters.find((c) => c.id === chapterId)
    if (chapter) {
      setSelectedChapter(chapter)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const navigateToChapter = (direction: "next" | "previous") => {
    const currentIndex = chapters.findIndex((c) => c.id === selectedChapter.id)
    if (direction === "next" && currentIndex < chapters.length - 1) {
      setSelectedChapter(chapters[currentIndex + 1])
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (direction === "previous" && currentIndex > 0) {
      setSelectedChapter(chapters[currentIndex - 1])
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-2 sm:px-6">
          {/* Back button */}
          <div className="mr-2 flex">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to home</span>
              </Button>
            </Link>
          </div>

          {/* Ultra simplified mobile header */}
          <div className="flex items-center justify-between flex-1">
            <div className="flex">
              <Link href="/">
                <h1 className="text-sm sm:text-md font-medium">Product-design.guide</h1>
              </Link>
            </div>

            <div className="flex items-center gap-2 pr-1">
              {/* Only show progress bar on larger screens */}
              <div className="hidden sm:block sm:w-24 md:w-48">
                <Progress value={progress} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1 text-center">{Math.round(progress)}% Complete</p>
              </div>

              {/* Search is probably important to keep */}
              <Search onSelectChapter={selectChapter} />

              {/* Theme toggle - keep this accessible */}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="container py-4 px-4 sm:px-6 sm:py-6">
        <div className="max-w-3xl mx-auto">
          <ChapterContent
            chapter={selectedChapter}
            isCompleted={completedChapters.includes(selectedChapter.id)}
            onToggleComplete={() => toggleChapterCompletion(selectedChapter.id)}
            onNavigate={navigateToChapter}
            prevChapter={prevChapter}
            nextChapter={nextChapter}
          />
        </div>
      </div>
    </div>
  )
}
