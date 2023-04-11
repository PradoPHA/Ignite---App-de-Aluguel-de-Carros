import {Response, Request} from 'express'
import { CreateCategoryService } from './CreateCategoryService';

export class CreateCategoryController {

    constructor(private createCategoryService: CreateCategoryService){}

    async handle(request: Request, response: Response): Promise<Response>{
        const {name, description} = request.body;

        await this.createCategoryService.execute({name, description});

        return response.status(201).send();
    };

}