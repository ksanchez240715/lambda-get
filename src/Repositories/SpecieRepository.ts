import knex from 'knex';
import config from '../../knexfile';

const db = knex(config.development);

class SpecieRepository {
    async getAllSpecies(): Promise<any[]> {
        return db('Species').select(
            'altura_promedio',
            'esperanza_vida_promedio',
            'clasificacion',
            'creado',
            'designacion',
            'editado',
            'colores_ojos',
            'colores_cabello',
            'mundo_natal',
            'idioma',
            'nombre',
            'gente',
            'peliculas',
            'colores_piel',
            'url'
        );
    }

    async getSpecieById(id: number): Promise<any> {
        return db('Species').where({ id }).first();
    }
}

export default new SpecieRepository();
