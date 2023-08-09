import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import React from "react";

interface LinkProps {
	data: {
		icon: IconProp;
		href: string;
		legacyBehavior?: boolean;
	};
}

export default function LinkElement(props: LinkProps) {
	const { href, icon, legacyBehavior } = props.data;
	return (
		<>
			{legacyBehavior ? (
				<Link href={href} legacyBehavior>
					<FontAwesomeIcon icon={icon} />
				</Link>
			) : (
				<Link href={href}>
					<FontAwesomeIcon icon={icon} />
				</Link>
			)}
		</>
	);
}
