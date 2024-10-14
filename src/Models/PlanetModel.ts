
export class Planet{
    name: string;
    diameter: string;
    rotation_period: string;
    orbital_period: string;
    gravity: string;
    population: string;
    climate: string;
    terrain: string;
    surface_water: string;
    residents: string;
    films: string;
    url: string;
    created: string;
    edited: string;

    constructor(data?: Partial<Planet>) {
        if (data) {
            Object.assign(this, data);
        }
    }

    GetApiData() {
        return {
            clima: this.climate,
            creado: this.created,
            diametro: this.diameter,
            editado: this.edited,
            peliculas: this.films,
            gravedad: this.gravity,
            nombre: this.name,
            periodo_rotacional: this.rotation_period,
            periodo_orbital: this.orbital_period,
            poblacion: this.population,
            residentes: this.residents,
            agua_superficial: this.surface_water,
            terreno: this.terrain,
            url: this.url,
        }
    }
}
