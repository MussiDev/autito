import Form from "@/src/components/Form/Form";
import { Suspense } from "react";

export default async function NewTravel() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Form />
        </Suspense>
    );
}
