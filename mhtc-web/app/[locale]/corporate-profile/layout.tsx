import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Profile | Malaysia Healthcare Travel Council",
  description:
    "Learn about the Malaysia Healthcare Travel Council, our mission, vision, and commitment to world-class healthcare.",
};

export default function CorporateProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
