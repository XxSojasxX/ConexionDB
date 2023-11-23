import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('albums',{schema:'musica'})
export class Album {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default:()=>'CURRENT_TIMESTAMP'
    })
    create_at: Date;

    @UpdateDateColumn({
        name: 'update_at',
        type:'timestamp',
        default:()=>'CURRENT_TIMESTAMP'
    })
    update_at: Date;

    @DeleteDateColumn({
        name:'delete_at',
        type:'timestamp',
        nullable:true,
    })
    deleteAt: Date;

    @Column('varchar', {
        name: 'nombre',
        nullable: false,
        comment: 'nombre album'
    })
    nombre: string

    @Column('date', {
        name: 'lanzamiento',
        nullable: false,
        comment: 'fecha de lanzamiento'
    })
    lanzamiento: Date

    @Column('numeric', {
        name: 'pistas',
        nullable: true,
        comment: 'numero de pistas'
    })
    pistas: number

    @Column('varchar', {
        name: 'autor',
        nullable: false,
        comment: 'autor del album'
    })
    autor: string

    @Column('varchar', {
        name: 'disquera',
        nullable: false,
        comment: 'disquera del album'
    })
    disquera: string

}
