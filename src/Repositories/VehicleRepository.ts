import knex from 'knex';
import config from '../../knexfile';

const db = knex(config.development);

class VehicleRepository {
    async getAllVehicles(): Promise<any[]> {
        return db('Vehicles').select(
            'capacidad_carga',
            'consumibles',
            'costo_creditos',
            'creado',
            'tripulacion',
            'editado',
            'longitud',
            'fabricante',
            'velocidad_maxima_atmosferica',
            'modelo',
            'nombre',
            'pasajeros',
            'pilotos',
            'peliculas',
            'url',
            'clase_vehiculo'
        );
    }

    async getVehicleById(id: number): Promise<any> {
        return db('Vehicles').where({ id }).first();
    }
}

export default new VehicleRepository();
