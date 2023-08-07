import TravelCard from "../components/Travels/TravelCard";
import { Viaje } from "../../entities/Travels/Viaje";
import { Viajes } from "@/src/models/Viajes";
import { connectionDB } from "@/src/utils/mongoose";

const loadTravels = async () => {
	connectionDB();
	const travels = await Viajes.find();
	return travels;
};

export default async function Home() {
	const travels: Viaje[] = await loadTravels();
	const plainTravels = travels.map((travel) => ({
		id: travel.id,
		destino: travel.destino,
		ubicacion: travel.ubicacion,
	}));
	return (
		<article className='grid grid-cols-3 gap-2'>
			{plainTravels.map((travel: Viaje) => (
				<TravelCard key={travel.id} travel={travel} />
			))}
		</article>
	);
}
