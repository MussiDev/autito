import Form from "@/src/components/Form/Form";
import { Suspense } from "react";

export default function NewTravel() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Form />
        </Suspense>
    );
}
