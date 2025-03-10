"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import type { Chapter } from "@/lib/chapters"
import { Button } from "@/components/ui/button"
import { CheckCircle, ChevronRight, ChevronLeft } from "lucide-react"
import { SectionNav } from "@/components/section-nav"
import { useTheme } from "next-themes"

interface ChapterContentProps {
  chapter: Chapter
  isCompleted: boolean
  onToggleComplete: () => void
  onNavigate: (direction: "next" | "previous") => void
  prevChapter?: Chapter | null
  nextChapter?: Chapter | null
}

export function ChapterContent({
  chapter,
  isCompleted,
  onToggleComplete,
  onNavigate,
  prevChapter,
  nextChapter,
}: ChapterContentProps) {
  const [activeSection, setActiveSection] = useState<string>("what")
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const whatRef = useRef<HTMLDivElement>(null)
  const howRef = useRef<HTMLDivElement>(null)
  const whyRef = useRef<HTMLDivElement>(null)
  const sequenceRef = useRef<HTMLDivElement>(null)
  const formatRef = useRef<HTMLDivElement>(null)
  const formatHelpsRef = useRef<HTMLDivElement>(null)

  const handleSectionChange = (section: string) => {
    setActiveSection(section)

    // Scroll to the section
    const refs: Record<string, React.RefObject<HTMLDivElement | null>> = {
      what: whatRef,
      how: howRef,
      why: whyRef,
      sequence: sequenceRef,
      format: formatRef,
      formatHelps: formatHelpsRef,
    }

    const ref = refs[section]
    if (ref && ref.current) {
      // Add a small offset to account for sticky header
      const yOffset = -130
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160 // Add offset for better detection

      const refs: Array<{ id: string; ref: React.RefObject<HTMLDivElement | null> }> = [
        { id: "what", ref: whatRef },
        { id: "how", ref: howRef },
        { id: "why", ref: whyRef },
        { id: "sequence", ref: sequenceRef },
        { id: "format", ref: formatRef },
        { id: "formatHelps", ref: formatHelpsRef },
      ]

      // Find the last section that has been scrolled past
      let currentSection = activeSection

      for (const { id, ref } of refs) {
        if (ref.current && ref.current.offsetTop <= scrollPosition) {
          currentSection = id
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  const gradientStyle = {
    background: isDark 
      ? 'linear-gradient(to bottom, hsl(var(--background)) 70%, transparent 100%)' 
      : 'linear-gradient(to bottom, white 70%, transparent 100%)'
  }

  return (
    <div className="chapter-container">
      <div className="sticky top-[50px] z-10 py-4 pb-10 -mb-5" style={gradientStyle}>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">
            {chapter.number}. {chapter.title}
          </h2>
          <Button variant={isCompleted ? "outline" : "default"} onClick={onToggleComplete} className="gap-2">
            {isCompleted ? (
              <>
                <CheckCircle className="h-4 w-4" />
                Completed
              </>
            ) : (
              "Mark as Complete"
            )}
          </Button>
        </div>
      </div>
      <div className="chapter-content space-y-12 pb-24 pt-6">
        <section ref={whatRef} className="space-y-4">
          <h3 className="text-2xl font-semibold">What</h3>
          <p className="text-muted-foreground leading-relaxed">{chapter.what}</p>
        </section>

        <section ref={howRef} className="space-y-4">
          <h3 className="text-2xl font-semibold">How</h3>
          <p className="text-muted-foreground leading-relaxed">{chapter.how}</p>
        </section>

        <section ref={whyRef} className="space-y-4">
          <h3 className="text-2xl font-semibold">Why</h3>
          <p>{chapter.why.intro}</p>
          <ol className="space-y-6 list-decimal pl-6 mt-6">
            {chapter.why.whys.map((why, index) => (
              <li key={index}>
                <p className="font-medium">{why.question}</p>
                <p className="text-muted-foreground mt-1">{why.answer}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6">
            <p className="font-medium">Conclusion:</p>
            <p className="mt-1">{chapter.why.conclusion}</p>
          </div>
        </section>

        <section ref={sequenceRef} className="space-y-4">
          <h3 className="text-2xl font-semibold">Why It Comes After/Before</h3>
          <div className="space-y-6">
            {chapter.sequence.after && (
              <div>
                <p className="font-medium">Why after:</p>
                <p className="text-muted-foreground mt-1">{chapter.sequence.after}</p>
              </div>
            )}
            {chapter.sequence.before && (
              <div>
                <p className="font-medium">Why before:</p>
                <p className="text-muted-foreground mt-1">{chapter.sequence.before}</p>
              </div>
            )}
          </div>
        </section>

        <section ref={formatRef} className="space-y-4">
          <h3 className="text-2xl font-semibold">What Format or Output Is Needed</h3>
          <ul className="space-y-2 list-disc pl-6">
            {chapter.format.outputs.map((output, index) => (
              <li key={index} className="text-muted-foreground">
                {output}
              </li>
            ))}
          </ul>

          <div ref={formatHelpsRef} className="mt-10 pt-6 border-t">
            <h4 className="text-xl font-semibold mb-4">Why This Format Helps and How</h4>
            <div className="space-y-6">
              <div>
                <p className="font-medium">Why:</p>
                <p className="text-muted-foreground mt-1">{chapter.formatHelps.why}</p>
              </div>
              <div>
                <p className="font-medium">How:</p>
                <p className="text-muted-foreground mt-1">{chapter.formatHelps.how}</p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-between pt-6">
          {prevChapter ? (
            <Button variant="outline" className="gap-2" onClick={() => onNavigate("previous")}>
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
          ) : (
            <div></div>
          )}

          {nextChapter && (
            <Button className="gap-2" onClick={() => onNavigate("next")}>
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>

        <SectionNav
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
          chapter={chapter}
          onNavigateChapter={onNavigate}
          prevChapter={prevChapter}
          nextChapter={nextChapter}
        />
      </div>
    </div>
  )
}