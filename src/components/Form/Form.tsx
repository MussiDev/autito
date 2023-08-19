"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import Button from "../../common/Button/Button";
import { Travel } from "@/entities/Travels/Travel";

export default function Form() {
    const router = useRouter();
    const params = useParams();
    const [newTravel, setNewTravel] = useState<Travel>({
        destiny: "",
        ubication: "",
        date: new Date(),
        hour: "",
        places: 4,
        description: "",
    });
    const [editTravel, setEditTravel] = useState<Travel>({
        destiny: "",
        ubication: "",
        date: new Date(),
        hour: "",
        places: 4,
        description: "",
    });

    const getTravel = async () => {
        const res = await fetch(`/api/travels/${params.id}`);
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

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const { destiny, ubication, date, hour, places } = newTravel;

        if (!destiny || !ubication || !date || !hour || !places) return;

        try {
            const response = params.id
                ? await fetch("/api/travels", {
                      method: "POST",
                      headers: {
                          "Content-Type": "application/json",
                      },
                      body: JSON.stringify(newTravel),
                  })
                : await fetch(`/api/travels/${params.id}`, {
                      method: "PUT",
                      headers: {
                          "Content-type": "application/json",
                      },
                      body: JSON.stringify(editTravel),
                  });
            if (response.ok) {
                router.push("/");
                router.refresh();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (params.id) {
            setEditTravel({ ...editTravel, [e.target.name]: e.target.value });
        }
        setNewTravel({ ...newTravel, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (params.id) {
            getTravel();
        }
    }, []);

    return (
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-orange-500" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="destino">
                        Destino
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="destiny"
                        name="destiny"
                        type="text"
                        placeholder="Destino"
                        onChange={handleChange}
                        value={!params.id ? newTravel.destiny : editTravel?.destiny}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="ubicación">
                        Ubicación
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="ubication"
                        name="ubication"
                        type="text"
                        placeholder="Ubicación"
                        onChange={handleChange}
                        value={!params.id ? newTravel.ubication : editTravel?.ubication}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="fecha">
                        Fecha
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="date"
                        name="date"
                        type="Date"
                        placeholder="Fecha"
                        onChange={handleChange}
                        value={
                            !params.id
                                ? newTravel.date.toISOString().substring(0, 10)
                                : editTravel?.date instanceof Date
                                ? editTravel.date.toISOString().substring(0, 10)
                                : ""
                        }
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="hora">
                        Hora
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="hour"
                        name="hour"
                        type="Time"
                        placeholder="Hora"
                        onChange={handleChange}
                        value={!params.id ? newTravel.hour : editTravel?.hour}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="lugares">
                        Lugares
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="places"
                        name="places"
                        type="text"
                        placeholder="Lugares"
                        onChange={handleChange}
                        value={params.id ? newTravel.places : editTravel?.places}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="descripcion">
                        Descripción
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        name="description"
                        type="text"
                        placeholder="Descripción"
                        onChange={handleChange}
                        value={!params.id ? newTravel.description : editTravel?.description}
                    />
                </div>

                <Button
                    data={{ text: `${!params.id ? "Crear" : "Modificar"}` }}
                    events={{ handleClick: handleSubmit }}
                />
            </form>
        </div>
    );
}
