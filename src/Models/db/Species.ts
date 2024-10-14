import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'Species'})
export class Specie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: true })
    altura_promedio: string;

    @Column({ type: 'varchar', nullable: true })
    esperanza_vida_promedio: string;

    @Column({ type: 'varchar', nullable: true })
    clasificacion: string;

    @Column({ type: 'date', nullable: true })
    creado: Date;

    @Column({ type: 'varchar', nullable: true })
    designacion: string;

    @Column({ type: 'date', nullable: true })
    editado: Date;

    @Column({ type: 'varchar', nullable: true })
    colores_ojos: string;

    @Column({ type: 'varchar', nullable: true })
    colores_cabello: string;

    @Column({ type: 'varchar', nullable: true })
    mundo_natal: string;

    @Column({ type: 'varchar', nullable: true })
    idioma: string;

    @Column({ type: 'varchar', nullable: true })
    nombre: string;

    @Column({ type: 'json', nullable: true })
    gente: string[];

    @Column({ type: 'json', nullable: true })
    peliculas: string[];

    @Column({ type: 'varchar', nullable: true })
    colores_piel: string;

    @Column({ type: 'varchar', nullable: true })
    url: string;
}
