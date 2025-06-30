import { Metadata } from "next";
import { Header } from "@/components/home4/header";
import { Footer } from "@/components/home4/footer";

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
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
