import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Member Hospitals | Malaysia Healthcare Travel Council",
  description:
    "Find world-class hospitals, clinics, and healthcare professionals in Malaysia.",
};

export default function MemberHospitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
