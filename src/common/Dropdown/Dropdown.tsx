import React, { useState } from "react";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface DropdownProps {
    data: {
        text: string;
    };
}

export default function Dropdown(props: DropdownProps) {
    const { text } = props.data;
    const [state, setState] = useState(false);
    return (
        <section className="w-full cursor-pointer">
            <div
                className="flex items-center gap-1 rounded bg-main-900 px-6 py-2 text-sm text-white border shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]"
                onClick={() => setState(!state)}
            >
                <p>{text}</p>
                {!state ? (
                    <FontAwesomeIcon icon={faSortDown} className="mb-1" />
                ) : (
                    <FontAwesomeIcon icon={faSortUp} className="mt-2" />
                )}
            </div>
            <div
                className={`w-full text-white max-w-[14.5rem] mt-2 z-10 rounded-lg shadow absolute bg-main-900 h-max ${
                    !state ? "hidden" : "block"
                }`}
            >
                <ul className="py-2 text-sm ">
                    <li>
                        <p className="block px-4 py-2 hover:bg-third hover:text-white">Buenos aires</p>
                    </li>
                    <li>
                        <p className="block px-4 py-2 hover:bg-third hover:text-white">Santa Fe</p>
                    </li>
                    <li>
                        <p className="block px-4 py-2 hover:bg-third hover:text-white">La Pampa</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}
