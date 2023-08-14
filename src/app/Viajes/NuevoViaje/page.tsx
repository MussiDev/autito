import Form from "@/src/common/Form/Form";
import { Suspense } from "react";

export default function NewTravel() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Form type="create" />
        </Suspense>
    );
}
