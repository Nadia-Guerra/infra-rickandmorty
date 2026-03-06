import * as RickAndMortyControllers from '../controllers/rickandmorty.controllers';
import { Router } from 'express';

const router = Router();

router.get('/character', RickAndMortyControllers.getCharacters);
router.get('/character/:id', RickAndMortyControllers.getCharacterById);
router.get('/episode', RickAndMortyControllers.getEpisodes);
router.get('/location', RickAndMortyControllers.getLocations);

export default router;