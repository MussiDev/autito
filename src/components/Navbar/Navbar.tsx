import {
	faBell,
	faChevronDown,
	faMessage,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";

import Button from "@/src/common/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import LinkElement from "@/src/common/LinkElement/LinkElement";
import React from "react";

export default function Navbar() {
	return (
		<header className='m-auto w-full max-w-screen-lg p-4 flex justify-between items-center'>
			<h2 className='text-2xl font-medium'>Autito🚗</h2>
			<Button
				data={{ text: "Crear Viaje", href: "/Viajes/NuevoViaje", icon: faPlus }}
			/>
			<div className='flex gap-4'>
				<LinkElement data={{ icon: faMessage, href: "" }} />
				<LinkElement data={{ icon: faBell, href: "" }} />
				<section className='flex gap-2 items-center'>
					<div className='w-6 h-6 relative cursor-pointer'>
						<Image
							src='/img/test2.jpg'
							alt='user'
							fill={true}
							loading='lazy'
							className='rounded-full object-cover object-top'
							quality={80}
							sizes='100vw'
						/>
					</div>
					<FontAwesomeIcon icon={faChevronDown} className='text-sm cursor-pointer' />
				</section>
			</div>
		</header>
	);
}
