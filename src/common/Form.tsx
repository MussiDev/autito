"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";

import { Viaje } from "../models/viajes/viaje";
import { useRouter } from "next/navigation";

export default function Form() {
	const router = useRouter();
	const [newTravel, setNewTravel] = useState<Viaje>({
		destino: "",
		ubicacion: "",
	});

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		try {
			const res = await fetch("/api/viajes", {
				method: "POST",
				body: JSON.stringify(newTravel),
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (res.status === 200) {
				router.push("/");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTravel({ ...newTravel, [e.target.name]: e.target.value });
	};
	return (
		<div className='w-full max-w-xs'>
			<form
				className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-orange-500'
				onSubmit={handleSubmit}>
				<div className='mb-4'>
					<label className='block  text-sm font-bold mb-2' htmlFor='destino'>
						Destino
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline'
						id='destino'
						name='destino'
						type='text'
						placeholder='Destino'
						onChange={handleChange}
					/>
				</div>
				<div className='mb-4'>
					<label className='block  text-sm font-bold mb-2' htmlFor='ubicación'>
						Ubicación
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline'
						id='ubicación'
						name='ubicacion'
						type='text'
						placeholder='Ubicación'
						onChange={handleChange}
					/>
				</div>

				<button className='text-white bg-black p-4 rounded-full'>crear</button>
			</form>
			<p className='text-center text-gray-500 text-xs'>
				&copy;2020 Acme Corp. All rights reserved.
			</p>
		</div>
	);
}
