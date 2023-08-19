"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";

import Button from "../Button/Button";
import { Viaje } from "../../../entities/Travels/Viaje";
import { useRouter } from "next/navigation";

interface FormProps {
    type: string;
    id?: string;
}

export default function Form(props: FormProps) {
    const { type, id } = props;
    const router = useRouter();
    const [newTravel, setNewTravel] = useState<Viaje>({
        destino: "",
        ubicacion: "",
        fecha: new Date(),
        hora: "",
        lugares: 4,
        descripcion: "",
    });
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const { destino, ubicacion, fecha, hora, lugares } = newTravel;
        if (!destino || !ubicacion || !fecha || !hora || !lugares) return;
        try {
            const response =
                type === "create"
                    ? await fetch("/api/viajes", {
                          method: "POST",
                          body: JSON.stringify(newTravel),
                          headers: {
                              "Content-Type": "application/json",
                          },
                      })
                    : await fetch(`/api/viajes/${id}`, {
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
        setNewTravel((prevTravel) => ({
            ...prevTravel,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-orange-500" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="destino">
                        Destino
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="destino"
                        name="destino"
                        type="text"
                        placeholder="Destino"
                        onChange={handleChange}
                        value={newTravel.destino}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="ubicación">
                        Ubicación
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="ubicación"
                        name="ubicacion"
                        type="text"
                        placeholder="Ubicación"
                        onChange={handleChange}
                        value={newTravel.ubicacion}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="fecha">
                        Fecha
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="fecha"
                        name="fecha"
                        type="Date"
                        placeholder="Fecha"
                        onChange={handleChange}
                        value={
                            newTravel.fecha instanceof Date
                                ? newTravel.fecha.toISOString().substring(0, 10)
                                : newTravel.fecha
                        }
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="hora">
                        Hora
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="hora"
                        name="hora"
                        type="Time"
                        placeholder="Hora"
                        onChange={handleChange}
                        value={newTravel.hora}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="lugares">
                        Lugares
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="lugares"
                        name="lugares"
                        type="text"
                        placeholder="Lugares"
                        onChange={handleChange}
                        value={newTravel.lugares}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="descripcion">
                        Descripción
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="descripcion"
                        name="descripcion"
                        type="text"
                        placeholder="Descripción"
                        onChange={handleChange}
                        value={newTravel.descripcion}
                    />
                </div>

                <Button
                    data={{ text: `${type === "create" ? "Crear" : "Modificar"}` }}
                    events={{ handleClick: handleSubmit }}
                />
            </form>
            <p className="text-center text-gray-500 text-xs">&copy;2020 Acme Corp. All rights reserved.</p>
        </div>
    );
}
