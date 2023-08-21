import Form from "@/src/components/Form/Form";
import { Suspense } from "react";

async function loadProvinceAndCity() {
    const response = await fetch("https://apis.datos.gob.ar/georef/api/provincias");
    if (!response.ok) {
        throw new Error("Failed to fetch provinces");
    }
    const provinces = await response.json();
    return provinces;
}
export default async function NewTravel() {
    const provinces = await loadProvinceAndCity();
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Form />
        </Suspense>
    );
}
