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
    const getTravel = async () => {
        const res = await fetch(`/api/travels/${params.id}`);
        const data: Travel = await res.json();
        setNewTravel({
            destiny: data.destiny,
            ubication: data.ubication,
            date: data.date,
            hour: data.hour,
            places: data.places,
            description: data.description,
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
                      body: JSON.stringify(newTravel),
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
                        value={newTravel.destiny}
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
                        value={newTravel.ubication}
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
                            newTravel.date instanceof Date
                                ? newTravel.date.toISOString().substring(0, 10)
                                : newTravel.date
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
                        value={newTravel.hour}
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
                        value={newTravel.places}
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
                        value={newTravel.description}
                    />
                </div>

                <Button
                    data={{ text: `${!params.id ? "Crear" : "Modificar"}` }}
                    events={{ handleClick: handleSubmit }}
                />
            </form>
            <p className="text-center text-gray-500 text-xs">&copy;2020 Acme Corp. All rights reserved.</p>
        </div>
    );
}
