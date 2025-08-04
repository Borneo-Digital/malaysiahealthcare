"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function MYMT2026WhatsHappening() {
  const params = useParams();
  const locale = params.locale as string;

  return (
    <section className="py-16 text-white relative overflow-hidden" style={{ backgroundColor: '#e54a4b' }}>
      {/* Decorative Pattern - Left */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-20 hidden lg:block">
        <div className="text-6xl">✧</div>
      </div>
      
      {/* Decorative Pattern - Right */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-20 hidden lg:block">
        <div className="text-6xl">✧</div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What&apos;s <em className="italic">Happening</em>
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Exciting events, announcements, and activities are on the horizon.
            <br />
            Watch this space for the latest on MYMT2026.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* MH Expo Card */}
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-96">
            <div className="relative w-full h-full">
              <Image
                src="/images/home4/5.png"
                alt="MH Expo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Contest Card - Clickable */}
          <Link href={`/${locale}/magic-contest-tnc`} className="block group">
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-96 group-hover:shadow-[0_0_30px_rgba(229,74,75,0.6)] group-hover:scale-105 cursor-pointer">
              <div className="relative w-full h-full">
                <Image
                  src="/images/home4/6.png"
                  alt="#UnboxTheMYMT2026Magic Contest"
                  fill
                  className="object-cover group-hover:brightness-110 transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Glow overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}