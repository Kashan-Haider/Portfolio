"use client";
import { ReactNode, useState, useEffect } from "react";
import LoadingScreen from "@/app/components/ui/LoadingScreen";
import { Poppins } from "next/font/google"; // Changed from @next/font/google
import "./globals.css";
import LenisProvider from "./components/ui/LenisProvider";

// Correctly configure the font
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5200); // Ensure fallback loading
  }, []);

  return (
    <html
      lang="en"
      className={`${
        poppins.className
      } bg-dark text-white w-screen overflow-x-hidden ${
        loading ? "h-screen w-screen overflow-hidden" : "h-full hide-scrollbar"
      }`}
    >
      <body>
        {loading ? (
          <LoadingScreen setLoading={setLoading} />
        ) : (
          <LenisProvider>{children}</LenisProvider>
        )}

        {/* <LenisProvider>{children}</LenisProvider> */}
      </body>
    </html>
  );
}
