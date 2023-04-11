import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryService } from "./ImportCategoryService";


const categoriesRepository = null;

const importCategoryService = new ImportCategoryService(categoriesRepository);

export const importCategoryController = new ImportCategoryController(importCategoryService);