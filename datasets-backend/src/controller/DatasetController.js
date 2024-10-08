/**
 * @module ControllerDataset
 * @Description Funções do controller dataset
 */

import Datasets from "../models/Dataset.js";
import { StatusCodes } from "http-status-codes";
import { datasetSchemaValidate } from "../utils/validateControllers.js";
import connectAMQP from "../config/connectAMQP.js";
import mongoose from "mongoose";


/**
 * Cria um novo dataset com base nos dados recebidos no corpo da requisição e o caminho de um arquivo enviado.
 *
 * @param {Object} req - O objeto de requisição do Express, contendo os dados e o arquivo enviados pelo usuário.
 * @param {Object} res - O objeto de resposta do Express, usado para enviar uma resposta ao cliente.
 * @returns {void} - Não retorna um valor, mas envia uma resposta HTTP.
 */
export async function createDataset(req, res) {
    
    const session = await mongoose.startSession();
    session.startTransaction(); 
      
    try {
        
        const validatedData = await datasetSchemaValidate.validate(req.body, {abortEarly : false});
        const filePath = req.file ? req.file.path : null;

        //Database
        const {name, description} = validatedData;
        const dataset = new Datasets({ name, description, filePath });
        await dataset.save();
        await Datasets.create([{ name, description, filePath}, {session}])

        //AMQP
        const channel = await connectAMQP();
            throw new Error("Failed to connect AMQP");
            

        //Commit session 
        await session.commitTransaction();

        res.status(StatusCodes.CREATED).send();
    } catch (error) {
        await session.abortTransaction();
        res.status(StatusCodes.BAD_REQUEST).send(error);
    }
    session.endSession();
}