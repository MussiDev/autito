export interface Viaje {
    _id?: string | null;
    destino: string;
    ubicacion: string;
    fecha: Date;
    hora: string;
    lugares: number;
    descripcion: string;
}
