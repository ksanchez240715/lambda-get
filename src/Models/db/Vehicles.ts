import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'Vehicles'})
export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: true })
    capacidad_carga: string;

    @Column({ type: 'varchar', nullable: true })
    consumibles: string;

    @Column({ type: 'varchar', nullable: true })
    costo_creditos: string;

    @Column({ type: 'date', nullable: true })
    creado: Date;

    @Column({ type: 'int', nullable: true })
    tripulacion: number;

    @Column({ type: 'date', nullable: true })
    editado: Date;

    @Column({ type: 'varchar', nullable: true })
    longitud: string;

    @Column({ type: 'varchar', nullable: true })
    fabricante: string;

    @Column({ type: 'int', nullable: true })
    velocidad_maxima_atmosferica: number;

    @Column({ type: 'varchar', nullable: true })
    modelo: string;

    @Column({ type: 'varchar', nullable: true })
    nombre: string;

    @Column({ type: 'int', nullable: true })
    pasajeros: number;

    @Column({ type: 'json', nullable: true })
    pilotos: string[];

    @Column({ type: 'json', nullable: true })
    peliculas: string[];

    @Column({ type: 'varchar', nullable: true })
    url: string;

    @Column({ type: 'varchar', nullable: true })
    clase_vehiculo: string;
}
