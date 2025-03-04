"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "@/hooks/useTranslation";
import { MemberHospitalTranslations } from "@/types/translations";

export default function MemberHospital() {
  const { t, isRTL } =
    useTranslation<MemberHospitalTranslations>("member-hospital");

  const specialties = [
    "cardiology",
    "oncology",
    "orthopedics",
    "neurology",
    "pediatrics",
    "dermatology",
    "ophthalmology",
    "dentistry",
  ] as const;

  const locations = ["kualaLumpur", "penang", "johor", "malacca"] as const;
  const providerTypes = ["hospital", "clinic", "specialist"] as const;

  return (
    <div className="max-w-7xl mx-auto bg-white min-h-screen">
      <div
        className={`container mx-auto px-4 py-16 mt-16 ${isRTL ? "rtl" : ""}`}
      >
        {/* Search and Filter Section */}
        <div className="bg-gray-100 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t.search.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input placeholder={t.search.nameInput} />
            <Select>
              <SelectTrigger>
                <SelectValue
                  placeholder={t.search.locationSelect.placeholder}
                />
              </SelectTrigger>
              <SelectContent>
                {locations.map((key) => (
                  <SelectItem key={key} value={key}>
                    {t.search.locationSelect.options[key]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={t.search.typeSelect.placeholder} />
              </SelectTrigger>
              <SelectContent>
                {providerTypes.map((key) => (
                  <SelectItem key={key} value={key}>
                    {t.search.typeSelect.options[key]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button className="mt-4">{t.search.button}</Button>
        </div>

        {/* Featured Providers */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{t.featured.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((provider) => (
              <div
                key={provider}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={`/images/provider-mock.jpeg?height=200&width=400&text=Provider+${provider}`}
                  alt={`${t.featured.provider.namePrefix} ${provider}`}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {t.featured.provider.namePrefix} {provider}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t.featured.provider.specialty} •{" "}
                    {t.featured.provider.location}
                  </p>
                  <Button variant="outline">
                    {t.featured.provider.details}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specialties Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">{t.specialties.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {specialties.map((specialty) => (
              <Button
                key={specialty}
                variant="outline"
                className="justify-start"
              >
                {t.specialties.list[specialty]}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
