import { Column, CreateDateColumn, PrimaryColumn, Entity } from 'typeorm';
import {v4 as uuidV4} from 'uuid';

@Entity("categories")
export class Category {
    //interrogação: parâmetro OPCIONAL
    @PrimaryColumn()
    id?: string; 

    @Column()
    name: string;

    @Column()
    description: string;
    
    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuidV4();
        }
    }
};