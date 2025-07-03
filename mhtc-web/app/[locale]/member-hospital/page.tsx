"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { MemberHospitalTranslations } from "@/types/translations";
import membersData from "@/data/members.json";
import { Header } from "@/components/home4/header";
import { Footer } from "@/components/home4/footer";
import { useState, useEffect, useRef } from "react";

export default function MemberHospital() {
  const { t, isRTL } =
    useTranslation<MemberHospitalTranslations>("member-hospital");

  const [activeTab, setActiveTab] = useState<string>("wilayahPersekutuan");
  const [selectedHospital, setSelectedHospital] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSelectedHospital(null);
      }
    };

    if (selectedHospital) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedHospital]);

  const stateLabels = {
    wilayahPersekutuan: "Wilayah Persekutuan",
    selangor: "Selangor",
    johor: "Johor",
    negeriSembilan: "Negeri Sembilan",
    penang: "Penang",
    perak: "Perak",
    melaka: "Melaka",
    sabah: "Sabah",
    sarawak: "Sarawak",
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <div
          className={`container mx-auto px-4 py-16 ${isRTL ? "rtl" : ""}`}
        >
        {/* Elite Partners Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">{t.elitePartners.title}</h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t.elitePartners.description}
            </p>
          </div>
          
          {/* Elite Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {membersData.elitePartners.map((partner) => (
              <div
                key={partner.id}
                className="relative"
                ref={selectedHospital === partner.id ? dropdownRef : null}
              >
                {/* Hospital Card */}
                <div 
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center min-h-[120px] border cursor-pointer hover:scale-105 transform"
                  onClick={() => setSelectedHospital(selectedHospital === partner.id ? null : partner.id)}
                >
                  {/* Hospital Logo */}
                  <div className="w-full h-20 mb-3 flex items-center justify-center">
                    <img
                      src={partner.logoPath}
                      alt={`${partner.name} logo`}
                      className="w-24 h-16 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <div className="w-24 h-16 bg-gray-100 rounded-lg hidden items-center justify-center">
                      <span className="text-xs text-gray-500 text-center px-2">
                        {partner.name}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-center mb-2">{partner.name}</p>
                  <p className="text-xs text-gray-400 text-center">{t.elitePartners.details.clickHint}</p>
                  
                  {/* Dropdown Arrow */}
                  <div className="mt-2">
                    <svg 
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        selectedHospital === partner.id ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Dropdown Content */}
                {selectedHospital === partner.id && (
                  <div className="absolute z-50 top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border overflow-hidden animate-in slide-in-from-top-2 duration-200">
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between border-b pb-3">
                        <h3 className="font-semibold text-lg text-gray-800">{partner.name}</h3>
                        <button
                          onClick={() => setSelectedHospital(null)}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          aria-label={t.elitePartners.details.close}
                          title={t.elitePartners.details.close}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      
                      {partner.address.length > 0 && (
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-gray-600 flex items-center">
                            <svg className="w-4 h-4 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {t.elitePartners.details.address}
                          </p>
                          <p className="text-sm text-gray-700 ml-6">{partner.address.join(' ')}</p>
                        </div>
                      )}
                      
                      {partner.phone && (
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-gray-600 flex items-center">
                            <svg className="w-4 h-4 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {t.elitePartners.details.phone}
                          </p>
                          <a 
                            href={`tel:${partner.phone}`} 
                            className="text-sm text-blue-600 hover:underline ml-6 block"
                          >
                            {partner.phone}
                          </a>
                        </div>
                      )}
                      
                      {partner.email && (
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-gray-600 flex items-center">
                            <svg className="w-4 h-4 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {t.elitePartners.details.email}
                          </p>
                          <a 
                            href={`mailto:${partner.email}`} 
                            className="text-sm text-blue-600 hover:underline ml-6 block"
                          >
                            {partner.email}
                          </a>
                        </div>
                      )}
                      
                      {partner.specialties.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-gray-600 flex items-center">
                            <svg className="w-4 h-4 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            {t.elitePartners.details.specialties}
                          </p>
                          <div className="flex flex-wrap gap-2 ml-6">
                            {partner.specialties.map((specialty, index) => (
                              <span 
                                key={index} 
                                className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="pt-4 border-t">
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-full text-sm bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          {t.elitePartners.details.website}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Ordinary Members Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">{t.ordinaryMembers.title}</h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t.ordinaryMembers.description}
            </p>
          </div>

          {/* State Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.keys(membersData.ordinaryMembers).map((stateKey) => (
              <button
                key={stateKey}
                onClick={() => setActiveTab(stateKey)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === stateKey
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {stateLabels[stateKey as keyof typeof stateLabels]}
              </button>
            ))}
          </div>

          {/* Active State Members */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-red-600">
              {stateLabels[activeTab as keyof typeof stateLabels]}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {membersData.ordinaryMembers[activeTab as keyof typeof membersData.ordinaryMembers]?.map((member, index) => (
                <div
                  key={index}
                  className="relative"
                  ref={selectedHospital === `${activeTab}-${index}` ? dropdownRef : null}
                >
                  {/* Hospital Card */}
                  <div 
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center min-h-[120px] border cursor-pointer hover:scale-105 transform"
                    onClick={() => setSelectedHospital(selectedHospital === `${activeTab}-${index}` ? null : `${activeTab}-${index}`)}
                  >
                    <p className="text-xs text-gray-700 text-center mb-2 font-medium">{member.name}</p>
                    <p className="text-xs text-gray-400 text-center">{t.elitePartners.details.clickHint}</p>
                    
                    {/* Dropdown Arrow */}
                    <div className="mt-2">
                      <svg 
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          selectedHospital === `${activeTab}-${index}` ? 'rotate-180' : ''
                        }`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Dropdown Content */}
                  {selectedHospital === `${activeTab}-${index}` && (
                    <div className="absolute z-50 top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border overflow-hidden animate-in slide-in-from-top-2 duration-200">
                      <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between border-b pb-3">
                          <h3 className="font-semibold text-lg text-gray-800">{member.name}</h3>
                          <button
                            onClick={() => setSelectedHospital(null)}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                            aria-label={t.elitePartners.details.close}
                            title={t.elitePartners.details.close}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        
                        {member.address && member.address.length > 0 && (
                          <div className="space-y-1">
                            <p className="text-sm font-medium text-gray-600 flex items-center">
                              <svg className="w-4 h-4 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {t.elitePartners.details.address}
                            </p>
                            <p className="text-sm text-gray-700 ml-6">{member.address.join(' ')}</p>
                          </div>
                        )}
                        
                        {member.phone && (
                          <div className="space-y-1">
                            <p className="text-sm font-medium text-gray-600 flex items-center">
                              <svg className="w-4 h-4 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              {t.elitePartners.details.phone}
                            </p>
                            <a 
                              href={`tel:${member.phone}`} 
                              className="text-sm text-blue-600 hover:underline ml-6 block"
                            >
                              {member.phone}
                            </a>
                          </div>
                        )}
                        
                        {member.email && (
                          <div className="space-y-1">
                            <p className="text-sm font-medium text-gray-600 flex items-center">
                              <svg className="w-4 h-4 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              {t.elitePartners.details.email}
                            </p>
                            <a 
                              href={`mailto:${member.email}`} 
                              className="text-sm text-blue-600 hover:underline ml-6 block"
                            >
                              {member.email}
                            </a>
                          </div>
                        )}
                        
                        {member.specialties && member.specialties.length > 0 && (
                          <div className="space-y-2">
                            <p className="text-sm font-medium text-gray-600 flex items-center">
                              <svg className="w-4 h-4 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              {t.elitePartners.details.specialties}
                            </p>
                            <div className="flex flex-wrap gap-2 ml-6">
                              {member.specialties.map((specialty, specialtyIndex) => (
                                <span 
                                  key={specialtyIndex} 
                                  className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium"
                                >
                                  {specialty}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {member.website && (
                          <div className="pt-4 border-t">
                            <a
                              href={member.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-full text-sm bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
                            >
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              {t.elitePartners.details.website}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
