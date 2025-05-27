import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/home2/medical-tourism.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 container mx-auto max-w-[1200px] px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to begin your healing journey?</h2>
        <Button
          size="lg"
          className="bg-[#C8102E] hover:bg-[#A50E25] text-white px-10 py-7 h-auto text-lg shadow-lg transition-all duration-300 hover:scale-105"
        >
          CONTACT A SPECIALIST
        </Button>
      </div>
    </section>
  )
} 