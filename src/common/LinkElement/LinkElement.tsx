import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import React from "react";

interface LinkProps {
	data: {
		icon: IconProp;
		href: string;
	};
}

export default function LinkElement(props: LinkProps) {
	const { href, icon } = props.data;
	return (
		<>
			<Link href={href}>
				<FontAwesomeIcon icon={icon} />
			</Link>
		</>
	);
}
