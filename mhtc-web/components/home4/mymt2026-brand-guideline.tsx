"use client";

import Image from "next/image";

export default function MYMT2026BrandGuideline() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center max-w-6xl mx-auto">
          
          {/* Left: MYMT 2026 Logo */}
          <div className="mb-12 lg:mb-0 flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              MYMT 2026 Logo
            </h3>
            
            {/* MYMT 2026 Logo */}
            <div className="w-96 h-96 bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
              <div className="relative w-80 h-80">
                <Image
                  src="/images/home4/MYMTlogo.png"
                  alt="MYMT 2026 Logo - Malaysia Year of Medical Tourism"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 320px, 320px"
                />
              </div>
            </div>
          </div>

          {/* Right: Brand Guideline Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Brand Guideline
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg lg:max-w-none mx-auto lg:mx-0">
              Access and download all official #MYMT2026 brand assets and guidelines here
            </p>
            
            {/* Download Button */}
            <a
              href="https://drive.google.com/file/d/1pznlUi7f_iDBvVcM6kf-_h_3kCLmcM8F/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <svg 
                className="w-5 h-5 mr-3" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              Download here
            </a>
            
            {/* MYMT Poster Full View */}
            <div className="mt-12 w-full mx-auto lg:mx-0">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative w-full h-[600px]">
                  <Image
                    src="/images/home4/mymtposter.png"
                    alt="MYMT 2026 Poster - Healing Meets Hospitality"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}