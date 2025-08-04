"use client"

import { useTranslation } from "@/hooks/useTranslation";
import { MYMT2026Translations } from "@/types/translations";

export default function MYMT2026Hero() {
  const { t, isRTL } = useTranslation<MYMT2026Translations>("mymt2026");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/xK5yMeShnSM?autoplay=1&mute=1&loop=1&playlist=xK5yMeShnSM&controls=0&showinfo=0&rel=0&modestbranding=1&vq=hd1080"
          title="MYMT2026 Background Video"
          className="absolute top-1/2 left-1/2 pointer-events-none"
          style={{
            transform: 'translate(-50%, -50%) scale(1.3)',
            width: '120vw',
            height: '120vh',
            minWidth: '120%',
            minHeight: '120%',
          }}
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#BE1E2D]/20 via-transparent to-black/30 z-10"></div>

      {/* Content */}
      <div className={`container mx-auto px-4 py-8 relative z-20 ${isRTL ? "rtl" : ""}`}>
        <div className="max-w-4xl text-left text-white ml-0 lg:ml-16">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 lg:mb-8 text-white">
            <span className="block">{t.hero.title.split(' ').slice(0, 3).join(' ')}</span>
            <span className="block">{t.hero.title.split(' ').slice(3, 6).join(' ')}</span>
            <span className="block">{t.hero.title.split(' ').slice(6).join(' ')}</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-white max-w-3xl">
            {t.hero.description}
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
      
      {/* Malaysian Flag Motif */}
      <div className="absolute top-8 right-8 w-16 h-16 opacity-50 z-20">
        <div className="w-full h-full bg-gradient-to-br from-red-600 to-blue-900 rounded-full border-2 border-white/30"></div>
      </div>
    </section>
  );
}