import * as RickAndMortyService from '../services/rickandmorty.services';
import { Request, Response } from 'express';



export const getCharacters = async (req:Request, res:Response) => {
    try{
        const page = req.query.page || 1;
        const characters = await RickAndMortyService.getAllCharacters(Number(page));
        res.json(characters);

    }catch(error){
        res.status(500).json({ 
        error: 'Error al obtener los personajes',
        details: error instanceof Error ? error.message : 'Unknown error'
    });
    }
}

export const getCharacterById = async (req:Request, res:Response) => {
    try{
        const {id} = req.params;
        const character = await RickAndMortyService.getCharacterById(Number(id));
        res.json(character);

    }catch(error){
        res.status(500).json({ 
            error: 'Error al obtener el personaje',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

export const getEpisodes = async (req:Request, res:Response) => {
    try{
        const page = req.query.page || 1;
        const episodes = await RickAndMortyService.getAllEpisodes(Number(page));
        res.json(episodes);

    }catch(error){
        res.status(500).json({ 
            error: 'Error al obtener episodios',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}

export const getLocations = async (req:Request, res:Response) => {
    try{
        const page = req.query.page || 1;
        const locations = await RickAndMortyService.getAllLocations(Number(page));
        res.json(locations);

    }catch(error){
        res.status(500).json({ 
            error: 'Error al obtener ubicaciones',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}

