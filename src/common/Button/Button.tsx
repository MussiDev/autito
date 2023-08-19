import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import React from "react";

interface ButtonProps {
    data: {
        href?: string;
        text?: string;
        icon?: IconProp;
        className?: string;
    };
    events?: {
        handleClick: React.MouseEventHandler<HTMLButtonElement>;
    };
}

export default function Button(props: ButtonProps) {
    const { href, text, icon, className } = props.data;
    return (
        <>
            {href ? (
                <Link href={href}>
                    <button
                        className={` ${
                            className && className
                        } p-2 rounded-md text-white font-medium bg-third flex gap-2 items-center justify-center'`}
                        onClick={props.events?.handleClick}
                        type="button"
                    >
                        {icon && <FontAwesomeIcon icon={icon} />}
                        {text && text}
                    </button>
                </Link>
            ) : (
                <button
                    className={` ${
                        className && className
                    } p-2 rounded-md text-white font-medium bg-third flex gap-2 items-center justify-center'`}
                    onClick={props.events?.handleClick}
                    type="button"
                >
                    {icon && <FontAwesomeIcon icon={icon} />}
                    {text && text}
                </button>
            )}
        </>
    );
}
