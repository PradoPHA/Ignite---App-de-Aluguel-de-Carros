import {v4 as uuidV4} from 'uuid';

class Category {
    //interrogação: parâmetro OPCIONAL
    id?: string; 

    name: string;

    description: string;
    
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuidV4();
        }
    }
};

export {Category};