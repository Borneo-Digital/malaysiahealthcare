import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MHTC Members | Malaysia Healthcare Travel Council",
  description:
    "Find your healthcare provider among MHTC's Elite and Ordinary Partners - world-class hospitals and healthcare professionals in Malaysia.",
};

export default function MemberHospitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
