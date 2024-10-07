import knex from 'knex';
import config from '../../knexfile';

const db = knex(config.development);

class PlanetRepository {
    async getAllPlanet(): Promise<any[]> {
        return db('planet').select(
            'id',
            'clima',
            'creado',
            'diametro',
            'editado',
            'peliculas',
            'gravedad',
            'nombre',
            'periodo_orbital',
            'poblacion',
            'residentes',
            'periodo_rotacion',
            'agua_superficial',
            'terreno',
            'url'
        );
    }

    async getPlanetById(id: number): Promise<any> {
        return db('planet').where({ id }).first();
    }
}

export default new PlanetRepository();
