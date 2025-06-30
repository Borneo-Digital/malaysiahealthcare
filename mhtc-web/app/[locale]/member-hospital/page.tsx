"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { MemberHospitalTranslations } from "@/types/translations";
import membersData from "@/data/members.json";
import { Header } from "@/components/home4/header";
import { Footer } from "@/components/home4/footer";
import { useState } from "react";

export default function MemberHospital() {
  const { t, isRTL } =
    useTranslation<MemberHospitalTranslations>("member-hospital");

  const [activeTab, setActiveTab] = useState<string>("wilayahPersekutuan");



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
          
          {/* Elite Partners Grid - Logos will be added later */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {membersData.elitePartners.map((partner) => (
              <a
                key={partner.id}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center justify-center min-h-[120px] border cursor-pointer hover:scale-105 transform transition-transform"
              >
                {/* Hospital Logo */}
                <div className="w-full h-20 mb-3 flex items-center justify-center">
                  <img
                    src={partner.logoPath}
                    alt={`${partner.name} logo`}
                    className="w-24 h-16 object-contain"
                    onError={(e) => {
                      // Fallback to text if image fails to load
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
                <p className="text-xs text-gray-600 text-center">{partner.name}</p>
              </a>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {membersData.ordinaryMembers[activeTab as keyof typeof membersData.ordinaryMembers]?.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg text-sm text-center hover:shadow-md transition-shadow border border-gray-200"
                >
                  {member}
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
