import {Router} from "express";
import multer from "multer";

import createCategoryController from "../modules/cars/services/createCategory/index"
import { importCategoryController } from "../modules/cars/services/importCategory";
import { listCategoriesController } from '../modules/cars/services/listCategories';

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp", 
});

categoriesRoutes.post("/", (request, response) => {
    console.log("Reload funcionando!");
    return createCategoryController().handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
   return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import/", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
});

export {categoriesRoutes};