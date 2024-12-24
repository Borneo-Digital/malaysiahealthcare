'use client'

import { useState } from 'react'
import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

// Add interface for search result type
interface SearchResult {
  id: number
  title: string
  type: 'treatment' | 'hospital' | 'doctor'
}

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically call your search API
    // For now, we'll just simulate some results
    const simulatedResults: SearchResult[] = [
      { id: 1, title: 'Cardiology Services in Kuala Lumpur', type: 'treatment' },
      { id: 2, title: 'Dr. Ahmad Specialist Hospital', type: 'hospital' },
      { id: 3, title: 'Dr. Sarah Lee, Oncologist', type: 'doctor' },
    ]
    setSearchResults(simulatedResults)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <SearchIcon className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Search Malaysia Healthcare</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input
            type="search"
            placeholder="Search treatments, hospitals, or doctors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type="submit">Search</Button>
        </form>
        {searchResults.length > 0 && (
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Results:</h3>
            <ul className="space-y-2">
              {searchResults.map((result: SearchResult) => (
                <li key={result.id} className="p-2 bg-gray-100 rounded">
                  <span className="font-medium">{result.title}</span>
                  <span className="ml-2 text-sm text-gray-500">({result.type})</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

