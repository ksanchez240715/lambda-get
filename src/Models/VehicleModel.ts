export default class Vehicle {
    constructor(
        public capacidad_carga: string,
        public consumibles: string,
        public costo_creditos: string,
        public creado: string,
        public tripulacion: string,
        public editado: string,
        public longitud: string,
        public fabricante: string,
        public velocidad_maxima_atmosferica: string,
        public modelo: string,
        public nombre: string,
        public pasajeros: string,
        public pilotos: string[],
        public peliculas: string[],
        public url: string,
        public clase_vehiculo: string
    ) {}
}
