"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ChevronRight, CheckCircle } from "lucide-react"
import { chapters } from "@/lib/chapters"
import { ThemeToggle } from "@/components/theme-toggle"
import { Search } from "@/components/search"

export default function Home() {
  const [completedChapters, setCompletedChapters] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Load progress from localStorage if available
    const savedProgress = localStorage.getItem("pdp-guide-progress");
    if (savedProgress) {
      const parsed = JSON.parse(savedProgress);
      setCompletedChapters(parsed);
      setProgress((parsed.length / chapters.length) * 100);
    }
  }, []);

  const selectChapter = (chapterId: string) => {
    window.location.href = `/guide?chapter=${chapterId}`
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-baseline gap-2">
            <h1 className="text-lg font-semibold tracking-tight">Product Design Process</h1>
            <span className="text-sm text-muted-foreground">for New Founders</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 md:w-48">
              <Progress value={progress} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1 text-center">{Math.round(progress)}% Complete</p>
            </div>
            <Search onSelectChapter={selectChapter} />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container py-10 md:py-16">
        <div className="text-center space-y-4 mb-16 md:mb-24">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Product Design Process</h1>
          <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
            A step-by-step guide for new founders to design successful products with confidence, overcoming self-doubt,
            perfectionism, and fear of failure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {chapters.map((chapter) => {
            const isCompleted = completedChapters.includes(chapter.id)

            return (
              <Link href={`/guide?chapter=${chapter.id}`} key={chapter.id}>
                <div
                  className={`group relative border rounded-lg p-6 transition-colors ${
                    isCompleted ? "border-primary/50 bg-primary/5" : "hover:border-primary"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-none">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium ${
                          isCompleted ? "bg-primary text-primary-foreground group-hover:bg-blue-700" : "bg-muted group-hover:bg-muted/80 dark:group-hover:bg-muted/60"
                        }`}
                      >
                        {chapter.number}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-semibold tracking-tight">{chapter.title}</h2>
                        {isCompleted && <CheckCircle className="h-4 w-4 text-primary" />}
                      </div>
                      <p className="text-sm text-muted-foreground">{chapter.what}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div
                      className={`h-1.5 w-1.5 rounded-full ${isCompleted ? "bg-primary" : "bg-muted-foreground/0"}`}
                    />

                    <Button variant="ghost" className={`gap-2 text-sm hover:text-primary ${isCompleted ? "group-hover:bg-primary/10" : "group-hover:bg-secondary"}`} asChild>
                      <div>
                        Read chapter
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </Button>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </main>
    </div>
  )
}