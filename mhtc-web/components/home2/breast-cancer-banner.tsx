import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function BreastCancerBanner() {
  return (
    <section className="bg-pink-50 py-12">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-[#C8102E] mb-3">
              OCTOBER: BREAST CANCER AWARENESS MONTH
            </h2>
            <p className="text-gray-700 max-w-2xl mb-6">
              Join us this October as we raise awareness about breast cancer prevention, early detection, and the
              advanced treatment options available in Malaysia. Our member hospitals offer comprehensive screening and
              treatment programs with world-class oncology specialists.
            </p>
            <Button className="bg-[#C8102E] hover:bg-[#A50E25] text-white transition-all duration-300 hover:scale-105">
              LEARN MORE
            </Button>
          </div>
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <div className="relative w-[500px] h-[500px]">
              <Image
                src="/images/home2/breast-cancer-reduce-risk.jpg.avif"
                alt="Breast Cancer Awareness"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 