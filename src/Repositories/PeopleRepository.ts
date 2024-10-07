import knex from 'knex';
import config from '../../knexfile';

const db = knex(config.development);

class PeopleRepository {
    async getAllPeople(): Promise<any[]> {
        return db('people').select(
            'id',
            'nombre',
            'anio_nacimiento',
            'color_ojos',
            'genero',
            'color_cabello',
            'altura',
            'masa',
            'color_piel',
            'mundo_natal',
            'peliculas',
            'especies',
            'naves_estelares',
            'vehiculos',
            'creado',
            'editado',
            'url'
        );
    }

    async getPeopleById(id: number): Promise<any> {
        return db('people').where({ id }).first();
    }
}

export default new PeopleRepository();
