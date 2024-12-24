'use client'

export default function ScrollIndicator() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <button 
      onClick={scrollToContent}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2"
      aria-label="Scroll to content"
    >
      <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
        <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
      </div>
    </button>
  )
}