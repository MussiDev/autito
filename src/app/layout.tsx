import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Footer from "@/src/components/Footer/Footer";
import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar/Navbar";
import { Poppins } from "next/font/google";
import React from "react";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export const metadata: Metadata = {
    title: "Autito 🚗",
    description: "Web App about post images",
};

const poppins = Poppins({
    weight: ["300", "500", "700"],
    subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es" className={`${poppins.className}`}>
            <body className="grid min-h-screen grid-rows-[60px,1fr,60px] gap-4 bg-main text-white ">
                <Navbar />
                <main className="m-auto">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
