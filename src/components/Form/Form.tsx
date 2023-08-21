"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import Button from "../../common/Button/Button";
import { Travel } from "@/entities/Travels/Travel";

type FieldName = keyof Travel;

export default function Form() {
    const router = useRouter();
    const { id } = useParams();

    const getInitialTravel = (): Travel => ({
        destiny: "",
        ubication: "",
        date: new Date(),
        hour: "",
        places: 4,
        description: "",
    });

    const [newTravel, setNewTravel] = useState<Travel>(getInitialTravel());
    const [editTravel, setEditTravel] = useState<Travel>(getInitialTravel());

    const [selectDestiny, setSelectDestiny] = useState<string | null>(null);
    const [selectUbication, setSelectUbication] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            getTravel();
        }
    }, []);

    const getTravel = async () => {
        const res = await fetch(`/api/travels/${id}`);
        const data = await res.json();

        setEditTravel({
            destiny: data.travelFound.destiny,
            ubication: data.travelFound.ubication,
            date: new Date(data.travelFound.date),
            hour: data.travelFound.hour,
            places: data.travelFound.places,
            description: data.travelFound.description,
        });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (id) {
            setEditTravel({ ...editTravel, [e.target.name]: e.target.value });
        }
        setNewTravel({ ...newTravel, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const travel = id ? editTravel : newTravel;

        if (!travel.destiny || !travel.ubication || !travel.date || !travel.hour || !travel.places) return;

        try {
            let response;
            if (id) {
                response = await fetch(`/api/travels/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(travel),
                });
            } else {
                response = await fetch("/api/travels", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(travel),
                });
            }

            if (response.ok) {
                router.push("/");
                router.refresh();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const inputFields = [
        { label: "Destino", name: "destiny", type: "text" },
        { label: "Ubicación", name: "ubication", type: "text" },
        { label: "Fecha", name: "date", type: "date" },
        { label: "Hora", name: "hour", type: "time" },
        { label: "Lugares", name: "places", type: "text" },
        { label: "Descripción", name: "description", type: "text" },
    ];

    return (
        <div className="w-full max-w-sm">
            <form className="bg-main-900 shadow-md rounded px-8 pt-6 pb-8 mb-4 text-orange-500" onSubmit={handleSubmit}>
                {inputFields.map((field) => (
                    <div className="mb-4" key={field.name}>
                        <label className="block text-sm font-bold mb-2" htmlFor={field.name}>
                            {field.label}
                        </label>
                        <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            onChange={handleChange}
                            value={!id ? newTravel[field.name as FieldName] : editTravel?.[field.name as FieldName]}
                            className="bg-main-900 text-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                ))}

                <Button data={{ text: `${!id ? "Crear" : "Modificar"}` }} events={{ handleClick: handleSubmit }} />
            </form>
        </div>
    );
}
