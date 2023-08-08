import { faBell, faMoon, faPlus } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
	return (
		<header className='m-auto w-full max-w-screen-lg p-4 flex justify-between items-center'>
			<h2 className='text-2xl font-medium'>Autito🚗</h2>
			<Link
				className='p-2 rounded-md text-white font-medium bg-third flex gap-2 items-center'
				href='/Viajes/NuevoViaje'>
				<FontAwesomeIcon icon={faPlus} />
				Crear viaje
			</Link>
			<div className='flex gap-4'>
				<Link href=''>
					<FontAwesomeIcon icon={faMoon} />
				</Link>
				<Link href=''>
					<FontAwesomeIcon icon={faBell} />
				</Link>
				<div className='w-6 h-6 relative cursor-pointer'>
					<Image
						src='/img/test.jpg'
						alt='user'
						layout='fill'
						objectFit='cover'
						className='rounded-full'
					/>
				</div>
			</div>
		</header>
	);
}
