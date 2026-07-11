import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import SmoothScroll from "@/Components/SmoothScroll";
import FooterWrapper from "@/Components/FooterWrapper";
import PageTransition from "@/Components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Faiq Shah — Full Stack Engineer",
  description: "Portfolio of Faiq Shah, Full Stack & Cloud Engineer building bespoke digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#F5F5F5]">
        <Navbar />
        <SmoothScroll>
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>
        <FooterWrapper />
      </body>
    </html>
  );
}


