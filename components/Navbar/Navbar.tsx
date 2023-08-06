import Link from "next/link";
import React from "react";

export default function Navbar() {
	return (
		<header className='m-auto w-full max-w-screen-lg p-4 flex justify-between'>
			<h2 className='text-2xl font-medium'>Autito🚗</h2>
			<Link className='bg-blue-500 p-2 rounded-full' href='/travels/newTravel'>
				Crear viaje
			</Link>
		</header>
	);
}
