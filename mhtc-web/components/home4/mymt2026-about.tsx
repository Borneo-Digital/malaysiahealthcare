"use client";

import Image from "next/image";

export default function MYMT2026About() {
  return (
    <section className="py-16 text-white" style={{ backgroundColor: '#e54a4b' }}>
      <div className="container mx-auto px-4">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12 lg:items-start">
          
          {/* Left: Text Content (Takes 1 column) */}
          <div className="lg:col-span-1 mb-12 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              #MYMT26
            </h3>
            <p className="text-lg mb-6 leading-relaxed">
              Malaysia Year of Medical Tourism 2026 (MYMT2026) is a national initiative by the Malaysia Healthcare Travel Council (MHTC), launched in alignment with Visit Malaysia 2026, to elevate Malaysia as a leading global destination for premier, patient-centric healthcare travel.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you&apos;re seeking trusted medical care, wellness experiences or seamless end-to-end services — <strong>Discover a Destination Where Care and Culture Converge.</strong>
            </p>
          </div>

          {/* Right: Flip Cards (Takes 2 columns) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* First Card - What is MYMT2026? */}
            <div className="relative h-[28rem] w-full group [perspective:1000px]">
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full rounded-lg shadow-lg [backface-visibility:hidden] overflow-hidden">
                  {/* Full Image */}
                  <Image
                    src="/images/home4/national.png"
                    alt="What is MYMT2026"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 w-full h-full rounded-lg shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] text-white" style={{ backgroundColor: '#8e3131' }}>
                  <div className="p-6 h-full flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-4">
                      What is MYMT2026?
                    </h3>
                    <p className="text-sm leading-relaxed">
                      MYMT2026 is a bold initiative to position Malaysia as a global leader in medical tourism. It drives post-pandemic recovery, attracts high-value health travellers, and aligns with Visit Malaysia 2026, creating synergy across healthcare, wellness, hospitality, and immersive travel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Card - What is MYMT2026 Trying to Achieve? */}
            <div className="relative h-[28rem] w-full group [perspective:1000px]">
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full rounded-lg shadow-lg [backface-visibility:hidden] overflow-hidden">
                  {/* Full Image */}
                  <Image
                    src="/images/home4/whatismymt.png"
                    alt="A National Movement for Healthcare & Tourism"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 w-full h-full rounded-lg shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] text-white" style={{ backgroundColor: '#8e3131' }}>
                  <div className="p-6 h-full flex flex-col justify-center">
                    <h3 className="text-lg font-bold mb-3">
                      MYMT2026 Strategic Goals:
                    </h3>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2 mt-1 text-xs">•</span>
                        <span>Attract more international health travellers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2 mt-1 text-xs">•</span>
                        <span>Elevate global visibility through campaigns</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2 mt-1 text-xs">•</span>
                        <span>Enhance infrastructure & service excellence</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2 mt-1 text-xs">•</span>
                        <span>Foster strong industry partnerships</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2 mt-1 text-xs">•</span>
                        <span>Deliver seamless care journeys</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2 mt-1 text-xs">•</span>
                        <span>Highlight Malaysia&apos;s unique care & warmth</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}