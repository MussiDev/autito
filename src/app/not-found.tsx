import Link from "next/link";
import React from "react";

export default function NotFound() {
    return (
        <section>
            <h1>404</h1>
            <p>Página no encontrada</p>
            <Link href="/">Volver</Link>
        </section>
    );
}
