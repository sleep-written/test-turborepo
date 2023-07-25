import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { TipoUsuario } from './tipo-usuario.entity.js';

@Entity({ name: 'Usuario' })
export class Usuario extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'varchar', length: 20 })
    nick!: string;

    @Column({ type: 'varchar', length: 64 })
    pass!: string;

    @ManyToOne(_ => TipoUsuario, r => r.usuarios)
    tipoUsuario?: Relation<TipoUsuario>;
}