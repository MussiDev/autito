import TravelCard from "../components/Travels/TravelCard";
import { Viaje } from "../models/viajes/viaje";
import { Viajes } from "@/src/models/api/viajes/Viajes";
import { connectionDB } from "@/src/utils/connection/mongoose";

const loadTravels = async () => {
	connectionDB();
	const travels = await Viajes.find();
	return travels;
};

export default async function Home() {
	const travels: Viaje[] = await loadTravels();
	return (
		<article className='grid grid-cols-3 gap-2'>
			{travels.map((travel: Viaje) => (
				<TravelCard travel={travel} />
			))}
		</article>
	);
}
