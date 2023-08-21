import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface DropdownProps<T> {
    data: {
        text: string;
        data: T[] | null;
    };
    events: {
        selectedOption: string | null;
        onOptionSelect: (option: string | null) => void;
        isDropdownOpen: boolean;
        toggleDropdown: () => void;
        renderOption: (item: T) => string;
    };
}

export default function Dropdown<T>(props: DropdownProps<T>) {
    const { text, data } = props.data;
    const { selectedOption, onOptionSelect, isDropdownOpen, toggleDropdown, renderOption } = props.events;

    return (
        <section className="w-full cursor-pointer">
            <div
                className="flex items-center gap-1 rounded bg-main-900 px-6 py-2 text-sm text-white border shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]"
                onClick={toggleDropdown}
            >
                <p>{selectedOption || text}</p>
                {!isDropdownOpen ? (
                    <FontAwesomeIcon icon={faSortDown} className="mb-1" />
                ) : (
                    <FontAwesomeIcon icon={faSortUp} className="mt-2" />
                )}
            </div>
            <div
                className={`w-full text-white max-w-[14.5rem] mt-2 z-10 rounded-lg shadow absolute bg-main-900 h-36 overflow-y-scroll ${
                    !isDropdownOpen ? "hidden" : "block"
                }`}
            >
                <ul className="py-2 text-sm">
                    {data?.map((item: T, index: number) => (
                        <li
                            key={index}
                            className="block px-4 py-2 hover:bg-third hover:text-white"
                            onClick={() => {
                                onOptionSelect(renderOption(item));
                                toggleDropdown();
                            }}
                        >
                            {renderOption(item)}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
