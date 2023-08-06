export interface Viaje {
    _id: string | number
    destino: string
    hora: Date
    ubicacion: string
    auto: {
        modelo: string
        color: string
        patente: string
    }
}