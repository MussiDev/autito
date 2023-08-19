"use client";

import { faBell, faChevronDown, faMessage, faPlus } from "@fortawesome/free-solid-svg-icons";

import Button from "@/src/common/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import LinkElement from "@/src/common/LinkElement/LinkElement";
import React from "react";
import useMediaQuery from "@/src/hooks/useMediaQuery";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    const isNotMobile = useMediaQuery("(min-width:426px)");
    return (
        <header className="m-auto w-full max-w-screen-lg p-4 flex justify-between items-center">
            <a className="text-2xl font-medium cursor-pointer" onClick={() => router.push("/")}>
                Autito🚗
            </a>
            {isNotMobile ? (
                <Button
                    data={{
                        text: "Crear Viaje",
                        href: "/travels/newTravel",
                        icon: faPlus,
                    }}
                />
            ) : (
                <Button
                    data={{
                        text: "Crear Viaje",
                        href: "/travels/newTravel",
                        icon: faPlus,
                        className: "fixed bottom-12 right-6 z-20",
                    }}
                />
            )}
            <div className="flex gap-4">
                <LinkElement data={{ icon: faMessage, href: "" }} />
                <LinkElement data={{ icon: faBell, href: "" }} />
                <section className="flex gap-2 items-center">
                    <div className="w-6 h-6 relative cursor-pointer">
                        <Image
                            src="/img/test2.jpg"
                            alt="user"
                            fill={true}
                            loading="lazy"
                            className="rounded-full object-cover object-top"
                            quality={80}
                            sizes="(min-width: 60em) 24vw,
                                (min-width: 28em) 45vw,
                                100vw"
                        />
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} className="text-sm cursor-pointer" />
                </section>
            </div>
        </header>
    );
}
