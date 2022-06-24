import { Request, Response } from "express";
import { ImportCategoryService } from "./ImportCategoryService";


class ImportCategoryController {
    constructor(private importCategoryUseCase: ImportCategoryService){}
    handle(request: Request, response: Response): Response{
        const {file} = request;

        this.importCategoryUseCase.execute(file);
        
        return response.send();
    }
};

export {ImportCategoryController};