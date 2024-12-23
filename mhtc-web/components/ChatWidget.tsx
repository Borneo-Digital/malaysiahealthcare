'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg w-80 h-96 flex flex-col">
          <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Chat with us</h3>
            <button onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 p-4">
            {/* Placeholder for chat interface */}
            <p className="text-gray-500 text-center mt-8">
              Chat functionality will be implemented based on your preferred chat solution.
            </p>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary/90 rounded-full h-14 w-14 flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}

