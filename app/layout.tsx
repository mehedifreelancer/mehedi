"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Suspense, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "./components/Loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentPathName: string = usePathname();

  useEffect(() => {
    AOS.init();
    console.log("🚀 ~ useEffect ~ currentPathName:", currentPathName);
  }, []);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header currentPathName={currentPathName} />
        <MobileMenu />

        <div
          className={`layout-wrapper ${
            currentPathName === "/" ? "" : "mt-[100px]"
          }`}
        >
          {children}
        </div>

        <Footer />
        {/* <GoToTop /> */}
      </body>
    </html>
  );
}
