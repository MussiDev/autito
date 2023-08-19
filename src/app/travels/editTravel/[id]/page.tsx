import Form from "@/src/common/Form/Form";
import { RouteParams } from "@/entities/RouteParams";

const getTravelById = async (id: string) => {
    try {
        const res = await fetch(`/api/viajes/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch travel");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export default async function editarViaje({ params }: { params: RouteParams }) {
    const { id } = params;
    await getTravelById(id);

    return <Form type="edit" id={id} />;
}
