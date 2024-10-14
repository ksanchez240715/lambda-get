export class People{
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    homeworld: string;
    films: string;
    species: string;
    starships: string;
    vehicles: string;
    created: string;
    edited: string;
    url: string;

    constructor(data?: Partial<People>) {
        if (data) {
            Object.assign(this, data);
        }
    }

    GetApiData() {
        return {
            nombre: this.name,
            anio_nacimiento: this.birth_year,
            color_ojos: this.eye_color,
            genero: this.gender,
            color_cabello: this.hair_color,
            altura: this.height,
            masa: this.mass,
            color_piel: this.skin_color,
            mundo_natal: this.homeworld,
            peliculas: this.films,
            especies: this.species,
            naves_estelares: this.starships,
            vehiculos: this.vehicles,
            creado: this.created,
            editado: this.edited,
            url: this.url
        }
    }
}
