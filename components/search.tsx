"use client"

import { useState } from "react"
import { SearchIcon, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { chapters } from "@/lib/chapters"

interface SearchProps {
  onSelectChapter: (chapterId: string) => void
}

export function Search({ onSelectChapter }: SearchProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredChapters = chapters.filter((chapter) => {
    if (!searchQuery.trim()) return false

    const searchLower = searchQuery.toLowerCase()

    // Search in title and what section
    if (chapter.title.toLowerCase().includes(searchLower) || chapter.what.toLowerCase().includes(searchLower)) {
      return true
    }

    // Search in how section
    if (chapter.how.toLowerCase().includes(searchLower)) {
      return true
    }

    // Search in why section
    if (
      chapter.why.intro.toLowerCase().includes(searchLower) ||
      chapter.why.conclusion.toLowerCase().includes(searchLower) ||
      chapter.why.whys.some(
        (why) => why.question.toLowerCase().includes(searchLower) || why.answer.toLowerCase().includes(searchLower),
      )
    ) {
      return true
    }

    // Search in sequence section
    if (
      (chapter.sequence.after && chapter.sequence.after.toLowerCase().includes(searchLower)) ||
      (chapter.sequence.before && chapter.sequence.before.toLowerCase().includes(searchLower))
    ) {
      return true
    }

    // Search in format section
    if (
      chapter.format.outputs.some((output) => output.toLowerCase().includes(searchLower)) ||
      chapter.formatHelps.why.toLowerCase().includes(searchLower) ||
      chapter.formatHelps.how.toLowerCase().includes(searchLower)
    ) {
      return true
    }

    return false
  })

  const handleSelect = (chapterId: string) => {
    onSelectChapter(chapterId)
    setIsOpen(false)
    setSearchQuery("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <SearchIcon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Search</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Search Chapters</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <Input
            placeholder="Search for chapters or content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10"
            autoFocus
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full"
              onClick={() => setSearchQuery("")}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Clear</span>
            </Button>
          )}
        </div>
        <div className="mt-4 max-h-[300px] overflow-y-auto">
          {searchQuery && filteredChapters.length === 0 ? (
            <p className="text-center text-muted-foreground py-4">No results found</p>
          ) : (
            <div className="space-y-2">
              {filteredChapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className="p-3 rounded-md hover:bg-muted cursor-pointer"
                  onClick={() => handleSelect(chapter.id)}
                >
                  <div className="font-medium">
                    {chapter.number}. {chapter.title}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-1">{chapter.what}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

