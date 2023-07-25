import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { Usuario } from './usuario.entity.js';

@Entity({ name: 'TipoUsuario' })
export class TipoUsuario extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'varchar', length: 15 })
    cod!: string;

    @Column({ type: 'varchar', length: 50 })
    descripc!: string;

    @OneToMany(_ => Usuario, r => r.tipoUsuario)
    usuarios?: Relation<Usuario[]>;
}