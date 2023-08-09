import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import React from "react";

interface ButtonProps {
	data: {
		href: string;
		text: string;
		icon: IconProp;
	};
}

export default function Button(props: ButtonProps) {
	const { href, text, icon } = props.data;
	return (
		<button className='p-2 rounded-md text-white font-medium bg-third flex gap-2 items-center'>
			<FontAwesomeIcon icon={icon} />
			<Link href={href}>{text}</Link>
		</button>
	);
}
