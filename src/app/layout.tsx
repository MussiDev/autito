import "./globals.css";

import Footer from "@/src/components/Footer/Footer";
import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar/Navbar";

export const metadata: Metadata = {
	title: "Autito 🚗",
	description: "Web App about post images",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='grid min-h-screen grid-rows-[60px,1fr,60px] gap-4'>
				<Navbar />
				<main className='m-auto flex h-full  w-full max-w-screen-lg flex-col items-center justify-between px-4'>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
