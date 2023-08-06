import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Favinterest",
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
				<header className='m-auto w-full max-w-screen-lg p-4'>
					<h2 className='text-2xl font-medium'>Favinterest</h2>
				</header>
				<main className='m-auto flex h-full  w-full max-w-screen-lg flex-col items-center justify-between px-4'>
					{children}
				</main>
				<footer className='m-auto w-full max-w-screen-lg p-4 text-center'>
					Created by Joaquin Mussi
				</footer>
			</body>
		</html>
	);
}
