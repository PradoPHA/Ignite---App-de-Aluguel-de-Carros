import { Column, CreateDateColumn, PrimaryColumn } from 'typeorm';
import {v4 as uuidV4} from 'uuid';

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