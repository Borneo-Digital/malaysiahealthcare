"use client";

import Image from "next/image";

export default function MYMT2026SupportedBy() {
  const supporters = [
    {
      name: "Ministry of Health Malaysia",
      logo: "/images/home4/support/1-moh-logo.png",
      alt: "Ministry of Health Malaysia"
    },
    {
      name: "Ministry of Tourism, Arts & Culture Malaysia", 
      logo: "/images/home4/support/2-motac-logo.png",
      alt: "Ministry of Tourism, Arts & Culture Malaysia"
    },
    {
      name: "Ministry of Finance Malaysia",
      logo: "/images/home4/support/3-mof-logo.png", 
      alt: "Ministry of Finance Malaysia"
    },
    {
      name: "MyGovernment",
      logo: "/images/home4/support/4-mygov-logo.png",
      alt: "MyGovernment"
    },
    {
      name: "Immigration Department Malaysia",
      logo: "/images/home4/support/5-imigration-logo.png",
      alt: "Immigration Department Malaysia"
    },
    {
      name: "Association of Private Hospitals Malaysia",
      logo: "/images/home4/support/6-aphm-logo.png",
      alt: "Association of Private Hospitals Malaysia"
    },
    {
      name: "Malaysia Society for Quality in Health",
      logo: "/images/home4/support/7-msdc-logo.png",
      alt: "Malaysia Society for Quality in Health"
    },
    {
      name: "Malaysian Society for Quality in Health",
      logo: "/images/home4/support/8-msqh-logo.png",
      alt: "Malaysian Society for Quality in Health"
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-red-600">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Supported By
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            MYMT2026 is proudly backed by leading government ministries and industry organisations whose support empowers our vision.
          </p>
        </div>

        {/* Supporters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {supporters.map((supporter, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-300 min-h-[120px]"
            >
              <div className="relative w-full h-20 flex items-center justify-center">
                <Image
                  src={supporter.logo}
                  alt={supporter.alt}
                  fill
                  className="object-contain filter hover:brightness-110 transition-all duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}